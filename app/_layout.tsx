import { Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import "../global.css";

const Home = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Home;
