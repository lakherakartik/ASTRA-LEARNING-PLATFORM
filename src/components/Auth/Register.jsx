import { Avatar, Box, Button, Container, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const fileUploadCss ={
    cursor:"pointer", marginLeft:"-5%",
    width:"110%",
    border:"none",
    color:"#ECC94B",
    backGroundColor:"white"
};

const fileUploadStyle ={
    "&::file-selector-botton":fileUploadCss};

const Register = ()=>{

    const [email,setEmail] = useState("");
    const [name,setName]=useState("");
    const [password,setPassword] = useState("");
    const [imagePrev,setImagePrev] = useState("");
    const [image,setImage] = useState("");


    const changeImageHandler= e =>{
        const file =e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend =()=>{
             setImagePrev(reader.result);
             setImage(file);
        }
    }


    return <Container h={'95vh'}>
        <VStack h={'full'} justifyContent="center" marginTop={'11vh'} spacing={'5'}>
            <Heading fontFamily={'cursive'}  children={"Register to Astra !"} />

            <form style={{width: "100%"}}>
                
                <Box my="0" display={'flex'} justifyContent="center">
                    <Avatar src={imagePrev} size={'2xl'} />
                </Box>

                <Box my={'2'}>
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
                <FormLabel htmlFor="password" children="Password" />
                <Input required id="password" value={password} onChange={e=>setPassword(e.target.value)}
                placeholder="Set Your Password" type={'password'} focusBorderColor="yellow.500"
                />
                </Box>

                <Box my={'2'}>
                <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
                <Input accept="image/*" required value={image} id="chooseAvatar" type={'file'} focusBorderColor="yellow.500" css={fileUploadStyle}
                 onChange={changeImageHandler}
                
                />
                </Box>

                <Button my="2" colorScheme={'yellow'} type="submit">
                    Sign Up
                </Button>

                <Box my="2">
                    Already Signed Up? <Link to="/login"><Button colorScheme={"yellow"} variant="link">Login</Button>{" "} here</Link>
                </Box>

            </form>
             
        </VStack>
    </Container>
}
export default Register;