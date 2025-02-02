import { ItemCard } from "../../components/ItemCard";
import { ItemData } from "./data";


export function Home() {

    return (
        <>
            <h1 className="text-[48px] font-semibold text-[#323232] pt-[50px] pb-[49px] text-center">See Products</h1>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-4 gap-x-[16px] gap-y-[21px]">
                    {ItemData.map((item) => (
                        <ItemCard item={item} />
                    ))}
                </div>
            </div>
            
        </>
    );
}