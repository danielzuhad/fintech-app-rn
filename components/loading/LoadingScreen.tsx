import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { View } from "react-native";

const LoadingScreen = () => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 1000, easing: Easing.linear }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <View className="items-center justify-center flex-1">
      <Animated.View style={animatedStyle}>
        <AntDesign name="loading1" size={60} color={"gray"} />
      </Animated.View>
    </View>
  );
};

export default LoadingScreen;
