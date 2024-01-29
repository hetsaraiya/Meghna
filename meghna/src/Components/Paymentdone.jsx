import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function Paymentdone() {

    return (
        <>
            {/* ================================== NAVBAR SECITON START ================================= */}
            <div className="border-b-[4px] border-[#ff9933] ">

                <div className=" w-full px-[10px] md:gap-0 gap-3 md:px-[20px] lg:px-[150px] flex items-center md:py-2  py-2 flex-col-reverse md:flex-row justify-between border-b-[4px] border-[#000099] ">
                    <div>
                        <img src="./img/logo2.png" alt="asdf" className=" w-[200px] md:w-[250px]" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold  text-[#150b99] font-Poppins">Swami Vivekanand Education Trust</h1>
                    </div>
                </div>
            </div>
            {/* ================================== NAVBAR SECITON END ================================= */}

            <div className="w-ful md:px-[20px] lg:px-[150px] gap-[2px]    items-center flex flex-row pt-[2px]   ">
                <div>
                    <img src="./img/banner.jpg" className=" w-full " alt="asf" />
                </div>

            </div>






            <div className="w-full flex justify-end gap-4 text-[28px] items-center px-[10px] md:px-[20px]  lg:px-[150px]  ">
                <div>
                    <i class="fa-solid text-cyan-500 fa-house-chimney"></i>
                </div>
                <div>
                    <i class="fa-solid fa-power-off text-blue-900   "></i>
                </div>

            </div>

            {/* ================================ COMMAN NAVBAR =============================== */}












            <div className="w-full px-[10px] mb-[20px] md:px-[20px] lg:px-[150px] text-[16px] py-[10px] ">

                <div className="w-full  rounded-t-[6px] border-[1px] border-[#3d3d3d95] overflow-hidden ">

                    <div className=" w-full flex flex-row justify-between h-[100px] px-[12px] items-center">
                        <img src="./img/logo2.png" alt="logo" className="h-full lg:py-[10px]  py-8 md:py-[20px]" />
                        <img src="./img/svik.png" alt="logo" className="  h-full md:py-[3px]  py-2 " />

                    </div>


                    <div className="w-full py-[4px]  text-center font-Poppins font-medium text-white bg-[rgb(40,64,108)]">
                        KVS FEES PAYMENT - RESPONSE
                    </div>


                    <div className="w-full flex justify-center bg-blue-100 ">

                        <div className="flex text-[14px] md:text-[16px]  flex-row md:w-[100%] w-full overflow-y-auto   px-[10px] md:px-[20px] lg:w-[60%] justify-between py-[6px] ">


                            <div className=" space-y-4 md:space-y-[6px] md:w-auto w-[65%]">
                                <p>Student ID</p>
                                <p>UBI Transaction ID</p>
                                <p>BillDesk Transaction ID</p>
                                <p>Status Reason</p>
                                <p>Transaction Status</p>
                            </div>



                            <div className="space-y-4 md:space-y-[6px] md:w-auto w-[50%]">
                                <p>015456863546846468</p>
                                <p>01286464654854864546465464/7654244/</p>
                                <p>YUP22051656547665</p>
                                <p>Transaction Succesful</p>
                                <p>Succesfull</p>
                            </div>

                        </div>
                    </div>




                </div>

                <div className="w-full flex py-[3px]  justify-around font-Lexend text-[16px]  rounded-b-[6px]  bg-blue-100">
                    <NavLink exact to="/Pdf">
                        <button className="px-5">Print</button>
                    </NavLink>

                    <NavLink exact to="/">
                        <button className="px-5">Home</button>
                    </NavLink>


                    <NavLink exact to="/">
                        <button className="px-5">Close</button>
                    </NavLink>
                </div>






            </div>

            {/* ====================================== Footer section  start ============================================================ */}
            <Footer marquee="false" />
            {/* ====================================== Footer section  end ============================================================ */}



        </>
    )
}


export default Paymentdone;