import React from "react";
import { ScrollView, View, Image } from "react-native";
import {
  Button,
  StyleService,
  Text,
  useStyleSheet,
  Avatar,
  IconPack 
} from "@ui-kitten/components";

export default ({ navigation }) => {
  const styles = useStyleSheet(themedStyles);

  const onDoneButtonPress = () => {
    navigation && navigation.goBack();
  };

  const renderPhotoButton = () => (
    <Button
      style={styles.photoButton}
      status="basic"
      //   accessoryLeft={CameraIcon}
    />
  );
  const onLogoPress = () => {
    navigation && navigation.goBack();
  };

  const onUpcomingPress = () => {
    navigation && navigation.navigate("IndividualSub")
  }

  const addSubscription = () => {
    navigation && navigation.navigate("AddSub")
  }

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

    <View>
      <Text style={styles.spendingText} category="h3">Spending</Text>
    </View>
      <Image style={styles.image} source={require("./images/GraphTest.jpg")} />

      <View style={styles.upcomingHeaderView}>
        <Text style={styles.upcomingHeader} category="h1">Upcoming</Text>
      </View>

      <Button style={styles.upcomingButton} onPress={onUpcomingPress}>
      <View style={{flexDirection:"row"}}>
        <View style={{flex:1}}>
          <Text style={styles.upcomingButtonText} category="h2">
            Netflix
          </Text>
        </View>

        <View style={{flex:1}}>
          <Text style={styles.upcomingButtonMoney} category="p">
            $10.00<br/>
            [Date]
          </Text>
          </View>
      </View>
      </Button>

      <Button style={styles.upcomingButton} disabled={true}> 
      <View style={styles.SubscriptionTitleView}>
        <Text style={styles.upcomingButtonText} category="h2">
          Hulu
        </Text>
      </View>
      </Button>

      <View style={styles.addButtonFormat}>
        <Button style={styles.addButton} onPress={addSubscription}>
          <View>
          <Text style={styles.addButtonText} category="h2">
            +
          </Text>
          </View>
        </Button>
      </View>

    </ScrollView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "background-basic-color-2",
    backgroundColor: "white",
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

  spendingText: {
    marginLeft: 12,
    marginBottom: 8
  },

  upcomingHeaderView: {
    marginTop: 20,
    marginBottom: 10,
  },
  upcomingHeader: {
    paddingLeft: 12,
  },
  
  upcoming: {
    display: 'flex'
  },

  upcomingButton: {
    fontSize: 20,
    backgroundColor: 'whitesmoke',
    borderColor: 'whitesmoke',
    marginTop: 10,
  },

  upcomingTextGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  upcomingButtonText: {
    fontSize: 25,
    marginRight: 'auto',
    marginLeft: 0
  },

  upcomingButtonMoney: {
    fontSize: 16,
  },

  addButtonFormat: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 0,
    paddingRight: 16
  },

  addButton: {
    height: 75,
    width: 75,
    marginTop: 100,
    marginBottom: 100,
    borderRadius: 100,
    backgroundColor: "#C930FF",
    borderColor: "#C930FF"
  },

  addButtonText: {
    color: 'white',
  }
});
