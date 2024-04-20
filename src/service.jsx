import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Container from "./container";
import FrameComponent from "./framecomponent";
import ServiceData from './servicefile.json'
import Footer from './footer'
import axios from "axios";
const ServicePage = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState(ServiceData);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const onLearnMoreText1Click = useCallback(() => {
    navigate("/slot-booking-page");
  }, [navigate]);

  const onLearnMoreText2Click = useCallback(() => {
    navigate("/slot-booking-page");
  }, [navigate]);

  useEffect(() => {
    const getdata = async () => {

      try {
        const res = await axios.get("http://localhost:3000/v1/services");
        if (!searchTerm) {
          setSearchResults(res.data);


          console.log("res",res.data);
          return;
        }
        console.log("res",res.data);
        const results = res.data.filter(data =>
          data.servicename.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      } catch (e) {
        console.log("error", e);
      }
    };
    getdata();
  }, [searchTerm]);


  return (
    <div className="w-full relative bg-white
shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] overflow-hidden flex
flex-col items-start justify-start pt-[108.8px] px-0 pb-[321px]
box-border gap-[33.8px] leading-[normal] tracking-[normal] text-left
text-base text-dimgray font-inter mq800:gap-[17px]">
      <Container searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <section className="w-[1422px] flex flex-row items-start
justify-center py-0 px-5 box-border max-w-full shrink-0 text-left
text-[43px] text-gray-100 font-epilogue">
        <div className="w-[1042px] flex flex-col items-start
justify-start gap-[55.2px] max-w-full mq675:gap-[28px]">
          <div className="w-[1030px] flex flex-row items-start
justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[746px] flex flex-col items-start
justify-start gap-[23px] max-w-full">
              <div className="self-stretch flex flex-row items-start
justify-center py-0 pr-5 pl-[49px] box-border max-w-full mq450:pl-5
mq450:box-border">
                <h1 className="m-0 w-[323px] relative text-inherit
leading-[60px] font-bold font-inherit inline-block max-w-full
mq800:text-[34px] mq800:leading-[48px] mq450:text-[26px]
mq450:leading-[36px]">
                  Demo services
                </h1>
              </div>
              <div className="self-stretch relative text-base
leading-[26px] font-inter text-dimgray text-center">
                Click,Book,Done. Booking Made Easy
              </div>
            </div>
          </div>
          <div className="row w-100">
            {searchResults.length > 0
              ? searchResults.map((data, index) => (
                <>
                  <div className="col-md-4 mb-3">
                    <FrameComponent
                      name={data.servicename}
                      description={data.servicedesc}
                      image={data.serviceImg}
                    />
                  </div></>
                ))
              :<>loading</>}
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default ServicePage;