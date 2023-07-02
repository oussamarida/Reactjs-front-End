import nft1 from "../assets/nft1.jpg";
import nft2 from "../assets/nft2.jpg";
import nft3 from "../assets/nft3.jpg";

function Artist() {
  return (
    <div className="bg-black  rounded-tl-[100px] sm:h-[200vh] md:h-[150vh] lg:h-[100vh] flex flex-col ">
      <div className="h-[100px] grid grid-cols-4">
        <div className="m-w-[400px] flex flex-col justify-center items-center">
          <h1 className="ml-[100px] font-bold text-[#84cc16]">
            Ready to collect
          </h1>
          <h1 className="ml-[100px] font-bold text-[20px] text-white">
            Popular Artwork
          </h1>
        </div>
        <div className=" bg-[#090E1A] flex flex-col justify-center items-center">
          <h1 className="text-[40px] font-bold text-white">26k+</h1>
          <h1 className="text-[20px] text-[#84cc16]">Artwork</h1>
        </div>
        <div className=" bg-[#090E1A] flex flex-col justify-center items-center">
          <h1 className="text-[40px] font-bold text-white">22K+</h1>
          <h1 className="text-[20px] text-[#84cc16]">Artwork</h1>
        </div>
        <div className=" bg-[#090E1A] flex flex-col justify-center items-center">
          <h1 className="text-[40px] font-bold text-white">13K+</h1>
          <h1 className="text-[20px] text-[#84cc16]">Artwork</h1>
        </div>
      </div>
      <div className="flex-1 bg-black p-[100px]">
        <h1 className="max-w-[500px] ml-[100px] text-[40px] mb-[60px] font-bold text-white">
          <span className="text-[#84cc16]">Amazing</span> and Super Unique Art
          of <span className="text-[#84cc16]">This Week</span>
        </h1>
        <div className="ml-[100px]  h-[400px] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[50px]">
          <div className="bg-[#090E1A] border-[#84cc16] p-[20px] border-[1px]  flex flex-col   rounded-[10px] max-w-[400px]">
            <div className="flex-1">
              <div>
                <img alt="" className="h-[200px] w-[100%]" src={nft1} />
              </div>
            </div>
            <div className="h-[75px] flex flex-rows">
              <div className="flex-1 flex items-center text-white font-bold text-[20px]">
                Cyberpunk Cocomo
              </div>
              <div className="w-[150px] flex justify-end items-center text-white text-[20px]">
                490ETH
              </div>
            </div>
            <div className="h-[75px] flex flex-rows">
              <div className=" flex-1 flex flex-col justify-center ">
                <h1 className="text-[10px] text-white">Ending in</h1>
                <h1 className="text-[20px] font-bold text-white">03:24:56</h1>
              </div>
              <div className="flex-1 flex p-[6px] ">
                <button className="flex-1 bg-[#090E1A] text-[#84cc16] rounded-[10px] border-[1px] border-[#84cc16] ">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#090E1A] border-[#84cc16] p-[20px] border-[1px]  flex flex-col   rounded-[10px] max-w-[400px]">
            <div className="flex-1">
              <div>
                <img alt="" className="h-[200px] w-[100%]" src={nft2} />
              </div>
            </div>
            <div className="h-[75px] flex flex-rows">
              <div className="flex-1 flex items-center text-white font-bold text-[20px]">
                Cyberpunk Cocomo
              </div>
              <div className="w-[150px] flex justify-end items-center text-white text-[20px]">
                490ETH
              </div>
            </div>
            <div className="h-[75px] flex flex-rows">
              <div className=" flex-1 flex flex-col justify-center ">
                <h1 className="text-[10px] text-white">Ending in</h1>
                <h1 className="text-[20px] font-bold text-white">03:24:56</h1>
              </div>
              <div className="flex-1 flex p-[6px] ">
                <button className="flex-1 bg-[#090E1A] text-[#84cc16] rounded-[10px] border-[1px] border-[#84cc16] ">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#090E1A] border-[#84cc16] p-[20px] border-[1px]  flex flex-col   rounded-[10px] max-w-[400px]">
            <div className="flex-1">
              <div>
                <img alt="" className="h-[200px] w-[100%]" src={nft3} />
              </div>
            </div>
            <div className="h-[75px] flex flex-rows">
              <div className="flex-1 flex items-center text-white font-bold text-[20px]">
                Cyberpunk Cocomo
              </div>
              <div className="w-[150px] flex justify-end items-center text-white text-[20px]">
                490ETH
              </div>
            </div>
            <div className="h-[75px] flex flex-rows">
              <div className=" flex-1 flex flex-col justify-center ">
                <h1 className="text-[10px] text-white">Ending in</h1>
                <h1 className="text-[20px] font-bold text-white">03:24:56</h1>
              </div>
              <div className="flex-1 flex p-[6px] ">
                <button className="flex-1 bg-[#090E1A] text-[#84cc16] rounded-[10px] border-[1px] border-[#84cc16] ">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artist;
