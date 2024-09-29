import { View, Text } from "react-native";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const Balance = () => {
  const [showBalance, setShowBalance] = React.useState(true);

  let balance = 200;

  const handleShowBalance = () => {
    setShowBalance(!showBalance);
  };

  return (
    <View className="w-full my-10 ">
      <Text className="text-lg text-outline">Your balance :</Text>

      <View className="flex-row items-center justify-center w-full h-32 gap-x-2">
        <Text className="text-lg">Rp</Text>

        {showBalance ? (
          <View className="flex-row items-center gap-x-2">
            <Text className="text-5xl font-bold text-primary">{balance}</Text>
            <Ionicons
              onPress={handleShowBalance}
              name="eye-off"
              size={24}
              color="black"
            />
          </View>
        ) : (
          <View className="flex-row items-center gap-x-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <FontAwesome
                key={index}
                name="asterisk"
                size={36}
                color={Colors.primary}
              />
            ))}
            <Ionicons
              onPress={handleShowBalance}
              name="eye"
              size={24}
              color="black"
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Balance;
