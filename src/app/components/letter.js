import React from "react";
import { motion } from "framer-motion";
import Letter from "../../../public/Letter.png";
import Image from "next/image";
import { useState } from "react";
import Response from "./response";
const LetterObj = () => {
  const [showResponse, setShowResponse] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const wasYes = () => {
    setShowResponse(true);
    setShowConfetti(true);
  };

  const wasNo = () => {
    setShowResponse(true);
    setShowConfetti(false);
  };
  return (
    <>
      {showResponse ? (
        <Response isMyvalentine={showConfetti} />
      ) : (
        <motion.div className="flex flex-row justify-center relative">
          <Image
            src={Letter}
            alt="Picture of letter"
            className="relative z-1 w-4/5 md:w-3/4 md:h-4/5 drop-shadow-lg rounded-xl mt-20 md:p-0"
          />

          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col mb-5 space-y-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <button
              className="rounded-lg bg-white shadow-lg drop-shadow-xl font-extralight w-60 h-10 md:w-96"
              onClick={() => wasYes()}
            >
              <p>
                <span className="font-bold">$0.00: </span>Yes, I would love to
              </p>
            </button>
            <button
              className="rounded-lg bg-white shadow-lg drop-shadow-xl font-extralight w-60 h-10 md:w-96"
              onClick={() => wasNo()}
            >
              <p>
                <span className="font-bold">$9.99: </span>No , I suck
              </p>
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default LetterObj;
