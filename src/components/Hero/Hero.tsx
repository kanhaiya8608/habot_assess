
import { BsBriefcaseFill, BsGeoAltFill  } from "react-icons/bs";
import backgroundImage from "../../assets/hero-background.png";
import { SearchInput } from "./SearchInput";



const Hero: React.FC = () => {
    return (
      <div
        className="relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat h-[700px] md:h-[550px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(7, 47, 87, 0.75), rgba(7, 47, 87, 0.45)), url(${backgroundImage})`,
        }}
      >
        <div className="max-w-7xl mx-auto">        
          <div className="relative p-4 px-8 text-center text-white mx-auto">
          <h1 className="md:text-6xl text-3xl font-bold mb-4">Are You a Supplier?</h1>
          <h2 className="md:text-6xl text-3xl mb-8">Explore Matching Opportunities.</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <SearchInput icon={BsBriefcaseFill} placeholder="Search your required service here" />
            <SearchInput icon={BsGeoAltFill} placeholder="Search your desired location here" />
            <button className="px-8 w-full md:w-auto py-4 bg-emerald-700 text-white rounded-lg hover:bg-emerald-500 focus:outline-none">
              Search
            </button>
          </div>
          <p className="text-md md:text-2xl">
            <span className="md:inline block font-bold">Are you a buyer?</span>{" "}
            <span className="underline cursor-pointer">Click here if you are looking to post a requirement</span>
          </p>
        </div>
        </div>

      </div>
    );
  };
  
  export default Hero;
  
