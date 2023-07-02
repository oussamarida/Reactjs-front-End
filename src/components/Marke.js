import nft1 from "../assets/nft1.jpg";
import nft2 from "../assets/nft2.jpg";
import nft3 from "../assets/nft3.jpg";
import "./css/Market.css"


function Market() {
  return (
    <div className="p-[10px] flex flex-col gap-[50px] pb-[80px] justify-center  items-center">
      <h1 className="text-[60px] text-[white] mt-[80px] ">
        {" "}
        Explore <span className="text-[#84cc16] font-bold">Marketplace</span>
      </h1>
      <div className="grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2 active:transition-all gap-[30px]">
        <button className="border-[1px] flex justify-center items-center p-[10px] pl-[25px] pr-[25px] text-white rounded-[50px]  border-[#84cc16] active:bg-[#84cc16] active:text-black font-bold">
          Collection
        </button>
        <button className="border-[1px] flex justify-center items-center p-[10px] pl-[25px] pr-[25px] text-white rounded-[50px]  border-[#84cc16] active:bg-[#84cc16] active:text-black font-bold">
          Art
        </button>
        <button className="border-[1px] flex justify-center items-center p-[10px] pl-[25px] pr-[25px] text-white rounded-[50px]  border-[#84cc16] active:bg-[#84cc16] active:text-black font-bold">
          Gaming
        </button>
        <button className="border-[1px] flex justify-center items-center p-[10px] pl-[25px] pr-[25px] text-white rounded-[50px]  border-[#84cc16] active:bg-[#84cc16] active:text-black font-bold">
          Sports
        </button>
        <button className="border-[1px] flex justify-center items-center p-[10px] pl-[25px] pr-[25px] text-white rounded-[50px]  border-[#84cc16] active:bg-[#84cc16] active:text-black font-bold">
          Photography
        </button>
        <button className="border-[1px] flex justify-center items-center p-[10px] pl-[25px] pr-[25px] text-white rounded-[50px]  border-[#84cc16] active:bg-[#84cc16] active:text-black font-bold">
          Music
        </button>
        <button className="border-[1px] flex justify-center items-center p-[10px] pl-[25px] pr-[25px] text-white rounded-[50px]  border-[#84cc16] active:bg-[#84cc16] active:text-black font-bold">
          Virtuel Worlds
        </button>
        <button className="border-[1px] flex justify-center items-center p-[10px] pl-[25px] pr-[25px] text-white rounded-[50px]  border-[#84cc16] active:bg-[#84cc16] active:text-black font-bold">
          Trading Cards
        </button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[20px] mt-[20px]">
      <div className="cards flex flex-col border-[1px] p-[5px]  border-[#84cc16]  min-h-[350px] bg-black min-w-[270px] max-w-[300px] rounded-[10px] cards">
          <div className="flex-1 w-full h-full">
            <img
              alt=""
              className="object-cover h-full w-full rounded-[1Opx]"
              src={nft3}
            />
          </div>
          <div className="h-[80px]  flex flex-rows">
            <div className="flex-1 flex flex-col p-[10px]">
              <h1 className="text-white font-bold">Inception</h1>
              <h1 className="text-white font-normal text-[10px]">Inception</h1>
            </div>
            <div className="flex-1 p-[10px] pl-[35px]">
              <h1 className="text-[#84cc16] text-[20px] font-bold">O.8 ETH</h1>
            </div>
          </div>
          
            <div  className=" Button-cards flex h-[50px] justify-center items-center">
              <button className="flex w-full justify-center items-center p-[10px] pl-[25px] pr-[25px] text-black rounded-[10px] bg-[#84cc16] font-bold">
                Collect Now
              </button>
            </div>
        </div>
        <div className="cards flex flex-col border-[1px] p-[5px]  border-[#84cc16]  min-h-[350px] bg-black min-w-[270px] max-w-[300px] rounded-[10px] cards">
          <div className="flex-1 w-full h-full">
            <img
              alt=""
              className="object-cover h-full w-full rounded-[1Opx]"
              src={nft2}
            />
          </div>
          <div className="h-[80px]  flex flex-rows">
            <div className="flex-1 flex flex-col p-[10px]">
              <h1 className="text-white font-bold">Inception</h1>
              <h1 className="text-white font-normal text-[10px]">Inception</h1>
            </div>
            <div className="flex-1 p-[10px] pl-[35px]">
              <h1 className="text-[#84cc16] text-[20px] font-bold">O.8 ETH</h1>
            </div>
          </div>
          
            <div  className=" Button-cards flex h-[50px] justify-center items-center">
              <button className="flex w-full justify-center items-center p-[10px] pl-[25px] pr-[25px] text-black rounded-[10px] bg-[#84cc16] font-bold">
                Collect Now
              </button>
            </div>
        </div>
        <div className="cards flex flex-col border-[1px] p-[5px]  border-[#84cc16]  min-h-[350px] bg-black min-w-[270px] max-w-[300px] rounded-[10px] cards">
          <div className="flex-1 w-full h-full">
            <img
              alt=""
              className="object-cover h-full w-full rounded-[1Opx]"
              src={nft1}
            />
          </div>
          <div className="h-[80px]  flex flex-rows">
            <div className="flex-1 flex flex-col p-[10px]">
              <h1 className="text-white font-bold">Inception</h1>
              <h1 className="text-white font-normal text-[10px]">Inception</h1>
            </div>
            <div className="flex-1 p-[10px] pl-[35px]">
              <h1 className="text-[#84cc16] text-[20px] font-bold">O.8 ETH</h1>
            </div>
          </div>
          
            <div  className=" Button-cards flex h-[50px] justify-center items-center">
              <button className="flex w-full justify-center items-center p-[10px] pl-[25px] pr-[25px] text-black rounded-[10px] bg-[#84cc16] font-bold">
                Collect Now
              </button>
            </div>
        </div>
        <div className="cards flex flex-col border-[1px] p-[5px]  border-[#84cc16]  min-h-[350px] bg-black min-w-[270px] max-w-[300px] rounded-[10px] cards">
          <div className="flex-1 w-full h-full">
            <img
              alt=""
              className="object-cover h-full w-full rounded-[1Opx]"
              src={nft3}
            />
          </div>
          <div className="h-[80px]  flex flex-rows">
            <div className="flex-1 flex flex-col p-[10px]">
              <h1 className="text-white font-bold">Inception</h1>
              <h1 className="text-white font-normal text-[10px]">Inception</h1>
            </div>
            <div className="flex-1 p-[10px] pl-[35px]">
              <h1 className="text-[#84cc16] text-[20px] font-bold">O.8 ETH</h1>
            </div>
          </div>
          
            <div  className=" Button-cards flex h-[50px] justify-center items-center">
              <button className="flex w-full justify-center items-center p-[10px] pl-[25px] pr-[25px] text-black rounded-[10px] bg-[#84cc16] font-bold">
                Collect Now
              </button>
            </div>
        </div>
        <div className="cards flex flex-col border-[1px] p-[5px]  border-[#84cc16]  min-h-[350px] bg-black min-w-[270px] max-w-[300px] rounded-[10px] cards">
          <div className="flex-1 w-full h-full">
            <img
              alt=""
              className="object-cover h-full w-full rounded-[1Opx]"
              src={nft2}
            />
          </div>
          <div className="h-[80px]  flex flex-rows">
            <div className="flex-1 flex flex-col p-[10px]">
              <h1 className="text-white font-bold">Inception</h1>
              <h1 className="text-white font-normal text-[10px]">Inception</h1>
            </div>
            <div className="flex-1 p-[10px] pl-[35px]">
              <h1 className="text-[#84cc16] text-[20px] font-bold">O.8 ETH</h1>
            </div>
          </div>
          
            <div  className=" Button-cards flex h-[50px] justify-center items-center">
              <button className="flex w-full justify-center items-center p-[10px] pl-[25px] pr-[25px] text-black rounded-[10px] bg-[#84cc16] font-bold">
                Collect Now
              </button>
            </div>
        </div>
        <div className="cards flex flex-col border-[1px] p-[5px]  border-[#84cc16]  min-h-[350px] bg-black min-w-[270px] max-w-[300px] rounded-[10px] cards">
          <div className="flex-1 w-full h-full">
            <img
              alt=""
              className="object-cover h-full w-full rounded-[1Opx]"
              src={nft3}
            />
          </div>
          <div className="h-[80px]  flex flex-rows">
            <div className="flex-1 flex flex-col p-[10px]">
              <h1 className="text-white font-bold">Inception</h1>
              <h1 className="text-white font-normal text-[10px]">Inception</h1>
            </div>
            <div className="flex-1 p-[10px] pl-[35px]">
              <h1 className="text-[#84cc16] text-[20px] font-bold">O.8 ETH</h1>
            </div>
          </div>
          
            <div  className=" Button-cards flex h-[50px] justify-center items-center">
              <button className="flex w-full justify-center items-center p-[10px] pl-[25px] pr-[25px] text-black rounded-[10px] bg-[#84cc16] font-bold">
                Collect Now
              </button>
            </div>
        </div>
        <div className="cards flex flex-col border-[1px] p-[5px]  border-[#84cc16]  min-h-[350px] bg-black min-w-[270px] max-w-[300px] rounded-[10px] cards">
          <div className="flex-1 w-full h-full">
            <img
              alt=""
              className="object-cover h-full w-full rounded-[1Opx]"
              src={nft1}
            />
          </div>
          <div className="h-[80px]  flex flex-rows">
            <div className="flex-1 flex flex-col p-[10px]">
              <h1 className="text-white font-bold">Inception</h1>
              <h1 className="text-white font-normal text-[10px]">Inception</h1>
            </div>
            <div className="flex-1 p-[10px] pl-[35px]">
              <h1 className="text-[#84cc16] text-[20px] font-bold">O.8 ETH</h1>
            </div>
          </div>
          
            <div  className=" Button-cards flex h-[50px] justify-center items-center">
              <button className="flex w-full justify-center items-center p-[10px] pl-[25px] pr-[25px] text-black rounded-[10px] bg-[#84cc16] font-bold">
                Collect Now
              </button>
            </div>
        </div>
        <div className="cards flex flex-col border-[1px] p-[5px]  border-[#84cc16]  min-h-[350px] bg-black min-w-[270px] max-w-[300px] rounded-[10px] cards">
          <div className="flex-1 w-full h-full">
            <img
              alt=""
              className="object-cover h-full w-full rounded-[1Opx]"
              src={nft2}
            />
          </div>
          <div className="h-[80px]  flex flex-rows">
            <div className="flex-1 flex flex-col p-[10px]">
              <h1 className="text-white font-bold">Inception</h1>
              <h1 className="text-white font-normal text-[10px]">Inception</h1>
            </div>
            <div className="flex-1 p-[10px] pl-[35px]">
              <h1 className="text-[#84cc16] text-[20px] font-bold">O.8 ETH</h1>
            </div>
          </div>
          
            <div  className=" Button-cards flex h-[50px] justify-center items-center">
              <button className="flex w-full justify-center items-center p-[10px] pl-[25px] pr-[25px] text-black rounded-[10px] bg-[#84cc16] font-bold">
                Collect Now
              </button>
            </div>
        </div>
      </div>
      <div className="">
      <button className="border-[1px] flex justify-center items-center p-[10px] pl-[25px] pr-[25px] text-white rounded-[15px]  border-[#84cc16] active:bg-[#84cc16] active:text-black font-bold">
          Show More
        </button>
      </div>
    </div>
  );
}

export default Market;
