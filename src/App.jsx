
import React from "react"
import { Routes,Route } from "react-router-dom"
import ServicePage from "./service"
import SlotBookingPage from "./form"

export default function App() {
  return (
<>
<Routes>
<Route path='/' element={<ServicePage></ServicePage>}></Route>
<Route path='/slotbooking' element={<SlotBookingPage></SlotBookingPage>}></Route>

</Routes>
</>
  );
}