import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Subscribe=()=>{
    return (
        <Container h="90vh" p="16">
            <Heading children="BRAHMASTRA" my={'8'} textAlign={'center'} />

            <VStack boxShadow={'lg'} alignItems="stretch"  borderRadius={'lg'} spacing="0" >

                <Box bg={'yellow.400'} padding="4" css={{borderRadius: "8px 8px 0 0"}}>
                    <Text textAlign={'center'}  children={`Pro Pack - Rs. 299.00`} color="black"/>
                </Box>

                <Box p="4">

                    <VStack textAlign={'center'} px="8" mt={"4"} spacing="8">
                      <Text children={`Join Brahmastra and get access to all content.`}/>
                      <Heading size="md" children="Rs. 299 Only" />
                    </VStack>
                    <Button my="8" w="full" colorScheme={"yellow"} > BUY NOW</Button> 

                </Box>

                <Box bg={'blackAlpha.800'} p="4" css={{borderRadius: '0 0 8px 8px'}}>

                    <Heading textAlign={'center'}  color={"white"} textTransform="uppercase" size="sm" children="100% refund at cancellation" />
                    <Text textAlign={'center'}  fontSize={"xs"}  color="white" children={"*Terms and Condition apply"}/>

                </Box>

            </VStack>
        </Container>
    );
}
export default Subscribe;