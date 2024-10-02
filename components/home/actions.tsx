import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Actions = () => {
  return (
    <View
      className="flex-row items-center justify-center w-full "
      style={{ columnGap: 25 }}
    >
      <ActionButton title="Send" icon="send" />
      <ActionButton title="Add" icon="add-circle-sharp" />
    </View>
  );
};

export default Actions;

const ActionButton = ({
  title,
  icon,
  onPress,
}: {
  title: string;
  icon?: string;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-row items-center  justify-center w-[45%] py-4 rounded-lg bg-white"
    >
      <Ionicons
        name={icon as any}
        size={24}
        color="black"
        style={{ marginRight: 20 }}
      />
      <Text className="text-lg font-medium text-black">{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    //     borderWidth: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 20,
  },
});
