import React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Lottie from "react-lottie";
import animationData from "../../assets/lottiefiles/Logout.json";
import { useNavigate } from 'react-router-dom';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const LogoutModel = ({ open, setOpen }) => {
    const navigate = useNavigate();
    const onClose = () => {
        setOpen(false);
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div>
            <Dialog
                onClose={onClose}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <center>

                    <h1 className='text-[22px] text-dark font-semibold py-5'>Are you sure?</h1>
                    <div className="">
                        <Lottie
                            className="Lottie_File_Width_Set"
                            options={defaultOptions}
                            width={150}
                            height={150}
                        />
                    </div>
                    <p className='px-5 text-lightGray'>Please confirm if you want to <span className='font-semibold text-dark'>LOGOUT</span></p>
                </center>

                <div className="p-4 flex gap-5 w-full mt-5">
                    <div className="my-auto w-2/4" onClick={() => navigate("/")}>
                        <button className="Login_Button py-[8px] px-[30px] text-center bg-dark text-white w-full rounded-[10px] border border-dark">
                            Logout
                        </button>
                    </div>
                    <div className="my-auto w-2/4" onClick={onClose}>
                        <button className="Login_Button py-[8px] px-[30px] text-center bg-white text-dark w-full rounded-[10px] border border-lightGray">
                            Cancel
                        </button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default LogoutModel
