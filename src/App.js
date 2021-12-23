import './App.css';
import CollectionCard from './Components/CollectionCard';
import Header from './Components/Header';
import {useState,useEffect} from 'react';
import axios from 'axios';
import PunkList from './Components/PunkList.jsx';
import Main from './Components/Main';

function App() {
  const [punkListData , setPunkListData] = useState([]);
  const [selectedPunk , setSelectedPunk] = useState(0);
  useEffect(()=>{
    const getMyNfts = async () =>{
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xDcE6F775ad6FD7AF216B1932d62c5e9395315605&order_direction=asc')
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);

    }
    return getMyNfts();
  },[])
  return (
    <div className='app'>
      <Header />
      {
        punkListData.length > 0 && (<>
        <Main selectedPunk={selectedPunk} punkListData={punkListData}/>
        <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
        </>
        )
      }
      
    </div>
  );
}

export default App;
