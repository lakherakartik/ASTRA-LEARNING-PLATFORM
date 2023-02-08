import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import introVideo from "../../assets/videos/intro.mp4"

const CoursePage=()=>{

    // const lectureTitle="LectureTitle";
    const [lectureNumber,setLectureNumber]=useState(0);
    const lectures=[
      {
        id:"idhogi",
        title:"Lecture-01",
        description:"dechoga",
        video:{
            url:'sss'
        }
      },
      {
        id:"idhogi2",
        title:"Lecture-02",
        description:"dechoga",
        video:{
            url:'sss'
        }
      },
      {
        id:"idhogi3",
        title:"Lecture-03",
        description:"dechoga",
        video:{
            url:'sss'
        }
      },
      {
        id:"idhogi3",
        title:"Lecture-04",
        description:"dechoga",
        video:{
            url:'sss'
        }
      },
      {
        id:"idhogi3",
        title:"Lecture-05",
        description:"dechoga",
        video:{
            url:'sss'
        }
      },
      {
        id:"idhogi3",
        title:"Lecture-06",
        description:"dechoga",
        video:{
            url:'sss'
        }
      },
      {
        id:"idhogi3",
        title:"Lecture-07",
        description:"dechoga",
        video:{
            url:'sss'
        }
      },
      {
        id:"idhogi3",
        title:"Lecture-08",
        description:"dechoga",
        video:{
            url:'sss'
        }
      },
      {
        id:"idhogi3",
        title:"Lecture-09",
        description:"dechoga",
        video:{
            url:'sss'
        }
      },
      {
        id:"idhogi3",
        title:"Lecture-10",
        description:"dechoga",
        video:{
            url:'sss'
        }
      },
      {
        id:"idhogi3",
        title:"Lecture-11",
        description:"dechoga",
        video:{
            url:'sss'
        }
      },
      {
        id:"idhogi3",
        title:"Lecture-12",
        description:"dechoga",
        video:{
            url:'sss'
        }
      },
      {
        id:"idhogi3",
        title:"Lecture-13",
        description:"dechoga",
        video:{
            url:'sss'
        }
      },
      {
        id:"idhogi3",
        title:"Lecture-14",
        description:"dechoga",
        video:{
            url:'sss'
        }
      },

    
    ]

    return (
        <Grid marginTop={'12vh'} minH={"90vh"} templateColumns={["1fr","3fr 1fr"]} >
            <Box marginLeft={'2vw'}>
            <video 
            width={'100%'} controls controlsList="nodownload noremoteplayback" 
            disablePictureInPicture
            disableRemotePlayback
            src={introVideo}></video>
            <Heading fontSize={'2xl'} children={`${lectureNumber+1}) - ${lectures[lectureNumber].title}`} m="4" />

            <Heading fontSize={'ms'} children="Description" m="4" />
            <Text fontSize={'xs'} m="4" children={lectures[lectureNumber].description} />
            </Box>

            <VStack>
                {
                    lectures.map((element,index)=>(
                        <button onClick={()=>setLectureNumber(index)} key={element.id} style={{
                            width:"100%",
                            padding:'1rem',
                            textAlign: "center",
                            margin:0,
                            borderBottom:"1px solid rgba(0,0,0,0.2)"
                        }}>
                            <Text noOfLines={1}>
                                {index+1} {element.title}
                            </Text>
                        </button>
                    ))
                }
            </VStack>
        </Grid>
    )
}
export default CoursePage;