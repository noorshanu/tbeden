import React from "react";

function Aboutus() {
  return (
    <section className=" py-4">
      <div className=" container-wrapper">
        <div className=" flex justify-center items-center  flex-col">
          <div className=" w-full">
            <img
              src="images/about.jpeg"
              alt=""
              className=" h-auto sm:h-[370px] rounded-xl mx-auto"
            />
          </div>

          <div className=" max-w-2xl">
            <h1 className=" asul-bold text-4xl py-4 text-center">About us</h1>

            <p className=" text-lg py-2">
              Dive into the 2024 Election frenzy with "BTRUMP! The first Trump
              vs Beden meme on Solana blockchain, featuring an array of vibrant,
              meme-inspired designs that capture the competitive essence of the
              election battle between Donald Trump and Joe Biden. Each meme and
              NFT (non-fungible token) showcases caricatured depictions of the
              candidates in various humorous and iconic moments from the
              campaign trail.
            </p>

            <p className=" text-lg py-2">
              Let's bring laughter, creativity, and a hint of political satire
              to the Solana world.
            </p>

        
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
