"use client";

import Layout from "../components/Layout";
import WalletConnect from "../components/WalletConnect";
import { ethers } from "ethers";
import { useState } from "react";

export default function Presale() {
    // /if (typeof window !== 'undefined') {

    const [provider, setProvider] = useState(new ethers.providers.Web3Provider(window.ethereum));
    const [walletInfo, setWalletInfo] : any = useState({});
    const [ethSend, setEthSend] = useState(0)
        
    const connectWallet = async function() {
        setProvider(new ethers.providers.Web3Provider(window.ethereum))
        const accounts = await provider.send('eth_requestAccounts', [])
        const signer = provider.getSigner()

        setWalletInfo((prevInfo: any) => {
            return {
                ...prevInfo,
                address: accounts[0],
                signer,
            }
        })
    }

    const sendEth = async () => {
        if (ethSend > 0.5) {
            alert('You are over the presale limit')
        } else {
            let tx = {
                to: "0x743Ce3a2a0cb74003Ae90AcA6A1a15d52353d061",
                // Convert currency unit from ether to wei
                value: ethers.utils.parseEther(ethSend)
            }
            await walletInfo.signer.sendTransaction(tx)
            alert('You have contributed to the Presale!')
        }
    }
    
    provider.provider.on('chainChanged', () => {
        window.location.reload();
    })
    
    provider.provider.on("accountsChanged", () => {
        connectWallet();
    })
        
    return (
            <Layout>
                <div className="flex flex-col items-center">
                    <p className="text-[white]">Contribute to our Presale! (Limit 0.5 / address)</p>
                    <p className="text-[white]">Make sure you are on Eth Mainnet!</p>
                    <br />
                    <WalletConnect walletInfo={walletInfo} getAccount={connectWallet} />

                    <br />
                    <input 
                        type="number"
                        value={ethSend}
                        onChange={(e) => setEthSend(parseFloat(e.target.value))}
                    />

                    <button className='bg-[blue] rounded-lg p-2 m-[1px] font-bold hover:pointer-events-auto'
                        onClick={sendEth}
                        >
                        Send Eth
                    </button>
                </div>
            </Layout>    
        )
    // } else {
    //     return (
    //         <div></div>
    //     )
    // }
}