import React, { useState, useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "./Pages/HomePage";
import IndividualSub from "./Pages/IndividualSub";
import Profile from "./Pages/Profile";
import Setting from "./Pages/Setting";

import SignIn from "./Pages/auth/SignIn";
import SignUp from "./Pages/auth/SignUp";
import ForgotPassword from "./Pages/auth/ForgotPassword";
import AddSub from "./Pages/AddSub";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => {
  const [user, setUser] = useState(false);
  const navigationRef = useRef(null);

  return (
    <Navigator

      screenOptions={{ headerShown: false}}
      initialRouteName={user ? "HomePage" : "SignIn"}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="HomePage" component={HomePage} />
      <Screen name="Setting" component={Setting} />
      <Screen name="Profile" component={Profile} />
      <Screen name="IndividualSub" component={IndividualSub} />
      <Screen name="AddSub" component={AddSub} />
    </Navigator>
  );
};

export const AppNavigator = () => <HomeNavigator />;
