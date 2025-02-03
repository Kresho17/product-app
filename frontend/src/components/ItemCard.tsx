import { truncateText } from "../utils/textUtils";
import { useNavigate } from "react-router-dom";

// TODO: Find the place for this
export interface ItemDeatils {
    id:                 number;
    title:              string;
    description:        string;
    discountPercentage: number;
    price:              number;
    rating:             number;
    stock:              number;
    brand:              string;
    category:           string;
    images:             string[];
}

interface Props {
    item: ItemDeatils
}

export function ItemCard({ item }: Props) {
    const navigate = useNavigate();

    const handleRedirect = (id : number) => {
        navigate(`/product/${id}`)
    }

    return(
        <div className="border border-slate-200 w-75 h-80 rounded-lg bg-white flex flex-col items-center justify-between p-4 pb-6">
            <div className="relative inline-block w-full h-35 rounded-lg overflow-hidden">
                <img src={item.images[0]} alt="itemThumbnail" className="object-contain w-full h-full rounded-lg"/>
                <div className="absolute top-2 right-2 text-sm text-white w-20 h-7 rounded-full bg-violet-700 font-semibold flex items-center justify-center"> {/* TODO: CREATE A component for this */}
                    <p className="">{'-' + item.discountPercentage + '%'}</p>
                </div>
            </div>
            {/* TEXT */}
            <div className="w-full flex-grow flex flex-col items-center text-center justify-between pt-1.5 text-gray-800">
                {/* TITLE LINE */}
                <div className="flex w-full justify-between items-center">
                    <div className="text-xl font-semibold items-center">
                        <p>{truncateText(item?.title || "", 18)}</p>
                    </div>
                    <div className="text-2xl font-semibold no-wrap">
                        <p>{Math.floor(item?.price) + " $"}</p>
                    </div>
                </div>
                {/* DESCRIPTION */}
                <div className="w-full text-sm font-medium text-left pb-4">
                    <p className="w-10/12">{truncateText(item.description, 60)}</p>
                </div>
            </div>
            {/* BUTTON */}
            <div className="w-full">
                <button className="w-full h-10 rounded-full bg-black text-white font-semibold text-base cursor-pointer" onClick={() => handleRedirect(item.id)}>
                    See details
                </button>
            </div>
        </div>
    );
};