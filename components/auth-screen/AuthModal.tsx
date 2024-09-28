import {
  FlatList,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LOGIN_OPTIONS } from "./constants";
import { useOAuth, useSignUp } from "@clerk/clerk-expo";
import { OAuthStrategy } from "@clerk/types";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";

const AuthModal = () => {
  useWarmUpBrowser();

  const { setActive } = useSignUp();
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
  const { startOAuthFlow: facebookAuth } = useOAuth({
    strategy: "oauth_facebook",
  });
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: "oauth_apple" });

  const onSelectedAuth = async (AuthType: string) => {
    const selectedAuth = {
      Google: googleAuth,
      Facebook: facebookAuth,
      Apple: appleAuth,
    }[AuthType];

    if (!selectedAuth) {
      return;
    }

    try {
      const { createdSessionId, setActive } = await selectedAuth();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        console.log("Session created: ", createdSessionId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const AuthComp = ({
    imgUrl,
    label,
  }: {
    imgUrl: ImageSourcePropType;
    label: string;
    strategy: OAuthStrategy;
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
        <AuthComp
          strategy={item.strategy}
          imgUrl={item.icon}
          label={item.label}
        />
      )}
      keyExtractor={(item) => item.label}
    />
  );
};

export default AuthModal;
