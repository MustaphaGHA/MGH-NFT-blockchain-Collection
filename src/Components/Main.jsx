import React from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'

const Main = () => {
    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighlight'>
                    <div className='punkContainer'>
                        <img 
                        className='selectedPunk' 
                        src="https://ipfs.thirdweb.com/ipfs/bafkreifk7kpijzrnwc3w2wjbkoffpmdnzxcurirxs6iecw3y7rt6r3qkry"
                        alt="" />
                    </div>
                </div>
                <div className='punkDetails' style={{color:'#FFF'}}>
                    <div className='title'>
                        DexLab
                    </div>
                    <span className='itemNumber'>•#3</span>
                </div>
                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src="https://ipfs.thirdweb.com/ipfs/bafkreifk7kpijzrnwc3w2wjbkoffpmdnzxcurirxs6iecw3y7rt6r3qkry" alt="" />
                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div className='ownerAdress'>0xEEBB099fb90C0F669216e05d941888a7e04EcD5d</div>
                            <div className='ownerHandle'>@MustaphaGHA</div>
                        </div>
                        <div className='ownerLink'>
                            <img src={instagramLogo} alt="" />
                        </div>
                        <div className='ownerLink'>
                            <img src={twitterLogo} alt="" />
                        </div>
                        <div className='ownerLink'>
                            <img src={moreIcon} alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Main
