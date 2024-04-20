import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import FormContainer from "./formcontainer";
import './framecomponent.css'
const FrameComponent = ({image, name, description}) => {
  return (
    <>
      <div className="card" style={{height:"20rem"}}>
        <div className="card-img">
          <img src={image} className="card-img-top" style={{height:"10rem"}} alt="" />
        </div>
        <div className="card-name px-3">
          <h3>{name}</h3>
        </div>
        <div className="card_description" style={{height:"3rem", overflow:"auto",  msOverflowStyle: "none"}}>
          <p className="fs-6 px-3" style={{fontFamily:"sansSerif"}}>{description}</p> 
        </div>
        <div className="card-button-container mt-auto px-3"> {/* Container for the button */}
          <Popup
            trigger={  
              <div className="btn position-relative" style={{color:"#5303E0", fontFamily:"sansSerif", height:"fit-content", width:"auto"}}>
                Book Slot <span>&rarr;</span>
              </div>
            }
            position="top center"
            contentStyle={{
              overflowY:"auto",
              maxHeight:"80vh",
             
            }}
            modal
            overlayStyle={{background: "rgba(0, 0, 0, 0.5)", transition: "background 0.5s ease"}}
          >
            <FormContainer ServiceName={name} />
          </Popup>
        </div>
      </div>
    </>
  );
};

export default FrameComponent;
