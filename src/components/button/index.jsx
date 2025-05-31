import React from "react";

const Index = ({imgclassName, buttonName, className, icon }) => {
  return (
    <button className={`flex items-center gap-2 ${className}`}>
      {icon && <img  src={icon} alt="icon" className={className={imgclassName}} />}
      {buttonName && <span>{buttonName}</span>}
    </button>
  );
};

export default Index;
