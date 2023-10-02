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
            <AiOutlineMail /> <p>email@email.com</p>
          </div>
        </div>
        <div className={styles.companySocialLinks}>
          <AiFillTwitterCircle />
          <BsFacebook />
          <AiFillInstagram />
          <BsPinterest />
        </div>
        <h6>
          Hello
          <Link href="https://github.com/srpf15" className={styles.creditLink}>
            {' '}
            --
          </Link>
        </h6>
      </div>

      <form className={styles.mailingList}>
        <h3>Join our mailing list</h3>
        <input placeholder="me@email.com" />
        <button>Subscribe</button>
      </form>
    </footer>
  );
}
