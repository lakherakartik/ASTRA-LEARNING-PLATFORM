import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {
  const [name,setNewName]=useState('')
  const [email,setNewEmail]=useState('')
  return (
    <Container py="16" minH="90vh">
    <form>
        <Heading children="Update Profile" my="16" textAlign={['center']} textTransform={'uppercase'} />
        <VStack spacing={'8'} >
        <Input  id="name" value={name} onChange={e=>setNewName(e.target.value)} placeholder="Enter New Name" type={'text'} focusBorderColor="yellow.500" />
        <Input  id="email" value={email} onChange={e=>setNewEmail(e.target.value)} placeholder="Enter New Email" type={'email'} focusBorderColor="yellow.500" />
        <Button w="full" colorScheme={'yellow'} type="submit">Update Now</Button>
        </VStack>
    </form>
</Container>

  )
}

export default UpdateProfile