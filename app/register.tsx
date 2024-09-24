import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const RegisterPage = () => {
  return (
    <SafeAreaView className="flex-1 items-center bg-background justify-between pt-48 ">
      <View className="border w-full">
        <Text>Let's get started</Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterPage;
