import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { router, usePathname } from "expo-router";
import { useChatStore } from "@/store/chatStore";

export default function HistoryChatsDrawer(props: DrawerContentComponentProps) {
  const pathname = usePathname();

  const chatHistory = useChatStore((state) => state.chatHistory);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      {chatHistory.map((item) => (
        <DrawerItem
          key={item.id}
          label={item.title}
          focused={pathname === `/chat/${item.id}`}
          onPress={() => router.push(`/chat/${item.id}`)}
          inactiveTintColor="white"
        />
      ))}
    </DrawerContentScrollView>
  );
}
