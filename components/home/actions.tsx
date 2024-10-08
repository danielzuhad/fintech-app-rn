import { View } from "react-native";
import React from "react";
import { useBalanceStore } from "@/store/balance-store";
import ActionButton from "./button-actions";
import Dropdown from "./dropdown";

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
      className="flex-row items-center justify-center w-full py-1"
      style={{ columnGap: 10 }}
    >
      <ActionButton onPress={clearTransactions} title="Send" icon="send" />
      <ActionButton
        onPress={handleAddMoney}
        title="Add"
        icon="add-circle-sharp"
      />
      <Dropdown />
    </View>
  );
};

export default Actions;
