"use client";

import React, {useState, useMemo, useEffect} from 'react'
import Layout from '../components/Layout'
import WalletConnect from '../components/WalletConnect'
import giftABI from '../ABIs/giftABI.json'
import { ethers } from 'ethers'

export default function SetDonation() {

    if (typeof window !== 'undefined') {


    

    const [provider, setProvider] = useState(new ethers.providers.Web3Provider(window.ethereum));
    const [giftContract, setGiftContract] = useState(new ethers.Contract('0xfb09768BF031672338b4F08909cE76776eC44567', giftABI, provider));
    const [walletInfo, setWalletInfo] : any = useState({});
    const [addressInput, setAddressInput] = useState("0x750EF1D7a0b4Ab1c97B7A623D7917CcEb5ea779C")
        
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

    const updateDonationAddress = async function() {
        try {
            const connectedGift = giftContract.connect(walletInfo.signer)
            const transaction: any = connectedGift.updateDonationWallet(addressInput)
            transaction.wait();
            alert('Donation Wallet Updated!')
            window.location.reload();
        } catch(err) {
            console.log(err)
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
                <p className="text-[white]">Connect your wallet to change the donation address!</p>
                <p className="text-[white]">(You must have at least 0.5% of total supply)</p>
                <WalletConnect walletInfo={walletInfo} getAccount={connectWallet} />

                <br />
                <br />

                <p className="text-[white]">Select Charity Address:</p>

                <select 
                    className="p-[3px]"
                    value={addressInput} // ...force the select's value to match the state variable...
                    onChange={e => setAddressInput(e.target.value)}
                    >
                    <option value="0x750EF1D7a0b4Ab1c97B7A623D7917CcEb5ea779C">
                        Give Directly
                    </option>
                    <option value="0x7cF2eBb5Ca55A8bd671A020F8BDbAF07f60F26C1">
                        Give Well
                    </option>
                </select>
                <br />

                <button className='bg-[blue] rounded-lg p-2 m-[1px] font-bold hover:pointer-events-auto'
                    onClick={updateDonationAddress}
                    >
                    Write To Contract
                </button>
            </div>
        </Layout>
                
    )
    }
}