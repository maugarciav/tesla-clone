import React from "react";

const Page = ({ title }) => {
  return (
    <li className="py-6 pl-3 text-md font-black hover:rounded hover:bg-black/5">
      {title}
    </li>
  );
};

export default Page;
