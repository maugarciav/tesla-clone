import React from "react";
import NavBar from "./components/NavBar";
import Model from "./components/Model";

function App() {
  return (
    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Mobile-LHD-6.22.jpg')] lg:bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg')] h-screen bg-cover bg-center">
      <NavBar />
      <Model/>
    </div>
  );
}

export default App;
