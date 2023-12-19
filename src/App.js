import React from "react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Mobile-NA.jpg')] lg:bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg')] h-screen bg-cover bg-center">
      <NavBar />
    </div>
  );
}

export default App;
