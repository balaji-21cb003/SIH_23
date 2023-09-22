// import React from "react";

// export default function Video() {
  
//   const myStyle = {
//     position: "relative",
//     right: 0,
//     bottom: 0,
//     top:0,
//     zIndex: "-1",
//     opacity: "0.80",
//     width: "100%",
//     height:"100%",
//     objectFit: "cover",
//   };

//   return (
//     <div className="">
//       <video autoPlay loop muted playsInline style={myStyle}>
//         <source src="/video.mp4" type="video/mp4" /> 
//         {/* Your browser does not support the video tag. */} 

      
//       </video>
//       <h3 className="">Book your appointment</h3> 

//     </div>
//   );
// }

//-----------------------------------------------------



"use client"
import React from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Video() {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  const videoStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: "0.80",
  };

  const textContainerStyle = {
    position: "absolute",
    bottom: "70px", // Adjust this value for the desired vertical position
    left: "40px", // Adjust this value for the desired horizontal position
    color: "#0d9967", // You can change the text color here
    fontweight: "bold",
  };

  // Define animation properties for the <h3> tag
  const h3Animation = {
    initial: { opacity: 0, y: 20 }, // Initial state
    animate: { opacity: 1, y: 0 }, // Animation state
    transition: { duration: 1 }, // Animation duration
    
  };

  return (
    <div style={containerStyle}>
      <video autoPlay loop muted playsInline style={videoStyle}>
        <source src="/video.mp4" type="video/mp4" />
        {/* Your browser does not support the video tag. */}
      </video>
      
        <Link  href={"/appointment"}>
        <div style={textContainerStyle}>
        <motion.div initial="initial" animate="animate" transition={h3Animation}>
          <div className="text-9xl">
          <AiOutlineSchedule />
          </div>
          <motion.h3 variants={h3Animation} className="text-3xl">Book your appointment!</motion.h3>
        </motion.div>
        </div>

        </Link>
    </div>
  );
}
