import { Avatar, Box, Button, Container, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { RiSecurePaymentFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import introVideo from "../../assets/videos/intro.mp4"
import termsAndCondition from "../../assets/docs/termsAndCondition";


const TandC=({termsAndCondition})=>(
    <Box>
        <Heading size={'md'} children="Terms & Condition" textalign={['center', "left"]} my="4" />
        <Box overflowY={"scroll"} h="sm" p="4">
            <Text letterSpacing={'widest'} textAlign={['center','left']} fontFamily={"heading"} >{termsAndCondition}</Text>
            <Heading my="4" size={"xs"} children="Refund only applicable for cancellation within 7 days."/>
        </Box>
    </Box>

)

const VideoPlayer=()=>(
    <Box>
        <video autoPlay muted loop  controls controlsList="nodownload nofullscreen noremoteplayback" 
        disablePictureInPicture
        disableRemotePlayback
        src={introVideo}></video>

    </Box>
)

const Founder =()=>(
    <Stack direction={['column','row']} spacing={['4','16']} padding={'8'} >

        <VStack justifyContent={'center'} >
        <Avatar src="https://images.unsplash.com/photo-1603134281085-cf0c4b61a65d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" boxSize={['40','48']}/>
        <Text  children="Co-Founder" opacity={0.7}></Text>
        </VStack>

        <VStack justifyContent={'center'} alignItems={['center','flex-start']}>
            <Heading children="Kartik lakhera" size={['md','xl']} />
            <Text children={`Hi, I am a full-stack developer and a mentor.
            Our mission is provide quality content at reasonable price.`} textAlign={['center','left']} />
        </VStack>
     </Stack>   
)

const About=()=>{
    return (
    <Container maxWidth={"container.lg"} padding="14" boxShadow={"lg"}>

        <Heading children ="About us" textAlign={['center', 'left']} />
        <Founder/>
        <Stack m="8" direction={['column', 'row']} alignItems="center">
            <Text fontFamily={'cursive'} m="8" textAlign={['center','left']}>
                We are video streaming platform  with some  premium  courses  available only for premium users.
            </Text>

            <Link to="/subscribe" >
                <Button variant={"ghost"} colorScheme="yellow" >
                    Checkout plans
                </Button>
            </Link>
        </Stack>

        <VideoPlayer/>

        <TandC termsAndCondition={termsAndCondition} />
        <HStack my="4" p={"4"} >
            <RiSecurePaymentFill />
            <Heading size={'xs'} children={"Payment is secured by RazorPay"} fontFamily="sans-serif" textTransform={'uppercase'}
            />
        </HStack>

    </Container>
    );
}
export default About;