import React from "react";
import {HStack, VStack, Box} from '@chakra-ui/react'

export default function(){
    return <>
        <div className='my-20 flex justify-center text-4xl text-blue-900 font-bold'>Why stieName</div>
        <HStack className="flex justify-center my-10">
            <div className="w-96 h-80 rounded-xl mx-8">
                <img src="/comfortfood.jpg" alt="mainBodyCard-1" className="rounded-xl mb-4"/>
                <p className="text-lg mb-4">Easy Recipe</p>
                <p className="mb-10">Explore simple recipes that anyone can whip up in no time</p>
            </div>
            <div className="w-96 h-80 rounded-xl mx-8">
                <img src="/nutrition.jpg" alt="mainBodyCard-1" className="rounded-xl mb-4"/>
                <p className="text-lg mb-4">Balanced Diet</p>
                <p className="mb-10">Explore simple recipes that anyone can whip up in no time</p>
            </div>
            <div className="w-96 h-80 rounded-xl mx-8">
                <img src="/mealPlan.jpg" alt="mainBodyCard-1" className="rounded-xl mb-4"/>
                <p className="text-lg mb-4">Make Your Meal Plan</p>
                <p className="mb-10">Explore simple recipes that anyone can whip up in no time</p>
            </div>
        </HStack>
    </>
}