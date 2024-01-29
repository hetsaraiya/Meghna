import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function Login({ FeeData }) {
    // FeeData[0] ==> id
    // FeeData[1] ==> dob
    // FeeData[2] ==> site
    // FeeData[3] ==> std
    // FeeData[4] ==> name
    // FeeData[5] ==> uiq

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

            <div className="w-ful md:px-[20px] lg:px-[150px] gap-[2px]    items-center flex flex-row pt-[2px] pb-[20px]  ">
                <div>
                    <img src="./img/banner.jpg" className=" w-full " alt="asf" />
                </div>

            </div>




            <div className="w-full flex justify-end gap-4 text-[28px] items-center md:px-[20px]   lg:px-[150px] pt-[2px]">
                <div>
                    <i class="fa-solid text-cyan-500 fa-house-chimney"></i>
                </div>
                <div>
                    <i class="fa-solid fa-power-off text-blue-900   "></i>
                </div>

            </div>



            <div className="lg:w-full md:w-[70%] md:mx-auto lg:px-[32%]  md:px-[20px]   ">


                <div className="w-full   border-[1px] border-[#5151513f] rounded-xl ">


                    {/* COMP 1 */}
                    <div className="w-full  py-[20px] flex justify-between px-[20px] border-b-[0.6px] border-[#5151513f] items-center">
                        <div>
                            <i class="fa-solid text-[60px] fa-user"></i>
                        </div>



                        <div>
                            <h2 className="font-semibold  text-blue-500 text-[18px] font-Lexend"><span>Welcome, </span>{FeeData[4]} </h2>
                        </div>
                    </div>


                    {/* COMP 2 */}
                    <div className=" font-Poppins text-[#8e8e8e] justify-between py-[10px] text-[14px] flex flex-row    px-[15%]">
                        <div className="text-left space-y-2 ">
                            <div className="w-fit">
                                DOB:
                            </div>
                            <div>
                                Unique Code:
                            </div>
                            <div className="text-left w-fit">
                                Class:
                            </div>
                            <div className="text-left w-fit">
                                School Name:
                            </div>
                        </div>




                        <div className=" space-y-2">
                            <div>
                                {FeeData[1]}
                            </div>
                            <div>
                                {FeeData[5]}
                            </div>
                            <div>
                                {FeeData[3]}
                            </div>  <div>
                                {FeeData[2]}
                            </div>
                        </div>
                    </div>


                    {/* COMP 3 */}
                    <div className="w-full  py-[30px] flex justify-center items-center">
                        <img src="./img/img7.png" alt="computer" className="h-[120px]" />

                    </div>



                    {/* COMP 4 */}
                    <div className="w-full flex justify-center items-center py-[20px]">
                        <NavLink exact to="/pay">
                            <button class="px-6 py-2 font-Lexend  text-white font-medium  transform bg-gradient-to-b from-[#0a5bc8]  transition duration-300  to-[#062f61] rounded-3xl">  Make Payment</button>
                        </NavLink>
                    </div>

                    {/* COMP 5 */}
                    <div className="w-full text-[16px] font-Poppins pb-[30px] px-[20%] text-[#8e8e8e]">
                        Pay anytime, anywhere andn using any bank Credit/Debit Card, Net Banking in a secure and convenient manner.

                    </div>
                </div>
            </div>








            {/* ====================================== Footer section  start ============================================================ */}
            <Footer marquee="false" />
            {/* ====================================== Footer section  end ============================================================ */}










        </>
    )
}

export default Login;