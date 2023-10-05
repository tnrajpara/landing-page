import Carousel from "./components/Carousel";
import { MdReorder } from "react-icons/md";
import Navbar from "./components/Navbar";
import Product from "./Product/page";

const Page = () => {
  return (
    <>
      <div className="">
        <div>
          <Navbar />
        </div>
        <div className="">
          <Carousel />
        </div>
        <div>
          <Product />
        </div>
      </div>
    </>
  );
};

export default Page;
