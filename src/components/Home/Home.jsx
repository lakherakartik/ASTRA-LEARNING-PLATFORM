import React from "react";
import {Box, Button, Heading, Image, Stack, Text, VStack} from "@chakra-ui/react"
import "./Home.css"
import { Link } from "react-router-dom";
import vg from "../../assets/images/bg.png"
// import {CgGoogle,CgYoutube} from "react-icons/cg"
// import {SiLinkedin} from "react-icons/si" 
import introVideo from "../../assets/videos/intro.mp4"

const Home = ()=>{
    return <section className="home">
        <div className="container">
            {/* stack ek div hai jiski display flex hoti h */}
            <Stack 
             direction={["column","row"]}
             height="100%"
             justifyContent={["center","space-between"]}
             alignItems='center'
             spacing={["18","56"]}
            >
            {/* vstack mtlb bidefault vertical direction */}

            <VStack width={"full"} alignItems={['center', 'flex-end']} spacing="4" m="1" >
             <Heading textAlign={['center','left']} children="ASTRA LEARNING PLATFORM" size={'2xl'} />
             {/* <Heading children="LEARN FROM THE ASTRAS" size={'2xl'} /> */}
             {/* <Text children="Find Valuable content at reasonable price" /> */}
             <Text textAlign={['center','left']} fontFamily="cursive"  className="line" children="Providing online/offline education facilities" size={'1xl'} />
             
               <Link to="/courses">
                   <Button size={"lg"} colorScheme="yellow">
                       Explore Now
                   </Button>
               </Link>
             </VStack>

             <Image 
             className="vector-graphics"
             boxSize={"md"} 
             src={vg} 
             objectFit={"contain"}/>
            </Stack>
        </div>

        <Box padding={'1'} bg="black.400">
            {/* <Heading 
                textAlign={"center"}
                fontFamily=""
                // color={'yellow.400'}
                children="< ABOUT US />"
                fontSize={"1.5rem"}
                /> */}
            {/* <HStack className="brandsBanner" justifyContent={'space-evenly'} marginTop="4">
                <CgGoogle/>  
                <CgYoutube/>
                <SiLinkedin/>              
            </HStack> */}
        </Box>

        <div className="container2">
            <video  controls controlsList="nodownload nofullscreen noremoteplayback" 
            disablePictureInPicture
            disableRemotePlayback
            src={introVideo}></video>
        </div>
    </section>
};
export default Home;