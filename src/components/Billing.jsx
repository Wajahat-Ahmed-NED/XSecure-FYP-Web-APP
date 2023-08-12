import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import SecurityMech from "./securityMechanism";

const Billing = () => (
  <>
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2fjAlBRPC0g6eODwjNUsAI5Ygm162KhAQnjCcD6a-gD2Tj3lLjHnMn8k3CJNmQcnuS8&usqp=CAU" alt="billing" className="w-[100%] h-[100%] relative z-[5]" style={{ borderRadius: "25px" }} />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Products - Advanced Security & Advanced Ransom Threat
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ textAlign: "justify" }}>
          This product provides advanced security for advanced ransomwares because new and complex ransomware families are generated regularly because it is a continuous process and our product needs to be updated against those ransomwares and must provide patches on regular basis. Our products/services are:

        </p>
        <ol >
          <li className={`${styles.paragraph} `} style={{ textAlign: "justify", fontWeight: 'bold' }}>- Raccine</li>
          <li className={`${styles.paragraph}`} style={{ textAlign: "justify", fontWeight: 'bold' }}>- PenTesting</li>
          <li className={`${styles.paragraph} `} style={{ textAlign: "justify", fontWeight: 'bold' }}>- SOC Analysis</li>
          <li className={`${styles.paragraph} `} style={{ textAlign: "justify", fontWeight: 'bold' }}>- Malicious URL Detector</li>
        </ol>

        {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
        {/* <h1 style={{ color: "#ffffff" }}>Raccine Features</h1> */}
      </div>
    </section>
    <SecurityMech />
  </>
);

export default Billing;