import React from "react";
import { HStack, VStack, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";


export default function() {

    const router = useRouter();
    const goToSubscription = ()=>{
        router.push('/subscription')
    }
    const goToMealPlan = ()=>{
        router.push('/meal-plan')
    }
    const goToReviews = ()=>{
        router.push('/reviews')
    }

    const handleClick = (e) => {
      const page = e.target.innerText.toLowerCase().replace(/\s+/g, '-'); // 공백 찾음 \s  + 로 공백 다 찾아서 묶음 /g, '-' 으로 그 묶은걸 다 - (하이픈) 으로 바꿈
      router.push(`/${page}`);
    };
    
    return (
        <>
        <div className="hidden lg:block">
            <HStack className="flex justify-center h-80 bg-blue-300 mt-16 pt-10">
                <div className='w-60 h-full pt-4'>
                    <VStack className="font-semibold">
                        <div onClick={goToSubscription} className="hover:text-khaki cursor-pointer">Meal Kit Subscriptions</div>
                        <div onClick={goToMealPlan} className="hover:text-khaki cursor-pointer">Weekly Meal Plans</div>
                        <div onClick={goToReviews} className="hover:text-khaki cursor-pointer">Customer Reviews</div>
                    </VStack>
                </div>
                <div className='w-60 h-full pt-4 mx-52'>
                    <VStack className="font-semibold">
                        <div onClick={handleClick} className="hover:text-khaki cursor-pointer">FAQ</div>
                        <div onClick={handleClick} className="hover:text-khaki cursor-pointer">Privacy Policy</div>
                        <div onClick={handleClick} className="hover:text-khaki cursor-pointer">Contact Us</div>
                        <div>(646) 891-4349</div>
                    </VStack>
                </div>
                <div className='w-60 h-full pt-4'>
                    <VStack className="font-semibold">
                        <div className="text-lg">Stay Connected!</div>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferred" className="hover:text-khaki cursor-pointer">Instagram</a>
                        <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Dko_KR" target="_blank" rel="noopener noreferred" className="hover:text-khaki cursor-pointer">Facebook</a>
                    </VStack>
                </div>
            </HStack>
        </div>
            <div className="block lg:hidden">
                <HStack className="flex justify-center h-36 bg-blue-300 mt-16 pt-4">
                    <div className='w-60 h-full pt-4'>
                        <VStack className="font-semibold">
                            <div className="text-lg">Stay Connected!</div>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferred" className="hover:text-khaki cursor-pointer">Instagram</a>
                            <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Dko_KR" target="_blank" rel="noopener noreferred" className="hover:text-khaki cursor-pointer">Facebook</a>
                            
                        </VStack>
                    </div>
                </HStack>
            </div>

    </>

    );
}
