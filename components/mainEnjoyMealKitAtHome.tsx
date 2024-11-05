import React from "react";
import {HStack, VStack, Box} from '@chakra-ui/react'
import { Link } from "@chakra-ui/react";

export default function(){



    return(
        <div className="sm:mt-10 lg:mt-56 pt-10 bg-khaki">
            <div className='flex justify-center text-4xl text-blue-900 font-bold'>Enjoy Your Meal Kit</div>
            <HStack className="flex justify-center mt-10">
                <div className="w-96 lg:h-80 rounded-xl mx-8">
                    <img src="/mealkit.jpg" alt="mainBodyCard-1" className="rounded-xl mb-4"/>
                </div>
                <div className="w-96 lg:h-80 rounded-xl mx-8">
                    <img src="/mealkit2.jpg" alt="mainBodyCard-1" className="rounded-xl mb-4"/>
                </div>
                <div className="w-96 lg:h-80 rounded-xl mx-8">
                    <img src="/mealkit3.jpg" alt="mainBodyCard-1" className="rounded-xl mb-4"/>
                </div>
            </HStack>
            <Link 
                href="/subscription" 
                color="blue.900"
                fontSize="3xl" 
                fontWeight="bold" 
                className="flex justify-center pb-10"
                _hover={{ transform: "scale(1.05)", transition: "transform 0.2s ease" }}
            >
                Order your meal kit
            </Link>
        </div>
    );
}