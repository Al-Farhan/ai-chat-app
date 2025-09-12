import ChatInput from "@/components/ChatInput";
import { useChatStore } from "@/store/chatStore";
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const createNewChat = useChatStore((state) => state.createNewChat);
  const addNewMessage = useChatStore((state) => state.addNewMessage);

  const handleSend = async (message: string) => {
    const newChatId = createNewChat(message.slice(0, 50));
    addNewMessage(newChatId, {
      id: Date.now().toString(),
      role: "user",
      message: message,
    });
    router.push(`/chat/${newChatId}`);

    try {
      const response = await fetch("/api/chat");
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error("Chat error:", error);
    }
  };
  return (
    <View className="flex-1 justify-center">
      <View className="flex-1">
        <Text>Home</Text>
      </View>

      <ChatInput onSend={handleSend} isLoading={false} />
    </View>
  );
}
