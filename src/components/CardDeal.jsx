import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section} id="guide">
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Guidance To Make <br className="sm:block hidden" /> Product Run
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Following steps should be followed for making the product to run.
        
        <li>Configure SIEM Solution like QRadar, this option is best for organizations so that most robust anti ransomware mechanism can be built.</li>
        <li>For Individual system of good configuration is required.</li>
        <li>Make the software run and on startup.</li>
        <li>Allow the access to kernel of Operating System.</li>
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzHWSGvu1bFuP4VyCZH6xVv2c6TdUlKUyFA&usqp=CAU" alt="billing" className="w-[100%] h-[80%]" style={{borderRadius:"25px"}}/>
    </div>
  </section>
);

export default CardDeal;