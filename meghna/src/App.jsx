import React, { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { ReactDOM } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home"
import Fees from "./Components/Fees"
import Login from "./Components/Login"
import Pay from "./Components/Pay"
import Paymentdone from "./Components/Paymentdone"
import Makeapayment from "./Components/Makeapayment"
import Pdf from "./Components/Pdf"
import Dashboard from "./Components/Dashboard/Dashboard"
import Admin from "./Components/Dashboard/Admin"
import Log from "./Components/Dashboard/Log"
import Minidash from "./Components/Dashboard/Minidash";
import Addcollege from "./Components/Dashboard/Addcollege";
import Addstudents from "./Components/Dashboard/Addstudents";
import Findstudents from "./Components/Dashboard/Findstudents";






import "../src/App.css";

import { MantineProvider } from "@mantine/core"




function App() {
  const notify = () => toast("Wow so easy !");



  const [listData, setlistData] = useState([
    {
      AsFullName: "suthar dhiraj11",
      AfatherName: "fatehrname xx11",
      AsID: "23BCA2426211",
      AsPhone: "704647912611",
      ApPhone: "704647912611",
      Asdob: "27-2-2004",
      Aemail: "jaslfjasdlfkjl@gmail.com11",
      Apaid: 780011,
      Aunpaid: 270011,
      Aadd: "B-14 garden city11",
      Acity: "kalol11",
      Astate: "Gujarat11",
      Apin: 3827211,


    },
    {
      AsFullName: "suthar dhiraj22",
      AfatherName: "fatehrname xxx22",
      AsID: "23BCA2426222",
      AsPhone: "704647912622",
      ApPhone: "704647912622",
      Asdob: "27-2-2004",
      Aemail: "jaslfjasdlfkjl@gmail.com22",
      Apaid: 780022,
      Aunpaid: 270022,
      Aadd: "B-14 garden city22",
      Acity: "kalol22",
      Astate: "Gujarat22",
      Apin: 382722,


    },
    {
      AsFullName: "suthar dhiraj22",
      AfatherName: "fatehrname xxx22",
      AsID: "23BCA2426222",
      AsPhone: "704647912622",
      ApPhone: "704647912622",
      Asdob: "27-2-2004",
      Aemail: "jaslfjasdlfkjl@gmail.com22",
      Apaid: 780022,
      Aunpaid: 270022,
      Aadd: "B-14 garden city22",
      Acity: "kalol22",
      Astate: "Gujarat22",
      Apin: 382722,


    },
    {
      AsFullName: "suthar dhiraj",
      AfatherName: "fatehrname xxx",
      AsID: "23BCA24262",
      AsPhone: "7046479126",
      ApPhone: "7046479126",
      Asdob: "27-2-2004",
      Aemail: "jaslfjasdlfkjl@gmail.com",
      Apaid: 7800,
      Aunpaid: 2700,
      Aadd: "B-14 garden city",
      Acity: "kalol",
      Astate: "Gujarat",
      Apin: 382721,


    },
    {
      AsFullName: "suthar dhiraj",
      AfatherName: "fatehrname xxx",
      AsID: "23BCA24262",
      AsPhone: "7046479126",
      ApPhone: "7046479126",
      Asdob: "27-2-2004",
      Aemail: "jaslfjasdlfkjl@gmail.com",
      Apaid: 7800,
      Aunpaid: 2700,
      Aadd: "B-14 garden city",
      Acity: "kalol",
      Astate: "Gujarat",
      Apin: 382721,

    },

    
  ]);



  const [addstudentdata, setaddstudentdata] = useState();
  const [FeeData, setFeeData] = useState([]);
  const [stdData, setstdData] = useState([]);
  const [logdata, setlogdata] = useState([]);

  let loca = useRef();



  let navi = useNavigate();
  let student = [];




  // main website data  START ///////////////////////////////////////////////////////////

  let data = [
    {
      id: 8238,
      dob: "2004-10-15",
      site: "meghna college",
      std: "bca",
      name: "name1",
      uiq: "15456863546846468",
      Category: "OBC",
      Period: 1,
      accYear: 2023,

    },


    {
      id: 1556,
      dob: "2005-10-15",
      site: "A college",
      std: "bba",
      name: "name2",
      uiq: "15456863546846468",
      Category: "OBC",
      Period: 1,
      accYear: 2023,
    },
    {
      id: 8785,
      dob: "2006-10-15",
      site: "B college",
      std: "bcom",
      name: "name3",
      uiq: "15456863546846468",
      Category: "OBC",
      Period: 1,
      accYear: 2023,
    },
    {
      id: 1111,
      dob: "2007-10-15",
      site: "C college",
      std: "btech",
      name: "suthar dhiraj",
      uiq: "15456863546846468",
      Category: "OBC",
      Period: 1,
      accYear: 2023,
    },
  ]




  function gotdata(e) {

    for (let i = 0; i < data.length; i++) {

      if (data[i].id == e[0]) {
        // console.log("form app site is:" + data[i].site);
        // console.log("form app std is:" + data[i].std);

        setFeeData([...e, data[i].site, data[i].std, data[i].name, data[i].uiq, data[i].Category, data[i].Period, data[i].accYear]);

      }
    }

    // console.log("data from app :" + e);
  }


  function storeStudent(e) {

    // console.log("Stored numpber::", e);
    let b = {
      no: e[0],
      em: e[1],
    }
    setstdData([b]);


  }



  student.push(stdData);
  // console.log(student);
  function signup() {

  }

  // main website data  END ///////////////////////////////////////////////////////////







  let User = "suthar dhiarj";

  function Loginme(e) {
    setlogdata(e);
    console.log(logdata)
    navi("/Dashboard")

  }

  function logoutbutton() {

    navi("/Admin")

  }
  //dashborad logic


  const [selectCat, setselectCat] = useState('');
  const [selectColl, setselectColl] = useState('');
  const [selectDepart, setselectDepart] = useState('');
  const [selectYear, setselectYear] = useState('');
  const [selectSem, setselectSem] = useState('');
  const [selectDivision, setselectDivision] = useState('');
  const [sha, setsha] = useState('');
  const [selectedTab, setselectedTab] = useState("Dashboard");












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


    setsha(`${selectColl} - ${selectDepart} - ${selectYear} - ${selectSem} - ${selectDivision} `)


  }



















  //New logic

  function EditStudent(a) {

    let h = document.querySelector("#editpop");
    h.classList.remove("hi");

    listData.map((e, index) => {

      if (e.Aemail == a.Aemail && e.AsFullName == a.AsFullName && e.AsPhone == a.AsPhone && e.AsID == a.AsID) {

        loca.current = index;
      }
    })

    let f = document.querySelectorAll(".editingclass input");

    f.forEach((e) => {
      if (e.name == "AsFullName") {
        e.value = listData[loca.current].AsFullName;
      }

      if (e.name == "AfatherName") {
        e.value = listData[loca.current].AfatherName;
      }

      if (e.name == "AsID") {
        e.value = listData[loca.current].AsID;
      }

      if (e.name == "AsPhone") {
        e.value = listData[loca.current].AsPhone;
      }

      if (e.name == "ApPhone") {
        e.value = listData[loca.current].ApPhone;
      }

      if (e.name == "Asdob") {
        e.value = listData[loca.current].Asdob;
      }
      if (e.name == "Aemail") {
        e.value = listData[loca.current].Aemail;
      }
      if (e.name == "Apaid") {
        e.value = listData[loca.current].Apaid;
      }
      if (e.name == "Aunpaid") {
        e.value = listData[loca.current].Aunpaid;
      }
      if (e.name == "Aadd") {
        e.value = listData[loca.current].Aadd;
      }
      if (e.name == "Acity") {
        e.value = listData[loca.current].Acity;
      }
      if (e.name == "Astate") {
        e.value = listData[loca.current].Astate;
      }
      if (e.name == "Apin") {
        e.value = listData[loca.current].Apin;
      }




    })


  }



  function updateEditStudent() {



    let c = {
      AsFullName: "",
      AfatherName: "",
      AsID: "",
      AsPhone: "",
      ApPhone: "",
      Asdob: "",
      Aemail: "",
      Apaid: "",
      Aunpaid: "",
      Aadd: "",
      Acity: "",
      Astate: "",
      Apin: "",
    };


    let f = document.querySelectorAll(".editingclass input");

    f.forEach((e) => {
      if (e.name == "AsFullName") {
        c.AsFullName = e.value;
      }

      if (e.name == "AfatherName") {
        c.AfatherName = e.value;
      }

      if (e.name == "AsID") {
        c.AsID = e.value;
      }

      if (e.name == "AsPhone") {
        c.AsPhone = e.value;
      }

      if (e.name == "ApPhone") {
        c.ApPhone = e.value;
      }

      if (e.name == "Asdob") {
        c.Asdob = e.value;
      }
      if (e.name == "Aemail") {
        c.Aemail = e.value;
      }
      if (e.name == "Apaid") {
        c.Apaid = e.value;
      }
      if (e.name == "Aunpaid") {
        c.Aunpaid = e.value;
      }
      if (e.name == "Aadd") {
        c.Aadd = e.value;
      }
      if (e.name == "Acity") {
        c.Acity = e.value;
      }
      if (e.name == "Astate") {
        c.Astate = e.value;
      }
      if (e.name == "Apin") {
        c.Apin = e.value;
      }
    });



    let h = document.querySelector("#editpop");
    h.classList.add("hi");


    let tempArray = [...listData];
    tempArray[loca.current] = c;

    setlistData([...tempArray]);

    console.log(listData);


    const notify = () => {
      toast.success(`New Data Updated`, { autoClose: 1700 });
    };

    notify();
  }




  function cancleEditStudent() {

    let f = document.querySelectorAll(".editingclass input");

    f.forEach((e) => {
      if (e.name == "AsFullName") {
        e.value = '';
      }

      if (e.name == "AfatherName") {
        e.value = '';
      }

      if (e.name == "AsID") {
        e.value = '';
      }

      if (e.name == "AsPhone") {
        e.value = '';
      }

      if (e.name == "ApPhone") {
        e.value = '';
      }

      if (e.name == "Asdob") {
        e.value = '';
      }
      if (e.name == "Aemail") {
        e.value = '';
      }
      if (e.name == "Apaid") {
        e.value = '';
      }
      if (e.name == "Aunpaid") {
        e.value = '';
      }
      if (e.name == "Aadd") {
        e.value = '';
      }
      if (e.name == "Acity") {
        e.value = '';
      }
      if (e.name == "Astate") {
        e.value = '';
      }
      if (e.name == "Apin") {
        e.value = '';
      }
    });



    let h = document.querySelector("#editpop");
    h.classList.add("hi");


    const notify = () => {
      toast.success(`Cancled Updation`, { autoClose: 1700 });
    };

    notify();

  }





  function whatsapp(a) {

    window.location.href = `https://api.whatsapp.com/send?phone=${a.AsPhone}`;


  }


  function deleteStudent(a) {


    let hr = [];

    listData.map((e) => {

      if (e.Aemail == a.Aemail && e.AsFullName == a.AsFullName && e.AsPhone == a.AsPhone && e.AsID == a.AsID) {
      }
      else {
        hr = [...hr, e];
      }
    })

    console.log(hr);
    setlistData([...hr]);


    const notify = () => {
      toast.error(`${a.AsFullName} Deleted`, { autoClose: 1700 });
    };

    notify();



  }



  function movetoMiniDash() {
    navi("/Dashboard");
    setselectedTab("Dashboard")

  }
  function movetoFindstudents(e) {
    console.log(e);

    setselectedTab("FindStudentes")

    navi("/Dashboard/Findstudents");
  }
  function movetoAddcollege() {
    navi("/Dashboard/Addcollege");
    setselectedTab("AddCollege")

  }
  function movetoAddstudents() {
    navi("/Dashboard/Addstudents");
    setselectedTab("AddStudents")

  }









  let b = {
    AsFullName: "",
    AfatherName: "",
    AsID: "",
    AsPhone: "",
    ApPhone: "",
    Asdob: "",
    Aemail: "",
    Apaid: "",
    Aunpaid: "",
    Aadd: "",
    Acity: "",
    Astate: "",
    Apin: "",
  };

  function AddedStudent() {

    let f = document.querySelectorAll(".ch input");

    f.forEach((e) => {
      if (e.name == "AsFullName") {
        b.AsFullName = e.value;
      }

      if (e.name == "AfatherName") {
        b.AfatherName = e.value;
      }

      if (e.name == "AsID") {
        b.AsID = e.value;
      }

      if (e.name == "AsPhone") {
        b.AsPhone = e.value;
      }

      if (e.name == "ApPhone") {
        b.ApPhone = e.value;
      }

      if (e.name == "Asdob") {
        b.Asdob = e.value;
      }
      if (e.name == "Aemail") {
        b.Aemail = e.value;
      }
      if (e.name == "Apaid") {
        b.Apaid = e.value;
      }
      if (e.name == "Aunpaid") {
        b.Aunpaid = e.value;
      }
      if (e.name == "Aadd") {
        b.Aadd = e.value;
      }
      if (e.name == "Acity") {
        b.Acity = e.value;
      }
      if (e.name == "Astate") {
        b.Astate = e.value;
      }
      if (e.name == "Apin") {
        b.Apin = e.value;
      }

    })

    
    setaddstudentdata(b);
    setlistData([...listData, b]);
    console.log(listData);



    const notify = () => {
      toast.success(`${b.AsFullName} Added`, { autoClose: 1700 });
    };

    notify();


    f.forEach((e) => {
      e.value = "";
    });

  }



  function AddedCancleStudent() {

    let f = document.querySelectorAll(".ch input");

    f.forEach((e) => {
      e.value = "";
    })

    a = [{
      AsFullName: "",
      AfatherName: "",
      AsID: "",
      AsPhone: "",
      ApPhone: "",
      Asdob: "",
      Aemail: "",
      Apaid: "",
      Aunpaid: "",
      Aadd: "",
      Acity: "",
      Astate: "",
      Apin: "",
    }];

    setaddstudentdata(a);

  }




  return (
    <>
      <MantineProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Fees" element={<Fees data={data} gotdata={gotdata} />} />
          <Route exact path="/Login" element={<Login FeeData={FeeData} />} />
          <Route exact path="/pay" element={<Pay FeeData={FeeData} storeStudent={storeStudent} />} />
          <Route exact path="/Makeapayment" element={<Makeapayment />} />
          <Route exact path="/Paymentdone" element={<Paymentdone />} />
          <Route exact path="/Pdf" element={<Pdf />} />
          <Route exact path="/Admin" element={<Admin signup={signup} Loginme={Loginme} />}
          />


          <Route exact path="/Dashboard" element={<Dashboard obj={{
            User: User,
            movetoMiniDash: movetoMiniDash,
            movetoFindstudents: movetoFindstudents,
            movetoAddcollege: movetoAddcollege,
            movetoAddstudents: movetoAddstudents,
            logoutbutton: logoutbutton,
            selectedTab: selectedTab,
          }} />}>



            <Route exact path="Addstudents" element={<Addstudents addSData={{
              AddedStudent: AddedStudent,
              AddedCancleStudent: AddedCancleStudent,
            }}
            />} />
            <Route exact path="" element={<Minidash showing={{
              listData: listData,
              whatsapp: whatsapp,
              deleteStudent: deleteStudent,
              EditStudent: EditStudent,
              updateEditStudent: updateEditStudent,
              cancleEditStudent: cancleEditStudent,
              notify: notify,


            }} />}></Route>



            <Route exact path="Findstudents" element={<Findstudents />}></Route>
            <Route exact path="Addcollege" element={<Addcollege />}></Route>
          </Route>

        </Routes >


      </MantineProvider >

    </>
  )


}


export default App;