import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  Input,
} from "@chakra-ui/react";
import { IoLockClosed } from "react-icons/io5";

const Screen4 = ({
  buttonColour,
  colour,
  handleWidgetChange,
  handleButtonChange,
  logo,
  handleLogo,
}) => {

  return (
    <>
      <Box
        bg={colour}
        onChange={handleWidgetChange}
        w="400px"
        p={6}
        borderRadius="20px"
        position="absolute"
        margin={0}
        top={3}
        height='95%'
      >
        <Center>
          <Flex>
            <Box>
              <Avatar size="md" />
            </Box>
            <Box ml={-3}>
                <Avatar
                  size="md"
                  bg="black"
                  color="white"
                />
            </Box>
          </Flex>
        </Center>

        <Center>
          <Text fontSize="md" mt={32}>
            Screen 4
          </Text>
        </Center>
      </Box>
    </>
  );
};

export default Screen4;
