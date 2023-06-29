import React, { ReactElement } from "react";
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import {
  Button,
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
  Icon,
} from "@ui-kitten/components";
// import { PersonIcon } from './extra/icons';
// import { KeyboardAvoidingView } from './extra/3rd-party';

export default ({ navigation }) => {
  const [email, setEmail] = React.useState();
  const [message, setMessage] = React.useState("");

  const styles = useStyleSheet(themedStyles);

  const onBackButtonPress = () => {
    navigation && navigation.navigate("SignIn");
  };
  const onSubmitButtonPress = () => {
    setMessage("Please check your email to reset your password :)");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableOpacity onPress={onBackButtonPress}>
        <Image
          source={require("./components/Accenture_back_logo.png")}
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <Text
          style={[styles.signInLabel, { color: "black", fontSize: 20 }]}
          category="s1"
          status="control"
        >
          Forgot your password?
        </Text>
      </View>

      <View style={styles.formContainer}>
        <Input
          style={styles.passwordInput}
          placeholder="Email"
          //   accessoryRight={PersonIcon}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.headerContainer}>
        {message !== "" && <Text style={styles.messageText}>{message}</Text>}
        <Button style={styles.signInButton} onPress={onSubmitButtonPress}>
          SUBMIT
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "white",
    //alignItems: "center",
    flex: 1,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 160,
    marginBottom: 10,
    backgroundColor: "white",
  },
  logoImage: {
    width: 50, // Adjust the width as desired
    height: 40, // Adjust the height as desired
    justifyContent: "left",
    alignItems: "left",
    marginTop: 40,
    // marginLeft: 400,
  },
  signInLabel: {
    marginTop: 3,
    fontSize: 16,
    color: "gray",
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    //paddingTop: 13,
    //paddingHorizontal: 16,
  },

  signInButton: {
    marginTop: 18,
    borderRadius: 24,
    //marginHorizontal: 16,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8c52ff",
  },
  passwordInput: {
    marginTop: 16,
  },
  messageText: {
    marginTop: 10,
    fontSize: 16,
    color: "red",
  },
});
