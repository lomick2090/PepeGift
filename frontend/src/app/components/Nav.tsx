import Link from "next/link"

export default function Nav() {
    return( 
        <div className='flex justify-center align-center bg-slate-800 p-2 pr-4 pl-4 mb-4'>
            <ul className='flex gap-2 text-[white] mr-auto'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='about'>About</Link></li>
                <li><a href='https://dexscreener.com/'>Chart</a></li>
            </ul>
            <h1 className='text-[white] text-2xl whitespace-nowrap absolute r-[40vw] top-1'>Crypto For Good</h1>

            <div className='flex gap-2 text-[white] ml-auto'>
                <Link href='setDonation'>Set Donation</Link>
                <button className='text-[white] whitespace-nowrap'><a href="https://uniswap.org">Buy Now</a></button>
            </div>
        </div>
    )
}