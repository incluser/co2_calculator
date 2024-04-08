import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

const MyMenu = (props: { types: Array<string> }) => {
  const [selected, setSelected] = React.useState<number>(0);
  return (
    <Menu>
      <MenuButton
        bg="#fff"
        px={4}
        py={2}
        width={200}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
      >
        {props.types[selected]}
      </MenuButton>
      <MenuList>
        {props.types.map((item, index) => {
          return (
            <MenuItem onClick={() => setSelected(index)} key={index}>
              {item}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default MyMenu;



