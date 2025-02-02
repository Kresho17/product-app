import { ItemCard } from "../../components/ItemCard";
import { ItemData } from "./data";


export function Home() {

    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-[48px] font-semibold text-[#323232] pt-[50px] text-center">See Products</h1>
                <div className="flex justify-center items-center py-[49px]">
                    <div className="grid xl:grid-cols-4 gap-x-[16px] gap-y-[21px] lg:grid-cols-3 md:grid-cols-2 grid-col-1">
                        {ItemData.map((item) => (
                            <ItemCard item={item} />
                        ))}
                    </div>
                </div>
            </div> 
        </>
    );
}