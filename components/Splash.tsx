import {
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
  Animated,
} from "react-native";
import { MyText } from "./MyText";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useRef } from "react";
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";

type loginNavProps = StackNavigationProp<RootStackParamList, "Login">;

export function Splash() {
  const navigation = useNavigation<loginNavProps>();
  const startValue = useRef(new Animated.Value(1)).current;
  const endValue = 1.4;
  const duration = 3000;
  const transform = {
    transform: [
      {
        scale: startValue,
      },
    ],
  };

  useEffect(() => {
    Animated.timing(startValue, {
      toValue: endValue,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [startValue]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/static-images/splash.webp")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.mainHeading}>
          <MyText styles={styles.mainHeadingText} text="Snake & Ladders" />
        </View>
        <Animated.View style={[styles.playButtonContainer, transform]}>
          <Pressable
            style={[styles.playGameButton, styles.shadow]}
            android_ripple={styles.rippleEffect}
            onPress={() => navigation.navigate("Login")}
          >
            <MyText styles={styles.playGameText} text="Play Game" />
          </Pressable>
        </Animated.View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  mainHeading: {
    flex: 1,
    justifyContent: "center",
  },
  playButtonContainer: {
    paddingBottom: "20%",
    alignItems: "center",
  },
  mainHeadingText: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    textAlign: "center",
    backgroundColor: "#000000c0",
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
  },
  rippleEffect: {
    color: "grey",
  },
  shadow: {
    shadowColor: "blue",
    elevation: 20,
    shadowOpacity: 1,
  },
});
