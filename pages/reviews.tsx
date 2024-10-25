import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function(){

  useEffect(() => {
    AOS.init();
  },[])
  
  return (
    <>
      <div className="flex justify-between mx-96 mt-10">
        <div data-aos="fade-down-right" 
        className="border border-red-600 w-44 h-64"> 
        오른쪽 
        </div>

        <div data-aos="fade-down-left" 
        className="border border-red-600 w-44 h-64"> 
        왼쪽 
        </div>
      </div>
    </>
  )
}

// https://animate.style/  여기에서 스타일 선택