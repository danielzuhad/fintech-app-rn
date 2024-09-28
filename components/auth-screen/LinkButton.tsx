import { Text, TouchableOpacity } from "react-native";
import React, { ComponentProps } from "react";
import { cn } from "@/lib/cn";

interface LinkButtonProps extends ComponentProps<typeof TouchableOpacity> {
  className?: string;
  children?: React.ReactNode;
  isLoading?: boolean;
  variant?: "primary" | "outline";
  href?: string;
}

const LinkButton = ({
  children,
  className,
  isLoading,
  variant = "primary",
  href,
  ...props
}: LinkButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isLoading}
      className={cn(
        "items-center shadow-sm shadow-black justify-center rounded-3xl flex flex-row ",
        variant === "primary" && "bg-primary",
        variant === "outline" && "border border-primary",
        className
      )}
      {...props}
    >
      <Text
        className={cn(
          "py-3 font-poppins font-semibold text-lg",
          variant === "outline" && "text-primary",
          variant === "primary" && "text-foreground"
        )}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default LinkButton;

{
  /* {isLoading && ()} */
}
{
  /* <Text
        className={cn(
            "ml-2 animate-spin transition-all duration-1000",
            variant === "outline" && "text-primary",
            variant === "primary" && "text-foreground"
            )}
            >
            <AntDesign name="loading1" size={16} />
            </Text> */
}
