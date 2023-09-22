import Link from "next/link";
import Navbar from "./component/nav";
import Video from "./component/video";
import Cards from "./component/cards";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Video />
      {/* <h3 className="">Book your appointment</h3>  */}

      <Cards />
      
    </div>
  );
}
