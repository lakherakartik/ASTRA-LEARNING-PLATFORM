import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {
    const [oldPassword, setNewPassword] =useState('')
    const [newPassword, setOldPassword] = useState('')
  return (
    <Container py="16" minH="90vh">
        <form>
            <Heading children="Change Password" my="16" textAlign={['center']} textTransform={'uppercase'} />
            <VStack spacing={'8'} >
            <Input required id="password" value={oldPassword} onChange={e=>setOldPassword(e.target.value)} placeholder="Enter old Password" type={'password'} focusBorderColor="yellow.500" />
            <Input required id="password" value={newPassword} onChange={e=>setNewPassword(e.target.value)} placeholder="Enter new Password" type={'password'} focusBorderColor="yellow.500" />
            <Button w="full" colorScheme={'yellow'} type="submit">Change Now</Button>
            </VStack>
        </form>
    </Container>
  )
}

export default ChangePassword