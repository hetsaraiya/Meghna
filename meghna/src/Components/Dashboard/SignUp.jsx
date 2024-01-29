import React, { useRef } from "react";
import { Select, Input, Textarea, FileInput, Button, Group, CloseButton } from '@mantine/core';
import { root } from 'postcss';
import { Month } from "@mantine/dates";



function SignUp() {
    const Email = useRef("");
    const Date = useRef("");
    const Month = useRef("");
    const Year = useRef("");
    const pass = useRef("");
    const repass = useRef("");
    const phonenumber = useRef("");

    const fullname = useRef("");
    let data = [Email.current.value, Date.current.value, Month.current.value, Year.current.value, pass.current.value];
    return (
        <>
            <div className="w-full px-[18%] ">


                <div className="w-full  overflow-hidden  flex bg-[#cfcfcf24]  flex-col rounded-xl  text-[#414141] " >

                    <div><p className="text-[22px] font-Poppins w-full bg-[#ed473c]  text-white text-center py-8">Create a Admin Panel Account</p></div>

                    <div className="  px-[5%] py-10  w-full border-x-[1px] gap-24 flex flex-row ">
                        <div className="  space-y-9 w-full">


                            <div>
                                <Input.Wrapper label="Enter Full Name" size='lg'>
                                    <Input
                                        type='text'
                                        ref={fullname}
                                        styles={{
                                            input: { "background": "#ffffff81", "font-size": "16px" },
                                            label: { "fontSize": "16px" }
                                        }}
                                        placeholder="surname yourname fathername" />
                                </Input.Wrapper>
                            </div>
                            <div>
                                <Input.Wrapper label="Phone Number" size='lg'>
                                    <Input
                                        type='number'
                                        ref={phonenumber}
                                        styles={{
                                            input: { "background": "#ffffff81", "font-size": "16px" },
                                            label: { "fontSize": "16px" }
                                        }}
                                        placeholder="ex:- 745755...." />
                                </Input.Wrapper>
                            </div>

                            <div>
                                <Input.Wrapper label="Email" size='lg'>
                                    <Input
                                        type='Email'
                                        ref={Email}
                                        styles={{
                                            input: { "background": "#ffffff81", "font-size": "16px" },
                                            label: { "fontSize": "16px" }
                                        }}
                                        placeholder="ex:- company@gmail.com" />
                                </Input.Wrapper>
                            </div>

                        </div>


                        <div className="   space-y-9 w-full">



                            <div className="w-full   ">

                                <div className="flex  flex-row gap-x-4">

                                    <Input.Wrapper label="Date" size='lg'>
                                        <Input
                                            type='number'
                                            ref={Date}
                                            styles={{
                                                input: { "background": "#ffffff81", "font-size": "16px" },
                                                label: { "fontSize": "16px" }
                                            }}
                                            placeholder="Date"
                                        />
                                    </Input.Wrapper>
                                    <Input.Wrapper label="Month" size='lg'>
                                        <Input
                                            type='number'
                                            ref={Month}
                                            styles={{
                                                input: { "background": "#ffffff81", "font-size": "16px" },
                                                label: { "fontSize": "16px" }
                                            }}
                                            placeholder="Month"
                                        />
                                    </Input.Wrapper>
                                    <Input.Wrapper label="Year" size='lg'>
                                        <Input
                                            type='number'
                                            ref={Year}
                                            styles={{
                                                input: { "background": "#ffffff81", "font-size": "16px" },
                                                label: { "fontSize": "16px" }
                                            }}
                                            placeholder="Year"
                                        />
                                    </Input.Wrapper>



                                </div>
                            </div>

                            <div>
                                <Input.Wrapper label="Set Password" size='lg'>
                                    <Input
                                        type='password'
                                        ref={pass}
                                        styles={{
                                            input: { "background": "#ffffff81", "font-size": "16px" },
                                            label: { "fontSize": "16px" }
                                        }}
                                        placeholder="Set Password"
                                    />
                                </Input.Wrapper>


                            </div>
                            <div>
                                <Input.Wrapper label="Confirm Password" size='lg'>
                                    <Input
                                        type='password'
                                        ref={repass}
                                        styles={{
                                            input: { "background": "#ffffff81", "font-size": "16px" },
                                            label: { "fontSize": "16px" }
                                        }}
                                        placeholder="Re-enter Password"
                                    />
                                </Input.Wrapper>

                            </div>

                        </div>
                    </div>

                    <div className="    w-full flex flex-col pb-9 justify-center items-center border-b-[1px] border-x-[1px]">
                        <div className="py-4">Already have account ? <a className="text-[#1a9030]  font-medium  underline underline-offset-2" href="#">Log In</a></div>
                        <button className=' transition-all duration-200  ease-in-out border-[2px] hover:bg-[#ed473c] hover:text-white border-[#ed473c] rounded-lg py-1 w-[150px] flex justify-center items-center font-Poppins text-[#ed473c] hover:bg-[#f4acacc4]'>Log In</button>
                    </div>

                </div>

            </div >

        </>
    )
}

export default SignUp;
