import Link from 'next/link';
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineMail,
  AiOutlinePhone,
} from 'react-icons/ai';
import { BsFacebook, BsPinterest } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.companyInformation}>
        <Link href="/#">
          <p className={styles.logo}>Bliss</p>
        </Link>
        <div className={styles.companyContact}>
          <div>
            <GoLocation /> <p> Sturzgasse Vienna, Austria</p>
          </div>
          <div>
            <AiOutlinePhone /> <p>+0123456789</p>
          </div>
          <div>
            <AiOutlineMail /> <p>hello@email.com</p>
          </div>
        </div>
        <div className={styles.companySocialLinks}>
          <AiFillTwitterCircle />
          <BsFacebook />
          <AiFillInstagram />
          <BsPinterest />
        </div>
      </div>

      <form className={styles.mailingList}>
        <h3>Become an insider</h3>
        <p>Sign up for any future brand notifications.</p>
        <input placeholder="Enter email" />
        <button>Subscribe</button>
      </form>
    </footer>
  );
}
