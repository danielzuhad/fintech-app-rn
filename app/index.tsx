import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LinkButton from "@/components/auth-screen/LinkButton";

const IndexPage = () => {
  return (
    <SafeAreaView className="flex-1 items-center bg-background justify-between pt-48 ">
      <View className=" items-center justify-center ">
        <Text className="text-4xl font-bold text-primary font-poppins ">
          Financial Tech App
        </Text>

        <Text className="text-base leading-loose text-primary/50 text-center font-poppins mt-2">
          Embark on a seamless financial journey with FinSmart, where innovation
          meets security in the symphony of your economic aspirations.
        </Text>
      </View>

      <View className="w-full px-2  pb-6">
        <LinkButton>Login</LinkButton>

        <LinkButton variant="outline">Register</LinkButton>
      </View>
    </SafeAreaView>
  );
};

export default IndexPage;
