import { truncateText } from "../utils/textUtils";
import { ItemDeatils } from "../pages/Home/data";
import { useNavigate } from "react-router-dom";

interface Props {
    item: ItemDeatils
}

export function ItemCard({ item }: Props) {
    const navigate = useNavigate();

    const handleRedirect = (id : number) => {
        navigate(`/product/${id}`)
    }

    return(
        <div className="border-[0.65px] border-[#DBDBDB] w-[305px] h-[320px] rounded-[6.46px] bg-white   flex flex-col items-center justify-between p-[11.395px] pb-[25px]">
            <div className="relative inline-block w-full h-[149.18px] rounded-[6.46px] overflow-hidden">
                <img src={item.thumbnail} alt="itemThumbnail" className="object-contain w-full h-full rounded-[6.46px]"/> {/* TODO: In the figma design, the image should be object-cover */}
                <div className="absolute top-[9.67px] right-[9.67px] text-[14px] text-white w-[83px] h-[30px] rounded-[13.88px] bg-[#6100FF] font-semibold flex items-center justify-center"> {/* TODO: CREATE A component for this */}
                    <p className="">{'-' + item.discountPercentage + '%'}</p>
                </div>
            </div>
            {/* TEXT */}
            <div className="w-full flex-grow flex flex-col items-center text-center justify-between pt-[11.395px] text-[#323232]">
                {/* TITLE LINE */}
                <div className="flex w-full justify-between items-center">
                    <div className="text-[20px] font-[600] items-center">
                        <p>{item.title}</p>
                    </div>
                    <div className="text-[24px] font-[600]">
                        <p>{item.price + " $"}</p>
                    </div>
                </div>
                {/* DESCRIPTION */}
                <div className="w-full text-[14px] font-[500] height-[40px] text-left align-left pb-[10px]">
                    <p className="w-10/12">{truncateText(item.description, 60)}</p>
                </div>
            </div>
            {/* BUTTON */}
            <div className="w-full">
                <button className="w-[281.86px] h-[41px] rounded-[25.83px] bg-black text-white font-semibold text-[16px] cursor-pointer" onClick={() => handleRedirect(item.id)}>
                    See details
                </button>
            </div>
        </div>
    );
};