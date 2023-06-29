import React from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import {
  Button,
  Input,
  Text,
  ApplicationProvider,
} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

export default ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.signInContainer}>
        <Text style={styles.signInLabel}>Profile</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  signInLabel: {
    flex: 1,
    fontSize: 30,
  },
  signInContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
