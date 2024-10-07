import { View, Text } from "react-native";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useBalanceStore } from "@/store/balance-store";
import { formatCurrency } from "@/util/formatCurrency";

const Balance = () => {
  const [isShowBalance, setIsShowBalance] = React.useState(false);
  const { balance } = useBalanceStore();

  const handleisShowBalance = () => {
    setIsShowBalance(!isShowBalance);
  };

  return (
    <View className="w-full my-10 ">
      <Text className="text-lg text-outline">Your balance :</Text>

      <View className="flex-row items-center justify-center w-full h-32 gap-x-2">
        <Text className="text-lg">Rp</Text>

        {isShowBalance ? (
          <View className="flex-row items-center gap-x-2">
            <Text className="pt-3 text-5xl font-bold text-center text-primary line-clamp-1">
              {formatCurrency(balance())}
            </Text>
            <Ionicons
              onPress={handleisShowBalance}
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
              onPress={handleisShowBalance}
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
