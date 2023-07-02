import Artist from './components/Artist';
import Explore from './components/Explore';
import Market from './components/Marke';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="bg-[#09101D]">
        <Navbar />
        <Explore />
        <Artist />
        <Market />
    </div>
  );
}

export default App;
