import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
function Hero() {
  return (
    <section className=" h-[33vh]  sm:h-[100vh] ">
      <div className=" container-wrapper">
        <div className=" flex flex-col justify-center items-center pt-[10rem] sm:pt-[33%]  rounded-3xl">
        
          {/* <img
            src="images/logo.png"
            alt=""
            className=" rounded-full h-[350px] mb-4"
          /> */}

          <div className="bg-[#344cab]  rounded-full py-2 px-4 my-3">
            <a
              href="https://solscan.io/token/7S6i87ZY29bWNbkviR2hyEgRUdojjMzs1fqMSXoe3HHy"
              target="_blank"
              className="asul-bold text-xs sm:text-2xl"
            >
            7S6i87ZY29bWNbkviR2hyEgRUdojjMzs1fqMSXoe3HHy
            </a>
          </div>

          <div className="flex justify-center gap-4 items-center">
            <a
              href="https://www.dextools.io/app/en/solana/pair-explorer/DUXstahu6oU1m39LgCmYh9QCSK7q2wrtKPEcv5iRwERD?t=1713463968983"
              target="_blank"
              className="bg-[#344cab]  rounded-full text-lg sm:text-2xl py-2 px-6 font-bold asul-bold  border-2 border-black"
            >
              DEXTOOLS
            </a>

            <div className=" flex justify-center gap-4 items-center">
              <a
                href="https://t.me/tbeden"
                target="_blank"
                className=" text-5xl "
              >
                <FaTelegram />
              </a>

              <a
                href="https://x.com/bedenvstrump/"
                target="_blank"
                className=" text-5xl"
              >
                <FaSquareXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
