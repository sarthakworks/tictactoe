import React, { useState } from 'react';

import { Button, View, Text } from 'react-native';
import Home from "./src/components/Home";
import Game from "./src/components/Game";
import bg from "./assets/bg.jpeg";
import { useFonts } from "expo-font";


function App() {

  const [view, setView] = useState("home");
  const [gameMode, setGameMode] = useState("BOT"); // HUMAN, BOT, BOT_MEDIUM;
  const [loaded] = useFonts({
    porky: require("./assets/porky.ttf"),
  });
  if (!loaded) {
    return null;
  }
  let screen;
  if (view === "game") {
    screen = <Game setView={setView} gameMode={gameMode} />
  } if (view === "home") {
    screen = <Home setView={setView} setGameMode={setGameMode} />
  }

  return (
    <>
      {screen}
    </>
  );
}

export default App;
