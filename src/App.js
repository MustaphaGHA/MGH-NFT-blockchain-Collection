import './App.css';
import CollectionCard from './Components/CollectionCard';
import Header from './Components/Header';

function App() {
  return (
    <div className='app'>
      <Header />
      <CollectionCard id={0} name={'Dexter'} traits={[{'value':7}]} 
      image ='https://nftlabs.mypinata.cloud/ipfs/bafkreifk7kpijzrnwc3w2wjbkoffpmdnzxcurirxs6iecw3y7rt6r3qkry' />
    </div>
  );
}

export default App;
