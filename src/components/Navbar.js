import logo from '../assets/games-21604.png'

function Navbar() {

  return (
    <div className=" h-[80px] fixed bg-[#090E1A] right-0 left-0 flex flex-row justify-around items-center">
        <div className="">
            <img src={logo} alt="" className="h-[60px] w-[60px]"/>
        </div>
        <div className="flex flex-row gap-10 justify-center item-center decoration-0 text-white	">
           <a href='/'>Explore</a>
           <a href='/'>Artist</a>
           <a href='/'>How it works</a>
           <a href='/'>Activity</a>
        </div>
        <div className="bg-[#84cc16] p-[15px] rounded-[13px]">
            <button className='bg-[#84cc16] font-bold	 '>Connect Wallet</button>
         </div>        
    </div>
  );
}

export default Navbar;
