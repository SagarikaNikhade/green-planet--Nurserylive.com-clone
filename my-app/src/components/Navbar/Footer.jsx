import { Stack, Heading, Button, HStack, Text, Center, Image, Box, Flex, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import React from 'react';

const Footer = () => {
    const [show, setshow] = React.useState(false)
    const handleClick = () => setshow(!show)

    return (
        <div style={{ marginTop: "50px" }}>
            <HStack display='flex' border="1px solid black" backgroundColor={"#32620e"} justifyContent={"center"} height="49px">
                <Text color='white' fontFamily="Amazon Ember,Arial,sansserif">Back to top</Text>
            </HStack>

            <Box borderBottom="1px solid grey" backgroundColor={"#32620e"}>
                <Center>
                    <Box border="0px solid blue" style={{
                        display: "grid",
                        fontFamily: "Amazon Ember,Arial,sansserif",
                        color: "white",
                        gridTemplateColumns: "repeat(4,1fr)",
                        gap: (4),
                        width: "70%",
                        marginTop: "50px",
                        marginBottom: "50px",
                    }}>
                        <Stack align={'flex-start'}>
                            <Heading fontSize="16px" fontWeight={700} lineHeight="16.8px">Gardening Knowledge</Heading>
                            <Text fontSize="14px" lineHeight="16.8px">About us</Text>
                            <Text fontSize="14px" lineHeight="16.8px" >Careers</Text>
                            <Text fontSize="14px" lineHeight="16.8px">Press Releases</Text>
                            <Text fontSize="14px" lineHeight="16.8px">Amazon Science</Text>
                        </Stack>

                        <Stack align={'flex-start'}>
                            <Heading fontSize="16px" fontWeight={700} lineHeight="16.8px">Useful Links</Heading>
                            <Text fontSize="14px" lineHeight="16.8px">Facebook</Text>
                            <Text fontSize="14px" lineHeight="16.8px" >Twitter</Text>
                            <Text fontSize="14px" lineHeight="16.8px">Instagram</Text>
                        </Stack>

                        <Stack align={'flex-start'}>
                            <Heading fontSize="16px" fontWeight={700} lineHeight="16.8px">About</Heading>
                            <Text fontSize="14px" lineHeight="16.8px">Sell on Amazon</Text>
                            <Text fontSize="14px" lineHeight="16.8px" >Sell under AMAZON Accelerator</Text>
                            <Text fontSize="14px" lineHeight="16.8px">Protect and Build Your Brand</Text>
                            <Text fontSize="14px" lineHeight="16.8px">Amazon Global Selling</Text>
                            <Text fontSize="14px" lineHeight="16.8px" >Become an Affiliate</Text>
                            <Text fontSize="14px" lineHeight="16.8px">Fulfilment by Amazon</Text>
                            <Text fontSize="14px" lineHeight="16.8px" >Advertise Your Products</Text>
                            <Text fontSize="14px" lineHeight="16.8px">Amazon Pay on Merchants</Text>
                        </Stack>

                        <Stack align={'flex-start'}>
                            <Heading fontSize="16px" fontWeight={700} lineHeight="16.8px">Subcribe</Heading>
                            <Text fontSize="14px" lineHeight="16.8px">Join us to receive gardening tips, offers, news & more</Text>

                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter Email'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' color='Green' onClick={handleClick}>
                                        {show ? 'Hide' : 'show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>

                        </Stack>
                    </Box>
                </Center>
            </Box>

            <Box borderBottom="1px solid grey" backgroundColor={"#32620e"}>
                <Center>
                    <VStack>
                        <Text fontSize="16px" fontWeight={700} lineHeight="16.8px" >Follow us on</Text>
                        <Flex gap="20px">
                            <Image w="150px" h="60px" marginTop="30px" gap="20px" src="https://tse2.mm.bing.net/th/id/OIP.93x8czri2oEOeMyxGv8sPwHaG2?w=186&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="amazon-logo" />
                            <Image w="150px" h="60px" marginTop="30px" gap="20px" src="https://tse3.mm.bing.net/th/id/OIP.22-5_uU3zNVRHFMgtMUGVgHaH3?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="amazon-logo" />
                        </Flex>
                    </VStack>
                </Center>
                <Center>
                    <Flex gap="10px" color="white">
                        <p>Australia</p>
                        <p>Brazil</p>
                        <p>Canada</p>
                        <p>China</p>
                        <p>France</p>
                        <p>Germany</p>
                        <p>Italy</p>
                        <p>Japan</p>
                        <p>Mexico</p>
                        <p>Netherland</p>
                        <p>Poland</p>
                        <p>Singapore</p>
                        <p>Spain</p>
                        <p>Turkey</p>
                        <p>UAE</p>
                        <p>United Kingdom</p>
                        <p>United State</p>
                    </Flex>
                </Center>
            </Box>

        </div>
    )
}

export default Footer;

// footer and video not responsive