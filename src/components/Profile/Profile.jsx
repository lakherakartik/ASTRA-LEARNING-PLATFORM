import { Avatar, Button, Container, Heading, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fileUploadCss } from "../Auth/Register";

const Profile=()=>{
  const user ={
    name:"Kartik lakhera",
    email:"Kartik@gmail.com",
    createdAt:String(new Date().toISOString()),
    role:'user',
    subscription:{
      status: "nactive",
    },
    playlist:[{
      course:"idhogi",
      poster:"https://i.ytimg.com/vi/pQN-pnXPaVg/maxresdefault.jpg",
    }]
  }
const removeFromPlaylistHandler=(id)=>{
  console.log(id)
}
const changeImageSubmitHandler=(e,image)=>{
  e.preventDefault();
  console.log(image)
};

const {isOpen,onClose,onOpen}= useDisclosure();

    return (
      <Container minH={'95vh'} maxW="container.lg" py="8">
              <Heading children="Profile" m="8" textTransform={'uppercase'} />
              <Stack
                justifyContent={'flex-start'}
                direction={['column', 'row']}
                alignItems={'center'}
                spacing={['8', '16']}
                padding="8"
              >
                <VStack>
                   <Avatar boxSize={'48'} />
                   <Button onClick={onOpen} colorScheme={'yellow'} variant="ghost">
                   Change Photo
                   </Button>
                </VStack>
                  
                <VStack spacing={"4"} alignItems={["center","flex-start"]}>
                    <HStack>
                      <Text children="Name" fontWeight={'bold'} />
                      <Text children={user.name} />
                    </HStack>
                    <HStack>
                      <Text children="Email" fontWeight={'bold'} />
                      <Text children={user.email} />
                    </HStack>
                    <HStack>
                      <Text children="Created at" fontWeight={'bold'} />
                      <Text children={user.createdAt.split("T")[0]} />
                    </HStack>

                        {/* only for admin user nhi ho tab dikhao ye stack */}
                        { 
                        user.role !=="admin" &&
                          <HStack>
                          <Text children="Subscription" fontWeight={"bold"} />
                          {user.subscription.status ==="active"?(
                            <Button color={'yellow.400'}>Cancel Subscription</Button>
                          ):(
                            <Link to="/subscribe">
                              <Button colorScheme={"yellow"}>Subscribe</Button>
                            </Link>
                          )
                          }
                        </HStack>
                          }
                  <Stack  direction={['column', 'row']}
                   alignItems={'center'}>
                    <Link to="/updateprofile">
                      <Button>Update Profile</Button>
                    </Link>
                    <Link to="/change password">
                      <Button>Change Password</Button>
                    </Link>
                  </Stack>

                </VStack>
              </Stack>

              <Heading children="Playlist" size={"md"}  />
              {
                user.playlist.length >0 &&(
                  <Stack flexWrap={'wrap'} direction={['column', 'row']} alignItems={'center'} p="4">
                      {
                        user.playlist.map((element)=>(
                          <VStack width={'48'} m='2' key={element.course}>
                              <Image boxSize={'full'} objectFit="contain" src={element.poster} />
                              <HStack>
                                <Link to={`/course/${element.course}`} >
                                  <Button variant={'ghost'} color='yellow.400'>Watch Now</Button>
                                </Link>
                                <Button onClick={()=>removeFromPlaylistHandler(element.course)}>
                                  del
                                </Button>
                              </HStack>
                          </VStack>
                        ))
                      }
                  </Stack>
                )}

              <ChangePhotoBox changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose} />

      </Container>
    );
}
export default Profile;

function ChangePhotoBox ({isOpen,onClose,changeImageSubmitHandler}){

  const [ image,setImage ]= useState("");
  const [ imagePrev,setImagePrev ] = useState("");

  const changeImage= e =>{
    const file =e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend =()=>{
         setImagePrev(reader.result);
         setImage(file);
    }
  }

  const closeHandler=()=>{
    onClose();
    setImagePrev("");
    setImage("")
  }


  return(
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={"blur(10px)"} />
      <ModalContent>
        <ModalHeader>Change Avatar</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <Container>
            <form onSubmit={(e)=>changeImageSubmitHandler(e, image)}>
              <VStack spacing={'8'}>
                {imagePrev && <Avatar src={imagePrev} boxSize={'48'} />
}
                <Input type={'file'} css={{"&::file-selector-button":fileUploadCss}} onChange={changeImage} />
                <Button width={'full'} colorScheme={'yellow'} type="submit">Change</Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
 <ModalFooter>
  <Button mr="3" onClick={closeHandler} >Cancel</Button>
</ModalFooter>       
      </ModalContent>
    </Modal>
  )
}