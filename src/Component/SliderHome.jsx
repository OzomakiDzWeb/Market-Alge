import React, { useState } from "react";
import {AiFillLeftCircle,AiFillRightCircle} from 'react-icons/ai'
export default function SliderHome() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [dataSlider] = useState([
    {
      id: 1,
      title: "Eco Market",
      "number-items": 4,
      img: "/src/assets/img/brand-1.png"
    },
    {
      id: 2,
      title: "Shop Grocery",
      "number-items": 4,
      img: "/src/assets/img/brand-2.png",
    },
    {
      id: 3,
      title: "Vegan Market",
      "number-items": 4,
      img: "/src/assets/img/brand-3.png",
    },
    {
      id: 4,
      title: "Family",
      "number-items": 4,
      img: "/src/assets/img/brand-4.png",
    },
    {
      id: 5,
      title: "Bio Market",
      "number-items": 4,
      img:"/src/assets/img//brand-5.png",
    },
    {
      id: 6,
      title: "Farmers Market",
      "number-items": 4,
      img: "/src/assets/img/brand-6.png",
    },
    {
      id: 7,
      title: "Green Basket",
      "number-items": 4,
      img: "/src/assets/img/brand-7.png",
    },
    {
      id: 8,
      title: "100% Organic",
      "number-items": 4,
      img: "/src/assets/img/brand-8.png",
    },
    {
      id: 9,
      title: "The Green",
      "number-items": 4,
      img: "/src/assets/img/brand-9.png",
    },
    {
      id: 10,
      title: "Health Store",
      "number-items": 10,
      img: "/src/assets/img/brand-10.png",
    },
  ]);
  const angleRight = () => {
    if (slideIndex <= dataSlider.length / 2 ) {
      setSlideIndex(slideIndex + 1);
    }
    console.log(slideIndex);
  };
  const angleLeft = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
     console.log(slideIndex);
  };
  return (
    <section className="relative h-[200px] w-full overflow-x-hidden my-4  ">
      <div className=" absolute w-screen px-10 z-30 flex justify-between top-[50%] text-orang left-0">
        <AiFillLeftCircle
        size={30}
        className={`${slideIndex=='0'?'invisible':'visible'} hover:scale-105 duration-150 transition-all cursor-pointer hover:text-green`}
        onClick={angleLeft}
        ></AiFillLeftCircle>
        <AiFillRightCircle
         size={30}
         className={`${slideIndex=='6'?'invisible':'visible'} hover:scale-105 duration-150 transition-all cursor-pointer hover:text-green`}
          onClick={angleRight}
        ></AiFillRightCircle>
      </div>
      <div className="w-full relative">
         <div className={`transition-all duration-150  absolute left-10 flex flex-row gap-3 overflow-x-auto `}
             style={{ left: `${slideIndex *  -281.44}px` }}>
            {dataSlider.map((item) => (
              <div
                key={item.id}
                 
                className="w-[281.44px] bg-white/40 flex flex-col justify-center items-center border border-dashed"
              >
                <div className="w-1/2 h-1/2 overflow-hidden">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="">
                  <h3>{item.title}</h3>
                  <span>{`items ${item["number-items"]}`}</span>
                </div>
              </div>
            ))}
         </div>
       
      </div>
    </section>
  );
}
