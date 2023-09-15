import React from "react";

export default function Video() {
  
  const myStyle = {
    position: "relative",
    right: 0,
    bottom: 0,
    top:0,
    zIndex: "-1",
    opacity: "0.80",
    width: "100%",
    height:"100%",
    objectFit: "cover",
  };

  return (
    <div className="">
      <video autoPlay loop muted playsInline style={myStyle}>
        <source src="/video.mp4" type="video/mp4" /> 
        {/* Your browser does not support the video tag. */} 

      
      </video>
    </div>
  );
}
