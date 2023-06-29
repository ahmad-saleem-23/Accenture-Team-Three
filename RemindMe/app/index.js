import { StyleSheet, View, Button } from "react-native";
import { Link, Stack } from "expo-router";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import * as Linking from "expo-linking";
import { useState } from "react";
import HomePage from "./Pages/HomePage";
import SignIn from "./Pages/auth/SignIn";
import { AppNavigator } from "./navigation.component";

export default function Page() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppNavigator />
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
