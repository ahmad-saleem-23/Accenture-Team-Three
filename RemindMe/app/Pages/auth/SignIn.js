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

export default () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const styles = useStyleSheet(themedStyles);

  const onSignUpButtonPress = () => {
    navigation && navigation.navigate("SignUp2");
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
        <Image source={require('./components/logo.png')} 
        style={styles.logoImage}/>

        <Text style={[styles.signInLabel,{color:"black",fontSize:20}]} category="s1" status="control">
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
      <Button style={styles.signInButton} >
        SIGN IN
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
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 216,
    backgroundColor: "white",
  },
  logoImage: {
    width: 180, // Adjust the width as desired
    height: 160, // Adjust the height as desired
    },
    signInLabel: {
    marginTop: 3,
    fontSize: 16,
    color: 'gray',
    },
    formContainer: {
      flex: 1,
      width: 800,
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 13,
      paddingHorizontal: 16,
    },
    
  signInLabel: {
    marginTop: 12,
  },
  signInButton: {
    borderRadius: 24,
    marginHorizontal: 16,
    backgroundColor:"#8c52ff"
  },
  signUpButton: {
    //marginVertical: 12,
    //marginHorizontal: 16,
    textDecorationLine: 'underline',
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
    textDecorationLine: 'underline',
  },
});
