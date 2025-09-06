import { Chat, Message } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ChatSotre {
  chatHistory: Chat[];
  createNewChat: (title: string) => string;
  addNewMessage: (chatId: string, message: Message) => void;
}

export const useChatStore = create<ChatSotre>()(
  persist(
    (set) => ({
      chatHistory: [],
      createNewChat: (title: string) => {
        const id = Date.now().toString();
        const newChat = {
          id,
          title,
          messages: [],
        };

        set((state) => ({
          chatHistory: [newChat, ...state.chatHistory],
        }));
        return id;
      },
      addNewMessage: (chatId: string, message: Message) => {
        set((state) => ({
          chatHistory: state.chatHistory.map((chat) =>
            chat.id === chatId
              ? { ...chat, messages: [...chat.messages, message] }
              : chat
          ),
        }));
      },
    }),
    {
      name: "chat-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
