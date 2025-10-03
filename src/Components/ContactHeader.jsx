import WaveBackground from "./WaveBackground";

const ContactHeader = () => {
  return (
    <section className="relative px-5 py-5 overflow-hidden">
      <WaveBackground />
      <h2 className="relative flex items-end h-[150px] justify-center pb-10 text-black">
        Contact Us
      </h2>
    </section>
  )
}

export default ContactHeader