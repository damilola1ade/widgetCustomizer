import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Box,
  Button,
  Input,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  VStack,
  StackDivider,
  ModalBody,
  Text,
  useDisclosure,
  FormControl,
  FormLabel,
  Textarea,
  Spacer,
} from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import { ChromePicker } from "react-color";
import { Screen1, Screen2, Screen3, Screen4, Screen5 } from "./components/Screens";
import Carousel from "nuka-carousel";
import { IoIosUndo } from "react-icons/io";

export default function App () {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [slideIndex, setSlideIndex] = useState(0);

  const handleButtonClick = (newSlideIndex) => {
    setSlideIndex(newSlideIndex);
  };

  const [bgColour, setBgColour] = useState("#272727");
  const handleBgChange = (color) => {
    setBgColour(color.hex);
  };
  const bgReset = () => {
    setBgColour("#272727");
  };

  const [colour, setColour] = useState("#fff");
  const handleWidgetChange = (color) => {
    setColour(color.hex);
  };
  const widgetReset = () => {
    setColour("#fff");
  };

  const [buttonColour, setButtonColour] = useState("#002c8a");
  const handleButtonChange = (color) => {
    setButtonColour(color.hex);
  };
  const buttonColourReset = () => {
    setButtonColour("#002c8a");
  };

  const [introMessage, setIntroMessage] = useState(
    "Welcome to Widget Customizer"
  );
  const handleIntroMessage = (e) => {
    setIntroMessage(e.target.value);
  };
  const introMessageReset = () => {
    setIntroMessage("Welcome to Widget Customizer");
  };

  const [secureMessage, SetSecureMessage] = useState(
    "This project was made created with Typescript, Chakra UI, React color and React icons."
  );
  const handleSecureMessage = (e) => {
    SetSecureMessage(e.target.value);
  };
  const secureMessageReset = () => {
    SetSecureMessage("This project was made created with Typescript, Chakra UI, React color and React icons.");
  };

  const [privacyMessage, SetPrivacyMessage] = useState(
    "This project was made created with Typescript, Chakra UI, React color and React icons."
  );
  const handlePrivacyMessage = (e) => {
    SetPrivacyMessage(e.target.value);
  };
  const privacyMessageReset = () => {
    SetPrivacyMessage("This project was made created with Typescript, Chakra UI, React color and React icons.");
  };

  const [protectionMessage, SetProtectionMessage] = useState(
    "This project was made created with Typescript, Chakra UI, React color and React icons."
  );
  const handleProtectionMessage = (e) => {
    SetProtectionMessage(e.target.value);
  };
  const protectionMessageReset = () => {
    SetProtectionMessage("This project was made created with Typescript, Chakra UI, React color and React icons.");
  };

  const [successTitle, setSuccessTitle] = useState("Success");
  const handleSuccessTitle = (e) => {
    setSuccessTitle(e.target.value);
  };
  const successTitleReset = () => {
    setSuccessTitle("Success");
  };

  const [successMessage, setSuccessMessage] = useState(
    "Your account is connected successfully to the Matrix."
  );
  const handleSuccessMessage = (e) => {
    setSuccessMessage(e.target.value);
  };
  const successMessageReset = () => {
    setSuccessMessage("Your account is connected successfully to the Matrix.");
  };

  const [submitButtonText, setSubmitButtonText] = useState("Continue");
  const handleSubmitButtonText = (e) => {
    setSubmitButtonText(e.target.value);
  };
  const submitButtonTextReset = () => {
    setSubmitButtonText("Continue");
  };
  const [placeholder] = useState("Continue");

  return (
    <div>
      <Button
        bg="#002C8A"
        onClick={onOpen}
        color="white"
        w="150px"
        fontSize="sm"
        position='absolute'
        top={250}
        left="45%"
      >
        Open
      </Button>

      <Modal isOpen={isOpen} size='full' onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          mt={0}
          bg={bgColour}
          value={bgColour}
          height="100%"
          pos="fixed"
        >
          <ModalBody>
            <Flex>
              <Box
                sx={{
                  "&::-webkit-scrollbar": {
                    width: "14px",
                    backgroundColor: "#f1f1f1",
                    borderRadius: "68px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#c1c1c1",
                    borderRadius: "68px",
                  },
                }}
                w="26.8vw"
                bg="white"
                align="left"
                h="100%"
                zIndex={99}
                left={0}
                top={0}
                justifyContent="space-around"
                overflow="auto"
                pos="fixed"
              >
                <Button
                  leftIcon={<BiArrowBack />}
                  onClick={() => {
                    onClose();
                  }}
                  fontSize="sm"
                  variant="link"
                  _hover={{ color: "#002C8A" }}
                  mt={4}
                  ml={3}
                >
                  Go back
                </Button>
                <Stack mt={5}>
                  <Box>
                    <Text align="center" fontSize="2xl" fontWeight="bold">
                      Widget customizer
                    </Text>
                  </Box>
                  <Box>
                    <Text ml={8} w="80%" fontSize="sm" color="black">
                      Use this widget builder in your dashboard
                    </Text>
                  </Box>
                </Stack>
                <VStack
                  divider={<StackDivider borderColor="gray.200" />}
                  spacing={4}
                  align="stretch"
                >
                  <Box mt={12}>
                    <Accordion allowToggle>
                      <AccordionItem>
                        <h2>
                          <AccordionButton _focus={{ boxShadow: "none" }}>
                            <Box
                              as="span"
                              flex="1"
                              mb="20px"
                              fontSize="md"
                              fontWeight={700}
                              textAlign="left"
                            >
                              Background color
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <Text fontSize="sm" mb={6}>
                            Seen on large screens where the widget doesn’t
                            occupy the entirety of the viewport.
                          </Text>
                          <Flex>
                            <Box>
                              <ChromePicker
                                disableAlpha
                                width='300px'
                                color={bgColour}
                                onChange={handleBgChange}
                              />
                            </Box>
                            <Box ml={0}>
                              <Button
                                leftIcon={<IoIosUndo color="black" />}
                                variant="link"
                                borderRadius="lg"
                                fontSize="sm"
                                onClick={bgReset}
                              />
                            </Box>
                          </Flex>
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <h2>
                          <AccordionButton _focus={{ boxShadow: "none" }}>
                            <Box
                              as="span"
                              flex="1"
                              mb="20px"
                              fontSize="md"
                              fontWeight={700}
                              textAlign="left"
                            >
                              Widget color
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <Text fontSize="sm" mb={6}>
                            As seen on the widget, the widget occupies the
                            entirety of the mobile viewport.
                          </Text>
                          <FormControl>
                            <Flex>
                              <Box>
                                <FormLabel fontSize="sm" fontWeight="bold">
                                  Widget color
                                </FormLabel>
                                <ChromePicker
                                  disableAlpha
                                  width='300px'
                                  color={colour}
                                  onChange={handleWidgetChange}
                                />
                              </Box>
                              <Box ml={0} mt={6}>
                                <Button
                                  leftIcon={<IoIosUndo color="black" />}
                                  variant="link"
                                  borderRadius="lg"
                                  fontSize="sm"
                                  onClick={widgetReset}
                                />
                              </Box>
                            </Flex>

                            <Flex mt={10}>
                              <Box>
                                <FormLabel fontSize="sm" fontWeight="bold">
                                  Button color
                                </FormLabel>
                                <ChromePicker
                                  disableAlpha
                                  width='300px'
                                  color={buttonColour}
                                  onChange={handleButtonChange}
                                />
                              </Box>
                              <Box ml={0} mt={6}>
                                <Button
                                  leftIcon={<IoIosUndo color="black" />}
                                  variant="link"
                                  borderRadius="lg"
                                  fontSize="sm"
                                  onClick={buttonColourReset}
                                />
                              </Box>
                            </Flex>
                          </FormControl>
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem onClick={() => handleButtonClick(0)}>
                        <h2>
                          <AccordionButton _focus={{ boxShadow: "none" }}>
                            <Box
                              as="span"
                              flex="1"
                              mb="20px"
                              fontSize="md"
                              fontWeight={700}
                              textAlign="left"
                            >
                              First screen
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <FormControl>
                          <Flex mt={4}>
                              <Box>
                              <Text fontSize="sm" fontWeight="bold">
                                  Intro message
                                </Text>
                                <Textarea
                                  onChange={handleIntroMessage}
                                  mt={2}
                                  name="introMessage"
                                  w="300px"
                                  fontSize="sm"
                                  type="text"
                                  value={introMessage}
                                />
                              </Box>
                              <Box ml={-8}>
                                <Button
                                  leftIcon={<IoIosUndo color="black" />}
                                  variant="link"
                                  w="100px"
                                  borderRadius="lg"
                                  fontSize="sm"
                                  onClick={introMessageReset}
                                />
                              </Box>
                            </Flex>
                            <Flex mt={4}>
                              <Box>
                                <Text fontSize="sm" fontWeight="bold">
                                  Secure
                                </Text>
                                <Textarea
                                  mt={2}
                                  onChange={handleSecureMessage}
                                  name="secureMessage"
                                  w="300px"
                                  fontSize="sm"
                                  type="text"
                                  value={secureMessage}
                                />
                              </Box>
                              <Box ml={-8}>
                                <Button
                                  leftIcon={<IoIosUndo color="black" />}
                                  variant="link"
                                  w="100px"
                                  borderRadius="lg"
                                  fontSize="sm"
                                  onClick={secureMessageReset}
                                />
                              </Box>
                            </Flex>
                          </FormControl>

                          <FormControl>
                            <Flex mt={4}>
                              <Box>
                                <Text fontSize="sm" fontWeight="bold">
                                  Privacy
                                </Text>
                                <Textarea
                                  mt={2}
                                  onChange={handlePrivacyMessage}
                                  name="privacyMessage"
                                  w="300px"
                                  fontSize="sm"
                                  type="text"
                                  value={privacyMessage}
                                />
                              </Box>
                              <Box ml={-8}>
                                <Button
                                  leftIcon={<IoIosUndo color="black" />}
                                  variant="link"
                                  w="100px"
                                  borderRadius="lg"
                                  fontSize="sm"
                                  onClick={privacyMessageReset}
                                />
                              </Box>
                            </Flex>
                          </FormControl>

                          <FormControl>
                            <Flex mt={4}>
                              <Box>
                                <Text fontSize="sm" fontWeight="bold">
                                  Protection
                                </Text>
                                <Textarea
                                  mt={2}
                                  onChange={handleProtectionMessage}
                                  name="protectionMessage"
                                  w="300px"
                                  fontSize="sm"
                                  type="text"
                                  value={protectionMessage}
                                />
                              </Box>
                              <Box ml={-8}>
                                <Button
                                  leftIcon={<IoIosUndo color="black" />}
                                  variant="link"
                                  w="100px"
                                  borderRadius="lg"
                                  fontSize="sm"
                                  onClick={protectionMessageReset}
                                />
                              </Box>
                            </Flex>
                          </FormControl>
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem onClick={() => handleButtonClick(1)}>
                        <h2>
                          <AccordionButton _focus={{ boxShadow: "none" }}>
                            <Box
                              as="span"
                              flex="1"
                              mb="20px"
                              fontSize="md"
                              fontWeight={700}
                              textAlign="left"
                            >
                              Second screen
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={1}>
                          <FormControl>
                            <Flex mt={4}>
                              <Box>
                                <FormLabel fontSize="sm" fontWeight="bold">
                                  Title
                                </FormLabel>
                              </Box>
                              <Box>
                                <Button
                                  leftIcon={<IoIosUndo color="black" />}
                                  variant="link"
                                  borderRadius="lg"
                                  fontSize="sm"
                                  onClick={successTitleReset}
                                />
                              </Box>
                            </Flex>

                            <Input
                              onChange={handleSuccessTitle}
                              name="successTitle"
                              fontSize="sm"
                              type="text"
                              value={successTitle}
                            />

                            <Flex mt={6}>
                              <Box>
                                <FormLabel fontSize="sm" fontWeight="bold">
                                  Message
                                </FormLabel>
                              </Box>
                              <Box>
                                <Button
                                  leftIcon={<IoIosUndo color="black" />}
                                  variant="link"
                                  borderRadius="lg"
                                  fontSize="sm"
                                  onClick={successMessageReset}
                                />
                              </Box>
                            </Flex>
                            <Input
                              onChange={handleSuccessMessage}
                              name="successMessage"
                              fontSize="sm"
                              type="text"
                              placeholder={placeholder}
                              value={successMessage}
                            />

                            <Flex mt={6}>
                              <Box>
                                <FormLabel fontSize="sm" fontWeight="bold">
                                  Submit Button
                                </FormLabel>
                              </Box>
                              <Box>
                                <Button
                                  leftIcon={<IoIosUndo color="black" />}
                                  variant="link"
                                  borderRadius="lg"
                                  fontSize="sm"
                                  onClick={submitButtonTextReset}
                                />
                              </Box>
                            </Flex>
                            <Input
                              onChange={handleSubmitButtonText}
                              name="submitButtonText"
                              fontSize="sm"
                              type="text"
                              value={submitButtonText}
                            />
                          </FormControl>
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem onClick={() => handleButtonClick(2)}>
                        <h2>
                          <AccordionButton _focus={{ boxShadow: "none" }}>
                            <Box
                              as="span"
                              flex="1"
                              mb="20px"
                              fontSize="md"
                              fontWeight={700}
                              textAlign="left"
                            >
                              Third screen
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem onClick={() => handleButtonClick(3)}>
                        <h2>
                          <AccordionButton _focus={{ boxShadow: "none" }}>
                            <Box
                              as="span"
                              flex="1"
                              mb="20px"
                              fontSize="md"
                              fontWeight={700}
                              textAlign="left"
                            >
                              Fourth screen
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                      </AccordionItem>

                      <AccordionItem onClick={() => handleButtonClick(4)}>
                        <h2>
                          <AccordionButton _focus={{ boxShadow: "none" }}>
                            <Box
                              as="span"
                              flex="1"
                              mb="20px"
                              fontSize="md"
                              fontWeight={700}
                              textAlign="left"
                            >
                              Fifth screen
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                      </AccordionItem>
                    </Accordion>
                  </Box>
                </VStack>
              </Box>

              <Spacer />

              <Box ml={-540} position='absolute' top={100}>
                <Carousel
                  slideIndex={slideIndex}
                  cellAlign="center"
                  cellSpacing={300}
                  animation="zoom"
                  slidesToShow={5}
                  className="carousel"
                  speed={900}
                  dragging={true}
                  withoutControls={true}
                >
                  <Screen1
                    colour={colour}
                    handleWidgetChange={handleWidgetChange}
                    secureMessage={secureMessage}
                    handleSecureMessage={handleSecureMessage}
                    privacyMessage={privacyMessage}
                    handlePrivacyMessage={handlePrivacyMessage}
                    protectionMessage={protectionMessage}
                    handleProtectionMessage={handleProtectionMessage}
                    introMessage={introMessage}
                    handleIntroMessage={handleIntroMessage}
                    buttonColour={buttonColour}
                    handleButtonChange={handleButtonChange}
                  />
                  <Screen2
                    colour={colour}
                    handleWidgetChange={handleWidgetChange}
                    buttonColour={buttonColour}
                    handleButtonChange={handleButtonChange}
                    successTitle={successTitle}
                    handleSuccessTitle={handleSuccessTitle}
                    successMessage={successMessage}
                    handleSuccessMessage={handleSuccessMessage}
                    submitButtonText={submitButtonText}
                    handleSubmitButtonText={handleSubmitButtonText}
                  />
                  <Screen3
                    buttonColour={buttonColour}
                    colour={colour}
                    handleWidgetChange={handleWidgetChange}
                    handleButtonChange={handleButtonChange}
                  />
                  <Screen4
                    colour={colour}
                    handleWidgetChange={handleWidgetChange}
                  />
                  <Screen5
                    buttonColour={buttonColour}
                    colour={colour}
                    handleWidgetChange={handleWidgetChange}
                    handleButtonChange={handleButtonChange}
                  />
                </Carousel>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};
