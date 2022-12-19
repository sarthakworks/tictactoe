import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
// import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Linking,
  Image,
  Pressable,
  Alert,
  ViewComponent,
} from "react-native";
export default function Home({ setView, setGameMode }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../../assets/logo.gif")}
      />
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
      <TouchableOpacity
        onPress={() => Linking.openURL("https://sarthakworks.netlify.app/")}
      >
        <Text style={{ color: "#cdd1c4" }}>
          Made with <Text style={{ color: "#C14953" }}>❤</Text> by
          <Text style={{ color: "#C14953" }}> Sarthak</Text>
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#3b1c32",
  },
  tinyLogo: { width: 250, height: 250, resizeMode: "contain" },
  button: {
    color: "#cdd1c4",
    margin: 10,
    fontSize: 16,
    backgroundColor: "#c14953",
    padding: 20,
    fontFamily: "porky",
    letterSpacing: 2,
    borderRadius: 10,
    paddingHorizontal: 85,
  },
});
