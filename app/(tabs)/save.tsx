import { View, Text, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

const save = () => {
  return (
    <View className="bg-primary flex-1 px-10">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.save} tintColor="#fff" className="size-10" />
        <Text className="text-gray-500 text-base">Save</Text>
      </View>
    </View>
  );
};

export default save;
