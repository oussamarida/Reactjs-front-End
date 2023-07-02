import games from '../assets/header.png'

function Explore() {
    
  return (
    <div className="bg-[#09101D]  grid lg:grid-cols-2 sm:grid-cols-1 ">
      <div className="flex flex-col justify-center text-white">
        <h1 className='text-[60px] font-bold max-w-[500px] lg:ml-[280px] sm:ml-[180px] '>
          Discover and Collect the Best NFTs <span className='text-[#84cc16]'> Digital Art</span>
        </h1>
        <p className="lg:ml-[280px] sm:ml-[180px] max-w-[500px] font-bold">
            NFT games, also known as non-fungible token games, have gained significant popularity in recent years. These games leverage blockchain technology and NFTs to offer unique and verifiable in-game assets that players can own, trade, and use within the game ecosystem. NFTs.
        </p>
        <div className='flex flex-row lg:ml-[300px] sm:ml-[250px] mt-[20px] gap-[18px]'>
          <div className="bg-[#84cc16] p-[15px] rounded-[13px] w-[150px]">
            <button className="bg-[#84cc16] font-bold	 ">Connect Wallet</button>
          </div>
          <div className=" p-[12px] rounded-[13px] w-[150px]  border-2">
            <button className="ml-[20px] font-bold">Learn More  </button>
          </div>
        </div>
      </div>
      <div className=" flex justify-left items-stretch lg:ml-[-2px] sm:ml-[140px]">
        <img alt='' src={games} />
      </div>
    </div>
  );
}

export default Explore;
