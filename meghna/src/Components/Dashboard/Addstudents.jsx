import React, { useRef, useState } from "react";
import {
  Select,
  Input,
  FileButton,
  Textarea,
  FileInput,
  Button,
  Group,
  CloseButton,
} from "@mantine/core";
import { root } from "postcss";
import axios from "axios";

function Addstudents({ addSData }) {
  const AsFullName = useRef("");
  const AfatherName = useRef("");
  const AsID = useRef("");

  const AsPhone = useRef("");
  const ApPhone = useRef("");
  const Asdob = useRef("");

  const [AselectGender, setAselectGender] = useState("");
  const Aemail = useRef("");
  const Apaid = useRef("");

  const Aadd = useRef("");
  const Acity = useRef("");
  const Astate = useRef("");

  const [Name, setName] = useState("");
  const [FatherName, setFatherName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Dob, setDob] = useState("");
  const [Gender, setGender] = useState("");
  const [Email, setEmail] = useState("");
  const [ParentPhone, setParentPhone] = useState("");
  const [FeesPaid, setFeesPaid] = useState("");
  const [UnpaidFees, setUnpaidFees] = useState("");
  const [PerAddress, setPerAddress] = useState("");
  const [selectCat, setselectCat] = useState("");
  const [selectColl, setselectColl] = useState("");
  const [selectDepart, setselectDepart] = useState("");
  const [selectYear, setselectYear] = useState("");
  const [selectSem, setselectSem] = useState("");
  const [selectDivision, setselectDivision] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Pincode, setPincode] = useState("");

  let category = ["School", "College", "Hostel"];

  const showValues = (e) => {
    e.preventDefault();
    console.log("FUNCTION CALL");

    const name = document.getElementsByName("AsFullName")[0].value;
    const fatherName = document.getElementsByName("AfatherName")[0].value;
    const phone = document.getElementsByName("AsPhone")[0].value;
    const dob = document.getElementsByName("Asdob")[0].value;
    const email = document.getElementsByName("Aemail")[0].value;
    const fatherPhone = document.getElementsByName("ApPhone")[0].value;
    const gender = document.getElementsByName("Gender")[0].value;
    const feesPaid = document.getElementsByName("Apaid")[0].value;
    const feesUnpaid = document.getElementsByName("Aunpaid")[0].value;
    const perAddress = document.getElementsByName("Aadd")[0].value;
    const city = document.getElementsByName("Acity")[0].value;
    const state = document.getElementsByName("Astate")[0].value;
    const pincode = document.getElementsByName("Apin")[0].value;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("division", setselectDepart);
    formData.append("institute", selectColl);
    formData.append("course", selectDepart);
    formData.append("email", email);
    formData.append("father_name", fatherName);
    formData.append("phone_number", phone);
    formData.append("parent_number", fatherPhone);
    formData.append("date_of_birth", dob);
    formData.append("gender", gender);
    formData.append("fees_paid", feesPaid);
    formData.append("fees_unpaid", feesUnpaid);
    formData.append("address", perAddress);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("pincode", pincode);

    axios({
      url: "http://127.0.0.1:8000/api/addstudent/",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((res) => {
        //setLoading("hidden");
        alert(res["data"]["msg"]);
        window.location.reload();
      })
      .catch((err) => {
        //setLoading("hidden");
        alert(err);
      });
  };

  const uploadXls = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const xls_file = document.getElementsByName("xls_file").files[0];
    formData.append("xls_file", xls_file);

    axios({
      url: "http://127.0.0.1:8000/api/uploadxls/",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((res) => {
        alert(res.data.msg);
        // Additional logic if needed
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
        "LDRP",
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
      <div className="bg-[#fc1d1d] text-white overflow-hidden py-2 px-5 text-[16px] font-Poppins">
        Dashboard <i class="fa-solid fa-arrow-right text-[15px]"></i> Add
        Students
      </div>

      <div className="w-full px-[6%] font-Poppins text-[20px] flex justify-end  font-medium   items-center gap-5">
        <p>Upload Excel Sheet</p>
        <div className="w-[300px] py-4 text-[#414141] ">
          <input
            class="block w-full text-sm  border border-gray-300 rounded-lg cursor-pointer bg-white text-[#414141]  focus:outline-none placeholder-blue-500  "
            type="file"
            // onChange={setxls_file}
            name="xls_file"
          />
        </div>
      </div>

      <div  className="w-full px-[6%] flex justify-end">
        <button
          onClick={uploadXls}
          className="border-[2px] text-[16px] border-[#ed473c] rounded-md py-1 w-[150px] flex justify-center items-center font-Poppins text-[#ed473c] hover:bg-[#ffffffad]"
        >
          Upload Excel
        </button>
      </div>

      <div className=" pt-7 w-full px-[6%] font-Poppins text-[20px] font-medium text-[#1c1c1c]">
        <p className=" border-b-[0.6px]  py-2 border-[#3333334c]">
          Add Students Students
        </p>
      </div>

      <div className="w-full py-[3%]     px-[6%]">
        {/* componetn  1 start */}
        <div className=" w-full   font-Poppins grid grid-cols-3 gap-10   text-[#1c1c1c]">
          <div>
            <Select
              id="category"
              className=" w-full "
              styles={{
                input: { background: "#ffffff81" },
                label: { "font-size": "16px" },
              }}
              label="Select School/College/Hostel"
              placeholder=""
              data={category}
              searchable
              searchValue={selectCat}
              onChange={setselectCat}
              clearable
            />
          </div>

          <div>
            <Select
              id="college"
              className="w-full "
              styles={{
                input: { background: "#ffffff81" },
                label: { "font-size": "16px" },
              }}
              label={`Select ${selectCat}`}
              placeholder=""
              data={selectColleges()}
              searchable
              searchValue={selectColl}
              onChange={setselectColl}
              clearable
            />
          </div>
          <div>
            <Select
              id="department"
              className="w-full "
              styles={{
                input: { background: "#ffffff81" },
                label: { "font-size": "16px" },
              }}
              label={`Select Department/Std/Division`}
              placeholder=""
              data={["BCOM", "BBA", "BCA"]}
              searchable
              searchValue={selectDepart}
              onChange={setselectDepart}
              clearable
            />
          </div>

          <div>
            <Select
              id="accYear"
              className="w-full "
              styles={{
                input: { background: "#ffffff81" },
                label: { "font-size": "16px" },
              }}
              label={`Select Current Year`}
              placeholder=""
              data={["2004", "2001", "2007"]}
              searchable
              searchValue={selectYear}
              onChange={setselectYear}
              clearable
            />
          </div>

          <div>
            <Select
              id="semister"
              className="w-full "
              styles={{
                input: { background: "#ffffff81" },
                label: { "font-size": "16px" },
              }}
              label={`Select Semister`}
              placeholder=""
              data={["sem-1", "sem-2", "sem-3"]}
              searchable
              searchValue={selectSem}
              onChange={setselectSem}
              clearable
            />
          </div>
          <div>
            <Select
              id="Division"
              className="w-full "
              styles={{
                input: { background: "#ffffff81" },
                label: { "font-size": "16px" },
              }}
              label={`Select Division`}
              placeholder=""
              data={["A", "B", "C"]}
              searchable
              searchValue={selectDivision}
              onChange={setselectDivision}
              clearable
            />
          </div>
        </div>
        {/* componetn  1 end */}
      </div>

      <hr />

      <div className=" overflow-hidden  px-[6%] bg-[#ffffff23] mb-8  py-10 font-Poppins text-[#303030]">
        <div className="grid  grid-cols-3 gap-10">
          <div className="flex flex-col w-full ">
            <Input.Wrapper label="Student's Name" size="16px">
              <Input
                className="ch"
                type="text"
                name="AsFullName"
                id="name"
                styles={{
                  input: { background: "#ffffff81", "font-size": "16px" },
                  label: { fontSize: "16px" },
                }}
                placeholder="Surname  Firstname "
              />
            </Input.Wrapper>
          </div>
          <div className="flex flex-col w-full ">
            <Input.Wrapper label="Father's Full Name" size="16px">
              <Input
                className="ch"
                type="text"
                name="AfatherName"
                styles={{
                  input: { background: "#ffffff81", "font-size": "16px" },
                  label: { fontSize: "16px" },
                }}
                placeholder="Fathername  Surname"
              />
            </Input.Wrapper>
          </div>
          
          <div className="flex flex-col w-full ">
            <Input.Wrapper label="Student's Phone Number" size="16px">
              <Input
                className="ch"
                name="AsPhone"
                onChange={setPhone}
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
            <Input.Wrapper label="Parent's Number" size="16px">
              <Input
                className="ch"
                name="ApPhone"
                onChange={setParentPhone}
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
            <Input.Wrapper label="Date of Birth" size="16px">
              <Input
                className="ch"
                name="Asdob"
                onChange={setDob}
                type="date"
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
                label: { "font-size": "16px" },
              }}
              label="Gender"
              placeholder="Select Gender"
              name="Gender"
              data={["Male", "Female"]}
              searchable
              searchValue={AselectGender}
              onChange={setAselectGender}
              clearable
            />
          </div>
          <div className="flex flex-col w-full ">
            <Input.Wrapper typeof="email" label="Email" size="16px">
              <Input
                className="ch"
                name="Aemail"
                onChange={setEmail}
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
            <Input.Wrapper label="Amount of Fees Paid" size="16px">
              <Input
                className="ch"
                name="Apaid"
                onChange={setFeesPaid}
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
            <Input.Wrapper label="Amount of Fees UnPaid" size="16px">
              <Input
                className="ch"
                name="Aunpaid"
                onChange={setUnpaidFees}
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
            <Input.Wrapper label="Address" size="16px">
              <Input
                className="ch"
                type="text"
                name="Aadd"
                onChange={setPerAddress}
                styles={{
                  input: { background: "#ffffff81", "font-size": "16px" },
                  label: { fontSize: "16px" },
                }}
                placeholder="House No.  Address..."
              />
            </Input.Wrapper>
          </div>

          <div className="flex flex-col w-full ">
            <Input.Wrapper label="City" size="16px">
              <Input
                className="ch"
                type="text"
                name="Acity"
                onChange={setCity}
                styles={{
                  input: { background: "#ffffff81", "font-size": "16px" },
                  label: { fontSize: "16px" },
                }}
                placeholder="Ex:- kalol, gandhinagar ..."
              />
            </Input.Wrapper>
          </div>

          <div className="flex flex-col w-full ">
            <Input.Wrapper label="State" size="16px">
              <Input
                className="ch"
                type="text"
                name="Astate"
                onChange={setState}
                styles={{
                  input: { background: "#ffffff81", "font-size": "16px" },
                  label: { fontSize: "16px" },
                }}
                placeholder="ex:- Gujarat, Rajasthan ..."
              />
            </Input.Wrapper>
          </div>

          <div className="flex flex-col w-full ">
            <Input.Wrapper label="Pincode" size="16px">
              <Input
                className="ch"
                type="number"
                name="Apin"
                onChange={setPincode}
                styles={{
                  input: { background: "#ffffff81", "font-size": "16px" },
                  label: { fontSize: "16px" },
                }}
                placeholder="ex:- 382721..."
              />
            </Input.Wrapper>
          </div>
        </div>

        <div className="w-full px-[6%] flex justify-center items-center space-x-7 pt-10 pb-5">
          <button
            onClick={() => addSData.AddedCancleStudent()}
            className="border-[2px] text-[16px] border-[#ed473c] rounded-md py-1 w-[150px] flex justify-center items-center font-Poppins text-[#ed473c] hover:bg-[#ffffffad]"
          >
            Cancle
          </button>
          <button
            onClick={(e) => uploadXls(e)}
            className="border-[2px] text-[16px] border-[#ed473c] rounded-md py-1 w-[150px] flex justify-center items-center font-Poppins text-[#ed473c] hover:bg-[#ffffffad]"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Addstudents;
