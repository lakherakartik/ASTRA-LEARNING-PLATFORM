import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact=()=>{

    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [message,setMessage] = useState("");

    return (
    <Container h={"95vh"}>
        <VStack h={'full'} justifyContent={"center"} spacing="11"  marginTop={'5vh'}>
            <Heading fontFamily={'cursive'} children="Contact Us" />

            <form style={{width: "100%"}}>
                
                <Box my={'4'}>
                <FormLabel htmlFor="name" children="Name" />
                <Input required id="name" value={name} onChange={e=>setName(e.target.value)}
                placeholder="Mr. Astra" type={'text'} focusBorderColor="yellow.500"
                />
                </Box>

                <Box my={'2'}>
                <FormLabel htmlFor="email" children="Email Address" />
                <Input required id="email" value={email} onChange={e=>setEmail(e.target.value)}
                placeholder="astra@gmail.com" type={'email'} focusBorderColor="yellow.500"
                />
                </Box>

                <Box my={'2'}>
                <FormLabel htmlFor="message" children="Message" />
                <Textarea required id="message" value={message} onChange={e=>setMessage(e.target.value)}
                placeholder="Your Message....." type={'email'} focusBorderColor="yellow.500"
                />
                </Box>



                <Button my="4" colorScheme={'yellow'} type="submit">
                    Send now
                </Button>
                <Box my="2">
                    Request to upload a course <Link to="/request"><Button colorScheme={"yellow"} variant="link">Click</Button>{" "} here</Link>
                </Box>



            </form>

        </VStack>
    </Container>
    )
}

export default Contact;
