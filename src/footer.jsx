 import React from "react";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 const Footer=(

 )=>
 {
    return(
        <>
    
<div className="links  ">
  <h2 className="text-center text-[2.5rem] p-[10px]">Social Links</h2>
  <div className="  icons flex justify-center gap-4 text-[2rem]">
  <FontAwesomeIcon icon={faInstagram} />
    <i className="fa-brands fa-github"></i>
    <i className="fa-brands fa-discord"></i>
    <i className="fa-solid fa-envelope"></i>
    <i className="fa-brands fa-twitter"></i>
    <i className="fa-brands fa-instagram"></i>
    <i className="fa-brands fa-facebook"></i>
  </div>
  

</div>
        </>
    );
 };
 export default Footer;