"use client";
import Modal from "./Modal";
import React, { useState } from "react";
import { GiVideoConference } from "react-icons/gi";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import Navbar from "../component/nav";

export default function BookingCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const doctors = [
    {
      img: "/doctor1.jpg",
      name: "Dr. John Smith",
      department: "Cardiology",
      about:
        " Dr. John Smith, a seasoned expert, excels in diagnosing and treating a wide range of heart-related conditions.",
      experience: "15 years",
      hospitalname: "ABC Cardiac Hospital",
    },
    {
      img: "/doctor2.jpg",
      name: "Dr. Emily willis",
      department: "Pediatrics",
      about:
        "Dr. Emily Johnson is a caring pediatrician dedicated to providing the best healthcare for children and infants.",
      experience: "10 years",
      hospitalname: "Children's Hospital",
    },
    {
      img: "/doctor3.jpg",
      name: "Dr. karan nga",
      department: "Orthopedics",
      about:
        "Dr. Sarah Davis is an orthopedic specialist known for her expertise in treating bone and joint disorders.",
      experience: "12 years",
      hospitalname: "OrthoCare Medical Center",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-row gap-10 ml-[2%]">
        {doctors.map((data) => (
          <Card className="w-full  max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">
              <img src={data.img} alt="ui/ux review check" />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex  items-center justify-evenly">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-medium"
                >
                  {data.name}
                </Typography>
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  5.0
                </Typography>
              </div>
              <div className="mb-3 flex  items-center justify-evenly">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="text-md text-[#0d9967]"
                >
                  {data.department}
                </Typography>
              </div>
              <Typography color="gray">{data.about}</Typography>
              <Typography
                variant="h5"
                color="blue-gray"
                className="text-md  mt-[15px]"
              >
                {data.experience} of experience
              </Typography>
              <Typography
                variant="h5"
                color="blue-gray"
                className="text-md  mt-[15px]"
              >
                {data.hospitalname} of experience
              </Typography>
            </CardBody>
            <CardFooter className="p-3 mt-[10px]">
              <Button
                onClick={handleOpenModal}
                className="text-lg p-3 bg-[#0d9967] text-white hover:bg-red-700"
                fullWidth={true}
              >
                Book your slot!
              </Button>
              <Button
                onClick={handleOpenModal}
                className="text-lg p-3 bg-[#0d9967] mt-[10px] flex flex-row justify-center items-center text-white hover:bg-red-700"
                fullWidth={true}
              >
                 Video consult <GiVideoConference />
              </Button>
            </CardFooter>
          </Card>
        ))}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  );
}
