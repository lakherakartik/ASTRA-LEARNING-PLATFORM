import { Button, Container, Heading, HStack, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Course = ({views,title,imageSrc, id,addToPlaylistHandler,creator,description,lectureCount })=>{
    return (
        <VStack className="course" alignItems={["center","flex-start"]}>
            <Image src={imageSrc} boxSize="60" objectFit={"contain"} />
            <Heading textAlign={["center","left"]} maxW="200px" fontFamily={"sans-serif"} noOfLines={3} children={title} size={"sm"}
            />
            <Text noOfLines={2} children={description} />

            <HStack>
            <Text noOfLines={2} size="xs" textTransform="uppercase" children={"Creator - "} />
            <Text noOfLines={2} fontFamily={"body"} fontWeight={"light"}  textTransform="uppercase" children={creator} />
            </HStack>

            <Heading textAlign={"center"} size="xs" children={`Lecture- ${lectureCount}`} textTransform="uppercase" />
            <Heading textAlign={"center"} size="xs" fontWeight={"light"} children={`Views- ${views}`} textTransform="uppercase" />

            <Stack direction={["column", "row"]} alignItems="center">
            <Link to={`/courses/${id}`}>
            <Button colorScheme={'yellow'}>Watch Now</Button>
            </Link>
            <Button colorScheme={'yellow'} variant={"ghost"} onClick={()=>addToPlaylistHandler(id)} >Add to Playlist</Button>

            </Stack>
        </VStack>
    )
}

const Courses = ()=>{
    const [ keyword, setKeyword]= useState('')
    const [category, setCategory]= useState('')
    const addToPlaylistHandler = ()=>{
        console.log("added to playlist");
    }

    const categories = [
        "Web Development", 
        "Artificial Intelligence", 
        "Data structure & Algo",
        "App Development",
        "Python",
        "Java ",
        "C++",
        "C"
    ]

    return (<Container minH={"95vh"} maxW="container.lg" paddingY={'8'}>

        <Heading fontFamily={'cursive'} textAlign={['center','flex-start']} children="OUR COURSES" margin={'8'} />

        <Input value={keyword} 
        onChange={(e)=>setKeyword(e.target.value)} 
        placeholder="Search a Course..." 
        type={"text"} 
        focusBorderColor="yellow.500"
        />

        <HStack overflowX={'auto'} paddingY="8" 
        css={{'&::-webkit-scrollbar': {
            display:"none",
        }}
        }>
          {  
            categories.map((item,index)=>(
                <Button key={index} onClick={(()=>setCategory(item))} minW={'60'}>
                <Text children={item}/>
                </Button>
            ))
}
        </HStack>

        <Stack direction={["column", "row"]}
        flexWrap="wrap"
        justifyContent={["flex-start", "space-evenly"]}
        alignItems={["center", "flex-start"]}
        >
        <Course 
        title={"Html Course"}
        description={"An amazing Journey of Html5"}
        views={"23"}
        imageSrc={'https://i.ytimg.com/vi/pQN-pnXPaVg/maxresdefault.jpg'}
        id="sample"
        creator={"Kartik lakhera"}
        lectureCount={5}
        addToPlaylistHandler={addToPlaylistHandler}
        
        />

        </Stack>

    </Container>
    )
};

export default Courses;
