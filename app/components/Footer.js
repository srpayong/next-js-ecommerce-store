import Link from 'next/link';
// import {
//   AiFillInstagram,
//   AiFillTwitterCircle,
//   AiOutlineMail,
//   AiOutlinePhone,
// } from 'react-icons/ai';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer>
      <div>
        <Link href="/#">
          <p>Bliss</p>
        </Link>
        <div>
          <div>
            <p> 123 Schmelzgasse, Vienna</p>
          </div>
          <div>
            <p>+43 123456789</p>
          </div>
          <div>
            <p>hello@email.com</p>
          </div>
        </div>
        {/* <div className={styles.companySocialLinks}>
          <AiFillTwitterCircle />
          <BsFacebook />
          <AiFillInstagram />
          <BsPinterest />
        </div> */}
        <h6>
          <Link href="https://github.com/srpf15">Sharmaine Payong</Link>
        </h6>
      </div>

      <form>
        <h3>Join our mailing list</h3>
        <input placeholder="me@email.com" />
        <button>Subscribe</button>
      </form>
    </footer>
  );
}
