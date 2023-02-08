import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Request=()=>{

    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [course,setCourse] = useState("");

    return (
    <Container h={"95vh"}>
        <VStack h={'full'} justifyContent={"center"} spacing="11"  marginTop={'5vh'}>
            <Heading fontFamily={'cursive'} children="We are hiring !" />

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
                <FormLabel htmlFor="course" children="Why do you want to join us ?" />
                <Textarea required id="course" value={course} onChange={e=>setCourse(e.target.value)}
                placeholder="Your answer....." type={'email'} focusBorderColor="yellow.500"
                />
                </Box>



                <Button my="4" colorScheme={'yellow'} type="submit">
                    Send now
                </Button>
                <Box my="2">
                    See available <Link to="/courses"><Button colorScheme={"yellow"} variant="link">Courses</Button>{" "}here</Link>
                </Box>



            </form>

        </VStack>
    </Container>
    )
}

export default Request;
