import { StyleSheet, ImageBackground, Dimensions } from "react-native";
import { Player } from "./Player";

export function Board() {
  const window = Dimensions.get("window");
  const width = window.width - (window.width % 100);
  let img;

  if (width < 500)
    img = require("../../assets/static-images/board-400x400.jpg");
  else img = require("../../assets/static-images/board-500x500.jpg");

  return (
    <ImageBackground style={styles.container} source={img}>
      <Player playerId={0} />
      <Player playerId={1} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 400,
    backgroundColor: "blue",
    alignSelf: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});
