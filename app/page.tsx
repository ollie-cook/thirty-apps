import Image from "./components/Image";
import Description from "./components/Description";
import Footer from "./components/Footer";
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="h-screen w-full relative flex flex-col items-center">
        <p className="text-center font-semibold mt-12 text-sm mb-2">I created 30 web apps in 30 days. Click on the squares below to see them.</p>
        <Image />
        <p className="absolute bottom-4 right-4">Scroll to read more<IoIosArrowDown className="inline h-6 w-6" /></p>
      </div>
      <Description />
      <Footer />
    </main>
  );
}
