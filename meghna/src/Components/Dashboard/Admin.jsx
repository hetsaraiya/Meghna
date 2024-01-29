import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { Select, Input, Textarea, FileInput, Button, Group, CloseButton } from '@mantine/core';
import { root } from 'postcss';
import { Month } from "@mantine/dates";
import Log from "./Log"
 
import SignUp from "./SignUp";


function Admin({ signup, Loginme }) {
    const navi = useNavigate();

    return (
        <>
            {/* NAVBAR START */}
            <div className="flex flex-row  h-[12vh]   w-full   justify-between items-center  bg-[#ffffff] pl-[50px] pr-[6%] py-[4px]">
                <div className="flex flex-row justify-start items-center gap-5">
                    <div className="  px-[25px]  w-full ">
                        <img src="./img/logo2.png" alt="logo" className=" h-[80px] w-full " title="Meghana Group" />
                    </div>
                </div>
            </div>
            {/* NAVBAR END */}


            {/* <Log Loginme={Loginme} /> */}

            <SignUp />






        </>
    )
}


export default Admin;