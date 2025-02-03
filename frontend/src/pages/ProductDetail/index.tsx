import { useParams, useNavigate } from "react-router-dom";
import { truncateText } from "../../utils/textUtils";
import { ProductSlider } from "./slider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import StarIcon from "../../utils/icons";


export function ProductDetail() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [item, setItem] = useState<any>(null);

    const notify = (note : string) => {
        toast(note + " 🛒")
    };

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/products/${id}`);
                if (!response.ok) {
                    navigate("/404");
                    return;
                }
                const data = await response.json();
                setItem(data);
            } catch (error) {
                console.error(error);
            }
        };

        if (id) {
            fetchItem();
        }
    }, [id]);


    return(
        <>
        <div className="flex justify-center items-center h-screen text-left">
            <div className="flex flex-row w-10/12 mx-auto justify-center items-center space-x-20">
                {/* Image with paganition */}
                <ProductSlider images={item?.images ?? []}/>
                {/* Details */}
                <div className="flex-grow">
                    <div className="flex-col flex-grow p-32">
                        <div className="flex justify-between pb-3">
                            <div className="text-5xl font-semibold text-gray-800">
                                {item?.title}
                            </div>
                            <div className="text-2xl font-semibold flex flex-row items-centes justify-between space-x-3">
                                <div className="flex items-center">
                                {[...Array(5)].map((_, index) => (
                                    <StarIcon key={index} color={index < (Math.floor(item?.rating)) ? "#7f22fe" : "silver"} />
                                ))}
                                </div>
                                <div className="flex items-center">
                                    {item?.rating}
                                </div>
                            </div>
                        </div>
                        {/* DESCRIPTION */}
                        <p className="w-8/12 font-medium text-2xl leading-8">{item?.description}</p>
                        <div className=" text-black/60 py-2">
                            <p className="font-medium text-2xl leading-8 py-1">Stock: {item?.stock}</p>
                            <p className="font-medium text-2xl leading-8 py-1">Brand: {item?.brand}</p>
                            <p className="font-medium text-2xl leading-8 py-1">Category: {item?.category}</p>
                        </div>
                        <p className="text-xl text-white w-32 h-10 rounded-full bg-violet-700 font-semibold flex items-center justify-center">{'-' + item?.discountPercentage + '%'}</p>
                        <div className="flex flex-row justify-between items-center text-gray-800">
                            <p className="text-6xl font-semibold">
                                {Math.floor(item?.price) + " $"}
                            </p>
                            <button className="w-70 h-16 rounded-full bg-black text-white font-semibold text-3xl cursor-pointer" onClick={() => notify("Add to cart!")}>
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