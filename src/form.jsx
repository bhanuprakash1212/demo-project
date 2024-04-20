import React from "react";
import FormContainer from "./formcontainer";

const SlotBookingPage = () => {
  return (
    <div className="w-full relative bg-white shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] overflow-hidden flex flex-col items-start justify-start pt-[84px] pb-[221px] pr-[379px] pl-[396px] box-border gap-[59px] leading-[normal] tracking-[normal] text-left text-mini text-white font-inter mq450:pl-5 mq450:pr-5 mq450:box-border mq950:gap-[29px] mq950:pl-[198px] mq950:pr-[189px] mq950:box-border">
      <div className="w-[517px] h-[46px] relative rounded bg-mediumslateblue overflow-hidden shrink-0 hidden max-w-full">
        <div className="absolute top-[calc(50%_-_11.5px)] left-[calc(50%_-_65.5px)] leading-[23px]">
          Book Appointment
        </div>
      </div>
      <FormContainer />
      <div className="w-[196px] flex flex-row items-start justify-center">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/cutlery-75-1.svg"
        />
      </div>
    </div>
  );
};

export default SlotBookingPage;
