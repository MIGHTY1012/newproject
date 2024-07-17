
import Image from "next/image";
import styles from  './_components/Pages.module.css'
import Img from "@/public/image/img04.jpeg"
import Img2 from "@/public/image/img07.webp"
import Img3 from "@/public/image/img06.jpeg"
import Link from "next/link";

const Page = () => {
    return (
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <span className={styles.subheading}>A new way to find Properties</span>
            <h1>Find your Most Suitable Property</h1>
            <p>Huge number of properties available here for buy and sell, also you can find here co-living property. So you have lots of opportunity.</p>
            <button><Link href="/contact">Contact</Link></button>
            <div className={styles.span}>
          <span>Have a question? <Link href="tel:+0123456789">+0123 456 789</Link></span>
        </div>
          </div>
          <div className={styles.images}>
           { <Image src={Img2} alt="Property" className="image" />}
          </div>
        </div>
      </section>
    );
  };
  
  export default Page;
  
