import React, {useState, useMemo, useEffect} from 'react'
import Layout from '../components/Layout'
import WalletConnect from '../components/WalletConnect'
import giftABI from '../ABIs/giftABI.json'
import { ethers } from 'ethers'

export default function SetDonation() {
    const [provider, setProvider] = useState(new ethers.providers.Web3Provider(window.ethereum));
    const [walletInfo, setWalletInfo] = useState({});

    async function connectWallet() {
        setProvider(new ethers.providers.Web3Provider(window.ethereum))
        const accounts = await provider.send('eth_requestAccounts', [])
        const signer = provider.getSigner()


        setWalletInfo(prevInfo => {
            return {
                ...prevInfo,
                address: accounts[0],
                signer,
            }
        })
    }

    provider.provider.on('chainChanged', () => {
        window.location.reload()
    })

    provider.provider.on("accountsChanged", () => {
        connectWallet();
    })

    return (
        <Layout>
            <WalletConnect />
        </Layout>
    )
}