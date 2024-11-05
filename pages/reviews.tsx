import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function(){

  useEffect(() => {
    AOS.init();
  },[])

  return (
    <>
      {/* 첫번째 */}
      <div className="flex justify-between sm:px-4 md:px-20 lg:px-28 2xl:mx-96 2xl:px-32 mt-10">
        <div data-aos="fade-down-right" className="border bg-khaki rounded-md border-blue-300 w-52 h-64 text-lg p-2">
          The Classic Italian Pasta was absolutely delicious! The flavors were well-balanced, and the instructions were easy to follow. Great value for the price!
        </div>
        <div className="border border-black w-56 h-64 mt-10">
          <img src="/Classic Italian Pasta.jpg" alt="Classic Italian Pasta" className="w-56 h-64"/>
        </div>
        <div data-aos="fade-down-left" className="border bg-khaki rounded-md border-blue-300 w-52 h-64 text-lg p-2">
          I loved the Korean BBQ Set! It had everything I needed for a quick, tasty meal. Highly recommend for a fun cooking experience!
        </div>
      </div>

      {/* 두번째 */}
      <div className="flex justify-between sm:px-4 md:px-20 lg:px-28 2xl:mx-96 2xl:px-32 mt-10">
        <div data-aos="fade-down-right" className="border bg-khaki rounded-md border-blue-300 w-52 h-64 text-lg p-2">
          The Buddha Bowl was fresh and nutritious. Perfect for a light, healthy meal, and the portion was just right. I’d order this again.
        </div>
        <div className="border border-black w-56 h-64 mt-10">
          <img src="/Korean BBQ Set.jpg" alt="Korean BBQ Set" className="w-56 h-64"/>
        </div>
        <div data-aos="fade-down-left" className="border bg-khaki rounded-md border-blue-300 w-52 h-64 text-lg p-2">
          This Chicken Wrap was flavorful and super easy to prepare. Great for a quick lunch and very satisfying!
        </div>
      </div>

      {/* 세번째 */}
      <div className="flex justify-between sm:px-4 md:px-20 lg:px-28 2xl:mx-96 2xl:px-32 mt-10">
        <div data-aos="fade-down-right" className="border bg-khaki rounded-md border-blue-300 w-52 h-64 text-lg p-2">
          The Mexican Taco kit had a great variety of toppings. It was fun to put together, and the taste was authentic. Would definitely get it again!
        </div>
        <div className="border border-black w-56 h-64 mt-10">
        <img src="/Chicken Wrap.jpg" alt="Chicken Wrap" className="w-56 h-64"/>
        </div>
        <div data-aos="fade-down-left" className="border bg-khaki rounded-md border-blue-300 w-52 h-64 text-lg p-2">
          The Sushi Roll kit was fantastic! Fresh ingredients, and it was easy to roll. Perfect for a date night at home.
        </div>
      </div>

      {/* 네번째 */}
      <div className="flex justify-between sm:px-4 md:px-20 lg:px-28 2xl:mx-96 2xl:px-32 mt-10">
        <div data-aos="fade-down-right" className="border bg-khaki rounded-md border-blue-300 w-52 h-64 text-lg p-2">
          The Vegetable Stir Fry was so convenient. Everything was pre-cut, making it a breeze to cook up a healthy dinner!
        </div>
        <div className="border border-black w-56 h-64 mt-10">
        <img src="/Vegetable Stir Fry.jpg" alt="Vegetable Stir Fry" className="w-56 h-64"/>
        </div>
        <div data-aos="fade-down-left" className="border bg-khaki rounded-md border-blue-300 w-52 h-64 text-lg p-2">
          BBQ Ribs were tender and packed with flavor! Just needed to heat and serve. It felt like restaurant-quality at home!
        </div>
      </div>
    </>
  )
}


// https://animate.style/  여기에서 스타일 선택