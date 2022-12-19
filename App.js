import React, { useState } from 'react';

import { Button, View, Text } from 'react-native';
import Home from "./src/components/Home";
import Game from "./src/components/Game";
import bg from "./assets/bg.jpeg";


function App() {

  const [view, setView] = useState("home");
  const [gameMode, setGameMode] = useState("BOT"); // HUMAN, BOT, BOT_MEDIUM;

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
