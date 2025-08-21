'use client'; // Important to enable client-side JS
import Image from "next/image";
import Link from 'next/link';
import Script from 'next/script';
import { useEffect } from 'react';

export default function Carousel(){
	useEffect(() => {
    // Wait until Owl Carousel is actually available
    const interval = setInterval(() => {
      if (typeof window !== 'undefined' && window.$ && $.fn.owlCarousel) {
        $('#slidercarousel').owlCarousel({
          items: 1,
          lazyLoad: true,
          loop: true,
          margin: 0,
          autoplay: true,
          autoplayTimeout: 3000,
          smartSpeed: 1500,
          nav: false,
          dots: false,
          responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 },
          },
        });
        clearInterval(interval); // stop checking once initialized
      }
    }, 100); // check every 100ms

    return () => clearInterval(interval); // cleanup
  }, []);
	return (
    <>
      <section>
        <div className="main">
          <div className="sliderbg">
            <div id="slidercarousel" className="owl-carousel owl-theme">
              <div className="figure">
                <Image src="/images/banner2.webp" width="1349" height="600" alt=""/>
                <div className="absolutepath">
                  <div className="container">
                    <div className="caption">
                      <span>Pune Escort</span>
                      <h1>Exclusive Escorts</h1>
                      <div className="booknow text-center"><Link href="">- BOOK SERVICES-</Link></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figure">
                <Image src="/images/banner3.webp" width="1349" height="600" alt=""/>
                <div className="absolutepath">
                  <div className="container">
                    <div className="caption">
                      <span>Pune Escort</span>
                      <h1>Exclusive Escorts</h1>
                      <div className="booknow"><Link href="">- BOOK SERVICES-</Link></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figure">
                <Image src="/images/banner1.webp" width="1349" height="600" alt=""/>
                <div className="absolutepath">
                  <div className="container">
                    <div className="caption">
                      <span>Pune Escort</span>
                      <h1>Exclusive Escorts</h1>
                      <div className="booknow"><Link href="">- BOOK SERVICES-</Link></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Script src="https://www.radonexhibition.eu/web/js/owl.carousel.js" strategy="afterInteractive" />
    </>
    );
}