import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoLockClosed } from "react-icons/io5";
import { SiTypescript, SiChakraui, SiReact } from "react-icons/si";
import react from "../../assets/react.svg";
import vite from "../../assets/vite.svg";

const Screen1 = ({
  buttonColour,
  colour,
  handleWidgetChange,
  handleButtonChange,
  secureMessage,
  handleSecureMessage,
  privacyMessage,
  handlePrivacyMessage,
  protectionMessage,
  handleProtectionMessage,
  introMessage,
  handleIntroMessage,
}) => {
  return (
    <>
      <Box
        bg={colour}
        onChange={handleWidgetChange}
        w="400px"
        p={6}
        borderRadius="20px"
        margin={0}
        top={3}
        h="100%"
      >
        <Center>
          <Flex>
            <Box>
              <Avatar size="md" src={react} bg="black" p={2} />
            </Box>
            <Box ml={-1}>
              <Avatar size="md" bg="black" p={2} src={vite} />
            </Box>
          </Flex>
        </Center>

        <Center top={12} pos="relative">
          <Text
            fontSize="sm"
            className="text-[#363535] font-semibold"
            onChange={handleIntroMessage}
            align="center"
          >
            {introMessage}
          </Text>
        </Center>

        <Center pos="relative">
          <VStack spacing={5} pos="absolute" top="80px">
            <Box display="flex">
              <SiTypescript size={36} />
              <Stack ml={3}>
                <Text
                  fontSize={{ sm: "xs", md: "14.5px" }}
                  color="black"
                  fontWeight="bold"
                  align="left"
                >
                  Typescript
                </Text>
                <Text
                  fontSize={{ sm: "xs", md: "13.5px" }}
                  color="black"
                  fontWeight="normal"
                  align="left"
                  onChange={handleSecureMessage}
                >
                  {secureMessage}
                </Text>
              </Stack>
            </Box>
            <Box display="flex">
              <SiReact size={36} />
              <Stack ml={3}>
                <Text
                  fontSize={{ sm: "xs", md: "14.5px" }}
                  color="black"
                  fontWeight="bold"
                  align="left"
                >
                  React
                </Text>
                <Text
                  fontSize={{ sm: "xs", md: "13.5px" }}
                  color="black"
                  fontWeight="normal"
                  align="left"
                  onChange={handlePrivacyMessage}
                >
                  {privacyMessage}{" "}
                </Text>
              </Stack>
            </Box>
            <Box display="flex">
              <SiChakraui size={36} />
              <Stack ml={3}>
                <Text
                  fontSize={{ sm: "xs", md: "14.5px" }}
                  color="black"
                  fontWeight="bold"
                  align="left"
                >
                  Chakra UI
                </Text>
                <Text
                  fontSize={{ sm: "xs", md: "13.5px" }}
                  color="black"
                  fontWeight="normal"
                  align="left"
                  onChange={handleProtectionMessage}
                >
                  <span className="font-bold">
                    <span className="font-normal">or</span> Tensfer
                  </span>{" "}
                  {protectionMessage}
                </Text>
              </Stack>
            </Box>
          </VStack>
        </Center>

        <Center position="relative">
          <VStack position="absolute" top="400px">
            <Box>
              <Button
                fontSize={{ sm: "12px", md: "14px" }}
                type="submit"
                borderRadius="20px"
                color="white"
                bg={buttonColour}
                onChange={handleButtonChange}
                _hover={{ bg: { buttonColour } }}
                width="300px"
                height="50px"
                cursor="default"
              >
                Continue
              </Button>
            </Box>
            <Center>
              <Box>
                <Flex align="center">
                  <IoLockClosed size={12} color="#002C6A" className="mt-1" />
                  <Text fontSize="12px" fontWeight="bold" mt={1}>
                    Created by{" "}
                    <span className="text-[#002C8A] font-semibold">
                      Damilola Adegbemile
                    </span>
                  </Text>
                </Flex>
              </Box>
            </Center>
          </VStack>
        </Center>
      </Box>
    </>
  );
};

export default Screen1;
