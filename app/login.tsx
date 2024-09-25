import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginPage = () => {
  return (
    <SafeAreaView className="items-center justify-between flex-1 px-2 pt-48 bg-background">
      <View className="items-center justify-center ">
        <Text className="text-4xl font-bold text-primary font-poppins ">
          Login
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
