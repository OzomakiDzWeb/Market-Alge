
import React, { useState } from "react";
import {AiFillLeftCircle,AiFillRightCircle} from 'react-icons/ai'
export default function SliderHome() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [dataSlider] = useState([
    {
      id: 1,
      title: "Eco Market",
      "number-items": 4,
      img: "/src/assets/img/blog-1.png"
    },
    {
      id: 2,
      title: "Shop Grocery",
      "number-items": 4,
      img: "/src/assets/img/blog-2.png",
    },
    {
      id: 3,
      title: "Vegan Market",
      "number-items": 4,
      img: "/src/assets/img/blog-3.png",
    },
    {
      id: 4,
      title: "Family",
      "number-items": 4,
      img: "/src/assets/img/blog-4.png",
    },
    {
      id: 5,
      title: "Bio Market",
      "number-items": 4,
      img:"/src/assets/img//blog-5.png",
    },
    {
      id: 6,
      title: "Farmers Market",
      "number-items": 4,
      img: "/src/assets/img/blog-6.png",
    },
  ]);
  const angleRight = () => {
    if (slideIndex <= dataSlider.length-1) {
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
    <section className="relative h-[500px] w-full overflow-hidden mx-2  rounded-[30px] dark:bg-black dark:text-white bg-gray my-4  ">
     <div className="flex justify-center items-center my-4">
          <h1 className="text-xl">Our Latest Blogs</h1>
      <div className=" flex   px-10 z-30  text-orang left-0">
        <AiFillLeftCircle
        size={35}
        className={`${slideIndex=='0'?'invisible':'visible'} hover:scale-105 duration-150 transition-all cursor-pointer hover:text-green`}
        onClick={angleLeft}
        ></AiFillLeftCircle>
        <AiFillRightCircle
         size={35}
         className={`${slideIndex=='6'?'invisible':'visible'} hover:scale-105 duration-150 transition-all cursor-pointer hover:text-green`}
          onClick={angleRight}
        ></AiFillRightCircle>
      </div>
     </div>
      <div className="w-full relative px-2 ">
         <div className={`transition-all  duration-150 left-8 absolute mx-2   flex flex-row gap-3  `}
             style={{ left: `${slideIndex *  -281.44}px` }}>
            {dataSlider.map((item) => (
              <div
                key={item.id}
                 
                className="w-[281.44px] flex flex-col items-center rounded-[30px]   bg-white/40  "
              >
                <div className=" rounded-[30px]">
                  
                  <img className="rounded-[30px]" src={item.img} alt={item.title} />
                
                </div>
                  <h3 className="">{item.title}</h3>
                  <h1 className="mx-4 text-xl my-4">Sticky Ginger Rice Bowls with Pickled Veg</h1>
                  <span>February 19, 2023</span>
                
              </div>
            ))}
         </div>
       
      </div>
    </section>
  );
}
