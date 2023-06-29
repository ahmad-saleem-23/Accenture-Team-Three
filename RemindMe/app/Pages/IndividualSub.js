import React from "react";
import { ScrollView, View, Image } from "react-native";
import {
  Button,
  StyleService,
  Text,
  useStyleSheet,
  Avatar,
} from "@ui-kitten/components";

export default ({ navigation }) => {
  const styles = useStyleSheet(themedStyles);

  const onDoneButtonPress = () => {
    navigation && navigation.goBack();
  };
  const onLogoPress = () => {
    navigation && navigation.goBack();
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={themedStyles.ViewContainer}>
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
        <Text style={styles.title} category="h1">
          RemindMe
        </Text>
      </View>

      <Image
        style={styles.image}
        source={require("./auth/components/logo-black.png")}
      />
      <View style={styles.SubscriptionTitleView}>
        <Text style={styles.SubscriptionTitle} category="h2">
          Subscription Title
        </Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText} category="c1">
          Category: Entertainment
        </Text>
        <Text style={styles.infoText} category="c1">
          Amount: $10.00
        </Text>
        <Text style={styles.infoText} category="c1">
          Frequency: Monthly
        </Text>
        <Text style={styles.infoText} category="c1">
          Website: www.Placeholder.com
        </Text>
        <Text style={styles.infoText} category="c1">
          Active
        </Text>
      </View>
      <Button style={styles.delete} onPress={onDoneButtonPress} status="danger">
        Stop Tracking
      </Button>
    </ScrollView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "background-basic-color-2",
    backgroundColor: "white",
    flex: 1,
  },
  ViewContainer: {
    display: "flex",
    flexDirection: "row",
  },
  editButton: {
    width: 10,
    height: 10,
  },
  editButton: {
    width: 10,
    height: 10,
  },
  SubscriptionTitleView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 16,
    marginLeft: 10,
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    backgroundColor: "background-basic-color-4",
  },
  infoText: {
    color: "black",
    fontSize: 20,
    margin: 8,
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
  contentContainer: {
    paddingVertical: 24,
    backgroundColor: "background-basic-color-2",
  },
  photo: {
    alignSelf: "center",
    width: 320,
    height: 320,
    borderRadius: 16,
  },
  photoButton: {
    right: 16,
    top: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  title: {
    padding: 34,
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  setting: {
    padding: 16,
  },
  section: {
    marginTop: 24,
  },
  delete: {
    marginHorizontal: 24,
    marginTop: 24,
    backgroundColor: "red",
    borderRadius: 24,
  },
});
