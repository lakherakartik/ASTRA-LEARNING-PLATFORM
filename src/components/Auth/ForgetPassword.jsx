import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const ForgetPassword =()=>{
    const [email,setEmail] = useState("");
    
    return (
    <Container py={'16'} h="90vh">
        <form action="">
            <Heading children="Forget Password" fontFamily={'cursive'} my="16" textAlign={["center"]}
            />

            <VStack spacing={"8"}>
            <Input required  value={email} onChange={e=>setEmail(e.target.value)}
                placeholder="astra@gmail.com" type={'email'} focusBorderColor="yellow.500"
                />
            <Button type="submit" width={"full"} colorScheme="yellow" >Send Reset Link</Button>
            </VStack>


        </form>
    </Container>
    )
}
export default ForgetPassword;