import React, { useRef, useState } from "react";
import {
  Select,
  Input,
  Textarea,
  FileInput,
  Button,
  Group,
  CloseButton,
} from "@mantine/core";
import { root } from "postcss";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function Minidash({ showing }) {
  const [selectCat, setselectCat] = useState("");
  const [selectColl, setselectColl] = useState("");
  const [selectDepart, setselectDepart] = useState("");
  const [selectYear, setselectYear] = useState("");
  const [selectSem, setselectSem] = useState("");
  const [selectDivision, setselectDivision] = useState("");
  const [selectGender, setselectGender] = useState("");
  let category = ["School", "College", "Hostel"];

  const showValues = (e) => {

    e.preventDefault();
    console.log("showValues");
    const formData = new FormData();
    formData.append("institute", selectColl);
    formData.append("course", selectDepart);
    formData.append("division", selectDivision);
    formData.append("sem", selectSem);
    axios({
      url: "http://127.0.0.1:8000/api/find-student/",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err);
      });
  };

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
      return [
        "Sethshree Dahyabhai Prahaladbhai Patel Secondary School for Girls",
        "Sethshree Karsandas Jethidas Patel Sanskar Vidyalaya",
        "Shri Rajeshkumar Kantilal Patel Sanskar English Medium School",
      ];
    }
    if (selectCat == "Hostel") {
      return [
        ,
        "Bhagwanbhai Gokaldas Patel Restaurant",
        "Shri Lovejibhai Bhimdas Patel College Girls Hostel",
        "Shri Kantibhai Naranbhai Patel (Ram) College Boys Hostel",
      ];
    }
  }

  return (
    <>
      <div className="bg-[#fc1d1d] text-white py-2 px-5 text-[16px] font-Poppins">
        Dashboard <i class="fa-solid fa-arrow-right text-[15px]"></i> Main
      </div>
      {/* <ToastContainer /> */}

      <div className="w-full  px-[1%]">
        <div className=" w-full  flex flex-row justify-between pb-8 pt-3 items-center">
          <div className=" text-[#414141] grid grid-cols-6 w-full gap-x-16  gap-y-3 font-Poppins">
            <div>
              <Select
                id="category"
                className=" w-full "
                styles={{
                  input: {
                    background: "#ffffff81",
                    padding: "2px",
                    "font-size": "16px",
                  },
                  label: {
                    "font-size": "16px",
                    padding: "0px 0px",
                  },

                  option: {
                    padding: "5px",
                    "font-size": "16px",
                  },
                }}
                size="25px"
                label="Select "
                placeholder=""
                data={category}
                searchable
                searchValue={selectCat}
                onSearchChange={setselectCat}
                clearable
              />
            </div>

            <div>
              <Select
                id="college"
                className="w-full "
                styles={{
                  input: {
                    background: "#ffffff81",
                    padding: "2px",
                    "font-size": "16px",
                  },
                  label: {
                    "font-size": "16px",
                    padding: "0px 0px",
                  },
                  option: {
                    padding: "5px",
                    "font-size": "16px",
                  },
                }}
                size="25px"
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
              <Select
                id="department"
                className="w-full "
                styles={{
                  input: {
                    background: "#ffffff81",
                    padding: "2px",
                    "font-size": "16px",
                  },
                  label: {
                    "font-size": "16px",
                    padding: "0px 0px",
                  },
                  option: {
                    padding: "5px",
                    "font-size": "16px",
                  },
                }}
                size="25px"
                label={`Select Department`}
                placeholder=""
                data={["BCOM", "BBA", "BCA"]}
                searchable
                searchValue={selectDepart}
                onSearchChange={setselectDepart}
                clearable
              />
            </div>

            <div>
              <Select
                id="accYear"
                className="w-full "
                styles={{
                  input: {
                    background: "#ffffff81",
                    padding: "2px",
                    "font-size": "16px",
                  },

                  label: {
                    "font-size": "16px",
                    padding: "0px 0px",
                  },

                  option: {
                    padding: "5px",
                    "font-size": "16px",
                  },
                }}
                size="25px"
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
              <Select
                id="semister"
                className="w-full "
                styles={{
                  input: {
                    background: "#ffffff81",
                    padding: "2px",
                    "font-size": "16px",
                  },

                  label: {
                    "font-size": "16px",
                    padding: "0px 0px",
                  },

                  option: {
                    padding: "5px",
                    "font-size": "16px",
                  },
                }}
                size="25px"
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
              <Select
                id="Division"
                className="w-full "
                styles={{
                  input: {
                    background: "#ffffff81",
                    padding: "2px",
                    "font-size": "16px",
                  },

                  label: {
                    "font-size": "16px",
                    padding: "0px 0px",
                  },

                  option: {
                    padding: "5px",
                    "font-size": "16px",
                  },
                }}
                size="25px"
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
        </div>
      </div>


      <div className="w-full px-[1%] flex justify-end">
        <button
          onClick={showValues}
          className="border-[2px] text-[16px] border-[#ed473c] rounded-md py-1 w-[150px] flex justify-center items-center font-Poppins text-[#ed473c] hover:bg-[#ffffffad]"
        >
          Find Student
        </button>
      </div>

      <div className="w-full  overflow-auto scrollbar    backdrop:filter text-[20px] backdrop-blur-[8px]   bg-[#ffffff]  rounded-tl-md  ">
        <div className="w-full  font-Poppins  font-normal space-y-2  px-[1%]">
          <div className="w-full   ">
            <table className=" w-full table-auto">
              <thead>
                <tr
                  id="tableHeading"
                  className="text-[18px] bg-[#fc1d1d] text-white font-normal text-center"
                >
                  <th className="py-2">Sr No.</th>
                  <th className="py-2">Student Name</th>
                  <th className="py-2">Enrollment Id</th>
                  <th className="py-2">Phone</th>
                  <th className="py-2">Email</th>
                  <th className="py-2">Unpaid</th>
                  <th className="py-2">Paid</th>
                  <th className="py-2"></th>
                </tr>
              </thead>
              <tbody id="tbody">
                {showing.listData.map((e, index) => {
                  let k = {
                    Aemail: e.Aemail,
                    AsID: e.AsID,
                    AsFullName: e.AsFullName,
                    AsPhone: e.AsPhone,
                    Aunpaid: e.Aunpaid,
                    Apaid: e.Apaid,
                  };

                  return (
                    <>
                      <tr key={index} className="text-[16px] text-center">
                        <td className="py-3">{index + 1}</td>
                        <td className="py-3">{e.AsFullName}</td>
                        <td className="py-3">{e.AsID}</td>
                        <td className="py-3">{e.AsPhone}</td>
                        <td className="py-3">{e.Aemail}</td>
                        <td className={"py-3"}>{e.Aunpaid}</td>
                        <td className={"py-3"}>{e.Apaid}</td>
                        <td className="py-3">
                          <div className="flex justify-center  items-center gap-5">
                            <div className=" ">
                              {/*  */}
                              <img
                                onClick={() => showing.whatsapp(k)}
                                src="./img/whatspp.png"
                                alt="whatapp"
                                title="Whatsapp to Student"
                                className=" h-7  "
                              />
                            </div>
                            <div className=" ">
                              <img
                                onClick={() => showing.EditStudent(k)}
                                src="./img/edit.png"
                                alt="whatapp"
                                title="Whatsapp to Student"
                                className=" h-6  "
                              />
                            </div>
                            <div className=" ">
                              <img
                                onClick={() => showing.deleteStudent(k)}
                                src="./img/delete.png"
                                alt="whatapp"
                                title="Whatsapp to Student"
                                className=" h-8  "
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/* LIST OF STUDENT SECTION END */}
      </div>

      <div
        id="editpop"
        className="hi w-full px-[6%] bg-[#efefef14] mb-8  py-10 font-Poppins text-[#303030]"
      >
        <div className="w-full my-10  text-[20px] pt-5 pb-2 border-b-[1px] border-[#414141]">
          Edit Student
        </div>

        <div className="grid w-[80%] mx-auto  grid-cols-3 gap-10">
          <div className="flex flex-col w-full ">
            <Input.Wrapper label="Student's Name" size="lg">
              <Input
                type="text"
                name="AsFullName"
                className="editingclass"
                styles={{
                  input: { background: "#ffffff81", "font-size": "16px" },
                  label: { fontSize: "16px" },
                }}
                placeholder="Surname  Firstname "
              />
            </Input.Wrapper>
          </div>

          <div className="flex flex-col w-full ">
            <Input.Wrapper label="Father's Full Name" size="lg">
              <Input
                type="text"
                name="AfatherName"
                className="editingclass"
                styles={{
                  input: { background: "#ffffff81", "font-size": "16px" },
                  label: { fontSize: "16px" },
                }}
                placeholder="Fathername  Surname"
              />
            </Input.Wrapper>
          </div>
          <div className="flex flex-col w-full ">
            <Input.Wrapper label="Student Id" size="lg">
              <Input
                name="AsID"
                className="editingclass"
                type="text"
                styles={{
                  input: { background: "#ffffff81", "font-size": "16px" },
                  label: { fontSize: "16px" },
                }}
                placeholder="Student's Name"
              />
            </Input.Wrapper>
          </div>
          <div className="flex flex-col w-full ">
            <Input.Wrapper label="Student's Phone Number" size="lg">
              <Input
                name="AsPhone"
                className="editingclass"
                type="number"
                styles={{
                  input: { background: "#ffffff81", "font-size": "16px" },
                  label: { fontSize: "16px" },
                }}
                placeholder="Student's Phone Number"
              />
            </Input.Wrapper>
          </div>
          <div className="flex flex-col w-full ">
            <Input.Wrapper label="Parent's Number" size="lg">
              <Input
                name="ApPhone"
                className="editingclass"
                type="number"
                styles={{
                  input: { background: "#ffffff81", "font-size": "16px" },
                  label: { fontSize: "16px" },
                }}
                placeholder="Parent's Name"
              />
            </Input.Wrapper>
          </div>

          <div className="flex flex-col w-full ">
            <Input.Wrapper label="Date of Birth" size="lg">
              <Input
                type="date"
                name="Asdob"
                styles={{
                  input: { background: "#ffffff81", "font-size": "16px" },
                  label: { fontSize: "16px" },
                }}
                placeholder="Student's Name"
              />
            </Input.Wrapper>
          </div>
          <div className="flex flex-col w-full ">
            <Select
              id="category"
              className=" w-full "
              styles={{
                input: { background: "#ffffff81" },
                label: { "font-size": "14px" },
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
          <div className="flex flex-col w-full ">
            <Input.Wrapper typeof="email" label="Email" size="lg">
              <Input
                className="editingclass"
                name="Aemail"
                type="email"
                styles={{
                  input: { background: "#ffffff81", "font-size": "16px" },
                  label: { fontSize: "16px" },
                }}
                placeholder="Student's Name"
              />
            </Input.Wrapper>
          </div>

          <div className="flex flex-col w-full ">
            <Input.Wrapper label="Amount of Fees Paid" size="lg">
              <Input
                className="editingclass"
                name="Apaid"
                type="number"
                styles={{
                  input: { background: "#ffffff81", "font-size": "16px" },
                  label: { fontSize: "16px" },
                }}
                placeholder="Amount of Fees Paid"
              />
            </Input.Wrapper>
          </div>

          <div className="flex flex-col w-full ">
            <Input.Wrapper label="Amount of Fees UnPaid" size="sm">
              <Input
                className="editingclass"
                name="Aunpaid"
                type="number"
                styles={{
                  input: { background: "#ffffff81", "font-size": "16px" },
                  label: { fontSize: "16px" },
                }}
                placeholder="Amount of Fees UnPaid"
              />
            </Input.Wrapper>
          </div>

          <div className="flex flex-col w-full ">
            <Input.Wrapper label="Address" size="lg">
              <Input
                type="text"
                name="Aadd"
                className="editingclass"
                styles={{
                  input: { background: "#ffffff81", "font-size": "16px" },
                  label: { fontSize: "16px" },
                }}
                placeholder="House No.  Address..."
              />
            </Input.Wrapper>
          </div>

          <div className="flex flex-col w-full ">
            <Input.Wrapper label="City" size="lg">
              <Input
                type="text"
                name="Acity"
                className="editingclass"
                styles={{
                  input: { background: "#ffffff81", "font-size": "16px" },
                  label: { fontSize: "16px" },
                }}
                placeholder="Ex:- kalol, gandhinagar ..."
              />
            </Input.Wrapper>
          </div>

          <div className="flex flex-col w-full ">
            <Input.Wrapper label="State" size="lg">
              <Input
                type="text"
                name="Astate"
                className="editingclass"
                styles={{
                  input: { background: "#ffffff81", "font-size": "16px" },
                  label: { fontSize: "16px" },
                }}
                placeholder="ex:- Gujarat, Rajasthan ..."
              />
            </Input.Wrapper>
          </div>
          <div className="flex flex-col w-full ">
            <Input.Wrapper label="Pincode" size="sm">
              <Input
                className="editingclass"
                type="number"
                name="Apin"
                styles={{
                  input: { background: "#ffffff81", "font-size": "16px" },
                  label: { fontSize: "16px" },
                }}
                placeholder="ex:- 382721..."
              />
            </Input.Wrapper>
          </div>
        </div>
        <div className="w-full px-[6%] flex justify-center items-center pt-10 pb-5 gap-7">
          <button
            onClick={showing.updateEditStudent}
            className="border-[2px] text-[16px] border-[#ed473c] rounded-lg py-1 w-[150px] flex justify-center items-center font-Poppins text-[#ed473c] ed473c:bg-[#ffffffad]"
          >
            Update
          </button>
          <button
            onClick={showing.cancleEditStudent}
            className="border-[2px] text-[16px] border-[#ed473c] rounded-lg py-1 w-[150px] flex justify-center items-center font-Poppins text-[#ed473c] ed473c:bg-[#ffffffad]"
          >
            Cancle
          </button>
        </div>
      </div>
    </>
  );
}

export default Minidash;
