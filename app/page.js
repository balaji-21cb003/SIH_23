import Link from "next/link";
import Navbar from "./component/nav";
import Video from "./component/video";
import Cards from "./component/cards";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Video />
      <Cards />
      
    </div>
  );
}
