import './globals.scss';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { BsHandbag } from 'react-icons/bs';
import styles from '../app/components/NavBar.module.scss';
// import logo from '../public/images/logo.png';
import img1 from '../public/images/img1.jpeg';
import CartBadge from './components/CartBadge';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });
// const caveat = Caveat({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: { default: 'Bliss | ' },
  description: 'Lorem ipsum',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className={styles.topBanner}>Free worldwide shipping</div>
        <div className={styles.navigationBar}>
          <NavBar />

          <div className={styles.logoContainer}>
            <Link href="/#">
              <Image className={styles.logo} src={img1} alt="company logo" />
            </Link>
          </div>

          <div className={styles.cartContainer}>
            <SearchBar />
            <Link href="/cart" data-test-id="cart-link">
              <BsHandbag className={styles.cartIcon} />
              <div>
                <CartBadge />
              </div>
            </Link>
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
