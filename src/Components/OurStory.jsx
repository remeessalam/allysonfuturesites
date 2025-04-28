import visionmissionimg from "../assets/images/visionmissionimg.png";
const OurStory = () => {
  return (
    <section>
      <div className="paddingtop paddingbottom wrapper grid md:grid-cols-2 gap-10">
        <div>
          <h3
            data-aos="fade-right"
            className="text-[32px] text-primary font-bold"
          >
            One of the fastest growing companies
          </h3>
          <p className="desc mt-4" data-aos="fade-right">
            We specialize in AI-driven services enhanced by the power of
            Blockhain technologies, offering tailored solutions that meet the
            unique challenges of our clients. By taking the time to truly
            understand their goals, we seamlessly integrate cutting-edge tools
            like GPT-4, Stable Diffusion, and blockchain platforms such as EVM
            and Hyperledger into existing infrastructures — delivering
            comprehensive, future-ready systems across various industries.
            <br />
            <br />
            Our expertise covers a wide range of focus areas including AI model
            integration, gamification, blockchain protocol development,
            decentralized autonomous organizations (DAOs), and more—driving
            innovation at every step.
          </p>
        </div>
        <img data-aos="fade-left" src={visionmissionimg} alt="" />
      </div>
    </section>
  );
};

export default OurStory;
