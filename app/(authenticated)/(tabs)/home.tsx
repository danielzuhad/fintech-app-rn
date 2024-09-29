import { ScrollView, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import Welcome from "@/components/home/welcome";
import { StatusBar } from "expo-status-bar";
import Balance from "@/components/home/balance";

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          backgroundColor: Colors.background,
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      >
        <Welcome />
        <Balance />
        <Text> Home</Text>
      </ScrollView>
      <StatusBar style="dark" backgroundColor={Colors.background} />
    </SafeAreaView>
  );
};

export default Home;
