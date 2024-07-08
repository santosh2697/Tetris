import { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";

export function Player({ playerId }) {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  let img;

  if (playerId === 0) img = require("../../assets/static-images/rook.png");
  if (playerId === 1)
    img = require("../../assets/static-images/knight-png.png");

  console.log(playerId, img);
  return (
    <ImageBackground
      style={[styles.player, { top: top, left: left }]}
      source={img}
    ></ImageBackground>
  );
}

const styles = StyleSheet.create({
  player: {
    height: 40,
    width: 40,
    position: "absolute",
    zIndex: 2,
  },
});
