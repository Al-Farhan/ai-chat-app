import ChatInput from "@/components/ChatInput";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const handleSend = async (message: string) => {
    console.log("Sending message", message);
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
