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

  const styles = useStyleSheet(themedStyles);

  const onSignUpButtonPress = () => {
    navigation && navigation.navigate("HomePage");
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
          Welcome, create your account here!
        </Text>
      </View>
      <Layout style={styles.container} level="1">
        <Layout style={styles.formContainer} level="1">
        <Input
            placeholder="Full Name"
            //   accessoryRight={PersonIcon}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            style={styles.passwordInput}
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
       
      </Layout>
      <Button style={styles.signInButton} onPress={onSignUpButtonPress}>SUBMIT</Button>

     
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex:1,
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
    color: "gray",
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
    marginButton: 80,
    width:150,
    borderRadius: 24,
    marginHorizontal: 16,
    backgroundColor: "#8c52ff",
  },
  passwordInput: {
    marginTop: 16,
  },
 
});
