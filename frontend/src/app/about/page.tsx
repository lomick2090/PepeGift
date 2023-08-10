import Layout from "../components/Layout";

export default function About() {
    return (
      <Layout>
        <div className=' text-[white] flex flex-col items-center pb-8'>
          <div className="w-[80vw]">
            <p className="font-bold text-4xl text-center">PepeGift - Shitcoining with a Purpose</p>
            <br />
            <span className="ml-4">We are committed to </span>revolutionizing the cryptocurrency space by creating an impactful and purpose-driven digital asset. Our mission is simple yet powerful: to bridge the gap between financial prosperity and social welfare. With every transaction made through our platform, a portion of the proceeds goes directly to support the esteemed organization <a href="https://GiveWell.org/">GiveWell.org</a>.
            <br />
            <br />
            <span className="font-bold ml-4">What is GiveWell.org?</span>
            <br />
            <span className="ml-4">GiveWell.org</span> is a distinguished non-profit organization dedicated to finding and evaluating outstanding giving opportunities. Their rigorous research and analysis identify charities and interventions that are most effective at saving and improving lives in low-income countries. By partnering with GiveWell.org, ShitCoin aims to channel funds towards initiatives that have a proven track record of making a significant and tangible difference in the lives of those in need.
            <br />
            <br />
            <span className="font-bold ml-4">GiveWell's Impact:</span>
            <br />
            <ul>
              <li>
                <span className="font-bold ml-4">Data-Driven Approach:</span> GiveWell.org employs a data-centric methodology to identify charities with the highest potential for impact. Their thorough evaluations ensure that each supported organization demonstrates a compelling cost-effectiveness ratio.
              </li>
              <br />
              <li><span className="font-bold ml-4">Life-Saving Interventions:</span> GiveWell.org focuses on supporting interventions that directly save lives and alleviate suffering in the most vulnerable communities around the world. Their efforts prioritize health, education, nutrition, and essential humanitarian aid.</li>
              <br />
              <li><span className="font-bold ml-4">Transparency and Accountability:</span> GiveWell.org maintains a commitment to transparency and accountability. They provide detailed reports on their findings, financials, and the impact of the charities they endorse, ensuring donors have confidence in their contributions.</li>
              <br />
              <li>
              <span className="font-bold ml-4">Continuous Research:</span> GiveWell.org continuously evaluates and re-evaluates charitable organizations to ensure that resources are allocated to the most effective and efficient initiatives. This dedication to research enables ShitCoin to make a lasting impact through ongoing support.
              </li>
            </ul>
            <br />
            <br />
            <span className="font-bold ml-4">Together Towards Change:</span>
            <br />
            <span className="ml-4">By aligning PepeGift</span>'s vision with GiveWell.org's exemplary work, we empower our community to create a positive and lasting change in the lives of those less fortunate. Embracing our motto, "shitcoining with a purpose," every participant in the PepeGift ecosystem becomes an agent of change, driving real-world progress and inspiring others to do the same.
            Join us on this transformative journey as we leverage the power of cryptocurrency to contribute to noble causes and build a brighter, more equitable world. Together, we make every transaction matter and redefine the potential of crypto for a greater purpose. Together, we create a better future.
          </div>
        </div>
      </Layout>
    )
}