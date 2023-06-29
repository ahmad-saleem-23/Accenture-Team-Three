import React, { ReactElement } from "react";
import {
  View,
  TouchableWithoutFeedback,
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
  const [password, setPassword] = React.useState();
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [alert, setAlert] = React.useState("");
  const [alertActive, setAlertActive] = React.useState(false);
  const mockAccount = {
    email: "Test@test.com",
    password: "password",
  };

  const styles = useStyleSheet(themedStyles);

  const onSignUpButtonPress = () => {
    navigation && navigation.navigate("SignUp");
  };

  const onSignInButtonPress = () => {
    {
      email === mockAccount.email && password === mockAccount.password
        ? navigation && navigation.navigate("HomePage")
        : setAlert("Incorrect email or password");
    }
    // navigation && navigation.navigate("HomePage");
  };

  const onForgotPasswordButtonPress = () => {
    navigation && navigation.navigate("ForgotPassword");
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  const renderPasswordIcon = (props) => (
    <TouchableWithoutFeedback onPress={onPasswordIconPress}>
      <Icon {...props} name={passwordVisible ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require("./components/logo.png")}
          style={styles.logoImage}
        />

        <Text
          style={[styles.signInLabel, { color: "black", fontSize: 20 }]}
          category="s1"
          status="control"
        >
          Sign in to your account
        </Text>
      </View>
      <Layout style={styles.container} level="1">
        <Layout style={styles.formContainer} level="1">
          <Input
            placeholder="Email"
            //   accessoryRight={PersonIcon}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            style={styles.passwordInput}
            placeholder="Password"
            value={password}
            secureTextEntry={!passwordVisible}
            onChangeText={setPassword}
          />
          {alert !== "" && <Text style={styles.alertText}>{alert}</Text>}
        </Layout>
        <View style={styles.forgotPasswordContainer}>
          <Button
            style={styles.forgotPasswordButton}
            appearance="ghost"
            status="basic"
            onPress={onForgotPasswordButtonPress}
          >
            Forgot your password?
          </Button>
        </View>
      </Layout>
      <Button style={styles.signInButton} onPress={onSignInButtonPress}>
        SUBMIT
      </Button>
      <Button
        style={styles.signUpButton}
        appearance="ghost"
        status="basic"
        onPress={onSignUpButtonPress}
      >
        Register
      </Button>
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  alertText: {
    marginTop: 10,
    color: "red",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 216,
    backgroundColor: "white",
    backgroundColor: "white",
  },
  logoImage: {
    width: 180, // Adjust the width as desired
    height: 160, // Adjust the height as desired
    marginTop: 40,
  },
  signInLabel: {
    marginTop: 3,
    fontSize: 16,
    color: "gray",
  },
  formContainer: {
    flex: 1,
    width: 400,
    // justifyContent: "center",
    alignItems: "center",
    paddingTop: 13,
    paddingHorizontal: 16,
  },

  signInLabel: {
    marginTop: 12,
  },
  signInButton: {
    borderRadius: 24,
    borderRadius: 24,
    width: 150,
    marginTop: 10,
    marginHorizontal: 16,
    backgroundColor: "#8c52ff",
  },
  signUpButton: {
    //marginVertical: 12,
    //marginHorizontal: 16,
    textDecorationLine: "underline",
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    // justifyContent: "center",
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
    textDecorationLine: "underline",
  },
});
