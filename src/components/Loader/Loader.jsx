import React from "react"
import animationData from "../../assets/lottiefiles/Loader2.json";
import Lottie from "react-lottie";
////////////////////////    *****************     //////////////////////////
////////////////////////    *****************     //////////////////////////
export default function Loader() {

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
                height={20}
            />
            <h2 className=" font-semibold ">Loading data...</h2>
        </div>
    )
}