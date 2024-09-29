import { View, Text } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";

const Welcome = () => {
  const { user } = useUser();

  return (
    <View className="flex-row w-full gap-x-1">
      <Text className="text-xl text-outline">Welcome, </Text>
      <Text className="text-xl font-semibold text-backgroundForeground">
        {user?.firstName}
      </Text>
    </View>
  );
};

export default Welcome;
