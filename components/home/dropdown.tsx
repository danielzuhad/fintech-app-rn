import React from "react";
import * as DropdownMenu from "zeego/dropdown-menu";
import ActionButton from "./button-actions";
import { useBalanceStore } from "@/store/balance-store";

interface DropdownProps {}
const Dropdown = ({}: DropdownProps) => {
  const { clearTransactions } = useBalanceStore();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <ActionButton icon="menu" variant="secondary" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        loop
        side={"bottom"}
        align={"end"}
        sideOffset={20}
        alignOffset={10}
        collisionPadding={5}
        avoidCollisions={true}
      >
        <DropdownMenu.Item onSelect={clearTransactions} key={"settings"}>
          <DropdownMenu.ItemTitle>Clear Balance</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon androidIconName={"trash"} />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
