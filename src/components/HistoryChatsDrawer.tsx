import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import chatHistory from "@assets/data/chatHistory.json";
import { router, usePathname } from "expo-router";

export default function HistoryChatsDrawer(props: DrawerContentComponentProps) {
  const pathname = usePathname();
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
