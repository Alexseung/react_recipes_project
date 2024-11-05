import React from "react";
import { HStack, VStack, Box } from "@chakra-ui/react";

export default function() {
    return (
        <>
        <div className="hidden lg:block">
            <HStack className="flex justify-center h-80 bg-blue-300 mt-16 pt-10">
                <div className='w-60 h-full pt-4'>
                    <VStack className="font-semibold">
                        <div>Recipes & Cooking Tips</div>
                        <div>Meal Kit Subscriptions</div>
                        <div>Weekly Meal Plans</div>
                        <div>Customer Reviews</div>
                    </VStack>
                </div>
                <div className='w-60 h-full pt-4 mx-52'>
                    <VStack className="font-semibold">
                        <div>FAQ</div>
                        <div>Help Center</div>
                        <div>Contact Us</div>
                        <div>Privacy Policy</div>
                        <div>Terms & Conditions</div>
                        <div>Manage Your Account</div>
                        <div>(646) 891-4349</div>
                    </VStack>
                </div>
                <div className='w-60 h-full pt-4'>
                    <VStack className="font-semibold">
                        <div className="text-lg">Stay Connected!</div>
                        <div className="hover:text-khaki cursor-pointer">Instagram</div>
                        <div className="hover:text-khaki cursor-pointer">Facebook</div>
                    </VStack>
                </div>
            </HStack>
        </div>
            <div className="block lg:hidden">
                <HStack className="flex justify-center h-36 bg-blue-300 mt-16 pt-4">
                    <div className='w-60 h-full pt-4'>
                        <VStack className="font-semibold">
                            <div className="text-lg">Stay Connected!</div>
                            <div className="hover:text-khaki cursor-pointer">Instagram</div>
                            <div className="hover:text-khaki cursor-pointer">Facebook</div>
                        </VStack>
                    </div>
                </HStack>
            </div>

    </>

    );
}
