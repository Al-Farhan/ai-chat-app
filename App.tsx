import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "./global.css";

export default function App() {
  return (
    <View className="flex-1 bg-white dark:bg-black items-center justify-center">
      <Text className="text-3xl text-black dark:text-white text-bold">
        AiChatApp
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
