
import React from "react";
import clsx from "clsx";

interface DiscountBadgeProps {
    discountPercentage: number;
    className?: string;
}


export const DiscountBadge: React.FC<DiscountBadgeProps> = ({ discountPercentage, className }) => {

    return (
        <div className={clsx(" text-white w-20 h-7 rounded-full bg-violet-700 font-semibold flex items-center justify-center", className)}>
            <p>{'-' + discountPercentage + '%'}</p>
        </div>
    );
};
