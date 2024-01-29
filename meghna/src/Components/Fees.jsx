import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useRef } from "react";
import Footer from "./Footer";






function Fees({ data, gotdata }) {


    var studentid = useRef();
    var dateOfBirth = useRef();
    var capta = useRef();

    const navigate = useNavigate();




    // code for genrating the captcha code start
    let uniquechar = "";
    const randomchar =
        "ABCDEFGHIJ3KLM5NOP6Q2RST2UVWX5YZab6c2d1e1f1g5hijklmnopqrstuvwxyz0123456789";
    for (let i = 1; i < 9; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }
    // code for genrating the captcha code end






    function checkForLogin() {
        var sid = studentid.current.value;
        var sdob = dateOfBirth.current.value;
        var scap = capta.current.value;

        let confirmID = false;
        let confirmCap = false;

        let uid;
        let udob;


        if (sid == "" && sdob == "" && scap == "") {
            alert("please Enter Student Id and Date of Birth and Capta !");
        }

        if (sid == "") {
            alert("please Enter Student Id !");

        }
        else if (sdob == "") {
            alert("please Enter Date of Birth !");
        }
        if (scap == "") {
            alert("please Enter  Capta !");

        }
        if (scap != "") {

            if (uniquechar != scap) {
                alert("Wrong Capta code !");
            }
            else {
                confirmCap = true;
            }

        }








        for (let i = 0; i < data.length; i++) {
            if (sid == data[i].id && sdob === `${data[i].dob}`) {
                confirmID = true;

                uid = data[i].id;
                udob = data[i].dob;
            }

        }


        if (confirmID && confirmCap) {


            let a = [uid, udob];
            gotdata(a);
            navigate("/Login");
        }
        else {
            console.log("Id not match");
        }






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

            <div className="w-ful md:px-[20px] lg:px-[150px] gap-[2px]   items-center flex flex-row pt-[2px] pb-[20px]  ">
                <div>
                    <img src="./img/banner.jpg" className=" w-full" alt="asf" />
                </div>

            </div>

            {/* =========================== FEATURS AND BENEFIT SECTION START ============================== */}
            <div className="flex flex-row justify-between items-center w-full py-[20px] md:px-[20px] lg:px-[150px]">
                <div className="  w-[720px]">
                    <div className="p-[8px] bg-[#94949427]  flex  rounded-md  w-[100%] flex-col items-center justify-center ">
                        <div className="border-b-4 font-Poppins text-[16px] font-semibold pb-[4px]  text-[#0b009a]  w-full  text-center border-[#ffa300]">
                            <p>Fees Payment through Union Fee Pay</p>
                        </div>
                        <div className="text-[13px]  font-Poppins text-[#0a0705] pt-[15px]">
                            Union Fee Pay, a fee collection solution offered by Union Bank of India, is a set of solutions offered to Educational Institutions. Union Fee Pay takes care of all fee components applicable to each and every student i.e. Tuition Fee, VVN Fee, Computer Fee etc.
                        </div>
                    </div>

                    <div className="pt-[20px] border-b-[0.6px] border-[#ffa300]">
                        <button className="text-white bg-gradient-to-b from-[#0a5bc8]  transition duration-300  to-[#062f61] hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md font-Lexend text-[18px] px-5 py-2.5 text-center mr-2 mb-2"> Features & Benefits</button>
                    </div>
                </div>

                <div className="flex lg:w-[35%] justify-center md:ml-5  ">
                    <img src="./img/logo2.png" className=" md:h-[150px] md:w-[380px] lg:h-[120px]" alt="afsd" />
                </div>


            </div>




            {/* =========================== FEATURS AND BENEFIT SECTION END ============================== */}



            <div className="w-full md:px-[20px] lg:px-[150px] flex flex-row md:gap-[20px] lg:gap-[110px] justify-between items-center">
                {/* keyfeature section  start*/}
                <div className="text-[#8a8a8a]  text-[13px] space-y-1  font-Work">
                    <h3 className=" text-[#030472] text-[16px] font-semibold pb-[12px]">Key Features</h3>
                    <div className="flex flex-row gap-[6px] items-start">
                        <i className="fa fa-circle text-[8px] pt-1 text-[#215281] " aria-hidden="true"></i>
                        <p>Entire Fee of all Vidyalayas pan-India will be collected by Union Bank of India</p>
                    </div>
                    <div className="flex flex-row gap-[6px] items-start">
                        <i className="fa fa-circle text-[8px] pt-1 text-[#215281]" aria-hidden="true"></i>
                        <p>Fee can be paid through Offline as well as Online modes.</p>
                    </div>
                    <div className="flex flex-row gap-[6px] items-start">
                        <i className="fa fa-circle text-[8px] pt-1 text-[#215281]" aria-hidden="true"></i>
                        <p>Students/Parents/Stakeholders of KVS can make payment of their Vidyalaya fee through Any Credit Card or Any Bank Debit Card or Any Bank Internet Banking.</p>
                    </div>
                    <div className="flex flex-row gap-[6px] items-start">
                        <i className="fa fa-circle text-[8px] pt-1 text-[#215281]" aria-hidden="true"></i>
                        <p>Students/Parents/Stakeholders of KVS can make payment of their Vidyalaya fee through any Bank Mobile Banking Application in their Smartphone.</p>
                    </div>
                    <div className="flex flex-row gap-[6px] items-start">
                        <i className="fa fa-circle text-[8px] pt-1 text-[#215281]" aria-hidden="true"></i>
                        <p>Students/Parents/Stakeholders of KVS can visit any branch of Union Bank of India across the country for the payment of Vidyalaya fee.</p>
                    </div>
                    <div className="flex flex-row gap-[6px] items-start">
                        <i className="fa fa-circle text-[8px] pt-1 text-[#215281]" aria-hidden="true"></i>
                        <p>Easy Reconciliation for Vidyalayas.</p>
                    </div>
                    <div className="flex flex-row gap-[6px] items-start">
                        <i className="fa fa-circle text-[8px] pt-1 text-[#215281]" aria-hidden="true"></i>
                        <p>Automated Calculation of Fee of every student.</p>
                    </div>
                    <div className="flex flex-row gap-[6px] items-start">
                        <i className="fa fa-circle text-[8px] pt-1 text-[#215281]" aria-hidden="true"></i>
                        <p className=" underline text-[#215281]"><a href="#">Frequently Asked Question.</a></p>
                    </div>


                </div>
                {/* keyfeature section  end*/}



                {/* form section  start*/}


                <div className="w-[600px] mx-auto text-[16px] border-[1px] border-gray-800  rounded-md   overflow-hidden  shadow-md text-[#636363] ">

                    <h1 className="  font-bold bg-gradient-to-b from-[#0a5bc8]  transition duration-300  to-[#062f61]  py-[6px] px-[8px] capitalize  font-Poppins text-white ">Make Payment</h1>

                    <div className="flex flex-col  ">
                        <div className="border-b-[1px] border-gray-800 py-[8px] pt-[12px] px-[8px]">
                            <label className="" htmlFor="username">Student Unique ID</label>
                            <input ref={studentid} id="username" type="number" className="block w-full px-1  text-gray-700 bg-white border border-gray-300 rounded-[3px] " required></input>
                        </div>

                        <div className="border-b-[1px] border-gray-800 py-[8px] pt-[12px] px-[8px]">
                            <label className="" htmlFor="emailAddress">Date of Birth (DD/MM/YYYY):</label>
                            <input id="dob" type="date" ref={dateOfBirth} className="block w-full px-1  text-gray-700 bg-white border border-gray-300 rounded-[3px] " required></input>
                        </div>

                        <div className="border-b-[1px] border-gray-800 py-[8px] pt-[12px] px-[8px]">
                            <label className="" htmlFor="password">Captcha:</label>
                            <input id="text" ref={capta} type="text" className="block w-full px-1  text-gray-700 bg-white border border-gray-300 rounded-[3px] " required></input>
                        </div>
                        <div className="border-b-[1px] border-gray-800 py-[8px] pt-[12px] line-through px-[8px]">
                            {
                                uniquechar
                            }
                        </div>



                        <div className="flex justify-start bg-[#e5f4fe] py-[8px] px-[8px]">


                            <button onClick={() => checkForLogin()} className="px-6 py-2  text-white font-medium transition-colors duration-200 transform bg-gradient-to-b from-[#0a5bc8]    to-[#062f61] rounded-3xl">
                                Login

                            </button>




                        </div>

                    </div>


                </div>
                {/* form section  end*/}
            </div>






            {/* ====================================== Footer section  start ============================================================ */}
            <Footer marquee="false" />
            {/* ====================================== Footer section  end ============================================================ */}


        </>

    )
}


export default Fees;