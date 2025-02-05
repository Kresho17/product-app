import { ChevronLeft, ChevronRight } from "lucide-react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface Props {
  images: string[];
}


export function ProductSlider({ images } : Props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow className={"text-black"} />,
        prevArrow: <SamplePrevArrow className={"text-black"} />
      };

    function SampleNextArrow(props: { className?: any; onClick?: any; }) {
        const { className, onClick } = props;
        return(
          <div onClick={onClick} className={`arrow ${className}`} >
            <ChevronRight className="arrows"/>
          </div>
        );
    }
      
    function SamplePrevArrow(props: { className?: any; onClick?: any; }) {
        const { className, onClick } = props;
        return(
          <div onClick={onClick} className={`arrow ${className}`} >
            <ChevronLeft className="arrows"/>
          </div>
        )
    }

    return(
        <>
          <Slider {...settings} className="w-4/12">
            {images?.map((i, index) => (
              <img src={i} alt="Product Image" key={index} className="w-lg h-120 rounded-md object-contain mx-auto"/>
            ))}
          </Slider>
        </>
    );
}