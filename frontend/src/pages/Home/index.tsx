import { useEffect, useState } from "react";
import { ItemCard } from "../../components/ItemCard";
import InfiniteScroll from 'react-infinite-scroll-component';

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


export function Home() {
    const [items, setItems] = useState<ItemDeatils[]>([]);
    const [page, setPage] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const limit = 10;

    useEffect(() => {
        fetchItems(0);
    }, []);

    const fetchItems = async (pageNumber: number) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/products/?skip=${pageNumber * limit}&limit=${limit}`);
            const data = await response.json();

            if (data.results.length < limit) {
                setHasMore(false);
            }

            setItems((prevItems) => [...prevItems, ...data.results]);
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };


    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-5xl font-semibold text-gray-800 pt-16 text-center">See Products</h1>
                <div className="flex justify-center items-center py-16">
                    <InfiniteScroll
                        dataLength={items.length}
                        next={() => fetchItems(page)}
                        hasMore={hasMore}
                        loader={<h4 className="my-6" >Loading...</h4>}
                        endMessage={<p className="my-6">No more products available</p>}
                    >
                        <div className="grid xl:grid-cols-4 gap-x-4 gap-y-5 lg:grid-cols-3 md:grid-cols-2 grid-col-1">
                            {items.map((item) => (
                                <ItemCard item={item} key={item.id}/>
                            ))}
                        </div>
                    </InfiniteScroll>
                </div>
            </div> 
        </>
    );
}