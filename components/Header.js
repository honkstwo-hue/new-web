import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header>
        <div className="topheader">
          <div className="container">
            <div className="innerth">
              <div className="leftnav">
                <ul>
                  <li>
                    <Link href="">
                      <i className="fa fa-phone"></i> +91 84212 17359
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="rightnav">
                <div className="whatsappbg">
                  <Link href="">+91 84212 17359</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav>
          <div className="container">
            <div className="innermenu">
              <div className="logo">
                <Link href="#">
                  <Image src="/images/logo.png" width="400" height="103" alt="" />
                </Link>
              </div>
              <div className="mobile_btn">
                <span></span>
              </div>
              <div className="main_menu">
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/mumbai-escorts/">Mumbai Escort</Link></li>
                  <li><Link href="/banglore-escorts/">Banglore Escorts</Link></li>
                  <li><Link href="/goa-escorts/">Goa Escorts</Link></li>
                  <li><Link href="/jaipur-escorts/">Jaipur Escort</Link></li>
                  <li><Link href="/kolkata-escorts/">Kolkata Escort</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
