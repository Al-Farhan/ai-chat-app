import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import chatHistory from "@assets/data/chatHistory.json";

export default function ChatScreen() {
  const { id } = useLocalSearchParams();

  const chat = chatHistory.find((item) => item.id === id);

  if (!chat) {
    return (
      <View>
        {" "}
        <Text className="text-white">Chat not found</Text>
      </View>
    );
  }

  return (
    <View>
      <Text className="text-white">Chat screen: {chat.title}</Text>
    </View>
  );
}
