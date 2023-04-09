import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Home from "./Home";
import Stastics from "./Stastics";
import Calendar from "./Calendar";
import Setting from "./Setting";

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.4)",
        tabBarActiveTintColor: "#fff",
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 26,
          left: 28,
          right: 28,
          elevation: 8,
          borderRadius: 18,
          backgroundColor: "#151718",
          height: 68,
          paddingHorizontal: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/Images/BottomNav/home.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/Images/BottomNav/calendar.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Stastics"
        component={Stastics}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/Images/BottomNav/statistics.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/Images/BottomNav/setting.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
