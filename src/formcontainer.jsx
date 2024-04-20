import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const FormContainer = ({ ServiceName }) => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [time, setTime] = useState(""); // Store time as a string
  const [button,setButton]=useState("");
  const onButton15ContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleSubmit = async (e) => {
    console.log(typeof(time))
    console.log(fullName,phoneNumber,email,selectedDate,time,ServiceName)
      
        e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/v1/booking', {
        name: fullName,
        phnumber: phoneNumber,
        email: email,
        date: selectedDate,
        timeslot: time, // Use the time state variable directly
        service: ServiceName
      });
      console.log(res); // Log the entire response object
      console.log("Form submitted!");
      if(res.data){
        toast("Registered Successfully")
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChangeFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeColor = (e) => { 
    e.preventDefault();
    if (time !== e.target.innerText) {

      setTime(e.target.innerText); // Update time state with the selected time slot
    }
    if(button){
      button.style.backgroundColor="";
    }
    if(button!=e.target){
     
      setButton(e.target)
    }
  };

  useEffect(() => { 
    if (button) {
button.style.backgroundColor="blue";
    }
  }, [button]);

  return (
    <>
    <form
      className="m-0 self-stretch bg-white box-border flex flex-col
items-start justify-start pt-[54px] px-[65px] pb-[47px] gap-[20px]
max-w-full border-[1px] border-dashed border-silver mq700:pt-[35px]
mq700:px-8 mq700:pb-[31px] mq700:box-border" 
      onSubmit={handleSubmit}
      style={{width:"auto"}}
    >
      {/* Full Name Input */}
      <label htmlFor="fullName" className="w-[518px] h-[79px] flex
            flex-col items-start justify-start gap-[10px] max-w-full">
                    <div className="flex flex-row items-start justify-start py-0 px-0.5">
                      <div className="relative text-sm leading-[22px] font-inter
            text-midnightblue text-left inline-block min-w-[66px] z-[1]">
                        Full Name
          </div>
        </div>
        <input
          type="text"
          id="fullName"
          value={fullName}
                      onChange={handleChangeFullName}
                      className="self-stretch h-[49px] rounded bg-white box-border
            flex flex-row items-start justify-start pt-[12.5px] px-4 pb-[11.5px]
            z-[1] border-[1px] border-solid border-lightslategray"
                      placeholder="Enter your full name" required
                    />
                  </label>

      {/* Phone Number Input */}
      <label htmlFor="phoneNumber" className="w-[518px] h-[79px] flex
          flex-col items-start justify-start gap-[10px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-0.5">
                    <div className="relative text-sm leading-[22px] font-inter
          text-gray-100 text-left inline-block min-w-[99px] z-[1]">
                      Phone Number
                    </div>
                  </div>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handleChangePhoneNumber}
          className="self-stretch h-[49px] rounded bg-white box-border
              flex flex-row items-start justify-start pt-[12.5px] px-[15px]
              pb-[11.5px] z-[1] border-[1px] border-solid border-lightslategray"
                        placeholder="Enter your phone number" required
                      />
      </label>

      {/* Email Address Input */}
      <label htmlFor="email" className="w-[518px] h-[79px] flex
            flex-col items-start justify-start gap-[10px] max-w-full">
                    <div className="flex flex-row items-start justify-start py-0 px-0.5">
                      <div className="relative text-sm leading-[22px] font-inter
            text-midnightblue text-left inline-block min-w-[94px] z-[1]">
                        Email Address
          </div>
        </div>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleChangeEmail}
          className="self-stretch h-[49px] rounded bg-white box-border
                flex flex-row items-start justify-start pt-[12.5px] px-4 pb-[11.5px]
                z-[1] border-[1px] border-solid border-lightslategray"
                          placeholder="Enter your email address" required
        />
      </label>

      {/* Date Picker */}
      <label htmlFor="date" className="w-[518px] h-[79px] flex
            flex-col items-start justify-start gap-[10px] max-w-full">
                    <div className="flex flex-row items-start justify-start py-0 px-0.5">
                      <div className="relative text-sm leading-[22px] font-inter
            text-midnightblue text-left inline-block min-w-[94px] z-[1]">
                         Select your Slot
          </div>
        </div>
        <input
          type="date" 
          value={selectedDate} // Use value instead of selected
          onChange={(e) => setSelectedDate(e.target.value)} // Access e.target.value for the selected date
          dateFormat="dd/MM/yyyy"
          placeholderText="Select a date" 
          className="self-stretch h-[49px] rounded bg-white box-border
                flex flex-row items-start justify-start pt-[12.5px] px-4 pb-[11.5px]
                z-[1] border-[1px] border-solid border-lightslategray" required
                          
        />
      </label>

      {/* Time Slot Options - Conditionally Rendered */}
      {selectedDate && (<>
        <div className="text-sm leading-[22px] font-inter text-midnightblue text-left">
        Time slot
      </div>
        <div className="row">
        
            
          
          <div className="col-md-4">
            <button className="btn btn-outline-primary w-100 mb-2 " onClick={changeColor}>8:00-10:00</button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-outline-primary w-100 mb-2 " onClick={changeColor}>11:00-13:00</button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-outline-primary w-100 mb-2 " onClick={changeColor}>13:00-15:00</button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-outline-primary w-100 mb-2 " onClick={changeColor}>15:00-17:00</button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-outline-primary w-100 mb-2 " onClick={changeColor}>17:00-19:00</button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-outline-primary w-100 mb-2 " onClick={changeColor}>19:00-21:00</button>
          </div></div></>
        
      )}


      {/* Submit Button */}
      <button type="submit" className="w-[517px] rounded
            bg-mediumslateblue overflow-hidden flex flex-row items-start
            justify-center py-[11.5px] pr-5 pl-[21px] box-border max-w-full
            z-[2]">
                    <div className="relative text-mini leading-[23px] font-inter
            text-white text-left">
                      Book Appointment
                    </div>
                  </button>

      {/* Back to Home Button */}
     
     
    </form>
     <ToastContainer/></>
  );
};

export default FormContainer;