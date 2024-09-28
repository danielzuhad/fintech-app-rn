import { OAuthStrategy } from "@clerk/types";

export const ICON_STYLE = {
  size: 24,
  color: "black",
};

export const LOGIN_OPTIONS = [
  {
    label: "Google",
    icon: require("@/assets/icons/google.png"),
    strategy: "oauth_google" as OAuthStrategy,
  },
  {
    label: "Facebook",
    icon: require("@/assets/icons/facebook.png"),
    strategy: "oauth_facebook" as OAuthStrategy,
  },
  {
    label: "Apple",
    icon: require("@/assets/icons/apple.png"),
    strategy: "oauth_apple" as OAuthStrategy,
  },
];
