import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="flex flex-1 justify-center items-center"
    >
      <Text className="text-5xl text-dark-200 font-bold">Welcome Bhunesh!!</Text>
      <Link href="/onboarding" className="text-blue-500">Go to Onboarding</Link>
      <Link href="/movie/avengers" className="text-blue-500">Go to Avengers movie</Link>
    </View>
  );
}
