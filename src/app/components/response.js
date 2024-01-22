import ConfettiExplosion from "react-confetti-explosion";
import { useState } from "react";
import Image from "next/image";
import Venmo from "../../../public/venmo.png";
const Response = ({ isMyvalentine }) => {
  const [showConfetti, setShowConfetti] = useState(isMyvalentine);
  const sadMessage = "I will be expecting my financial compensation";
  return (
    <>
      <div className="bg-white flex flex-row rounded h-screen w-screen justify-center text-center">
        <div className="flex flex-col justify-center items-center space-y-10">
          {isMyvalentine ? (
            <h1 className="text-3xl md:text-6xl font-extralight text-black">
              Love ya, its a date <span className="text-red-500">❤️</span>
            </h1>
          ) : (
            <>
              <h1 className="text-3xl md:text-6xl font-extralight text-black">
                {sadMessage}
              </h1>
              <Image
                src={Venmo}
                alt="Picture of venmo"
                className="md:w-1/3 md:h-4/5"
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Response;
