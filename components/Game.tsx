import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Board } from "./gameLogic/Board";
import { useEffect, useState } from "react";

export function Game() {
  return (
    <SafeAreaView style={styles.container}>
      <Board></Board>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
  },
});
