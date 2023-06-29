import React from "react";
import { StyleSheet, View, KeyboardAvoidingView, ImageBackground, ListRenderItemInfo, Image, TouchableOpacity } from "react-native";
import {
  Button,
  Input,
  Text,
  Card,
  Avatar,
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

  const onProfileButtonPress = () => {
    navigation && navigation.navigate("Profile")
  };

  const onLogoPress = () => {
    navigation && navigation.goBack();
  };

  const renderItemHeader = () => {
    <ImageBackground
      style={styles.itemHeader}
      source={info.item.image}
    />
  };



  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.signInContainer}>
      {/* <Button
        onPress={onProfileButtonPress}
        title="Profile"
        color="#841584"
        style={styles.profileButton}
      >
        <Image source={require("./images/user-solid.svg")}/>
      </Button> */}

      {/* <TouchableOpacity onPress={onProfileButtonPress} activeOpacity={1.0}>
        <ImageBackground source={require('./images/user-solid.png')}/>
      </TouchableOpacity> */}

      <View style={styles.ViewContainer}>
        <Button
          style={styles.logoButton}
          appearance="ghost"
          onPress={onLogoPress}
        >
          <Avatar
            style={styles.logoImage}
            shape="square"
            source={require("./auth/components/logo.png")}
            onPress={onLogoPress}
          />
        </Button>
        {/* <Text style={styles.title} category="h1">
          RemindMe
        </Text> */}
      </View>

        {/* <Text style={styles.signInLabel}>RemindMe</Text> */}
      </View>
      <View style={styles.graphContainer}>
      <Card title='Spending'>
              <Image
                source={require("./images/test.jpg")}
              />
        <Button
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}>View</Button>
        </Card>
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
    justifyContent: "space-betweeen",
    alignItems: "left",
    alignContent: "space-around",
    flexDirection: "row"
  },
  list: {
    flex: 1,
  },
  item: {
    borderRadius: 0,
    marginVertical: 8,
  },
  itemHeader: {
    height: 160,
  },
  itemFooter: {
    flexDirection: 'row',
    marginTop: 16,
    marginHorizontal: -4,
  },
  ViewContainer: {
    display: "flex",
    flexDirection: "row",
  },
  logoButton: {
    padding: 0,
    width: 100,
    height: 100,
  },
  logoImage: {
    width: "200%",
    height: "200%",
    borderRadius: 0,
  },
  title: {
    padding: 34,
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  activityButton: {
    marginHorizontal: 4,
    paddingHorizontal: 0,
  },
  graphContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // profileButton: {
  //   height: 30,
  //   width: 30,
  // }
});
