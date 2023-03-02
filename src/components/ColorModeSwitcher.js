import React from "react";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import {FaMoon,FaSun} from 'react-icons/fa';
export const ColorModeSwitcher = props => {
    const { toggleColorMode } = useColorMode();
    const text = useColorModeValue('dark', 'ligth');
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
    return (<IconButton
        size='md'
        fontSize='lg'
        aria-label={`Switch to ${text} made`}
        variant='ghost'
        color='current' ml='2'
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
    {...props} />
    
)}