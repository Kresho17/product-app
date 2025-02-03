import { useParams } from "react-router-dom";
import { truncateText } from "../../utils/textUtils";
import { ProductSlider } from "./slider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ItemData } from "../Home/data";



export function ProductDetail() {

    const notify = (note : string) => {
        toast(note + " 🛒")
    };

    const { id } = useParams<{ id: string }>();

/*  async function getItem( id : number) {
        
    } */
    const item = ItemData.find((item) => item.id === parseInt(id || "", 10));
    console.log(item);

    return(
        <>
        <div className="flex justify-center items-center h-screen text-left">
            <div className="flex flex-row w-10/12 mx-auto justify-center items-center">
                {/* Image with paganition */}
                <ProductSlider images={item?.images ?? []}/>
                {/* Details */}
                <div className="flex items-center ml-[100px]">
                    <div className="flex-col">
                        <div className="flex justify-between">
                            <div className="text-[48px] font-semibold text-[#323232]">
                                {item?.title}
                            </div>
                            <div className="text-[24px] font-semibold">
                                {item?.rating}
                            </div>
                        </div>
                        {/* DESCRIPTION */}
                        <div className="w-8/12">  {/* TODO: The description box should be wider  and it is changeing in different length*/}
                            <p className="font-medium text-[24px] leading-[32.4px]">{truncateText(item?.description || "", 80)}</p>  {/* TODO: Show all the text with scrollable container */}
                        </div>
                        <div className="flex flex-col text-black/60 py-2">
                            <p className="font-medium text-[24px] leading-[32.4px] py-1">Stock: {item?.stock}</p>
                            <p className="font-medium text-[24px] leading-[32.4px] py-1">Brand: {item?.brand}</p>
                            <p className="font-medium text-[24px] leading-[32.4px] py-1">Category: {item?.category}</p>
                        </div>
                        <div className="text-[20px] text-white w-[121.73px] h-[44px] rounded-[20.35px] bg-[#6100FF] font-semibold flex items-center justify-center"> {/* TODO: CREATE A component for this */}
                            <p>{'-' + item?.discountPercentage + '%'}</p>
                        </div>
                        <div className="flex flex-row justify-between items-center text-[#323232]">
                            <p className="text-[64px] font-semibold">
                                {item?.price + " $"}
                            </p>
                            <button className="w-[267px] h-[65px] rounded-[30px] bg-black text-white font-semibold text-[28px] cursor-pointer" onClick={() => notify("Add to cart!")}>
                                Add to cart
                            </button>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}