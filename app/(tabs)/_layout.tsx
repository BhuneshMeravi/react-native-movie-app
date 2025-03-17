import React from "react";
import { Tabs } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const TabIcon = ({focused, icon, title}: any) => {
  if(focused){
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row items-center justify-center w-full flex-1 min-w-[112px] min-h-16 mt-4 rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#151312" className="size-5"></Image>
        <Text className="text-secondary text-base font-semibold">{title}</Text>
      </ImageBackground>
    );
  }
    return (<View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="A8B5DB" className="size-5"></Image>
    </View>)
};

const _layout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      tabBarItemStyle: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
      tabBarStyle: {
        backgroundColor: "#0f0D23",
        borderRadius: 50,
        marginBottom: 36,
        marginHorizontal: 20,
        height: 52,
        position: "absolute",
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#0f0D23"
      },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{ title: "Search", headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
         }}
      />
      <Tabs.Screen
        name="save"
        options={{ title: "Save", headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="Save" />
          ),
         }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
         }}
      />
    </Tabs>
  );
};

export default _layout;
