import { ChevronLeft, ChevronRight } from "lucide-react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function ProductSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow to="next"/>,
        prevArrow: <SamplePrevArrow to="prev"/>
      };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return(
          <div onClick={onClick} className={`arrow ${className}`} >
            <ChevronRight className="arrows" style={{color:"black"}}/>
          </div>
        );
    }
      
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return(
          <div onClick={onClick} className={`arrow ${className}`} >
            <ChevronLeft className="arrows" style={{color:"black"}}/>
          </div>
        )
    }

    return(
        <>
                <Slider {...settings} className="w-4/12">
                    <div className="">
                        <img src="https://s3-alpha-sig.figma.com/img/fbec/9e1f/d0ae465204d6e44c78606ea8844e40f9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iCBBh7wLrurphBSXj-CnWpYwT07s1CFEIEzylRsuhK98h9iNpPy0CHrwCp5TAL9gic0F-Yc5Juju3gEuC9UhgHYOE9QBMJoL5PfPoG0jMgcO~e6drMkGcspr3Jk0W987XRa5Z2qjYzhLtEPYU~CpbMis8DkZBcF4fQwXuDjcnD5gQ76ls21YkwGFNcq56scpzH5OtSwmpvkLZwyen6pApH8MXHxMsZW8nHu4GJJGhj1SmTa7IWMG94E66Th2~Z3~LwpfAjX~fHRXTU0e6a4IHsCCT2IkuqKsgBBxwlJGHj4py6c3NNxkmcDjvgTyE33I0JsmnpwaZSLw7rdMddqR1Q__" alt="Product Image 1" className="w-[502.4px] h-[481px] rounded-[6.01px] object-contain mx-auto"/>
                    </div>
                    <div className="">
                        <img src="https://s3-alpha-sig.figma.com/img/fbec/9e1f/d0ae465204d6e44c78606ea8844e40f9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iCBBh7wLrurphBSXj-CnWpYwT07s1CFEIEzylRsuhK98h9iNpPy0CHrwCp5TAL9gic0F-Yc5Juju3gEuC9UhgHYOE9QBMJoL5PfPoG0jMgcO~e6drMkGcspr3Jk0W987XRa5Z2qjYzhLtEPYU~CpbMis8DkZBcF4fQwXuDjcnD5gQ76ls21YkwGFNcq56scpzH5OtSwmpvkLZwyen6pApH8MXHxMsZW8nHu4GJJGhj1SmTa7IWMG94E66Th2~Z3~LwpfAjX~fHRXTU0e6a4IHsCCT2IkuqKsgBBxwlJGHj4py6c3NNxkmcDjvgTyE33I0JsmnpwaZSLw7rdMddqR1Q__" alt="Product Image 2" className="w-[502.4px] h-[481px] rounded-[6.01px] object-contain mx-auto"/>
                    </div>
                    <div className="">
                        <img src="https://s3-alpha-sig.figma.com/img/fbec/9e1f/d0ae465204d6e44c78606ea8844e40f9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iCBBh7wLrurphBSXj-CnWpYwT07s1CFEIEzylRsuhK98h9iNpPy0CHrwCp5TAL9gic0F-Yc5Juju3gEuC9UhgHYOE9QBMJoL5PfPoG0jMgcO~e6drMkGcspr3Jk0W987XRa5Z2qjYzhLtEPYU~CpbMis8DkZBcF4fQwXuDjcnD5gQ76ls21YkwGFNcq56scpzH5OtSwmpvkLZwyen6pApH8MXHxMsZW8nHu4GJJGhj1SmTa7IWMG94E66Th2~Z3~LwpfAjX~fHRXTU0e6a4IHsCCT2IkuqKsgBBxwlJGHj4py6c3NNxkmcDjvgTyE33I0JsmnpwaZSLw7rdMddqR1Q__" alt="Product Image 3" className="w-[502.4px] h-[481px] rounded-[6.01px] object-contain mx-auto"/>
                    </div>
                </Slider>
        </>
    );
}