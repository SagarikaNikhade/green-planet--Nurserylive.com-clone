import { Stack, Heading, Button, HStack, Text, Center, Box, Flex, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


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
                            <a href="/"><Text fontSize="14px" lineHeight="16.8px">About us</Text></a>
                            <a href="/"><Text fontSize="14px" lineHeight="16.8px" >Blogs - Plant Talk</Text></a>
                            <a href="/"><Text fontSize="14px" lineHeight="16.8px">Blog - Kitchen Gardening</Text></a>
                            <a href="/"><Text fontSize="14px" lineHeight="16.8px">Blogs - Top 10 Plants</Text></a>
                            <a href="/"><Text fontSize="14px" lineHeight="16.8px">Blog - Plant Styling and DIY's</Text></a>
                            <a href="/"><Text fontSize="14px" lineHeight="16.8px">Blogs - Sustainable Living</Text></a>
                        </Stack>

                        <Stack align={'flex-start'}>
                            <Heading fontSize="16px" fontWeight={700} lineHeight="16.8px">Useful Links</Heading>
                            <a href="/"><Text fontSize="14px" lineHeight="16.8px">Track Order</Text></a>
                            <a href="/"><Text fontSize="14px" lineHeight="16.8px" >Orders</Text></a>
                            <a href="/"><Text fontSize="14px" lineHeight="16.8px">FAQ's</Text></a>
                            <a href="/"><Text fontSize="14px" lineHeight="16.8px">Offers</Text></a>
                            <a href="/"><Text fontSize="14px" lineHeight="16.8px">Rewards</Text></a>
                        </Stack>

                        <Stack align={'flex-start'}>
                            <Heading fontSize="16px" fontWeight={700} lineHeight="16.8px">About</Heading>
                            <a href="/"><Text fontSize="14px" lineHeight="16.8px">About Nurserylive</Text></a>
                            <a href="/"><Text fontSize="14px" lineHeight="16.8px" >Contact us</Text></a>
                            <a href="/"><Text fontSize="14px" lineHeight="16.8px">Privacy Policy</Text></a>
                            <a href="/"><Text fontSize="14px" lineHeight="16.8px">Refund Policy</Text></a>
                            <a href="/"><Text fontSize="14px" lineHeight="16.8px" >Shipping Policy</Text></a>
                            <a href="/"><Text fontSize="14px" lineHeight="16.8px">Terms of Service</Text></a>
                            <a href="/"><Text fontSize="14px" lineHeight="16.8px" >Jobs</Text></a>
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
                        <br />
                        <Stack direction={'row'} spacing={6}>
                            <Button label={'Twitter'} href={'#'}>
                                <FaTwitter />
                            </Button>
                            <Button label={'YouTube'} href={'#'}>
                                <FaYoutube />
                            </Button>
                            <Button label={'Instagram'} href={'#'}>
                                <FaInstagram />
                            </Button>
                        </Stack>
                    </VStack>
                </Center>
                <br />
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

