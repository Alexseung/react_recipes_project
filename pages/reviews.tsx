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
        <div data-aos="fade-down-right" className="border bg-khaki rounded-md border-blue-300 phone:h-auto w-52 h-64 text-lg p-2">
        <div className="sm:block phone:hidden bg-blue-200 w-auto h-8 rounded-2xl">
          <p className="ml-3 font-semibold">Classic Italian Pasta</p>
        </div>
        <div className="py-1">⭐⭐⭐⭐⭐</div>
          The Classic Italian Pasta was absolutely delicious! The flavors were well-balanced, and the instructions were easy to follow.
        </div>
        <div className="w-56 h-64 mt-10">
          <img src="/Classic Italian Pasta.jpg" alt="Classic Italian Pasta" className="w-56 h-64 rounded-md sm:block phone:hidden"/>
        </div>
        <div data-aos="fade-down-left" className="border bg-khaki rounded-md border-blue-300 phone:h-auto w-52 h-64 text-lg p-2">
        <div className="sm:block phone:hidden bg-blue-200 w-auto h-8 rounded-2xl">
          <p className="ml-3 font-semibold">Korean BBQ Set</p>
        </div>
        <div className="py-1">⭐⭐⭐⭐⭐</div>
          I loved the Korean BBQ Set! It had everything I needed for a quick, tasty meal. Highly recommend for a fun cooking experience!
        </div>
      </div>

      {/* 두번째 */}
      <div className="flex justify-between sm:px-4 md:px-20 lg:px-28 2xl:mx-96 2xl:px-32 mt-10">
        <div data-aos="fade-down-right" className="border bg-khaki rounded-md border-blue-300 phone:h-auto w-52 h-64 text-lg p-2">
        <div className="sm:block phone:hidden bg-blue-200 w-auto h-8 rounded-2xl">
          <p className="ml-3 font-semibold">Buddha Bowl</p>
        </div>
        <div className="py-1">⭐⭐⭐⭐⭐</div>
          The Buddha Bowl was fresh and nutritious. Perfect for a light, healthy meal, and the portion was just right. I’d order this again.
        </div>
        <div className="w-56 h-64 mt-10">
          <img src="/Korean BBQ Set.jpg" alt="Korean BBQ Set" className="w-56 h-64 rounded-md sm:block phone:hidden"/>
        </div>
        <div data-aos="fade-down-left" className="border bg-khaki rounded-md border-blue-300 phone:h-auto w-52 h-64 text-lg p-2">
        <div className="sm:block phone:hidden bg-blue-200 w-auto h-8 rounded-2xl">
          <p className="ml-3 font-semibold">Chicken Wrap</p>
        </div>
        <div className="py-1">⭐⭐⭐⭐⭐</div>
          This Chicken Wrap was flavorful and super easy to prepare. Great for a quick lunch and very satisfying!
        </div>
      </div>

      {/* 세번째 */}
      <div className="flex justify-between sm:px-4 md:px-20 lg:px-28 2xl:mx-96 2xl:px-32 mt-10">
        <div data-aos="fade-down-right" className="border bg-khaki rounded-md border-blue-300 phone:h-auto w-52 h-64 text-lg p-2">
        <div className="sm:block phone:hidden bg-blue-200 w-auto h-8 rounded-2xl">
          <p className="ml-3 font-semibold">Mexican Taco</p>
        </div>
        <div className="py-1">⭐⭐⭐⭐⭐</div>
          The Mexican Taco kit had a great variety of toppings. It was fun to put together. Would definitely get it again!
        </div>
        <div className="w-56 h-64 mt-10">
        <img src="/Chicken Wrap.jpg" alt="Chicken Wrap" className="w-56 h-64 rounded-md sm:block phone:hidden"/>
        </div>
        <div data-aos="fade-down-left" className="border bg-khaki rounded-md border-blue-300 phone:h-auto w-52 h-64 text-lg p-2">
        <div className="sm:block phone:hidden bg-blue-200 w-auto h-8 rounded-2xl">
          <p className="ml-3 font-semibold">Sushi Roll</p>
        </div>
        <div className="py-1">⭐⭐⭐⭐⭐</div>
          The Sushi Roll kit was fantastic! Fresh ingredients, and it was easy to roll. Perfect for a date night at home.
        </div>
      </div>

      {/* 네번째 */}
      <div className="flex justify-between sm:px-4 md:px-20 lg:px-28 2xl:mx-96 2xl:px-32 mt-10">
        <div data-aos="fade-down-right" className="border bg-khaki rounded-md border-blue-300 phone:h-auto w-52 h-64 text-lg p-2">
        <div className="sm:block phone:hidden bg-blue-200 w-auto h-8 rounded-2xl">
          <p className="ml-3 font-semibold">Vegetable Stir Fry</p>
        </div>
        <div className="py-1">⭐⭐⭐⭐⭐</div>
          The Vegetable Stir Fry was so convenient. Everything was pre-cut, making it a breeze to cook up a healthy dinner!
        </div>
        <div className="w-56 h-64 mt-10">
        <img src="/Vegetable Stir Fry.jpg" alt="Vegetable Stir Fry" className="w-56 h-64 rounded-md sm:block phone:hidden"/>
        </div>
        <div data-aos="fade-down-left" className="border bg-khaki rounded-md border-blue-300 phone:h-auto w-52 h-64 text-lg p-2">
        <div className="sm:block phone:hidden bg-blue-200 w-auto h-8 rounded-2xl">
          <p className="ml-3 font-semibold">BBQ Ribs</p>
        </div>
        <div className="py-1">⭐⭐⭐⭐⭐</div>
          BBQ Ribs were tender and packed with flavor! Just needed to heat and serve. It felt like restaurant-quality at home!
        </div>
      </div>
      {/* 다섯번째 */}
      <div className="flex justify-between sm:px-4 md:px-20 lg:px-28 2xl:mx-96 2xl:px-32 mt-10">
        <div data-aos="fade-down-right" className="border bg-khaki rounded-md border-blue-300 phone:h-auto w-52 h-64 text-lg p-2">
        <div className="sm:block phone:hidden bg-blue-200 w-auto h-8 rounded-2xl">
          <p className="ml-3 font-semibold">Quinoa Salad</p>
        </div>
        <div className="py-1">⭐⭐⭐⭐⭐</div>
          The Quinoa Salad kit was very fresh, with vibrant colors and textures. It made for a tasty, quick, and healthy meal option.
        </div>
        <div className="w-56 h-64 mt-10">
          <img src="/Quinoa Salad.jpg" alt="Quinoa Salad" className="w-56 h-64 rounded-md sm:block phone:hidden"/>
        </div>
        <div data-aos="fade-down-left" className="border bg-khaki rounded-md border-blue-300 phone:h-auto w-52 h-64 text-lg p-2">
        <div className="sm:block phone:hidden bg-blue-200 w-auto h-8 rounded-2xl">
          <p className="ml-3 font-semibold">Seafood Paella</p>
        </div>
        <div className="py-1">⭐⭐⭐⭐⭐</div>
          The Seafood Paella was impressive! Rich flavors, and the seafood was fresh. It felt like a luxury meal without the hassle!
        </div>
      </div>

      {/* 여섯번째 */}
      <div className="flex justify-between sm:px-4 md:px-20 lg:px-28 2xl:mx-96 2xl:px-32 mt-10">
        <div data-aos="fade-down-right" className="border bg-khaki rounded-md border-blue-300 phone:h-auto w-52 h-64 text-lg p-2">
        <div className="sm:block phone:hidden bg-blue-200 w-auto h-8 rounded-2xl">
          <p className="ml-3 font-semibold">Classic Italian Pasta</p>
        </div>
        <div className="py-1">⭐⭐⭐⭐⭐</div>
          I tried the Classic Italian Pasta, and it was simply amazing. Quick and easy to prepare, and it tasted like a restaurant meal!
        </div>
        <div className="w-56 h-64 mt-10">
          <img src="/Classic Italian Pasta.jpg" alt="Classic Italian Pasta" className="w-56 h-64 rounded-md sm:block phone:hidden"/>
        </div>
        <div data-aos="fade-down-left" className="border bg-khaki rounded-md border-blue-300 phone:h-auto w-52 h-64 text-lg p-2">
        <div className="sm:block phone:hidden bg-blue-200 w-auto h-8 rounded-2xl">
          <p className="ml-3 font-semibold">Korean BBQ Set</p>
        </div>
        <div className="py-1">⭐⭐⭐⭐⭐</div>
          The Korean BBQ Set made a fantastic dinner. The flavors were on point, and the portions were just right. I’ll order this again!
        </div>
      </div>

      {/* 일곱번째 */}
      <div className="flex justify-between sm:px-4 md:px-20 lg:px-28 2xl:mx-96 2xl:px-32 mt-10">
        <div data-aos="fade-down-right" className="border bg-khaki rounded-md border-blue-300 phone:h-auto w-52 h-64 text-lg p-2">
        <div className="sm:block phone:hidden bg-blue-200 w-auto h-8 rounded-2xl">
          <p className="ml-3 font-semibold">Buddha Bowl</p>
        </div>
        <div className="py-1">⭐⭐⭐⭐⭐</div>
          The Buddha Bowl was so refreshing and healthy. Everything tasted super fresh, and it was a satisfying meal.
        </div>
        <div className="w-56 h-64 mt-10">
          <img src="/Buddha Bowl.jpg" alt="Buddha Bowl" className="w-56 h-64 rounded-md sm:block phone:hidden"/>
        </div>
        <div data-aos="fade-down-left" className="border bg-khaki rounded-md border-blue-300 phone:h-auto w-52 h-64 text-lg p-2">
        <div className="sm:block phone:hidden bg-blue-200 w-auto h-8 rounded-2xl">
          <p className="ml-3 font-semibold">Chicken Wrap</p>
        </div>
        <div className="py-1">⭐⭐⭐⭐⭐</div>
          Loved the Chicken Wrap! It was a perfect option for a quick lunch and had plenty of flavor.
        </div>
      </div>

      {/* 여덟번째 */}
      <div className="flex justify-between sm:px-4 md:px-20 lg:px-28 2xl:mx-96 2xl:px-32 mt-10">
        <div data-aos="fade-down-right" className="border bg-khaki rounded-md border-blue-300 phone:h-auto w-52 h-64 text-lg p-2">
        <div className="sm:block phone:hidden bg-blue-200 w-auto h-8 rounded-2xl">
          <p className="ml-3 font-semibold">Mexican Taco</p>
        </div>
        <div className="py-1">⭐⭐⭐⭐⭐</div>
          The Mexican Taco kit was so much fun to make. The ingredients were fresh, and the tacos tasted delicious!
        </div>
        <div className="w-56 h-64 mt-10">
          <img src="/Mexican Taco.jpg" alt="Mexican Taco" className="w-56 h-64 rounded-md sm:block phone:hidden"/>
        </div>
        <div data-aos="fade-down-left" className="border bg-khaki rounded-md border-blue-300 phone:h-auto w-52 h-64 text-lg p-2">
        <div className="sm:block phone:hidden bg-blue-200 w-auto h-8 rounded-2xl">
          <p className="ml-3 font-semibold">Sushi Roll</p>
        </div>
        <div className="py-1">⭐⭐⭐⭐⭐</div>
          The Sushi Roll kit was amazing! High-quality ingredients and easy to assemble. Perfect for a fun night in.
        </div>
      </div>
    </>
  )
}


// https://animate.style/  여기에서 스타일 선택