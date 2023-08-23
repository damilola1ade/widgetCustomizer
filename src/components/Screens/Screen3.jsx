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
import react from "../../assets/react.svg";
import vite from "../../assets/vite.svg";

const Screen3 = ({
  buttonColour,
  colour,
  handleWidgetChange,
  handleButtonChange,
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

        <Center>
          <Text fontSize="md" mt={6}>
            Log In Details
          </Text>
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
                      placeholder="damiiyi@gmail.com"
                      fontSize="sm"
                      isDisabled
                    />
                    <Input
                      w="350px"
                      mt={3}
                      h="50px"
                      bg="#f5f4f4"
                      placeholder="08138486922"
                      fontSize="sm"
                      isDisabled
                    />
                  </TabPanel>
                  <TabPanel ml={-52}>
                    <Input
                      w="350px"
                      h="50px"
                      bg="#f5f4f4"
                      placeholder="08138486922"
                      fontSize="sm"
                      isDisabled
                    />
                    <Input
                      w="350px"
                      mt={3}
                      h="50px"
                      bg="#f5f4f4"
                      placeholder="Computer123@"
                      fontSize="sm"
                      isDisabled
                    />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Flex>
        </Center>

        <Center mt={12}>
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

export default Screen3;
