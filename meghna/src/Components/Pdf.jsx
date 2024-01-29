import React from "react";


function Pdf() {
    return (
        <>

            <div className="w-full px-[20%]  my-4 ">

                <div className="w-full border-[2px] border-[#3d3d3d]">

                    <div className="w-full py-[5px]  text-center mt-[50px] font-Poppins font-medium text-white bg-[#191970]">
                        KVS FEE PAYMENT - RECEIPT
                    </div>


                    <div className=" w-full flex flex-row justify-between h-[100px] px-[12px] items-center">
                        <img src="./img/logo2.png" alt="logo" className="h-full py-[10px]" />
                        <img src="./img/svik.png" alt="logo" className="  h-full py-[3px]" />

                    </div>




                    <div className=" w-full  flex flex-row justify-between font-Poppins text-[#3d3d3d]  ">


                        {/* LEFT SECTION START */}
                        <div className="w-full" >
                            <div className=" h-[40px] border-y-[2px] border-r-[2px] border-[#3d3d3d]"> </div>
                            <div className="py-[5px] px-[8px] border-b-[2px] border-r-[2px] border-[#3d3d3d]">Student Unique Indentification No.:</div>
                            <div className="py-[5px] px-[8px] border-b-[2px] border-r-[2px] border-[#3d3d3d]">Name of the Student:</div>
                            <div className="py-[5px] px-[8px] border-b-[2px] border-r-[2px] border-[#3d3d3d]">Father's / Mother's Name:</div>
                            <div className="py-[5px] px-[8px] border-b-[2px] border-r-[2px] border-[#3d3d3d]">Class:</div>
                            <div className="py-[5px] px-[8px] border-b-[2px] border-r-[2px] border-[#3d3d3d]">KV School & KV Region:</div>
                            <div className="py-[5px] px-[8px] border-b-[2px] border-r-[2px] border-[#3d3d3d]">Fee Period:</div>
                            <div className="py-[5px] px-[8px] border-b-[2px] border-r-[2px] border-[#3d3d3d]">Year Fee:</div>
                            <div className="py-[5px] px-[8px] border-b-[2px] border-r-[2px] border-[#3d3d3d]">Transaction Date:</div>
                            <div className="py-[5px] px-[8px] border-b-[2px] border-r-[2px] border-[#3d3d3d]">Transaction No.:</div>
                            <div className=" h-[40px] border-b-[2px]   border-[#3d3d3d]"> </div>

                        </div>
                        {/* LEFT SECTION END */}


                        {/* RIGHT SECTION START */}
                        <div className="w-full" >
                            <div className=" h-[40px] border-y-[2px] border-[#3d3d3d]"> </div>
                            <div className="py-[5px] px-[8px] border-b-[2px] border-[#3d3d3d]">Student Unique Indentification No.:</div>
                            <div className="py-[5px] px-[8px] border-b-[2px] border-[#3d3d3d]">Name of the Student:</div>
                            <div className="py-[5px] px-[8px] border-b-[2px] border-[#3d3d3d]">Father's / Mother's Name:</div>
                            <div className="py-[5px] px-[8px] border-b-[2px] border-[#3d3d3d]">Class:</div>
                            <div className="py-[5px] px-[8px] border-b-[2px] border-[#3d3d3d]">KV School & KV Region:</div>
                            <div className="py-[5px] px-[8px] border-b-[2px] border-[#3d3d3d]">Fee Period:</div>
                            <div className="py-[5px] px-[8px] border-b-[2px] border-[#3d3d3d]">Year Fee:</div>
                            <div className="py-[5px] px-[8px] border-b-[2px] border-[#3d3d3d]">Transaction Date:</div>
                            <div className="py-[5px] px-[8px] border-b-[2px] border-[#3d3d3d]">Transaction No.:</div>
                            <div className=" h-[40px] border-b-[2px]  border-[#3d3d3d]"> </div>
                        </div>
                        {/* RIGHT SECTION END */}
                    </div>


                    <div className=" flex flex-row  font-Poppins">
                        <div className="py-[5px] px-[8px] w-[50%] bg-[#191970] text-white font-semibold text-center border-b-[2px] border-r-[2px] border-[#3d3d3d]">Fee Particular</div>
                        <div className="py-[5px] w-[50%] px-[8px] bg-[#191970] text-white flex flex-row justify-between items-center font-semibold   border-b-[2px]  border-[#3d3d3d]">
                            <div className="text-center w-full border-r-[2px] border-[#3d3d3d]">Apr/Jun</div>
                            <div className="text-center w-full border-r-[2px] border-[#3d3d3d]">Jul/Sep</div>
                            <div className="text-center w-full border-r-[2px] border-[#3d3d3d]">Oct/Dec</div>
                            <div className="text-center w-full  ">Jan/Mar</div>
                        </div>
                    </div>

                    <div className=" flex flex-row  font-Poppins ">
                        <div className="px-[8px] w-[50%] py-[5px]  border-b-[2px] border-r-[2px] border-[#3d3d3d]">Re Admission Fee:</div>
                        <div className="   w-[50%] px-[8px]  flex flex-row justify-between items-center  h-full    border-b-[2px]  border-[#3d3d3d]">
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px]  ">0.00</div>
                        </div>
                    </div>
                    <div className=" flex flex-row  font-Poppins ">
                        <div className="px-[8px] w-[50%] py-[5px]  border-b-[2px] border-r-[2px] border-[#3d3d3d]">Tution Fee:</div>
                        <div className="   w-[50%] px-[8px]  flex flex-row justify-between items-center   h-full    border-b-[2px]   border-[#3d3d3d]">
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px]  ">0.00</div>
                        </div>
                    </div>
                    <div className=" flex flex-row  font-Poppins ">
                        <div className="px-[8px] w-[50%] py-[5px]  border-b-[2px] border-r-[2px] border-[#3d3d3d]">Late Fee (Tution):</div>
                        <div className="   w-[50%] px-[8px]  flex flex-row justify-between items-center  h-full    border-b-[2px]  border-[#3d3d3d]">
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px]  ">0.00</div>
                        </div>
                    </div>
                    <div className=" flex flex-row  font-Poppins ">
                        <div className="px-[8px] w-[50%] py-[5px]  border-b-[2px] border-r-[2px] border-[#3d3d3d]">Vidhayalya Vikas Nidhi (VVN):</div>
                        <div className="   w-[50%] px-[8px]  flex flex-row justify-between items-center  h-full    border-b-[2px]  border-[#3d3d3d]">
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px]  ">0.00</div>
                        </div>
                    </div>
                    <div className=" flex flex-row  font-Poppins ">
                        <div className="px-[8px] w-[50%] py-[5px]  border-b-[2px] border-r-[2px] border-[#3d3d3d]">Late Fee (VVN):</div>
                        <div className="   w-[50%] px-[8px]  flex flex-row justify-between items-center  h-full    border-b-[2px]  border-[#3d3d3d]">
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px]  ">0.00</div>
                        </div>
                    </div>
                    <div className=" flex flex-row  font-Poppins ">
                        <div className="px-[8px] w-[50%] py-[5px]  border-b-[2px] border-r-[2px] border-[#3d3d3d]">Computer Education Fee/IP:</div>
                        <div className="   w-[50%] px-[8px]  flex flex-row justify-between items-center  h-full    border-b-[2px]  border-[#3d3d3d]">
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px]  ">0.00</div>
                        </div>
                    </div>
                    <div className=" flex flex-row  font-Poppins ">
                        <div className="px-[8px] w-[50%] py-[5px]  border-b-[2px] border-r-[2px] border-[#3d3d3d]">Library Fine:</div>
                        <div className="   w-[50%] px-[8px]  flex flex-row justify-between items-center  h-full    border-b-[2px]  border-[#3d3d3d]">
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px]  ">0.00</div>
                        </div>
                    </div>
                    <div className=" flex flex-row  font-Poppins ">
                        <div className="px-[8px] w-[50%] py-[5px]  border-b-[2px] border-r-[2px] border-[#3d3d3d]">Computer Science Fee:</div>
                        <div className="   w-[50%] px-[8px]  flex flex-row justify-between items-center  h-full    border-b-[2px]  border-[#3d3d3d]">
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px]  ">0.00</div>
                        </div>
                    </div>
                    <div className=" flex flex-row  font-Poppins ">
                        <div className="px-[8px] w-[50%] py-[5px]  border-b-[2px] border-r-[2px] border-[#3d3d3d]">Project Fee:</div>
                        <div className="   w-[50%] px-[8px]  flex flex-row justify-between items-center  h-full    border-b-[2px]  border-[#3d3d3d]">
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px]  ">0.00</div>
                        </div>
                    </div>
                    <div className=" flex flex-row  font-Poppins ">
                        <div className="px-[8px] w-[50%] py-[5px]  border-b-[2px] border-r-[2px] border-[#3d3d3d]">Other (VVN):</div>
                        <div className="   w-[50%] px-[8px]  flex flex-row justify-between items-center  h-full    border-b-[2px]  border-[#3d3d3d]">
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px]  ">0.00</div>
                        </div>
                    </div>
                    <div className=" flex flex-row  font-Poppins ">
                        <div className="px-[8px] w-[50%] py-[5px]  border-b-[2px] border-r-[2px] border-[#3d3d3d]">Other (SF):</div>
                        <div className="   w-[50%] px-[8px]  flex flex-row justify-between items-center  h-full    border-b-[2px]  border-[#3d3d3d]">
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px]  ">0.00</div>
                        </div>
                    </div>
                    <div className=" flex flex-row  font-Poppins ">
                        <div className="px-[8px] w-[50%] py-[5px]  border-b-[2px] border-r-[2px] border-[#3d3d3d]">Quartely Total:</div>
                        <div className="   w-[50%] px-[8px]  flex flex-row justify-between items-center  h-full    border-b-[2px]  border-[#3d3d3d]">
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px] border-r-[2px] border-[#3d3d3d]">0.00</div>
                            <div className="text-center w-full py-[5px]  ">0.00</div>
                        </div>
                    </div>

                    <div className=" flex flex-row  font-Poppins ">
                        <div className="px-[8px] w-[50%] py-[5px]  border-b-[2px] border-r-[2px] border-[#3d3d3d]">Admission Fee:</div>
                        <div className="   w-[50%]   flex flex-row justify-between items-end  h-full    border-b-[2px]   border-[#3d3d3d]">
                            <div className="text-end w-full px-[40px]  py-[5px] ">0.00</div>

                        </div>
                    </div>

                    <div className=" flex flex-row  font-Poppins ">
                        <div className="px-[8px] w-[50%] py-[5px] font-semibold  border-b-[2px] border-r-[2px] border-[#3d3d3d]">Grand Amount/Total:</div>
                        <div className="   w-[50%]   flex flex-row justify-between items-end  h-full    border-b-[2px]  border-[#3d3d3d]">
                            <div className="text-end w-full px-[40px] font-semibold  py-[5px] ">1800.00</div>

                        </div>
                    </div>

                    <div className="w-full h-[30px]  border-b-[2px] border-[#3d3d3d]  ">

                    </div>

                    <div className="w-full  font-Poppins  px-[8px]">
                        KVS has authorized Union Bank of India for collection of online as well as off line Fee. It is a
                        computer generated report and does not require signature
                    </div>



                </div>
            </div>


        </>
    )
}

export default Pdf;