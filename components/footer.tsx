import React from "react";
import { HStack, VStack, Box } from "@chakra-ui/react";

export default function(){
    return <>
        <HStack className="flex justify-center">
            <div className='w-60 h-80 border border-red-500 mt-16'>1</div>
            <div className='w-60 h-80 border border-red-500 mt-16 mx-52'>2</div>
            <div className='w-60 h-80 border border-red-500 mt-16'>3</div>
        </HStack>
    </>
}