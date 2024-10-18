import React from "react"
import animationData from "../../assets/lottiefiles/NoDataFound.json";
import Lottie from "react-lottie";
////////////////////////    *****************     //////////////////////////
////////////////////////    *****************     //////////////////////////
export default function NoDataFound() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className="">
            <Lottie
                className=""
                options={defaultOptions}
                width={100}
                height={70}
            />
            <h2 className="mt-2 text-[18px] font-semibold">No Data Found.!</h2>
        </div>
    )
}