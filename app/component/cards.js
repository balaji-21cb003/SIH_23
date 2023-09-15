// "use client"
// import React from "react";
// import { Card, CardBody, Image } from "@nextui-org/react";

// export default function Cards() {
//   const list = [
//     {
//       title: "Cardiology",
//       img: "/cardiology.jpg",
//       //   price: "$5.50",
//     },
//     {
//       title: "Dentist",
//       img: "/dentist.jpeg",
//       //   price: "$3.00",
//     },
//     {
//       title: "Neurology",
//       img: "/neurology.jpg",
//       //   price: "$10.00",
//     },
//     {
//       title: "Dermatology",
//       img: "/dermatology.jpg",
//       //   price: "$5.30",
//     },
//     {
//       title: "Anestesiology",
//       img: "anesthesiology.jpg",
//       //   price: "$15.70",
//     },
//     {
//       title: "Pediatrics",
//       img: "pediatrics.jpg",
//       //   price: "$8.00",
//     },
//   ];

//   return (
//     <div className="">

//         <div className="text-5xl item-center">
//             <h1 className="flex pt-[5%] items-center justify-center">CATEGORIES</h1>

//         </div>
//         <div className="grid gap-4 grid-cols-1 p-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">

//         {list.map((item, index) => (
//           <Card
//             shadow="sm"
//             key={index}
//             isPressable
//             onPress={() => console.log("item pressed")}
//           >
//             <CardBody className="p-0">
//               <Image
//                 shadow="sm"
//                 radius="lg"
//                 width="100%"
//                 alt={item.title}
//                 className="w-full object-cover h-fit"
//                 src={item.img}
//               />
//               <h3 className="text-center p-2">{item.title}</h3>
//             </CardBody>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client"
import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";

export default function Cards() {
  const list = [
    {
      title: "Cardiology",
      img: "/cardiology.jpg",
      //   price: "$5.50",
    },
    {
      title: "Dentist",
      img: "/dentist.jpeg",
      //   price: "$3.00",
    },
    {
      title: "Neurology",
      img: "/neurology.jpg",
      //   price: "$10.00",
    },
    {
      title: "Dermatology",
      img: "/dermatology.jpg",
      //   price: "$5.30",
    },
    {
      title: "Anesthesiology",
      img: "anesthesiology.jpg",
      //   price: "$15.70",
    },
    {
      title: "Pediatrics",
      img: "pediatrics.jpg",
      //   price: "$8.00",
    },
  ];

  return (
    <div className="text-center">
      <h1 className="text-5xl pt-12">CATEGORIES</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 p-4">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="p-0">
              <Image
                shadow="sm"
                radius="lg"
                // width="100%"
                alt={item.title}
                className="w-fit object-cover h-fit"
                src={item.img}
              />
              <h3 className="text-center p-2">{item.title}</h3>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
