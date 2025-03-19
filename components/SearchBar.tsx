import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface Props {
    placeholder: string,
    onPress?: ()=> void,
    value?: string,
    onChangeText?: (text: string)=> void
}

const SearchBar = ({placeholder, onPress, value, onChangeText}: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#ab85db"
        className="text-white text-base font-semibold ml-3 flex-1"
        onPress={onPress}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;
