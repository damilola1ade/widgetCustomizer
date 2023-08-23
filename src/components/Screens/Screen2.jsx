import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
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
import { BsCheckCircle } from "react-icons/bs";
import react from "../../assets/react.svg";
import vite from "../../assets/vite.svg";

const Screen2 = ({
  buttonColour,
  colour,
  handleWidgetChange,
  handleButtonChange,
  successTitle,
  handleSuccessTitle,
  successMessage,
  handleSuccessMessage,
  submitButtonText,
  handleSubmitButtonText,
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
      >
        <Box
          bg="black"
          opacity='40%'
          w="400px"
          p={6}
          borderRadius="20px"
          position="absolute"
          margin={0}
          top={0}
          ml={-6}
          bottom={0}
          zIndex={100}
        ></Box>
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

        <Center>
          <Text fontSize="md" mt={6}>
            Log In Details
          </Text>
        </Center>

        <Center>
          <Box
            bg={colour}
            top={32}
            position="fixed"
            width="300px"
            pt={10}
            pb={5}
            zIndex={100}
            borderRadius="xl"
          >
            <Box>
              <Center>
                <Box color="#002c8a">
                  <BsCheckCircle
                    size={90}
                    className="bg-[#e5e9f3] p-6 rounded-full"
                  />
                </Box>
              </Center>
              <Text
                color="#002c8a"
                align="center"
                mt={2}
                fontWeight={550}
                onChange={handleSuccessTitle}
              >
                {successTitle}
              </Text>
              <Text
                color="#002c8a"
                align="center"
                fontSize="sm"
                p={4}
                onChange={handleSuccessMessage}
              >
                {successMessage}{" "}
              </Text>
              <Center>
                <VStack>
                  <Box mb={1}>
                    <Button
                      fontSize="sm"
                      variant="outline"
                      borderRadius="20px"
                      color="#002c8a"
                      fontWeight="xs"
                      bg="white"
                      borderColor="#002c8a"
                      onChange={handleButtonChange}
                      _hover={{ bg: "none" }}
                      width="260px"
                      height="45px"
                      cursor="default"
                    >
                      Link new exchange
                    </Button>
                  </Box>

                  <Box>
                    <Button
                      fontSize="sm"
                      type="submit"
                      borderRadius="20px"
                      fontWeight="xs"
                      color="white"
                      bg={buttonColour}
                      onChange={handleButtonChange}
                      _hover={{ bg: { buttonColour } }}
                      width="260px"
                      height="45px"
                      cursor="default"
                    >
                      <Text onChange={handleSubmitButtonText}>
                        {submitButtonText}
                      </Text>
                    </Button>
                  </Box>
                </VStack>
              </Center>
            </Box>
          </Box>
        </Center>

        <Center mt={4}>
          <Flex>
            <Box mt={2.5} ml={0}>
              <Text fontSize="sm" w="150px" ml={4}>
                Enter your credentials
              </Text>
            </Box>
            <Box>
              <Tabs variant="soft-rounded" size="sm" colorScheme="blue" ml={8}>
                <TabList bg="#f5f4f4" w="155px" borderRadius="xl" p={1.5}>
                  <Tab borderRadius="md">Email</Tab>
                  <Tab borderRadius="md">Phone</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel ml={-52}>
                    <Input
                      w="350px"
                      h="50px"
                      bg="#f5f4f4"
                      placeholder="bkrofegha@gmail.com"
                      fontSize="sm"
                    />
                    <Input
                      w="350px"
                      mt={3}
                      h="50px"
                      bg="#f5f4f4"
                      placeholder="Computer123@"
                      fontSize="sm"
                    />
                  </TabPanel>
                  <TabPanel ml={-52}>
                    <Input
                      w="350px"
                      h="50px"
                      bg="#f5f4f4"
                      placeholder="08138486922"
                      fontSize="sm"
                    />
                    <Input
                      w="350px"
                      mt={3}
                      h="50px"
                      bg="#f5f4f4"
                      placeholder="Computer123@"
                      fontSize="sm"
                    />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Flex>
        </Center>

        <Center mt={20}>
          <VStack>
            <Box>
              <Text fontSize="sm">
                By clicking continue, you agree to Tensfer’s <br />
                <Text align="center" fontSize="sm" color="#002C8A">
                  End User Agreement
                </Text>
              </Text>
            </Box>
            <Box>
              <Button
                fontSize={{ sm: "12px", md: "14px" }}
                mt={6}
                type="submit"
                borderRadius="20px"
                color="white"
                bg={buttonColour}
                onChange={handleButtonChange}
                _hover={{ bg: { buttonColour } }}
                width="300px"
                height="50px"
                isDisabled
                cursor="default"
              >
                Continue
              </Button>
            </Box>
            <Center>
              <Box mt={2}>
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

export default Screen2;
