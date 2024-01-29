import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom';
import { Outlet } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Minidash from "../Dashboard/Minidash";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem
} from "@nextui-org/react";
import Addcollege from "../Dashboard/Addcollege";
import Addstudents from "../Dashboard/Addstudents";
import Findstudents from "../Dashboard/Findstudents";
import { Navigate } from 'react-router';
import { Select, Input, Textarea, FileInput, Button, Group, CloseButton } from '@mantine/core';
import { root } from 'postcss';
import { useNavigate } from 'react-router';




const pri = "#ffa300";




function Dashboard({ obj }) {

    
    return (
        <>



            <div className='w-[100vw] h-[100vh]  bg-gray-200 bg-center  bg-cover '>
            <ToastContainer />
                {/* NAVBAR START */}
                {/* backdrop:filter backdrop-blur-[9px]    bg-[#ffffff5b] */}
                <div className="flex flex-row  h-[12vh]   w-full   justify-between items-center  bg-[#ffffff] pl-[50px] pr-[6%] py-[4px]">


                    <div className="flex flex-row justify-center items-center gap-5">
                        <div className="  px-[25px]  w-full ">
                            <img src="./img/logo2.png" alt="logo" className="h-[80px] w-full " title="Meghana Group" />
                        </div>


                    </div>

                    <div className=' flex flex-row justify-center items-center gap-5'>
                        <div>
                            <p className=' font-Poppins  text-[#ed473c]'>Last seen: 12:50pm 12-Jan</p>
                        </div>


                    </div>

                </div>
                {/* NAVBAR END */}



                {/* Herosection START */}
                <div className=" w-full    gap-[2px]  py-2 flex flex-row justify-between h-[calc(100vh_-_12vh)]  items-start">


                    {/* sidepanel START */}
                    <div className="   backdrop:filter backdrop-blur-[9px]    rounded-lg  h-full  bg-white  w-[18%]   space-y-1  box-border">

                        <div className='w-full  p-2 py-2 space-y-1'>
                            <div className='p-1 border-[2px] border-[#ed473c]   rounded-full w-[40%] mx-auto'>
                                <img src="./img/astro1.jpg" alt="profile" title={obj.User} className='w-[100%] h-[100%]   rounded-full' />
                            </div>

                            <div className=' mx-auto font-Poppins text-[#ed473c] text-[18px]  w-fit'>
                                <p>{obj.User}</p>
                            </div>


                        </div>


                        <div className=' flex w-full flex-col text-[16px] font-Poppins   pt-4 '>
                            <Dropdown className='w-[241px]  ml-[-16px]   my-[-10px] rounded-md '>
                                <DropdownTrigger className='w-full '>
                                    <button className='  active:text-white active:bg-[#fc1d1d]  px-8 py-3 text-left' >Profile</button>
                                </DropdownTrigger>
                                <DropdownMenu className='w-full  rounded-xl   bg-[#e4e4e4d5] backdrop:filter backdrop-blur-md p-2 '

                                // onAction={(key) => alert(key)}
                                >
                                    <DropdownItem key="new" className='w-full rounded-lg  hover:text-white hover:bg-[#fc1d1d] px-8 py-3 text-left '>
                                        <button className=''>Edit</button>
                                        

                                    </DropdownItem>
                                    <DropdownItem onClick={obj.logoutbutton} key="new" className='w-full  rounded-lg  hover:text-white hover:bg-[#fc1d1d] px-8 py-3 text-left '>
                                        <button  className=' '>Logout</button>
                                    </DropdownItem>

                                </DropdownMenu>
                            </Dropdown>
                            <button onClick={() => obj.movetoMiniDash()} className={'w-full   px-8 py-3 text-left ' +
                                (obj.selectedTab == "Dashboard" ? "text-white  bg-[#fc1d1d]" : "")}>
                                Dashboard
                            </button>

                            <button onClick={() => obj.movetoFindstudents("movedto find students")} className={'w-full  px-8 py-3 text-left ' +
                                (obj.selectedTab == "FindStudentes" ? "text-white  bg-[#fc1d1d]" : "")}>
                                Find Students
                            </button>
                            <button onClick={() => obj.movetoAddstudents()} className={'w-full  px-8 py-3 text-left ' +
                                (obj.selectedTab == "AddStudents" ? "text-white  bg-[#fc1d1d]" : "")}>
                                Add Students
                            </button>
                            <button onClick={() => obj.movetoAddcollege()} className={'w-full  px-8 py-3 text-left ' +
                                (obj.selectedTab == "AddCollege" ? "text-white  bg-[#fc1d1d]" : "")}>
                                Add College
                            </button>
                        </div>
                    </div>


                    {/* sidepanel END */}



                    {/* Main content START */}
                    <div className="  self-start  h-full   w-[100%]  ">
                        <div className=' px-2 h-full w-full text-[16px]  overflow-hidden '  >

                            <div className='w-full h-full overflow-auto scrollbar  text-[16px]   backdrop:filter backdrop-blur-[8px]   bg-[#ffffff]  rounded-md  '>

                                {/* all content of right section here start */}
                                {/* all content of right section here start */}
                                <Outlet />





                                {/* EDIT POPUP END */}



                                {/* all content of right section here end */}
                                {/* all content of right section here end */}
                            </div>
                        </div>
                    </div>
                    {/* Main content END */}

                </div >
                {/* Herosection END */}



            </div >

        </>
    )
}

export default Dashboard;