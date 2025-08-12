import Hero from "./components/Hero";
import Main from "./components/main";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
   <div className="min-h-screen bg-gray-900">
     <Navbar/>
     <Hero/>
     <Main/>
   </div>
  );
}
