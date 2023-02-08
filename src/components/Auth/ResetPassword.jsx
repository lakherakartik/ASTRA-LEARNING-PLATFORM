import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const ResetPassword =()=>{
    const [password,setPassword] = useState("");
    
    return (
    <Container py={'16'} h="90vh">
        <form action="">
            <Heading children="Reset Password"fontFamily={'cursive'} my="16" textAlign={["center"]}
            />

            <VStack spacing={"8"}>
            <Input required value={password} onChange={e=>setPassword(e.target.value)}
                placeholder="New Password" type={'password'} focusBorderColor="yellow.500"
                />
            <Button type="submit" width={"full"} colorScheme="yellow" >Reset Password Now!</Button>
            </VStack>


        </form>
    </Container>
    )
}
export default ResetPassword;