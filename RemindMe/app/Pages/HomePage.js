import React from "react";
import {
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import {
  Button,
  StyleService,
  Text,
  useStyleSheet,
  Avatar,
  IconPack,
} from "@ui-kitten/components";

import images from "./images/images";

export default ({ navigation }) => {
  // Mock Data
  const upcoming = [
    {
      id: 1,
      name: "Metlink",
      scheduleDate: "2023-07-1T08:41:30.872Z",
      frequency: "weekly",
      startDate: "2023-01-1T08:41:30.872Z",
      endDate: "2023-12-12T08:41:30.872Z",
      category: "Travel",
      website: null,
      price: 5,
      reminder: 1,
    },
    {
      id: 2,
      name: "Netflix",
      scheduleDate: "2023-07-05T08:41:30.872Z",
      frequency: "fortnightly",
      startDate: "2023-01-1T08:41:30.872Z",
      endDate: "2023-12-12T08:41:30.872Z",
      category: "Entertainment",
      website: "https://www.netflix.co.nz",
      price: 50.55,
      reminder: 1,
    },
    {
      id: 3,
      name: "OfficeMax",
      scheduleDate: "2023-07-15T08:41:30.872Z",
      frequency: "weekly",
      startDate: "2023-01-1T08:41:30.872Z",
      endDate: "2023-12-12T08:41:30.872Z",
      category: "Productivity",
      website: "https://www.officemax.co.nz",
      price: 10,
      reminder: 0,
    },
    {
      id: 4,
      name: "My Food Bag",
      scheduleDate: "2023-07-19T08:41:30.872Z",
      frequency: "monthly",
      startDate: "2023-01-1T08:41:30.872Z",
      endDate: "2023-12-12T08:41:30.872Z",
      category: "Food & Drink",
      website: "https://www.myfoodbag.co.nz",
      price: 150,
      reminder: 0,
    },
    {
      id: 5,
      name: "Countdown",
      scheduleDate: "2023-07-19T08:41:30.872Z",
      frequency: "weekly",
      startDate: "2023-01-1T08:41:30.872Z",
      endDate: "2023-12-12T08:41:30.872Z",
      category: "Necessities",
      website: "https://www.countdown.co.nz",
      price: 150,
      reminder: 1,
    },
    {
      id: 6,
      name: "Contact Energy",
      scheduleDate: "2023-07-25T08:41:30.872Z",
      frequency: "fortnightly",
      startDate: "2023-01-1T08:41:30.872Z",
      endDate: "2023-12-12T08:41:30.872Z",
      category: "Bills",
      website: "https://www.contact.co.nz",
      price: 300,
      reminder: 1,
    },
  ];
  function getRemainingDays(scheduleDate) {
    const currentDate = new Date(); // Get today's date
    const targetDate = new Date(scheduleDate); // Convert the scheduleDate string to a Date object

    // Calculate the difference in milliseconds between the two dates
    const differenceMs = targetDate.getTime() - currentDate.getTime();

    // Convert the milliseconds to days
    const daysRemaining = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

    return daysRemaining;
  }

  function renderUpcoming() {
    const renderItems = ({ item }) => (
      <TouchableOpacity style={styles.upcomingButton} onPress={onUpcomingPress}>
        <View style={{ flexDirection: "row", marginRight: 50 }}>
          <View style={{ flex: 1, marginLeft: 50 }}>
            <Image
              source={images[item.name.replace(/\s/g, "")]}
              resizeMode="cover"
              style={styles.logoImageForMenu}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.upcomingButtonText} category="h2">
              {item.name}
            </Text>
          </View>

          <View style={styles.individualsubs}>
            <Text style={styles.upcomingButtonMoney} category="h4">
              ${item.price}
            </Text>
            <Text style={styles.upcomingButtonMoney} category="h4">
              {getRemainingDays(item.scheduleDate)} days left
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        data={upcoming}
        renderItem={renderItems}
        keyExtractor={(item) => item.id}
      />
    );
  }

  const styles = useStyleSheet(themedStyles);

  const onLogoPress = () => {
    navigation && navigation.goBack();
  };

  const onUpcomingPress = () => {
    navigation && navigation.navigate("IndividualSub");
  };

  const addSubscription = () => {
    navigation && navigation.navigate("AddSub");
  };

  return (
    <SafeAreaView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={themedStyles.ViewContainer}>
        <TouchableOpacity
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
        </TouchableOpacity>
        <Text style={styles.title} category="h1">
          RemindMe
        </Text>
      </View>

      <View>
        <Text style={styles.spendingText} category="h3">
          Spending
        </Text>
      </View>
      <Image style={styles.image} source={require("./images/imageGraph.png")} />

      <View style={styles.upcomingHeaderView}>
        <Text style={styles.upcomingHeader} category="h1">
          Upcoming
        </Text>
      </View>
      {renderUpcoming()}
      <View style={styles.addButtonFormat}>
        <Button style={styles.addButton} onPress={addSubscription}>
          <View>
            <Text style={styles.addButtonText} category="h2">
              +
            </Text>
          </View>
        </Button>
      </View>
    </SafeAreaView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "background-basic-color-2",
    backgroundColor: "white",
    flex: 1,
  },
  logoImageForMenu: {
    width: 50,
    height: 50,
    borderRadius: 0,
  },
  individualsubs: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
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

  image: {
    width: "90%",
    borderRadius: 16,
    alignSelf: "center",
    borderColor: "#C930FF",
    borderWidth: 1,
  },

  logoButton: {
    padding: 0,
    width: 50,
    height: 50,
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
    marginLeft: 50,
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

  spendingText: {
    marginLeft: 12,
    marginBottom: 8,
  },

  upcomingHeaderView: {
    marginTop: 10,
    marginBottom: 10,
  },
  upcomingHeader: {
    paddingLeft: 12,
  },

  upcoming: {
    display: "flex",
  },

  upcomingButton: {
    fontSize: 20,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: "whitesmoke",
    borderColor: "#C930FF",
    borderWidth: 1,
    marginTop: 10,
    height: 75,
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },

  upcomingTextGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  upcomingButtonText: {
    fontSize: 20,
    marginRight: "auto",
    marginLeft: 0,
  },

  upcomingButtonMoney: {
    fontSize: 16,
  },

  addButtonFormat: {
    display: "flex",
    marginLeft: "auto",
    marginRight: 0,
    paddingRight: 16,
    // paddingTop: 10,
    // height: 150,
    backgroundColor: "transparent",
  },

  addButton: {
    height: 75,
    width: 75,
    // marginTop: 100,
    // marginBottom: 100,
    borderRadius: 100,
    backgroundColor: "#C930FF",
    borderColor: "#C930FF",
    justifyContent: "center",
  },

  addButtonText: {
    color: "white",
  },
});
