import * as React from "react";
import { Image, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Feed from "../screens/feeds";
import { TouchableOpacity } from "react-native-gesture-handler";
const camera = require("../../assets/camera.png");
const logo = require("../../assets/logo.png");
const igtv = require("../../assets/igtv.png");
const send = require("../../assets/send.png");

const MainNavigation = createStackNavigator(
  {
    Feed,
  },
  {
    defaultNavigationOptions: {
      headerTitle: () => (
        <View style={{ marginLeft: 90 }}>
          <Image source={logo} />
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity>
          <Image style={{ marginLeft: 20 }} source={camera} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image style={{ marginRight: 20 }} source={igtv} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{ marginRight: 20 }} source={send} />
          </TouchableOpacity>
        </View>
      ),
    },
  }
);

export default createAppContainer(MainNavigation);
