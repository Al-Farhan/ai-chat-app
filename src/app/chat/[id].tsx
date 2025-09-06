import { useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";
import chatHistory from "@assets/data/chatHistory.json";
import ChatInput from "@/components/ChatInput";
import MessageListItem from "@/components/MessageListItem";

export default function ChatScreen() {
  const { id } = useLocalSearchParams();

  const chat = chatHistory.find((item) => item.id === id);

  const handleSend = async (message: string) => {
    console.log("Sending message", message);
  };

  if (!chat) {
    return (
      <View>
        {" "}
        <Text className="text-white">Chat not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <FlatList
        data={chat.messages}
        renderItem={({ item }) => <MessageListItem messageItem={item} />}
      />

      <ChatInput onSend={handleSend} isLoading={false} />
    </View>
  );
}
