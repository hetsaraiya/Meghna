import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom';

import { Navigate } from 'react-router';
import { Select, Input, Textarea, FileInput, Button, Group, CloseButton } from '@mantine/core';
import { root } from 'postcss';




const pri = "#ffa300";

function Dashboard() {
    const [selectCat, setselectCat] = useState('');
    const [selectColl, setselectColl] = useState('');
    const [selectDepart, setselectDepart] = useState('');
    const [selectYear, setselectYear] = useState('');
    const [selectSem, setselectSem] = useState('');
    const [selectDivision, setselectDivision] = useState('');

    let User = "Suthar Dhiraj";



    const [listData, setlistData] = useState([
        {
            nameofStudent: "Suthar Dhiraj",
            enrollmentID: "23BCA24262",
            phone: "7046479126",
            Email: "jaslfjasdlfkjl@gmail.com",
        },
        {
            nameofStudent: "student name1",
            enrollmentID: "23BCA24262",
            phone: "7046479126",
            Email: "studnt1@gmail.com",
        },
        {
            nameofStudent: "student name2",
            enrollmentID: "23BCA24262",
            phone: "7046479126",
            Email: "student2@gmail.com",
        }
    ]);




    const sFullName = useRef("");
    const fatherName = useRef("");
    const sID = useRef("");

    const sPhone = useRef("");
    const pPhone = useRef("");
    const sdob = useRef("");

    const email = useRef("");
    const paid = useRef("");

    const add = useRef("");
    const city = useRef("");
    const state = useRef("");
 

    const [selectGender, setselectGender] = useState("");



    const [value, setValue] = useState('');


    function submitMe() {

        if (selectCat == "") {
            alert("Please select the Category !");
        }
        else if (selectColl == "") {

            alert("Please select the College/School/hostel !");
        }
        else if (selectDepart == "") {

            alert("Please select the Department !");
        }
        else if (selectYear == "") {

            alert("Please select the Year !");
        }
        else if (selectSem == "") {

            alert("Please select the Semister !");
        }
        else if (selectDivision == "") {

            alert("Please select the Division !");
        }



    }








    function selectColleges() {
        if (selectCat == "College") {
            return [
                "Kumari Meghnaben Dahyabhai Patel Girls Hostel",
                "Mrs.Madhuben Kantibhai Patel(Ram) Samuh Lagna Bhavan",
                "Shri Rajeshbhai Kantibhai Patel B.C.A. College",
                "Shri Karshandas Jethidas Patel B.B.A. College",
                "Smt Champaben Karshandas Patel M.Sc. College",
                "Shri Ganeshbhai Nagjibhai Patel Commerce (English Medium) College",
                "Smt Kashiben Ambalal Patel (Vamj) Science College",
                "Sri Umiya College of Nursing (B.Sc.)",
                "Sri Umiya Nursing College (GNM)",
                "Vasubhai & Kantibhai Patel Institute of Engineering Workshop",
                "Shri Kantibhai Naranbhai Patel (Ram) Science Girls Hostel",

            ];
        }


        if (selectCat == "School") {
            return ["Sethshree Dahyabhai Prahaladbhai Patel Secondary School for Girls", "Sethshree Karsandas Jethidas Patel Sanskar Vidyalaya",
                "Shri Rajeshkumar Kantilal Patel Sanskar English Medium School",];
        }
        if (selectCat == "Hostel") {
            return [, "Bhagwanbhai Gokaldas Patel Restaurant", "Shri Lovejibhai Bhimdas Patel College Girls Hostel",
                "Shri Kantibhai Naranbhai Patel (Ram) College Boys Hostel",
            ];
        }
    }



    function collegeEdit() {

    }
    function collegeAdd() {
        alert("Add Clicked");
    }



    let category = ["School", "College", "Hostel"];

    function addStudent() {
        /*   console.log(studentName.current.value);  */
        let a = document.querySelector("#addStudent");
        a.classList.toggle("hi");





    }



    let addData = {
        sFullName: sFullName.current.value,
        fatherName: fatherName.current.value,
        sID: sID.current.value,
        sPhone: sPhone.current.value,
        pPhone: pPhone.current.value,
        sdob: sdob.current.value,
        gender: selectGender,
        email: email.current.value,
        paid: paid.current.value,
        add: add.current.value,
        city: city.current.value,
        state: state.current.value,
    }





    function AddedStudent() {



        let a = {
            nameofStudent: addData.sFullName,
            enrollmentID: addData.enrollmentID,
            phone: addData.sPhone,
            Email: addData.email,
        }


        console.log(email.current.value);


        // console.log(a);



        if (a.nameofStudent != "" && a.enrollmentID != "" && a.phone != "" && a.Email != "") {

            setlistData([...listData, a]);

        }

        sFullName.current.value = "";
        sID.current.value = "";
        sPhone.current.value = ""
        email.current.value = "";
        fatherName.current.value = "";
        pPhone.current.value = "";
        sdob.current.value = "";
        setselectGender("");
        paid.current.value = "";
        add.current.value = "";
        city.current.value = "";
        state.current.value = "";


    }



    function onDeleteStudent(e) {

        let a = {
            nameofStudent: e.nameofStudent,
            enrollmentID: e.enrollmentID,
            phone: e.phone,
            Email: e.Email,
        }

        let hr = [];

        listData.map((e) => {

            if (e.Email == a.Email && e.nameofStudent == a.nameofStudent && e.phone == a.phone && e.enrollmentID == a.enrollmentID) {
                console.log("false");

            }
            else {
                console.log("true");

                hr = [...hr, e];
            }
        })

        setlistData([...hr]);
    }







    let l;
    function onEditStudent(e) {

        let a = {
            nameofStudent: e.nameofStudent,
            enrollmentID: e.enrollmentID,
            phone: e.phone,
            Email: e.Email,
        }

        let h = document.querySelector("#editpop");
        h.classList.toggle("hi");


        listData.map((e, index) => {

            if (e.Email == a.Email && e.nameofStudent == a.nameofStudent && e.phone == a.phone && e.enrollmentID == a.enrollmentID) {
                l = index;

            }
        })

        console.log("l is ::" + l);

        addData = {

            sFullName: a.nameofStudent,
            sID: a.enrollmentID,
            sPhone: a.phone,
            email: a.Email,
            fatherName: "",
            pPhone: "",
            sdob: "",
            gender: "",
            paid: "",
            add: "",
            city: "",
            state: "",
        }






        sFullName.current.value = a.nameofStudent;
        sID.current.value = a.enrollmentID;
        sPhone.current.value = a.phone;
        email.current.value = a.Email;







    }



    function UpdateStudent() {
        let h = document.querySelector("#editpop");
        h.classList.toggle("hi");


        let addData2 = {
            sFullName: sFullName.current.value,
            fatherName: fatherName.current.value,
            sID: sID.current.value,
            sPhone: sPhone.current.value,
            pPhone: pPhone.current.value,
            sdob: sdob.current.value,
            gender: selectGender,
            email: email.current.value,
            paid: paid.current.value,
            add: add.current.value,
            city: city.current.value,
            state: state.current.value,
        }



        let j = {
            nameofStudent: addData2.sFullName,
            enrollmentID: addData2.sID,
            phone: addData2.sPhone,
            Email: addData2.email,
        }


        let g = listData;
        g[l] = j

        setlistData([...g])
    }







    return (
        <>


            <div className='w-[100vw] h-[100vh]  bg-gray-200 bg-center  bg-cover '>

                {/* NAVBAR START */}
                {/* backdrop:filter backdrop-blur-[9px]    bg-[#ffffff5b] */}
                <div className="flex flex-row  h-[12vh]   w-full   justify-between items-center  bg-[#ffffff] pl-[50px] pr-[6%] py-[4px]">


                    <div className="flex flex-row justify-center items-center gap-5">
                        <div className="  px-[25px]  w-full ">
                            <img src="./img/logo2.png" alt="logo" className=" h-[80px] w-full " title="Meghana Group" />
                        </div>


                    </div>

                    <div className=' flex flex-row justify-center items-center gap-5'>
                        <div>
                            <p className=' font-Poppins  text-[#ed473c]'>12:50pm 12-Jan</p>
                        </div>
                        <div>
                            <button className='border-[2px] border-[#ed473c] rounded-lg py-1 w-[150px] flex justify-center items-center font-Poppins text-[#ed473c] hover:bg-[#ffffffad]'>Profile</button>
                        </div>
                        <div>
                            <button className='border-[2px] border-[#ed473c] rounded-lg py-1 w-[150px] flex justify-center items-center font-Poppins text-[#ed473c] hover:bg-[#ffffffad]'>Log Out</button>
                        </div>
                    </div>

                </div>
                {/* NAVBAR END */}



                {/* Herosection START */}
                <div className=" w-full   gap-[2px]  flex flex-row justify-between h-[calc(100vh_-_12vh)]  items-start">


                    {/* sidepanel START */}
                    <div className="   backdrop:filter backdrop-blur-[9px]    h-full  bg-[#ffffff]  w-[18%]   space-y-1  box-border">

                        <div className='w-full  p-2 py-7  space-y-3'>
                            <div className='p-1 border-[2px] border-[#ed473c]   rounded-full w-[40%] mx-auto'>
                                <img src="./img/astro1.jpg" alt="profile" title={User} className='w-[100%] h-[100%]   rounded-full' />
                            </div>

                            <div className=' mx-auto font-Poppins text-[#ed473c]  w-fit'>
                                <p>{User}</p>
                            </div>

                            <div className='mx-auto w-fit'>
                                <button className='border-[2px] border-[#ed473c] rounded-lg py-1 w-[150px] flex justify-center items-center font-Poppins text-[#ed473c] hover:bg-[#ffffffad]'>Profile</button>
                            </div>
                            <div className='mx-auto w-fit'>
                                <button className='border-[2px] border-[#ed473c] rounded-lg py-1 w-[150px] flex justify-center items-center font-Poppins text-[#ed473c] hover:bg-[#ffffffad]'>Edit</button>
                            </div>

                        </div>
                    </div>
                    {/* sidepanel END */}


                    {/* Main content START */}
                    <div className="  self-start  h-full   w-[100%]  ">
                        <div className=' p-2 h-full w-full   '>


                            {/* all content of right section here start */}
                            {/* all content of right section here start */}

                            <div className='w-full h-full overflow-auto scrollbar shadow-[-2px_-2px_1px_0px_red]  backdrop:filter text-[20px] backdrop-blur-[8px]   bg-[#f3f3f339]  rounded-tl-md  '>


                                {/* EDIT AND ADD BUTTON START{} */}
                                <div className='w-full  py-4 px-[6%]  text-[16px] flex  items-center justify-end gap-5'>
                                    <button onClick={collegeEdit} className='border-[2px] border-[#ed473c] rounded-lg py-1 w-[150px] flex justify-center items-center font-Poppins text-[#ed473c] hover:bg-[#ffffffad]'>Edit</button>
                                    <button onClick={collegeAdd} className='border-[2px] border-[#ed473c] rounded-lg py-1 w-[150px] flex justify-center items-center font-Poppins text-[#ed473c] hover:bg-[#ffffffad]'>Add</button>
                                </div>
                                {/* EDIT AND ADD BUTTON END{} */}






                                {/* FORM SECTION START{} */}
                                <div className=' pt-7 w-full px-[6%] font-Poppins text-[22px] font-medium text-[#1c1c1c]'>
                                    <p className=' border-b-[0.6px]  py-2 border-[#3333334c]'>Find Students</p>

                                </div>
                                <div className='w-full py-[3%]     px-[6%]'>

                                    {/* componetn  1 start */}
                                    <div className=' w-full   font-Lexend grid grid-cols-3  gap-y-24  text-[#1c1c1c]'>

                                        <div >
                                            <Select id='category' className=' w-[300px] '
                                                styles={{
                                                    input: { "background": "#ffffff81" },
                                                    label: { "font-size": "16px" },
                                                }}
                                                label="Select School/College/Hostel"
                                                placeholder=""
                                                data={category}
                                                searchable
                                                searchValue={selectCat}
                                                onSearchChange={setselectCat}
                                                clearable
                                            />

                                        </div>


                                        <div>

                                            <Select id='college' className='w-[300px] '
                                                styles={{
                                                    input: { "background": "#ffffff81" },
                                                    label: { "font-size": "16px" },
                                                }}
                                                label={`Select ${selectCat}`}
                                                placeholder=""
                                                data={selectColleges()}
                                                searchable
                                                searchValue={selectColl}
                                                onSearchChange={setselectColl}
                                                clearable
                                            />

                                        </div>
                                        <div>

                                            <Select id='department' className='w-[300px] '
                                                styles={{
                                                    input: { "background": "#ffffff81" },
                                                    label: { "font-size": "16px" },
                                                }}

                                                label={`Select Department/Std/Division`}
                                                placeholder=""
                                                data={["BCOM", "BBA", "BCA"]}
                                                searchable
                                                searchValue={selectDepart}
                                                onSearchChange={setselectDepart}
                                                clearable
                                            />

                                        </div>

                                        <div>

                                            <Select id='accYear' className='w-[300px] '
                                                styles={{
                                                    input: { "background": "#ffffff81" },
                                                    label: { "font-size": "16px" },
                                                }}

                                                label={`Select Current Year`}
                                                placeholder=""
                                                data={["2004", "2001", "2007"]}
                                                searchable
                                                searchValue={selectYear}
                                                onSearchChange={setselectYear}
                                                clearable
                                            />

                                        </div>


                                        <div>

                                            <Select id='semister' className='w-[300px] '
                                                styles={{
                                                    input: { "background": "#ffffff81" },
                                                    label: { "font-size": "16px" },
                                                }}

                                                label={`Select Semister`}
                                                placeholder=""
                                                data={["sem-1", "sem-2", "sem-3"]}
                                                searchable
                                                searchValue={selectSem}
                                                onSearchChange={setselectSem}
                                                clearable
                                            />

                                        </div>
                                        <div>

                                            <Select id='Division' className='w-[300px] '
                                                styles={{
                                                    input: { "background": "#ffffff81" },
                                                    label: { "font-size": "16px" },
                                                }}

                                                label={`Select Division`}
                                                placeholder=""
                                                data={["A", "B", "C"]}
                                                searchable
                                                searchValue={selectDivision}
                                                onSearchChange={setselectDivision}
                                                clearable
                                            />

                                        </div>



                                    </div>
                                    {/* componetn  1 end */}

                                </div>

                                <div className='w-[50%] flex justify-center py-2 mx-auto bg-gradient-to-r from-transparent via-[#ffffff23] to-transparent'>
                                    <button onClick={submitMe} className='border-[2px] text-[16px] border-[#ed473c] rounded-lg py-1 w-[150px] flex justify-center items-center font-Poppins text-[#ed473c] ed473c:bg-[#ffffffad]'>Submit</button>

                                </div>
                                {/* FORM SECTION END{} */}





                                {/* LIST OF STUDENT SECTION START */}
                                <div className=' pt-10 pb-2 w-full px-[6%] font-Poppins text-[22px] font-medium text-[#1c1c1c]'>
                                    <p className=' border-b-[0.6px]  py-2 border-[#3333334c]'>List of Students</p>

                                </div>


                                <div className='w-full pb-4 font-Poppins px-[6%] mx-auto'>
                                    <div className='w-full   flex flex-row justify-between items-center'>

                                        <div>
                                            <p>Total: {listData.length}</p>
                                        </div>
                                        <div className=' flex gap-5 flex-row justify-center items-center  font-Poppins text-[#414141]'>

                                            <FileInput

                                                clearable
                                                aria-label="My input"
                                                styles={{
                                                    input: {
                                                        "background": "transparent",
                                                        "border": "2px solid #ed473c",
                                                        "borderRadius": "8px",
                                                        "fontFamily": "Poppins,sarif",
                                                        "fontSize": "16px",
                                                        "color": "#ed473c",
                                                        "padding": "0px 16px",
                                                    },
                                                    placeholder: {
                                                        "color": "#414141",
                                                    },
                                                    root: {
                                                        "color": "#414141",

                                                    }

                                                }}
                                                placeholder="Upload Excel Sheet"
                                                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
                                            <button onClick={addStudent} className='border-[2px] text-[16px] border-[#ed473c] rounded-lg py-1 w-[150px] flex justify-center items-center font-Poppins text-[#ed473c] hover:bg-[#ffffffad]'>Add Student</button>

                                        </div>
                                    </div>
                                </div>




                                {/* ADD STUDENT FORM START */}

                                <div id='addStudent' className=' hi w-full px-[6%] bg-[#8e8e8e2b] mb-8  py-10 font-Poppins text-[#303030]'>

                                    <div className='grid  grid-cols-3 gap-10'>
                                        <div className='flex flex-col w-full '>
                                            <Input.Wrapper label="Student's Name" size='lg'>
                                                <Input
                                                    type='text'
                                                    ref={sFullName}
                                                    styles={{
                                                        input: { "background": "#ffffff81", "font-size": "16px" },
                                                        label: { "fontSize": "16px" }
                                                    }}
                                                    placeholder="Surname  Firstname " />
                                            </Input.Wrapper>


                                        </div>
                                        <div className='flex flex-col w-full '>
                                            <Input.Wrapper label="Father's Full Name" size='lg'>
                                                <Input
                                                    type='text'
                                                    ref={fatherName}
                                                    styles={{
                                                        input: { "background": "#ffffff81", "font-size": "16px" },
                                                        label: { "fontSize": "16px" }
                                                    }}
                                                    placeholder="Fathername  Surname" />
                                            </Input.Wrapper>


                                        </div>
                                        <div className='flex flex-col w-full '>
                                            <Input.Wrapper label="Student Id" size='lg'>
                                                <Input
                                                    ref={sID}

                                                    type='number'
                                                    styles={{
                                                        input: { "background": "#ffffff81", "font-size": "16px" },
                                                        label: { "fontSize": "16px" }
                                                    }}
                                                    placeholder="Student's Name" />
                                            </Input.Wrapper>


                                        </div>
                                        <div className='flex flex-col w-full '>
                                            <Input.Wrapper label="Student's Phone Number" size='lg'>
                                                <Input
                                                    ref={sPhone}
                                                    type='number'
                                                    styles={{
                                                        input: { "background": "#ffffff81", "font-size": "16px" },
                                                        label: { "fontSize": "16px" }
                                                    }}
                                                    placeholder="Student's Phone Number" />
                                            </Input.Wrapper>


                                        </div>
                                        <div className='flex flex-col w-full '>
                                            <Input.Wrapper label="Parent's Number" size='lg'>
                                                <Input
                                                    ref={pPhone}
                                                    type='number'
                                                    styles={{
                                                        input: { "background": "#ffffff81", "font-size": "16px" },
                                                        label: { "fontSize": "16px" }
                                                    }}
                                                    placeholder="Parent's Name" />
                                            </Input.Wrapper>


                                        </div>

                                        <div className='flex flex-col w-full '>
                                            <Input.Wrapper label="Date of Birth" size='lg'>
                                                <Input
                                                    ref={sdob}
                                                    type='date'
                                                    styles={{
                                                        input: { "background": "#ffffff81", "font-size": "16px" },
                                                        label: { "fontSize": "16px" }
                                                    }}
                                                    placeholder="Student's Name" />
                                            </Input.Wrapper>


                                        </div>
                                        <div className='flex flex-col w-full '>
                                            <Select id='category' className=' w-full '
                                                styles={{
                                                    input: { "background": "#ffffff81" },
                                                    label: { "font-size": "16px" },
                                                }}

                                                label="Gender"
                                                placeholder="Select Gender"
                                                data={["Male", "Female"]}
                                                searchable
                                                searchValue={selectGender}
                                                onSearchChange={setselectGender}
                                                clearable
                                            />


                                        </div>
                                        <div className='flex flex-col w-full '>
                                            <Input.Wrapper typeof='email' label="Email" size='lg'>
                                                <Input
                                                    ref={email}
                                                    type='email'
                                                    styles={{
                                                        input: { "background": "#ffffff81", "font-size": "16px" },
                                                        label: { "fontSize": "16px" }
                                                    }}
                                                    placeholder="Student's Name" />
                                            </Input.Wrapper>
                                        </div>

                                        <div className='flex flex-col w-full '>
                                            <Input.Wrapper label="Amount of Fees Paid" size='lg'>
                                                <Input
                                                    ref={paid}
                                                    type='number'
                                                    styles={{
                                                        input: { "background": "#ffffff81", "font-size": "16px" },
                                                        label: { "fontSize": "16px" }
                                                    }}
                                                    placeholder="Amount of Fees Paid" />
                                            </Input.Wrapper>
                                        </div>

                                        <div className='flex flex-col w-full '>
                                            <Input.Wrapper label="Address" size='lg'>
                                                <Input
                                                    type='text'
                                                    ref={add}
                                                    styles={{
                                                        input: { "background": "#ffffff81", "font-size": "16px" },
                                                        label: { "fontSize": "16px" }
                                                    }}
                                                    placeholder="House No.  Address..." />
                                            </Input.Wrapper>
                                        </div>
                                        <div className='flex flex-col w-full '>
                                            <Input.Wrapper label="City" size='lg'>
                                                <Input
                                                    type='text'
                                                    ref={city}
                                                    styles={{
                                                        input: { "background": "#ffffff81", "font-size": "16px" },
                                                        label: { "fontSize": "16px" }
                                                    }}
                                                    placeholder="Ex:- kalol, gandhinagar ..." />
                                            </Input.Wrapper>
                                        </div>
                                        <div className='flex flex-col w-full '>
                                            <Input.Wrapper label="State" size='lg'>
                                                <Input
                                                    type='text'
                                                    ref={state}
                                                    styles={{
                                                        input: { "background": "#ffffff81", "font-size": "16px" },
                                                        label: { "fontSize": "16px" }
                                                    }}
                                                    placeholder="ex:- Gujarat, Rajasthan ..." />
                                            </Input.Wrapper>
                                        </div>




                                    </div>




                                    <div className='w-full px-[6%] flex justify-center items-center pt-10 pb-5'>
                                        <button onClick={AddedStudent} className='border-[2px] text-[16px] border-[#ed473c] rounded-lg py-1 w-[150px] flex justify-center items-center font-Poppins text-[#ed473c] hover:bg-[#ffffffad]'>Add</button>
                                    </div>
                                </div>

                                {/* ADD STUDENT FORM END */}





                                <div className='w-full  font-Poppins  font-normal space-y-2  px-[6%]'>
                                    <div className='w-full  '>
                                        <table className=' w-full table-auto'>
                                            <thead>
                                                <tr id='tableHeading' className='text-[19px] bg-[#2d2d2d6e] text-white font-normal text-center'>
                                                    <th className='py-2'>Sr No.</th>
                                                    <th className='py-2'>Student Name</th>
                                                    <th className='py-2'>Enrollment Id</th>
                                                    <th className='py-2'>Phone</th>
                                                    <th className='py-2'>Email</th>
                                                    <th className='py-2'></th>
                                                </tr>
                                            </thead>
                                            <tbody id='tbody'>

                                                {
                                                    listData.map((e, index) => {

                                                        let k = [e.Email, e.enrollmentID, e.nameofStudent, e.phone];

                                                        return (
                                                            <>
                                                                <tr key={index} className='text-[16px] text-center'>
                                                                    <td className='py-3'>{index + 1}</td>
                                                                    <td className='py-3'>{e.nameofStudent}</td>
                                                                    <td className='py-3'>{e.enrollmentID}</td>
                                                                    <td className='py-3'>{e.phone}</td>
                                                                    <td className='py-3'>{e.Email}</td>
                                                                    <td className='py-3'>

                                                                        <div className='flex justify-center  items-center gap-7'>
                                                                            <i onClick={(k) => onEditStudent(e)} class="fa-solid fa-pen-to-square text-[#383838e4]   "></i>


                                                                            <i onClick={(k) => onDeleteStudent(e)} class="fa-solid fa-trash-can text-[#383838e4]  "></i>
                                                                        </div>
                                                                    </td >
                                                                </tr>

                                                            </>
                                                        )
                                                    })

                                                }
                                            </tbody>
                                        </table>



                                    </div>


                                </div>
                                {/* LIST OF STUDENT SECTION END */}



                            </div>



                            {/* EDIT POPUP START */}

                            <div id='editpop' className='hi  h-full backdrop-blur-lg backdrop-filter absolute top-0 left-0 w-full px-[6%] bg-[#8e8e8e2b] mb-8  py-10 font-Poppins text-[#303030]'>

                                <div className='w-full my-10  text-[20px] pt-5 pb-2 border-b-[1px] border-[#ed473c]'>
                                    Edit Student
                                </div>

                                <div className='grid w-[80%] mx-auto  grid-cols-3 gap-10'>
                                    <div className='flex flex-col w-full '>
                                        <Input.Wrapper label="Student's Name" size='lg'>
                                            <Input
                                                type='text'
                                                ref={sFullName}
                                                styles={{
                                                    input: { "background": "#ffffff81", "font-size": "16px" },
                                                    label: { "fontSize": "16px" }
                                                }}
                                                placeholder="Surname  Firstname " />
                                        </Input.Wrapper>


                                    </div>
                                    <div className='flex flex-col w-full '>
                                        <Input.Wrapper label="Father's Full Name" size='lg'>
                                            <Input
                                                type='text'
                                                ref={fatherName}
                                                styles={{
                                                    input: { "background": "#ffffff81", "font-size": "16px" },
                                                    label: { "fontSize": "16px" }
                                                }}
                                                placeholder="Fathername  Surname" />
                                        </Input.Wrapper>


                                    </div>
                                    <div className='flex flex-col w-full '>
                                        <Input.Wrapper label="Student Id" size='lg'>
                                            <Input
                                                ref={sID}

                                                type='text'
                                                styles={{
                                                    input: { "background": "#ffffff81", "font-size": "16px" },
                                                    label: { "fontSize": "16px" }
                                                }}
                                                placeholder="Student's Name" />
                                        </Input.Wrapper>


                                    </div>
                                    <div className='flex flex-col w-full '>
                                        <Input.Wrapper label="Student's Phone Number" size='lg'>
                                            <Input
                                                ref={sPhone}
                                                type='number'
                                                styles={{
                                                    input: { "background": "#ffffff81", "font-size": "16px" },
                                                    label: { "fontSize": "16px" }
                                                }}
                                                placeholder="Student's Phone Number" />
                                        </Input.Wrapper>


                                    </div>
                                    <div className='flex flex-col w-full '>
                                        <Input.Wrapper label="Parent's Number" size='lg'>
                                            <Input
                                                ref={pPhone}
                                                type='number'
                                                styles={{
                                                    input: { "background": "#ffffff81", "font-size": "16px" },
                                                    label: { "fontSize": "16px" }
                                                }}
                                                placeholder="Parent's Name" />
                                        </Input.Wrapper>


                                    </div>

                                    <div className='flex flex-col w-full '>
                                        <Input.Wrapper label="Date of Birth" size='lg'>
                                            <Input
                                                ref={sdob}
                                                type='date'
                                                styles={{
                                                    input: { "background": "#ffffff81", "font-size": "16px" },
                                                    label: { "fontSize": "16px" }
                                                }}
                                                placeholder="Student's Name" />
                                        </Input.Wrapper>


                                    </div>
                                    <div className='flex flex-col w-full '>
                                        <Select id='category' className=' w-full '
                                            styles={{
                                                input: { "background": "#ffffff81" },
                                                label: { "font-size": "16px" },
                                            }}

                                            label="Gender"
                                            placeholder="Select Gender"
                                            data={["Male", "Female"]}
                                            searchable
                                            searchValue={selectGender}
                                            onSearchChange={setselectGender}
                                            clearable
                                        />


                                    </div>
                                    <div className='flex flex-col w-full '>
                                        <Input.Wrapper typeof='email' label="Email" size='lg'>
                                            <Input
                                                ref={email}
                                                type='email'
                                                styles={{
                                                    input: { "background": "#ffffff81", "font-size": "16px" },
                                                    label: { "fontSize": "16px" }
                                                }}
                                                placeholder="Student's Name" />
                                        </Input.Wrapper>
                                    </div>

                                    <div className='flex flex-col w-full '>
                                        <Input.Wrapper label="Amount of Fees Paid" size='lg'>
                                            <Input
                                                ref={paid}
                                                type='number'
                                                styles={{
                                                    input: { "background": "#ffffff81", "font-size": "16px" },
                                                    label: { "fontSize": "16px" }
                                                }}
                                                placeholder="Amount of Fees Paid" />
                                        </Input.Wrapper>
                                    </div>

                                    <div className='flex flex-col w-full '>
                                        <Input.Wrapper label="Address" size='lg'>
                                            <Input
                                                type='text'
                                                ref={add}
                                                styles={{
                                                    input: { "background": "#ffffff81", "font-size": "16px" },
                                                    label: { "fontSize": "16px" }
                                                }}
                                                placeholder="House No.  Address..." />
                                        </Input.Wrapper>
                                    </div>
                                    <div className='flex flex-col w-full '>
                                        <Input.Wrapper label="City" size='lg'>
                                            <Input
                                                type='text'
                                                ref={city}
                                                styles={{
                                                    input: { "background": "#ffffff81", "font-size": "16px" },
                                                    label: { "fontSize": "16px" }
                                                }}
                                                placeholder="Ex:- kalol, gandhinagar ..." />
                                        </Input.Wrapper>
                                    </div>
                                    <div className='flex flex-col w-full '>
                                        <Input.Wrapper label="State" size='lg'>
                                            <Input
                                                type='text'
                                                ref={state}
                                                styles={{
                                                    input: { "background": "#ffffff81", "font-size": "16px" },
                                                    label: { "fontSize": "16px" }
                                                }}
                                                placeholder="ex:- Gujarat, Rajasthan ..." />
                                        </Input.Wrapper>
                                    </div>




                                </div>




                                <div className='w-full px-[6%] flex justify-center items-center pt-10 pb-5'>
                                    <button onClick={UpdateStudent} className='border-[2px] text-[16px] border-[#ed473c] rounded-lg py-1 w-[150px] flex justify-center items-center font-Poppins text-[#414141] ed473c:bg-[#ffffffad]'>Update</button>
                                </div>
                            </div>



                            {/* EDIT POPUP END */}



                            {/* all content of right section here end */}
                            {/* all content of right section here end */}
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