import { truncateText } from "../../utils/textUtils";
import { ProductSlider } from "./Slider";


export function ProductDetail() {

    return(
        <>
        <div className="flex justify-center items-center h-screen text-left">
            <div className="flex flex-row w-10/12 mx-auto justify-center items-center">
                {/* Image with paganition */}
                <ProductSlider/>
                {/* Details */}
                <div className="flex items-center ml-[100px]">
                    <div className="flex-col">
                        <div className="flex justify-between">
                            <div className="text-[48px] font-semibold text-[#323232]">
                                iPhone 9
                            </div>
                            <div className="text-[24px] font-semibold">
                                4.69
                            </div>
                        </div>
                        {/* DESCRIPTION */}
                        <div className="w-8/12">  {/* TODO: The description box should be wider */}
                            <p className="font-medium text-[24px] leading-[32.4px]">{truncateText("An apple mobile which is nothing like apple", 80)}</p>  {/* TODO: Show all the text with scrollable container */}
                        </div>
                        <div className="flex flex-col text-black/60 py-2">
                            <p className="font-medium text-[24px] leading-[32.4px] py-1">Stock: 94</p>
                            <p className="font-medium text-[24px] leading-[32.4px] py-1">Brand: Apple</p>
                            <p className="font-medium text-[24px] leading-[32.4px] py-1">Category: smartphones</p>
                        </div>
                        <div className="text-[20px] text-white w-[121.73px] h-[44px] rounded-[20.35px] bg-[#6100FF] font-semibold flex items-center justify-center"> {/* TODO: CREATE A component for this */}
                            <p>-12.96%</p>
                        </div>
                        <div className="flex flex-row justify-between items-center text-[#323232]">
                            <p className="text-[64px] font-semibold">
                                549 $
                            </p>
                            <button className="w-[267px] h-[65px] rounded-[30px] bg-black text-white font-semibold text-[28px]">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}