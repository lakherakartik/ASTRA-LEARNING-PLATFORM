import { Box, HStack, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import {TiSocialYoutubeCircular,TiSocialLinkedinCircular} from "react-icons/ti"
import {DiGithub} from "react-icons/di"
 
const Footer = ()=>{

    return <Box padding={"2"} bg="yellow.500" minH={'5vh'}>
        <Stack direction={["column", "center"]}>
            <VStack alignItems={["center", "flex-start"]} width="full" >


            </VStack>
            <HStack spacing={["2","10"]} justifyContent="center" color={'black'} fontSize="30">
                <a href="https://youtube.com/astralearningplatform" target={'_blank'} rel={"noreferrer"}>
                    <TiSocialLinkedinCircular/>
                </a>
                <a href="https://instagram.com/kartiklakhera"  target={'_blank'} rel={"noreferrer"}>
                    <TiSocialYoutubeCircular/>
                </a>
                <a href="https://github.com/lakherakartik" target={'_blank'} rel={"noreferrer"}>
                    <DiGithub/>
                </a>
                {/* <Heading fontSize={"1rem"} children="All right reserved" color={''} /> */}

            </HStack>
        </Stack>
        
    </Box>
}
export default Footer;