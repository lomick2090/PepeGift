export default function WalletConnect(props: any) {

    function ReadWallet() {
        const splitWallet = props.walletInfo.address.split('');
        const walletString = splitWallet[0] + splitWallet[1]+ splitWallet[3] + splitWallet[4] + 
            '...' + splitWallet[38] + splitWallet[39] + splitWallet[40] + splitWallet[41]
        return walletString
    }

    return (
        <div>
            <button onClick={props.getAccount} className='bg-[white] rounded-lg p-[2px] m-[1px] font-bold hover:pointer-events-auto'>
                {props.walletInfo.address ? ReadWallet() :  'Connect Wallet'}
            </button>
        </div>
    )
}