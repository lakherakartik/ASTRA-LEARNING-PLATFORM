import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";
import {ColorModeSwitcher} from '../../../ColorModeSwitcher';
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from "react-icons/ri"
import { Link } from "react-router-dom";

const LinkButton = ({url="/", title="Home",onClose})=>
(
    <Link onClick={onClose}  to={url}>
    <Button variant={'ghost'}>{title}</Button>
</Link>
)

const Header = () => {
    
    const {isOpen,onOpen,onClose} =useDisclosure()

const isAuthenticated=true;
const user={
    role: 'admin',
};

const logoutHandler =()=>{
    console.log("logout hogya")
    onClose();
}
    return( <>
    
    <ColorModeSwitcher  zIndex={"overlay"} />

    <Button onClick={onOpen}
            colorScheme={"yellow"} 
            width="12" 
            height={'12'} 
            zIndex={"overlay"}
            rounded="full" 
            position={"fixed"} 
            top="6" 
            left="6">
        <RiMenu5Fill />
    </Button>

    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>

        <DrawerOverlay />
        <DrawerContent>
            <DrawerHeader borderBottomWidth={"1px"}>
                ASTRA LEARNING PLATFORM
            </DrawerHeader>

            <DrawerBody>
<VStack spacing={"4"} alignItems="flex-start">

<LinkButton onClose={onClose} url="/" title="Home" />
<LinkButton onClose={onClose} url="/courses" title="Courses" />
<LinkButton onClose={onClose} url="/contact" title="Contact us" />
<LinkButton onClose={onClose} url="/about" title="About us" />
<LinkButton onClose={onClose} url="/request" title="Career" />

        <HStack justifyContent={"space-evenly"} position="absolute" bottom={"2rem"} width="80%">
{isAuthenticated?(
    <>
    <VStack>
    <HStack>
    <Link onClick={onClose} to="/profile">
    <Button variant={'ghost'} colorScheme={"yellow"}>Profile</Button>
    <Button variant={'ghost'} onClick={logoutHandler} >
        <RiLogoutBoxLine />
        Logout</Button>
    </Link>
    </HStack>
{
    user && user.role==="admin" && <Link onClick={onClose}  to="/admin/dashboard">
        <Button colorScheme={"purple"} variant="ghost"  >
            <RiDashboardFill style={{margin:"4px"}} /> 
            Dashboard
        </Button>
    </Link>
}

    </VStack>
    </>
):(
    <>
    <Link onClick={onClose}  to="/login">
    <Button colorScheme={"yellow"}>Login</Button>
    </Link>
    <p>OR</p>
    <Link onClick={onClose}  to="/register">
    <Button colorScheme={"yellow"}>Sign Up</Button>
    </Link>
    </>

)}
        </HStack>
</VStack>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
    )
}
export default Header;

