import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer"

function Home() {
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

            <div className="w-ful md:px-[20px] lg:px-[150px] gap-[2px]   items-center flex flex-row pt-[2px] pb-[20px]  ">
                <div>
                    <img src="./img/banner.jpg" className=" w-full" alt="asf" />
                </div>
                 
            </div>





            <div className="w-full   py-[20px] space-y-5 text-[#ff0000] font-bold text-[20px] text-center md:px-[20px] lg:px-[150px] items-center justify-center ">

                <div>
                    <h1>KV FEE PAYMENT STARTS FROM 01.01.2024 TO 31.01.2024 (EXISTING STUDENTS).</h1>
                </div>
                <div>
                    <h1>KV FEE PAYMENT STARTS FROM 01.01.2024 TO 31.01.2024 (NEW ADMISSION).</h1>
                </div>
            </div>


            <div className="  flex lg:flex-row md:flex-col-reverse md:gap-5 lg:gap-0  justify-between w-full  md:px-[50px] lg:px-[150px] items-center py-[30px]">
                <div className="flex  flex-col justify-between    md:w-[100%]  md:gap-6 lg:gap-12 items-start">

                    <NavLink exact to="/Fees" >
                        <button className="  lg:w-auto md:w-fit  bg-gradient-to-b from-[#0a5bc8]  to-[#062f61] hover:bg-gradient-to-b hover:from-[#0a5cc800]  hover:to-[#062f6100] hover:border-[1px] hover:border-gray-500 hover:text-black transition duration-300  py-2 px-12   rounded-md text-white font-medium space-x-6"><span> Click Here For Online Payments </span> <span className="text-xl py-0 leading-none">→</span></button>
                    </NavLink>



                    <button className="bg-gradient-to-b from-[#0a5bc8] lg:w-auto md:w-fit  to-[#062f61]  py-2 px-12 hover:bg-gradient-to-b hover:from-[#0a5cc800]  hover:to-[#062f6100] hover:border-[1px] hover:border-gray-500 hover:text-black   transition duration-300   rounded-md text-white font-medium space-x-6"><span>Click Here For Genrate Challan & Print Receipt</span> <span className="text-xl py-0 leading-none">→</span> </button>
                </div>

                <div className="     flex lg:justify-end  md:justify-center  lg:w-auto  md:w-full">
                    <img src="./img/logo2.png" alt="logo" className="lg:w-[70%]  md:w-[20%]" />
                </div>
            </div>




            {/* FOOTER SECTION */}
            <Footer marquee="true" />
        </>
    )
}

export default Home;