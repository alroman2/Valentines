"use client";
import Image from "next/image";
import Envelope from "../../public/Envelope.svg";
import Letter from "./components/letter";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [open, setOpen] = useState(false);
  const audioRef = useRef();

  const playAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play();
    }
  };

  const openEnvelope = () => {
    playAudio();
    setOpen(true);
  };
  return (
    <>
      <audio ref={audioRef} loop>
        <source src="./Show Me How_words.mp3" type="audio/mpeg" />
      </audio>
      {open ? (
        <Letter />
      ) : (
        <div className="bg-[#D6DFDC]">
          <div className="flex flex-row justify-center items-center pt-5">
            <motion.div
              className="flex flex-col text-center justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <h1 className="text-6xl font-extralight text-black">
                Dear Kelly,
              </h1>

              <Image
                src={Envelope}
                alt="Picture of envelope"
                className=" md:w-3/4 md:h-3/4 drop-shadow-lg mt-20 md:p-0 animate-bounce transition-all ease-in-out"
              />

              <button
                className="rounded-full bg-white text-black shadow-lg w-1/2 h-16 md:mb-20"
                onClick={() => openEnvelope()}
              >
                <p className="font-extralight text-black"> Open Envelope </p>
              </button>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}
