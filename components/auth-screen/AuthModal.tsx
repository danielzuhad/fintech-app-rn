import {
  FlatList,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LOGIN_OPTIONS } from "./constants";

const AuthModal = () => {
  const onSelectedAuth = async (AuthType: string) => {
    console.log({ AuthType });
  };

  const AuthComp = ({
    imgUrl,
    label,
  }: {
    imgUrl: ImageSourcePropType;
    label: string;
  }) => {
    return (
      <TouchableOpacity
        onPress={() => onSelectedAuth(label)}
        className="flex-row justify-center w-full px-4 py-2 border-[1px] gap-x-2 rounded-3xl border-outline items-center"
      >
        <Image source={imgUrl} className="w-6 h-6" />

        <Text className="text-lg font-poppins">Sign In with {label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        paddingLeft: 36,
        rowGap: 28,
        paddingHorizontal: 20,
      }}
      data={LOGIN_OPTIONS}
      renderItem={({ item }) => (
        <AuthComp imgUrl={item.icon} label={item.label} />
      )}
      keyExtractor={(item) => item.label}
    />
  );
};

export default AuthModal;
