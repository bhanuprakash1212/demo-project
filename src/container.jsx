import React from "react";
import SearchBar from "./search";
const Container = ({setSearchTerm,searchTerm}) => {
    return (
      <header className="mt-[-119.79999999999995px] self-stretch bg-white shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] flex flex-row items-start justify-between py-[17px] pr-[207px] pl-[191px] box-border top-[-119.79999999999995] z-[99] sticky max-w-full gap-[20px] text-left text-8xl text-gray-100 font-epilogue mq800:pl-[95px] mq800:pr-[103px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="w-[391.6px] flex flex-row items-start justify-start gap-[159px] max-w-full mq675:w-[226px] mq450:gap-[79px]">
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <h2 className="m-0 relative text-inherit leading-[42px] font-bold font-inherit inline-block min-w-[67px] whitespace-nowrap">
              Logo
            </h2>
          </div>
         
        </div>
       <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} ></SearchBar>
        <div className="self-stretch w-[63.8px] relative rounded bg-gray-200 overflow-hidden shrink-0 hidden" />
      </header>
    );
  };
  
  export default Container;