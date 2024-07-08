import { StyleSheet, TextInput, Pressable, Modal, View } from "react-native";
import { MyText } from "./MyText";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { createUserAccount } from "../api's/Api";

type loginNavProps = StackNavigationProp<RootStackParamList, "Game">;

export function Login() {
  const [userName, setUserName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<loginNavProps>();

  const validateName = (name: string) => {
    return /^[A-Za-z0-9]*$/.test(name);
  };
  const loginUser = () => {
    if (validateName(userName)) {
      createUserAccount(userName)
        .then(function (response) {
          console.log(response, `Successfully created user for ${userName}`);
          navigation.navigate("Game");
        })
        .catch(function (error) {
          if (error?.response?.data?.msg === "User already exists") {
            console.log("User already exists");
            navigation.navigate("Game");
          } else {
            console.log(error, `Failed to created user for ${userName}`);
          }
        });
    } else {
      console.log(
        `Failed to created user for ${userName}, reason Invalid characters used`
      );
      setModalVisible(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <MyText styles={styles.text} text={"Who's playing?"} />
      <TextInput
        style={styles.input}
        onChangeText={setUserName}
        value={userName}
        placeholder="Enter your name"
      />
      <Pressable
        style={[styles.playGameButton, styles.shadow]}
        android_ripple={styles.rippleEffect}
        onPress={loginUser}
      >
        <MyText styles={styles.playGameText} text="Play Game" />
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <MyText
              styles={styles.modalText}
              text="Name must contains letters and numbers only"
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <MyText styles={styles.textStyle} text="X" />
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  playGameText: {
    color: "white",
    fontSize: 20,
    lineHeight: 26,
    textAlign: "center",
  },
  playGameButton: {
    padding: 12,
    borderRadius: 6,
    backgroundColor: "black",
    width: "40%",
    alignSelf: "center",
  },
  rippleEffect: {
    color: "grey",
  },
  shadow: {
    shadowColor: "blue",
    elevation: 20,
    shadowOpacity: 1,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
