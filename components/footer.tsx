import React from "react";
import { HStack, VStack, Box } from "@chakra-ui/react";

export default function(){
    return <>
        <HStack className="flex justify-center h-80 border border-green-900 my-16">
            <div className='w-60 h-full border border-red-500 mt-16'>
                <VStack>
                    <div>recipe</div>
                    <div>subscription</div>
                    <div>meal plan</div>
                    <div>reviews</div>
                </VStack>
            </div>
            <div className='w-60 h-full border border-red-500 mt-16 mx-52'>
            <VStack>
                    <div>FAQ</div>
                    <div>Help Center</div>
                    <div>Contact</div>
                    <div>Privacy Policy</div>
                    <div>Terms & Conditions</div>
                    <div>Manage Account</div>
                    <div>(646) 891-4349</div>
                </VStack>
            </div>
            <div className='w-60 h-full border border-red-500 mt-16'>
            <VStack>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                </VStack>
            </div>
        </HStack>
    </>
}