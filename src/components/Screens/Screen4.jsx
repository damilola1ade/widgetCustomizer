import { Avatar, Box, Center, Flex, Text } from "@chakra-ui/react";

const Screen4 = ({ colour, handleWidgetChange }) => {
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
        height="95%"
      >
        <Center>
          <Flex>
            <Box>
              <Avatar size="md" />
            </Box>
            <Box ml={-3}>
              <Avatar size="md" bg="black" color="white" />
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
