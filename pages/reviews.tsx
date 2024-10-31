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
      <div className="flex justify-between mx-96 px-32 mt-10">
        <div data-aos="fade-down-right" 
          className="border border-red-600 w-52 h-64"> 
        오른쪽 내용
        </div>

        <div className="border border-black w-56 h-64 mt-10">
          중간 이미지
        </div>

        <div data-aos="fade-down-left" 
          className="border border-red-600 w-52 h-64"> 
        왼쪽 내용
        </div>
      </div>
      {/* 두번째 */}
      <div className="flex justify-between mx-96 px-32 mt-10">
        <div data-aos="fade-down-right" 
          className="border border-red-600 w-52 h-64"> 
        오른쪽 내용
        </div>

        <div className="border border-black w-56 h-64 mt-10">
          중간 이미지
        </div>

        <div data-aos="fade-down-left" 
          className="border border-red-600 w-52 h-64"> 
        왼쪽 내용
        </div>
      </div>
      {/* 세번째 */}
      <div className="flex justify-between mx-96 px-32 mt-10">
        <div data-aos="fade-down-right" 
          className="border border-red-600 w-52 h-64"> 
        오른쪽 내용
        </div>

        <div className="border border-black w-56 h-64 mt-10">
          중간 이미지
        </div>

        <div data-aos="fade-down-left" 
          className="border border-red-600 w-52 h-64"> 
        왼쪽 내용
        </div>
      </div>
      {/* 네번째 */}
      <div className="flex justify-between mx-96 px-32 mt-10">
        <div data-aos="fade-down-right" 
          className="border border-red-600 w-52 h-64"> 
        오른쪽 내용
        </div>

        <div className="border border-black w-56 h-64 mt-10">
          중간 이미지
        </div>

        <div data-aos="fade-down-left" 
          className="border border-red-600 w-52 h-64"> 
        왼쪽 내용
        </div>
      </div>
    </>
  )
}

// https://animate.style/  여기에서 스타일 선택