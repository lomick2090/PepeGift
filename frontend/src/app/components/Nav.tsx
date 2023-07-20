import Link from "next/link"

export default function Nav() {
    return( 
        <div className='flex justify-center align-center bg-slate-800 p-2 pr-4 pl-4'>
            <ul className='flex gap-2 text-[white]'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='about'>About</Link></li>
                <li><a href='https://dexscreener.com/'>Chart</a></li>
            </ul>
            <h1 className='text-[white] text-2xl ml-auto mr-auto whitespace-nowrap'>My Shitcoin Website</h1>
            <button className='text-[white]'><a href="https://uniswap.org">Buy Now</a></button>
        </div>
    )
}