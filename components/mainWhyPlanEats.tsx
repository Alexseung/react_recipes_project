import React from "react";
import {HStack, VStack, Box} from '@chakra-ui/react'

export default function(){
    return <>
        <div className='phone:my-5 my-20 flex justify-center text-4xl text-blue-900 font-bold'>Why PlanEats</div>
        <HStack className="phone:mb-0 flex justify-center my-10">
            <div className="w-96 max-sm:h-60 h-80 rounded-xl mx-8">
                <img src="/comfortfood.jpg" alt="mainBodyCard-1" className="rounded-xl mb-4"/>
                <p className="text-lg mb-4 font-medium">Easy Recipe</p>
                <p className="hidden sm:block mb-10 font-normal">Explore simple recipes that anyone can whip up in no time</p>
            </div>
            <div className="w-96 max-sm:h-60 h-80 rounded-xl mx-8">~
                <img src="/nutrition.jpg" alt="mainBodyCard-1" className="rounded-xl mb-4"/>
                <p className="text-lg mb-4 font-medium">Balanced Diet</p>
                <p className="hidden sm:block mb-10 font-normal">Explore simple recipes that anyone can whip up in no time</p>
            </div>
            <div className="w-96 max-sm:h-60 h-80 rounded-xl mx-8">
                <img src="/mealPlan.jpg" alt="mainBodyCard-1" className="rounded-xl mb-4"/>
                <p className="text-lg mb-4 font-medium">Make Your Meal Plan</p>
                <p className="hidden sm:block mb-10 font-normal">Explore simple recipes that anyone can whip up in no time</p>
            </div>
        </HStack>
    </>
}