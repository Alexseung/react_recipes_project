import React from 'react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

export default function(){
    return <>
            <details className='my-5 ml-10'>
                <summary className='font-semibold text-2xl cursor-pointer'>What is a meal kit?</summary>
                <p className='m-3 text-lg border-b-2 border-gray-300'>A meal kit is a pre-portioned collection of ingredients and recipes that make cooking at home easy and convenient. It includes everything you need to prepare a delicious meal without the hassle of grocery shopping.</p>
            </details>

            <details className='mb-5 ml-10'>
                <summary className='font-semibold text-2xl cursor-pointer'>Can I choose specific meals for my meal plan?</summary>
                <p className='m-3 text-lg border-b-2 border-gray-300'>Yes, you can customize your meal plan by selecting meals from our weekly menu. We offer a variety of options to fit your dietary preferences and needs.</p>
            </details>

            <details className='mb-5 ml-10'>
                <summary className='font-semibold text-2xl cursor-pointer'>Are the meal kits suitable for families?</summary>
                <p className='m-3 text-lg border-b-2 border-gray-300'>Yes, our meal kits are designed to serve a variety of portion sizes, including family-friendly options. You can select kits that serve two or more people based on your family size.</p>
            </details>

            <details className='mb-5 ml-10'>
                <summary className='font-semibold text-2xl cursor-pointer'>What if I have allergies or dietary restrictions?</summary>
                <p className='m-3 text-lg border-b-2 border-gray-300'>We understand the importance of dietary needs, and we offer options for various dietary restrictions. You can filter meals based on your allergies or preferences, such as gluten-free, vegetarian, or dairy-free.</p>
            </details>



            {/* <Accordion allowToggle allowMultiple>
                <AccordionItem>
                    <AccordionButton>
                    What is a meal kit?
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                    A meal kit is a pre-portioned collection of ingredients and recipes that make cooking at home easy and convenient. It includes everything you need to prepare a delicious meal without the hassle of grocery shopping.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                    Can I choose specific meals for my meal plan?
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                    Yes, you can customize your meal plan by selecting meals from our weekly menu. We offer a variety of options to fit your dietary preferences and needs.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                    Are the meal kits suitable for families?
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                    Yes, our meal kits are designed to serve a variety of portion sizes, including family-friendly options. You can select kits that serve two or more people based on your family size.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                    What if I have allergies or dietary restrictions?
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                    We understand the importance of dietary needs, and we offer options for various dietary restrictions. You can filter meals based on your allergies or preferences, such as gluten-free, vegetarian, or dairy-free.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion> */}
    </>
}