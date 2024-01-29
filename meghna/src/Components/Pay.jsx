import React from "react";
import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Pay({ FeeData, storeStudent }) {
    const pNumber = useRef();
    const email = useRef();
    let navigation = useNavigate();


    // FeeData[0] ==> id
    // FeeData[1] ==> dob
    // FeeData[2] ==> site
    // FeeData[3] ==> std
    // FeeData[4] ==> name
    // FeeData[5] ==> uiq
    // FeeData[6] ==> category
    // FeeData[7] ==> Period
    // FeeData[8] ==> acdYear

    function qut(e) {

        if (e == 1) {
            return "April - July";
        }

        else if (e == 2) {
            return "Aug - Sept";
        }
        else if (e == 3) {
            return "Oct - Dec";
        }
        else if (e == 4) {
            return "Jan -Mar";
        }



    }


    function MakeAPayement() {
        // validate phone number and email
        let pno = pNumber.current.value;
        let emi = email.current.value;



        navigation("/Makeapayment");
        storeStudent([pno, emi]);


    }

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

            <div className="w-ful md:px-[20px] lg:px-[150px] gap-[2px]    items-center flex flex-row pt-[2px]    ">
                <div>
                    <img src="./img/banner.jpg" className=" w-full " alt="asf" />
                </div>

            </div>


            <div className="w-full flex justify-end gap-4 text-[28px] px-[10px] items-center md:px-[20px] lg:px-[150px] ">
                <div>
                    <i class="fa-solid text-cyan-500 fa-house-chimney"></i>
                </div>
                <div>
                    <i class="fa-solid fa-power-off text-blue-900   "></i>
                </div>

            </div>

            {/* ================================ COMMAN NAVBAR =============================== */}




            <div className="w-full md:px-[20px] px-[10px] lg:px-[150px] text-[13px] md:text-[16px]  ">

                <div className="w-full rounded-[6px]    overflow-hidden bg-blue-100">
                    <div className="w-full py-[4px]  text-center font-Poppins font-medium text-white bg-[rgb(40,64,108)]">
                        Student Details
                    </div>

                    <div className="flex  py-[20px] items-center justify-center    space-y-3 font-Poppins text-[#3d3d3d] lg:px-[30px] md:px-[90px]  lg:py-2 md:py-5   flex-col lg:flex-row  gap-[15%]">
                        {/* comp 1 */}
                        <div className="flex flex-row w-full   lg:pt-1  justify-between px-[10px] md:px-0 ">
                            <div className="space-y-[6px]">
                                <p>Student Unique Code</p>
                                <p>Date of Birth</p>
                                <p>Class/Section</p>
                                <p>Payment Period</p>
                                <p>Mobile No*</p>
                            </div>
                            {
                                // FeeData[0] ==> id
                                // FeeData[1] ==> dob
                                // FeeData[2] ==> site
                                // FeeData[3] ==> std
                                // FeeData[4] ==> name
                                // FeeData[5] ==> uiq
                                // FeeData[6] ==> category
                                // FeeData[7] ==> Period
                                // FeeData[8] ==> acdYear

                            }
                            <div className="space-y-[6px]">
                                <p>{FeeData[5]}</p>
                                <p>{FeeData[1]}</p>
                                <p>{FeeData[3]}</p>
                                <p>Quarter - {FeeData[7]}({
                                    qut(FeeData[7])
                                })</p>
                                <input type="number" ref={pNumber} className=" rounded-[4px]" />

                            </div>

                        </div>



                        {/* comp 2 */}
                        <div className="flex flex-row   w-full items-center justify-between px-[10px] md:px-0  ">
                            <div className="space-y-[6px]">
                                <p>Student Name</p>
                                <p>School Name</p>
                                <p>Category/ Minority</p>
                                <p>Acad Year</p>
                                <p>Email ID*</p>

                            </div>
                            <div className="space-y-[6px]">
                                <p>{FeeData[4]}</p>
                                <p>{FeeData[2]}</p>
                                <p>{FeeData[6]}</p>
                                <p>{FeeData[8]} / {FeeData[8] + 1}</p>
                                <input type="email" ref={email} className=" rounded-[4px]" />
                            </div>
                        </div>
                    </div>


                    <div className="w-full py-[4px]  text-center font-Poppins font-medium text-white bg-[rgb(40,64,108)]">
                        Fees Details
                    </div>





                    <div className="w-full bg-blue-200  lg:flex  lg:justify-between  grid grid-cols-2  md:grid md:grid-cols-4 ">


                        {/* comppnents 1 */}


                        <div className=" flex flex-col md:w-full  lg:w-auto justify-center items-center  border-r-[1px]  border-[#3d3d3d]">
                            <p className="bg-blue-100 md:text-center  w-full px-[12px] text-[#3d3d3d] py-[4px]">Quater</p>
                            <p>Jan-Mar</p>
                        </div>
                        <div className="  flex   md:w-full  lg:w-auto  justify-center items-center flex-col border-r-[1px] border-[#3d3d3d]">
                            <p className="bg-blue-100  px-[12px] te md:text-center w-full text-[#3d3d3d] py-[4px]">Re-Admission</p>
                            <p>0</p>
                        </div>
                        <div className=" flex flex-col   md:w-full  lg:w-auto  justify-center items-center  border-r-[1px] border-[#3d3d3d]">
                            <p className="bg-blue-100  px-[12px] text-[#3d3d3d] md:text-center w-full te py-[4px]">Tution</p>
                            <p>0.00</p>
                        </div>
                        <div className=" flex flex-col   md:w-full  lg:w-auto  justify-center items-center  border-r-[1px] border-[#3d3d3d]">
                            <p className="bg-blue-100  px-[12px] text-[#3d3d3d] md:text-center w-full te py-[4px]">VVN</p>
                            <p>0.00</p>
                        </div>
                        <div className=" flex flex-col   md:w-full  lg:w-auto  justify-center items-center  border-r-[1px] border-[#3d3d3d]">
                            <p className="bg-blue-100  px-[12px] text-[#3d3d3d] md:text-center w-full te py-[4px]">Computer</p>
                            <p>0.00</p>
                        </div>
                        <div className=" flex flex-col   md:w-full  lg:w-auto  justify-center items-center  border-r-[1px] border-[#3d3d3d]">
                            <p className="bg-blue-100  px-[12px] text-[#3d3d3d] md:text-center w-full te py-[4px]">Computer Science</p>
                            <p>0.00</p>
                        </div>





                        <div className=" flex flex-col   md:w-full  lg:w-auto  justify-center items-center  border-r-[1px] border-[#3d3d3d]">
                            <p className="bg-blue-100  px-[12px] text-[#3d3d3d] md:text-center w-full te py-[4px]">Library Fine</p>
                            <p>0.00</p>
                        </div>
                        <div className=" flex flex-col   md:w-full  lg:w-auto  justify-center items-center  border-r-[1px] border-[#3d3d3d]">
                            <p className="bg-blue-100  px-[12px] text-[#3d3d3d] md:text-center w-full te py-[4px]">SF Other</p>
                            <p>0.00</p>
                        </div>
                        <div className=" flex flex-col   md:w-full  lg:w-auto  justify-center items-center  border-r-[1px] border-[#3d3d3d]">
                            <p className="bg-blue-100  px-[12px] text-[#3d3d3d] md:text-center w-full te py-[4px]">VVN Other</p>
                            <p>0.00</p>
                        </div>
                        <div className=" flex flex-col   md:w-full  lg:w-auto  justify-center items-center  border-r-[1px] border-[#3d3d3d]">
                            <p className="bg-blue-100  px-[12px] text-[#3d3d3d] md:text-center w-full te py-[4px]">Project Fee</p>
                            <p>0.00</p>
                        </div>
                        <div className=" flex flex-col   md:w-full  lg:w-auto  justify-center items-center  border-r-[1px] border-[#3d3d3d]">
                            <p className="bg-blue-100  px-[12px] text-[#3d3d3d] md:text-center w-full te py-[4px]">SF Late</p>
                            <p>0.00</p>
                        </div>
                        <div className=" flex flex-col   md:w-full  lg:w-auto  justify-center items-center  border-r-[1px] border-[#3d3d3d]">
                            <p className="bg-blue-100  px-[12px] text-[#3d3d3d] md:text-center w-full te py-[4px]">VVN Total</p>
                            <p>0.00</p>
                        </div>
                        <div className=" flex flex-col   md:w-full  lg:w-auto  justify-center items-center   ">
                            <p className="bg-blue-100  px-[12px] text-[#3d3d3d] md:text-center w-full te py-[4px]">Total</p>
                            <p>0.00</p>
                        </div>


                    </div>
                    <div className="w-full py-[6px] tex-[20px]  bg-[rgb(40,64,108)] font-Lexend font-medium text-white flex flex-row justify-between px-[30%]">
                        <p>Grand Total</p>
                        <p>8000</p>
                    </div>





                </div>



            </div>





            {/* MAKE A PAYMENT BUTTON */}

            <div className="w-full  md:px-[150px] px-[20px]  flex justify-center items-center py-[20px]">

                <button onClick={() => MakeAPayement()} className="hover:bg-gradient-to-b hover:from-[#242424]   hover:to-[#242424]  text-center  text-[20px]     text-white font-Poppins font-medium  py-[10px] rounded-md px-[30px] bg-gradient-to-b from-[#242424ca]   to-[#0f0f0f] ">
                    <div className="space-x-3 flex flex-row ">
                        <i class="fa-solid text-[25px] fa-lock"></i>
                        <p>Make a Payment</p>
                    </div>
                    <p className="text-[12px]">Make a Secure Payment</p>
                </button>

            </div>























            {/* ====================================== Footer section  start ============================================================ */}
            <Footer marquee="false" />
            {/* ====================================== Footer section  end ============================================================ */}
















        </>
    )
}

export default Pay;