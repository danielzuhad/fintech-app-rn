import Colors from "@/constants/Colors";
import { cn } from "@/lib/cn";
import { Ionicons } from "@expo/vector-icons";
import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";

export const ActionButton = ({
  title,
  icon,
  onPress,
  variant = "primary",
  style,
}: {
  title?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  variant?: "primary" | "secondary";
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style}
      className={cn(
        "flex  items-center justify-center rounded-lg",
        variant === "primary" && "flex-row py-4 flex-grow bg-primary ",
        variant === "secondary" && "flex-col flex-shrink p-4   bg-outline/50"
      )}
    >
      <Ionicons
        name={icon as any}
        size={24}
        color={Colors.foreground}
        style={{ marginRight: variant === "secondary" ? 0 : 20 }}
      />
      {!title ? null : (
        <Text className="text-lg font-medium text-foreground">{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ActionButton;
