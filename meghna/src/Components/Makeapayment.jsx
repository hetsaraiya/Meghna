import React from "react";
import { ReactDOM } from "react";

import { NavLink } from "react-router-dom";



function Makeapayment() {

    function submited() {
        alert("submited");
    }


    function Payed() {
        let pop = document.getElementById("pop");

        console.log(pop);
        pop.classList.toggle("hi");
        window.scrollTo(0,0)


    }

    function canclePayement() {
        let pop = document.getElementById("pop");
        pop.classList.toggle("hi");
        window.scrollTo(0,0)
    }

    return (
        <>

            <div className="w-full px-[10px] md:px-[20px] lg:px-[200px]  py-[30px]">
                <div className="w-full   border-[1px] overflow-hidden rounded-[6px] h-auto lg:h-[800px] border-[#5757579c]">


                    <div className="p-[16px] bg-gradient-to-t from-[#dbdbdb8a] to-[#fefefe] border-b-[1px] border-[#b8b8b8] ">
                        <img src="./img/mimg2.png" alt="logo" className="lg:h-[50px] md:h-[60px] md:w-[60px] h-[40px] w-[40px] " />
                    </div>





                    <div className="w-full flex md:flex-row  flex-col   h-fit  md:h-full justify-center items-center">
                        <div className="   md:w-[40%] lg:w-[30%]   md:self-start w-[100%]
                           flex md:flex-col  flex-wrap h-full bg-[#efefef]">


                            <div className="w-full flex flex-row  justify-between items-center hover:bg-white p-[12px]">
                                <div className="flex  justify-center items-center gap-4">

                                    <i class="fa-regular fa-credit-card"></i>
                                    <span className="text-[16px] font-medium">Credit Card</span>
                                </div>
                                <i class="fa-solid fa-angle-right"></i>
                            </div>


                            <div className="w-full flex flex-row  justify-between items-center hover:bg-white p-[12px]">
                                <div className="flex  justify-center items-center gap-4">

                                    <i class="fa-regular fa-credit-card"></i>
                                    <span className="text-[16px] font-medium">Debit Card</span>
                                </div>
                                {/* <i class="fa-solid fa-angle-right"></i> */}
                            </div>


                            <div className="w-full flex flex-row  justify-between items-center hover:bg-white p-[12px]">
                                <div className="flex  justify-center items-center gap-4">

                                    <i class="fa-solid fa-landmark"></i>
                                    <span className="text-[16px] font-medium">Internet Banking</span>
                                </div>
                                {/* <i class="fa-solid fa-angle-right"></i> */}
                            </div>


                            <div className="w-full flex flex-row  justify-between items-center hover:bg-white p-[12px]">
                                <div className="flex  justify-center items-center gap-4">
                                    <i class="fa-solid fa-qrcode"></i>
                                    <span className="text-[16px] font-medium">QR code</span>
                                </div>
                                {/* <i class="fa-solid fa-angle-right"></i> */}
                            </div>


                            <div className="w-full flex flex-row  justify-between items-center hover:bg-white p-[12px]">
                                <div className="flex  justify-center items-center gap-4">

                                    <i class="fa-solid fa-repeat"></i>
                                    <span className="text-[16px] font-medium">UPI</span>
                                </div>
                                {/* <i class="fa-solid fa-angle-right"></i> */}
                            </div>




                        </div>




                        <div className="  md:w-[100%]      flex flex-col lg:flex-row justify-center px-[6px] lg:h-full  self-start  md:gap-[40px] items-start">


                            <form action="#" method="post"  >
                                <div className="w-full flex flex-col  justify-start  items-start p-[15px] text-[#3d3d3d]">

                                    <p className="py-[10px]  w-fit   font-Poppins font-medium text-blue-500 text-[16px] border-b-[1px] border-blue-500 px-3">
                                        Pay by Credit Card
                                    </p>


                                    {/* visa  and master card logo */}
                                    <div className="w-full flex justify-center  flex-row items-center h-[30px] my-[20px] gap-5">
                                        <div className="bg-gradient-to-t from-[#dbdbdb8a] to-[#fefefe]  px-[4px] py-[5px] border-[1px] border-[#ccccc] w-[70px] rounded-[4px] flex justify-center items-center  h-full ">

                                            <img src="./img/visa.png" alt="visa" className=" h-full py-[2px] " />
                                        </div>

                                        <div className="bg-gradient-to-t from-[#dbdbdb8a] to-[#fefefe]  px-[4px] py-[5px] border-[1px] border-[#ccccc] w-[70px] rounded-[4px] flex justify-center items-center h-full  ">

                                            <img src="./img/master.png" alt="master" className=" h-full " />
                                        </div>

                                    </div>






                                    <div className="w-full  font-Lexend py-[8px] "  >
                                        <p className=" font-semibold py-1 text-[17px]">Card Number</p>
                                        <div className=" w-full   h-[35px]  rounded-[5px] overflow-hidden flex flex-row justify-between items-center border-[1px] border-[#cccccc]">
                                            <input type="number" id="cardnumber" className="w-full  h-full   border-r-[1px] box-border border-[#cccccc]" required />
                                            <div className=" px-[10px]  bg-gradient-to-t from-[#dbdbdb8a] to-[#fefefe] h-full py-[5px] ">
                                                <img src="./img/visa.png" alt="visa" className=" h-full py-[2px] " />
                                            </div>
                                        </div>
                                    </div>



                                    <div className="w-full   grid gap-4  grid-cols-1  lg:grid-cols-3  font-Lexend  ">
                                        <div className="flex flex-col ">
                                            <p className="font-semibold py-1 text-[17px]">Expiration Date</p>
                                            <input type="date" name="date" id="date" className="  rounded-[4px] w-full  border-[1px] border-[#cccccc]" required />
                                        </div>
                                        <div className="flex flex-col items-center justify-end">
                                            <input type="number" name="afd" id="year" className=" rounded-[4px] w-full  border-[1px] border-[#cccccc]" required />

                                        </div>
                                        <div>
                                            <p className=" font-semibold py-1 text-[17px]">CVV/CVC</p>
                                            <input type="password" name="afd" id="cvv" className=" rounded-[4px] w-full  border-[1px] border-[#cccccc]" required />

                                        </div>

                                    </div>



                                    <div className="w-full  font-Lexend py-[8px]"  >
                                        <p className=" font-semibold py-1 text-[17px]">Card Holder Name</p>
                                        <div className=" w-full bg-red-100 h-[35px]  rounded-[5px] overflow-hidden flex flex-row justify-between items-center border-[1px] border-[#cccccc]">
                                            <input type="number" className="w-full  h-full    box-border    " required />
                                        </div>
                                    </div>


                                    <div className="w-full pt-[30px] ">
                                        <NavLink>

                                            <button onClick={() => Payed()} type="submit" className="   w-full rounded-md py-3 font-Poppins text-[18px] font-semibold  text-[#3d3d3d]  flex  justify-center items-center border-[2px]   transform  duration-300  border-[#cba957]  bg-gradient-to-t from-[#f0c14c] to-[#f8e2ad] ">
                                                Make Payment
                                            </button>
                                        </NavLink>

                                    </div>
                                    <div className="w-full text-blue-500  flex justify-end items-center">
                                        <a href="#" className=" underline">Cancel</a>

                                    </div>







                                </div>
                            </form>


                            <div className="    flex  flex-col   items-center  pt-[8px]  justify-between  h-full  w-[100%] md:w-[60%]  ">
                                <div className="border-[1px] rounded-md border-[#bae8e8] border-t-[4px]  w-full">

                                    <div className="w-full p-[12px] pb-[50px]">
                                        <p className="text-[#3d3d3d] pt-[5px] pb-[10px] font-Poppins font-semibold ">Marchent Name</p>
                                        <p className=" font-Poppins">Kendriya Vidhyalaya online Fee collection Module</p>
                                    </div>

                                    <div className="w-full bg-[#d9edf7] px-[20px] py-[10px]">
                                        <p>Payment Amount: <span className="  font-Lexend font-semibold ">₹ {"8900"}</span></p>

                                    </div>

                                </div>


                                <div className="w-full   ">
                                    asdf
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>




            {/* POPUP IN MAKE PAYMENT BUTTON start*/}
            <div id="pop" className="hi">
                <div className="w-full h-[100vh]  py-10  backdrop-blur-md backdrop-filter flex justify-center items-start absolute  top-0 left-0 ">

                    <div className="    font-Poppins text-[17px]   border-[1px] border-[#d3d3d3] rounded-lg    bg-[#ffffff]  w-[600px]">
                        <div className="w-full p-[25px]   ">
                            <h1 className="text-[#297837] font-Lexend text-[20px] font-bold">Convienience Fees</h1>
                            <p className=" border-b-[1px] pb-2 border-gray-500 border-dashed">A Convience fee as shown below will be charge to your Credit card, in addition to the transaction amount.</p>
                        </div>
                        <div className="px-[25px]  py-6  flex flex-col justify-center items-center gap-3   ">
                            <div className="flex flex-row w-full justify-between">
                                <p>Transaction Amount (Rs) </p>
                                <p className=" font-semibold">1800.00</p>
                            </div>
                            <div className="flex flex-row w-full justify-between">
                                <p>Transaction Amount (Rs) </p>
                                <p className=" font-semibold">1800.00</p>
                            </div>
                            <div className="flex flex-row w-full justify-between">
                                <p>Transaction Amount (Rs) </p>
                                <p className=" font-semibold">1800.00</p>
                            </div>
                        </div>

                        <div className="w-full bg-gray-200 font-semibold border-y-[1px] border-gray-500 border-dashed py-10 flex flex-row justify-between items-center px-5">
                            <p>TOTAL AMOUNT</p>
                            <p className="text-[23px]">Rs. <span>1800.00</span>
                            </p>
                        </div>

                        <div className="w-full p-3 flex justify-between items-center px-[35px] flex-row">

                            <button onClick={() => canclePayement()} className="text-[18px] font-medium text-blue-500">
                                Cancle
                            </button>
                            <NavLink exact to="/Paymentdone">

                                <button className="  w-[100%]  px-5 rounded-md py-5 font-Poppins text-[18px] font-semibold  text-[#3d3d3d]  flex  justify-center items-center border-[2px]   transform  duration-300  border-[#cba957]  bg-gradient-to-t from-[#f0c14c] to-[#f8e2ad] ">
                                    Procces with Payment
                                </button>
                            </NavLink>
                        </div>

                    </div>


                </div>

            </div>

            {/* POPUP IN MAKE PAYMENT BUTTON end*/}






        </>
    )
}

export default Makeapayment;