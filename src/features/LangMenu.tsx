import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";

const LangMenu = () => {
  const langs = ["Русский", "English", "Қазақ"];
  const [selectedLanguage, setLanguage] = React.useState(0);

  return (
    <div>
      <Menu>
        <MenuButton
          width={100}
          fontFamily="Open Sans"
          px={4}
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          background="#002554"
          color="#fff"
          fontWeight="400"
          _hover={{ bg: "gray.400" }}
        >
          {langs[selectedLanguage]}
        </MenuButton>
        <MenuList>
          {langs.map((lang, index) => {
            return (
              <MenuItem onClick={() => setLanguage(index)} key={index}>
                {lang}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
};

export default LangMenu;
