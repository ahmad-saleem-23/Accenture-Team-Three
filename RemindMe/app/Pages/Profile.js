import React, { ReactElement } from "react";
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Dimensions,
} from "react-native";
import {
  Button,
  Input,
  StyleService,
  Text,
  useStyleSheet,
  Icon,
} from "@ui-kitten/components";

const { width, height } = Dimensions.get("window");
const logoImageSize = width * 0.04;
const settingImageSize = width * 0.08;
const profileImageSize = width * 0.09;
const filterImageSize = width * 0.07;

// import { PersonIcon } from './extra/icons';
// import { KeyboardAvoidingView } from './extra/3rd-party';

export default ({ navigation }) => {
  const styles = useStyleSheet(themedStyles);

  const onBackButtonPress = () => {
    navigation && navigation.navigate("HomePage");
  };
  const onSettingButtonPress = () => {
    navigation && navigation.navigate("Setting");
  };

  return (
    
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.IconContainer}>
       <TouchableOpacity onPress={onBackButtonPress}>
      <Image
        source={require('./auth/components/Accenture_back_logo.png')}
        style={[styles.logoImage, { width: logoImageSize, height: logoImageSize }]}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={onSettingButtonPress}>
      <Image
        source={require('./auth/components/setting.jpg')}
        style={[styles.logoImage, { width: settingImageSize, height: settingImageSize }]}
      />
    </TouchableOpacity>
    </View>
      <View style={styles.headerContainer}>
        <Image source={require('./auth/components/profile.jpg')}
        style={[styles.profileImage, { width: profileImageSize, height: profileImageSize }]}
        />
        <Text
          style={[styles.signInLabel, { color: "black", fontSize: 20 }]}
          category="s1"
          status="control"
        >
          User Profile
        </Text>
      </View>

      <View style={styles.line} />

      <View style={styles.IconContainer}>
      <Text
          style={[styles.SubLabel, { color: "black", fontSize: 20 }]}
          category="s1"
          status="control"
        >
          All Subscriptions:
        </Text>
        <Image source={require('./auth/components/filter.png')}
        style={[styles.filterImage, { width: filterImageSize, height: filterImageSize }]}
        />
      </View>

      <View style={styles.IconContainer}>
      <TouchableOpacity style={styles.button_left}>
      <Image source={require('./auth/components/netfilx.png')} style={styles.image} />
      <Text style={styles.title}>Netfilx</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button_right}>
      <Image source={require('./auth/components/city_fitness.png')} style={styles.image} />
      <Text style={styles.title}>Cityfitness</Text>
    </TouchableOpacity>
      </View>

      <View style={styles.IconContainer}>
      <TouchableOpacity style={styles.button_left}>
      <Image source={require('./auth/components/amazon_prime.png')} style={styles.image} />
      <Text style={styles.title}>Amazon Prime</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button_right}>
      <Image source={require('./auth/components/chegg.jpg')} style={styles.image} />
      <Text style={styles.title}>Chegg</Text>
    </TouchableOpacity>
      </View>

      <View style={styles.IconContainer}>
      <TouchableOpacity style={styles.button_left}>
      <Image source={require('./auth/components/hulu.jpg')} style={styles.image} />
      <Text style={styles.title}>Amazon Prime</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button_right}>
      <Image source={require('./auth/components/hello_fresh.jpg')} style={styles.image} />
      <Text style={styles.title}>Hello Fresh</Text>
    </TouchableOpacity>
      </View>
    <View style={styles.seeMoreContainer}>
    <Button 
            style={styles.SeeMoreButton}
            appearance="ghost"
            status="basic"
          >
            See more
          </Button>
      <TouchableOpacity>
      <Image source={require('./auth/components/Accenture_down_logo.png')} style={styles.down_button} />
    </TouchableOpacity>
    </View>
    <View style={styles.line} />
     <View style={styles.headerContainer}></View>
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: height * 0.1,
    marginBottom: height * 0.02,
    backgroundColor: "white",
  },
  IconContainer: {
    flexDirection: "row",
    //justifyContent: "space-between",
    //alignItems: "center",
    marginTop: height * 0.02,
  },
  logoImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  settingImage: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.01,
  },
  profileImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  filterImage: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: width * 0.04,
  },
  signInLabel: {
    marginTop: height * 0.02,
    fontSize: width * 0.05,
    color: "gray",
  },
  SubLabel: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: width * 0.09,
  },
  line: {
    height: 1,
    backgroundColor: "black",
  },
  button_left: {
    marginTop: height * 0.015,
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "left",
    backgroundColor: "#ebebeb",
    borderRadius: 8,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.01,
    width: width * 0.45,
  },
  button_right: {
    marginLeft: width * 0.01,
    marginTop: height * 0.015,
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "left",
    backgroundColor: "#ebebeb",
    borderRadius: 8,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.01,
    width: width * 0.45,
  },
  image: {
    width: width * 0.04,
    height: width * 0.04,
    marginRight: width * 0.008,
  },
  title: {
    fontSize: width * 0.03,
    fontWeight: "bold",
  },
  seeMoreContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  down_button: {
    width: width * 0.04,
    height: width * 0.04,
  },
});
