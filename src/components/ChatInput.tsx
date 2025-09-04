import {
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

type ChatInputProps = {
  onSend: (message: string) => {};
  isLoading: boolean;
};

export default function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const insets = useSafeAreaInsets();

  const [message, setMessage] = useState("");

  const handleSend = async () => {
    try {
      await onSend(message.trim());
      setMessage("");
    } catch (error) {
      console.error("Failed to send message: ", error);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 100}
    >
      <View
        className="bg-[#262626] rounded-t-2xl"
        style={{ paddingBottom: insets.bottom }}
      >
        <TextInput
          placeholder="Ask anything..."
          placeholderTextColor="gray"
          multiline
          value={message}
          onChangeText={setMessage}
          className="pt-6 pb-2 px-4 text-white"
        />

        <View className="flex-row justify-between items-center">
          <MaterialCommunityIcons name="plus" size={24} color="white" />

          {!!message ? (
            <MaterialCommunityIcons
              name="arrow-up-circle"
              size={30}
              color="white"
              className="ml-auto"
              onPress={handleSend}
              disabled={isLoading}
            />
          ) : (
            <View className="flex-row gap-1 items-center bg-white p-2 rounded-full">
              <MaterialCommunityIcons
                name="account-voice"
                size={15}
                color="black"
              />
              <Text className="text-black text-sm">Voice</Text>
            </View>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
