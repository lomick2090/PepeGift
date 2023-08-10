import Layout from "./components/Layout"

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <img src="./Pepegift.png" className='w-96' />
        <div className="text-[white] w-[80vw]">
          
          <span className="font-bold ml-4">Why Crypto For Good?</span>

          <br />
          
          We believe in making a difference in people's lives. With every single transaction, a portion is automatically allocated to charitable causes. By simply participating in our shitcoin ecosystem, you become an active force for positive change in the world.

          <br />
          <br />
          
          <span className="font-bold ml-4">Empowering Charitable Initiatives</span>

          <br />
          
          Our commitment goes beyond just words. We have carefully curated a selection of reputable charitable organizations, spanning various causes, to ensure your contributions make a lasting impact. Together, we can uplift communities, support vital research, and drive positive change globally.

          <br />
          <br />
          
          <span className="font-bold ml-4">Join Us Today and Be the Change!</span>

          <br />

          Don't miss out on the opportunity to be part of the next-gen crypto movement. Let's embark on this transformative journey together, empowering ourselves and the world. Welcome to Crypto For Good: <span className="font-bold">Shitcoining with a Purpose!</span>
        </div>

      </div>
    </Layout>
  )
}
