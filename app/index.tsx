import { Image, Text, View } from "react-native";
import React, { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LinkButton from "@/components/auth-screen/LinkButton";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import AuthModal from "@/components/auth-screen/AuthModal";
import Colors from "@/constants/Colors";

const IndexPage = () => {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const snapPoints = React.useMemo(() => ["35%"], []);

  const showModal = () => {
    bottomSheetModalRef.current?.present();
  };

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.7}
        onPress={() => bottomSheetModalRef.current?.dismiss()}
      />
    ),
    []
  );

  return (
    <SafeAreaView
      className="items-center justify-between flex-1 px-2 pt-48 "
      style={{ backgroundColor: Colors.background }}
    >
      <BottomSheetModalProvider>
        <View className="items-center justify-center ">
          <Image
            style={{ resizeMode: "contain" }}
            className="mb-16 w-28 h-28"
            source={require("@/assets/icons/euro-money.png")}
          />

          <Text className="text-2xl font-bold text-center text-backgroundForeground font-poppins ">
            Welcome to Financial Tech App
          </Text>

          <Text className="mt-2 text-sm leading-loose text-center text-backgroundForeground/50 font-poppins">
            Embark on a seamless financial journey with FinSmart, where
            innovation meets security in the symphony of your economic
            aspirations.
          </Text>
        </View>

        <View className="w-full px-4 pb-16">
          <LinkButton onPress={showModal}>Get Started</LinkButton>
        </View>

        {/* Modal */}
        <BottomSheetModal
          backdropComponent={renderBackdrop}
          ref={bottomSheetModalRef}
          snapPoints={snapPoints}
        >
          <AuthModal />
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

export default IndexPage;
