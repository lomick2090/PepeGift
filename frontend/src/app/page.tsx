import Layout from "./components/Layout"
import SetDonation from "./components/SetDonation"

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <img src="./frok.png" className='w-96 rounded-lg' />
        <div className="text-[white] w-[80vw]">
          <div>
            <p className="font-bold text-center">A Gecko and a Frog hop into a random crypto alpha chat. Everyone just got rugged by one of its very own members who shall not be named.</p>
            <br />
            <br />
            <div className="flex flex-col items-center">
              <div className="w-80">
                [10:20 AM] <span className="font-medium">Frog</span>
                <br />
                What did we get ourselves into?
              </div>
              <br />
              <br />
              <div className="w-80">
                [10:21 AM] <span className="font-medium">Gecko</span>
                <br />
                No idea
              </div>
              <br />
              <br />
              <div className="w-80">
                [10:21 AM] <span className="font-medium">Frog</span>
                <br />
                How can someone betray their own friends like that?
              </div>
              <br />
              <br />
              <div className="w-80">
                [10:24 AM] <span className="font-medium">Gecko</span>
                <br />
                The reason that we're all here Mr. Frog....greed. Greed is good.
              </div>
              <br />
              <br />
              <div className="w-80">
                [10:25 AM] <span className="font-medium">Gecko</span>
                <br />
                Pass it on...
              </div>
            </div>

            <br />
            <br />
            <p className="font-bold text-center">Before the Frog could reply to clear his confusion, the Gecko was no longer available. And he had left the server, never to be seen again.</p>
          </div>
          <br />
          <br />

          <div className="flex justify-center">
            <SetDonation />
          </div>
        </div>

      </div>
    </Layout>
  )
}
