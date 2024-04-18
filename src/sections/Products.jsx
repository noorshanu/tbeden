import React from "react";

function Products() {
  return (
    <section className=" bg-[#ab3435] py-4 px-6">
      <div className=" container-wrapper">
        <div className=" flex justify-between items-center flex-col sm:flex-row">
          <div className=" w-full">
            <img src="images/img1.jpeg" alt="" className=" rounded-full h-[350px] w-auto" />
          </div>

          <div className=" flex justify-center  flex-col">
            <h2 className=" text-3xl asul-bold text-center">Community Voting: Holders of BTRUMP tokens can participate in community-driven events and decisions, impacting future collectible releases and features.</h2>


          </div>

        
        </div>
      </div>
    </section>
  );
}

export default Products;
