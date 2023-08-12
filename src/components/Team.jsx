import { team } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedBackCard";

const Team = () => (
  <section id="team" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Team - <br className="sm:block hidden" /> Highly Skilled People
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-justify max-w-[450px]`} >
        A team of highly skilled individuals is a powerhouse of expertise. With a shared goal of excellence, they collaboratively tackle challenges, leveraging their diverse talents to drive innovation and achieve outstanding results.        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
      {team.map((card) => <FeedbackCard key={card.id} {...card} team={true}/>)}
    </div>
  </section>
);

export default Team;