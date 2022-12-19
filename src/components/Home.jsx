import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Alert,
  ViewComponent,
} from "react-native";
export default function Home({ setView, setGameMode }) {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={styles.button}
          onPress={() => {
            setView("game"), setGameMode("HUMAN");
          }}
        >
          <Text>1 Player</Text>
        </Text>
        <Text
          style={styles.button}
          onPress={() => {
            setView("game"), setGameMode("Hard_BOT");
          }}
        >
          <Text>2 Player</Text>
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3b1c32",
  },
  button: {
    color: "#cdd1c4",
    margin: 10,
    fontSize: 16,
    backgroundColor: "#c14953",
    padding: 10,
    paddingHorizontal: 75,
  },
});
