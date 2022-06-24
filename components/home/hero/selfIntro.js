// Import Next Components
import Link from "next/link";
// Import Styles
import classes from "./selfIntro.module.css";

function SelfIntro() {
  return (
    <div className={classes.selfIntroContainer}>
      <h2>Koniciwa AnyonghaseYo</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        obcaecati maiores expedita natus veritatis voluptatibus exercitationem
        culpa molestiae voluptates id! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dicta, id.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam beatae
        veniam exercitationem. Eum labore officia consequuntur facilis
        inventore. Vel, officia.
      </p>
      <Link href="/booking">
        <button className={classes.callToActionBtn}>現在預訂</button>
      </Link>
    </div>
  );
}

export default SelfIntro;
