import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useBalanceStore } from "@/store/balance-store";

const Actions = () => {
  const { runTransaction, clearTransactions } = useBalanceStore();

  const handleAddMoney = () => {
    const denominations = [500, 1000, 5000, 10000, 50000];
    const randomAmount =
      denominations[Math.floor(Math.random() * denominations.length)];
    const amount = randomAmount * Math.floor(Math.random() * 20);

    runTransaction({
      id: Math.random().toString(),
      amount: amount,
      title: "Add Money",
      date: new Date(),
    });
  };

  return (
    <View
      className="flex-row items-center justify-center w-full py-1 "
      style={{ columnGap: 25 }}
    >
      <ActionButton onPress={clearTransactions} title="Send" icon="send" />
      <ActionButton
        onPress={handleAddMoney}
        title="Add"
        icon="add-circle-sharp"
      />
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
      className="flex flex-row items-center justify-center flex-grow py-4 bg-white rounded-lg "
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
