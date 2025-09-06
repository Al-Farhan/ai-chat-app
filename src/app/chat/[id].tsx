import { useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";
import chatHistory from "@assets/data/chatHistory.json";
import ChatInput from "@/components/ChatInput";
import MessageListItem from "@/components/MessageListItem";
import { useChatStore } from "@/store/chatStore";

export default function ChatScreen() {
  const { id } = useLocalSearchParams();

  const chat = useChatStore((state) =>
    state.chatHistory.find((chat) => chat.id === id)
  );
  const addNewMessage = useChatStore((state) => state.addNewMessage);

  const handleSend = async (message: string) => {
    if (!chat) return;
    addNewMessage(chat?.id, {
      id: Date.now().toString(),
      role: "user",
      message: message,
    });
  };

  if (!chat) {
    return (
      <View>
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
