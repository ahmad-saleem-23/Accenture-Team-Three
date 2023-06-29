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
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const onSignInButtonPress = () => {
    navigation && navigation.goBack();
  };

  const onSignUpButtonPress = () => {
    navigation && navigation.navigate("SignUp1");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.signInContainer}>
        <Text style={styles.signInLabel}>Add Sub</Text>
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
