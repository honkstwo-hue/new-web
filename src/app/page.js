import Image from "next/image";
import Link from 'next/link';
import '../styles/home.css';
import '../styles/owl.carousel.min.css';
import Carousel from './home/carousel.js';


export default function Home() {
  return (
    <>
      <Carousel/>
      <section>
        <div className="topsection">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="subtitle">Sexy Escorts</div>
                <h2 className="maintitle">Best Hyderabad  Escorts at Your Service</h2>
                <div className="shrtdesc">
                  <p>Our Hyderabad  Escorts are famous for delivering what’s promised – ultimate pleasure and satisfaction to the max. We don’t make false promises and maintain standards in escort agencies. All our models are fully committed to their job which means you can realize all your fantasies with these alluring girls.</p>
                </div>
                <div className="booknow"><Link href="">- READ MORE-</Link></div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="figure"><Image src="/images/about-image.webp" width="726" height="472" alt=""/></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="citylist">
          <div className="container">
            <div className="text-center">
              <div className="subtitle">Escorts Area</div>
              <h2 className="maintitle">City We Serv</h2>
            </div>
            <div className="widthsmall">
              <div className="citylistingbg">
                 <ul>
                    <li><Link href="/kolkata-escorts/">Kolkata</Link></li>
                    <li><Link href="/jaipur-escorts/">Jaipur</Link></li>
                    <li><Link href="/hyderabad-escorts/">Hyderabad</Link></li>
                    <li><Link href="/mumbai-escorts/">Mumbai</Link></li>
                    <li><Link href="/banglore-escorts/">Banglore</Link></li>
                    <li><Link href="/goa-escorts/">Goa</Link></li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="collectionbg">
          <div className="container-fluid text-center">
            <div className="subtitle">Sexy Girls</div>
            <h2 className="maintitle">Escorts Collections</h2>
            <div className="borwhitebg"></div>
            <div className="widthmedium">
              <div className="shrtdesc">
                <p>Nam lobortis dui et feugiat pellentesque. Proin ut volutpat diam. Etiam molestie feugiat ligula, id rhoncus ante ultrices eget. Nam vel mauris a augue tempus semper quis at mi.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <Link href="/kolkata-escorts/">
                <div className="figure">
                  <Image src="/images/collegebeauty.webp" width="385" height="525" alt=""/>
                  <div className="overlay">
                    <div className="title">College Beauty</div>
                    <div className="readmore">- Read More -</div>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                 <Link href="/mumbai-escorts/">
                <div className="figure">
                  <Image src="/images/airhostess.webp" width="385" height="525" alt=""/>
                  <div className="overlay">
                    <div className="title">Air Hostess</div>
                    <div className="readmore">- Read More -</div>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                 <Link href="/jaipur-escorts/">
                <div className="figure">
                  <Image src="/images/housewife.webp" width="385" height="525" alt=""/>
                  <div className="overlay">
                    <div className="title">House Wifes</div>
                    <div className="readmore">- Read More -</div>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                 <Link href="/goa-escorts/">
                <div className="figure">
                  <Image src="/images/highprofile.webp" width="385" height="525" alt=""/>
                  <div className="overlay">
                    <div className="title">High Profiles</div>
                    <div className="readmore">- Read More -</div>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="taginfobg">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="column">
                  <div className="icon"><Image src="/images/bf1.png" width="55" height="46" alt=""/></div>
                  <div className="title">Sexy Escorts</div>
                  <p>Quisque id dictum tellus. Cras pretium lectus eu tempor pretium. </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="column">
                  <div className="icon"><Image src="/images/bf2.png" width="55" height="46" alt=""/></div>
                  <div className="title">Sexy Escorts</div>
                  <p>Quisque id dictum tellus. Cras pretium lectus eu tempor pretium. </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="column">
                  <div className="icon"><Image src="/images/bf3.png" width="55" height="46" alt=""/></div>
                  <div className="title">Sexy Escorts</div>
                  <p>Quisque id dictum tellus. Cras pretium lectus eu tempor pretium. </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="column bornone">
                  <div className="icon"><Image src="/images/bf4.png" width="55" height="46" alt=""/></div>
                  <div className="title">24x7 Support</div>
                  <p>Quisque id dictum tellus. Cras pretium lectus eu tempor pretium. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="sexyblond">
          <div className="container">
            <div className="widthmedium text-center">
              <div className="subtitle">Sexy Blonds</div>
              <h2 className="maintitle">Meet Our Sexy Blonds</h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="hotgirlbg">
          <div className="container">
            <div className="widthmedium text-center">
              <div className="subtitle">Escort Service</div>
              <h2 className="maintitle">Explore Profiles Of Our Hot Girls</h2>
              <div className="shrtdesc">
                <p>Our ladies are enthusiastic, full of energy, and comfortable in entertaining clients. A lot of them are highly experienced in massaging. Therefore, you can look forward to a satisfying experience with these gorgeous Pune courtesans.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <Link href="/hyderabad-escorts/puja/">
                <div className="figure">
                  <Image src="/images/puja/puj1.webp" width="385" height="525" alt=""/>
                  <div className="overlayprofile">
                    <div className="caption">
                      <div className="title">Puja Hyderabad Escort</div>
                      <div className="readmore">- Read More -</div>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <Link href="/kolkata-escorts/sanya/">
                <div className="figure">
                  <Image src="/images/sanya/sn1.webp" width="385" height="525" alt=""/>
                  <div className="overlayprofile">
                    <div className="caption">
                      <div className="title">Sanya Kolkata <br/>Escort</div>
                      <div className="readmore">- Read More -</div>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <Link href="/jaipur-escorts/angela/">
                <div className="figure">
                  <Image src="/images/angela/an1.webp" width="385" height="525" alt=""/>
                  <div className="overlayprofile">
                    <div className="caption">
                      <div className="title">Angela Jaipur Escort</div>
                      <div className="readmore">- Read More -</div>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <Link href="/mumbai-escorts/jenifer/">
                <div className="figure">
                  <Image src="/images/jenifer/zn1.webp" width="385" height="525" alt=""/>
                  <div className="overlayprofile">
                    <div className="caption">
                      <div className="title">Jenifer Mumbai Escort</div>
                      <div className="readmore">- Read More -</div>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <Link href="/banglore-escorts/payal/">
                <div className="figure">
                  <Image src="/images/payal/pl1.webp" width="385" height="525" alt=""/>
                  <div className="overlayprofile">
                    <div className="caption">
                      <div className="title"> Payal Banglore Escort</div>
                      <div className="readmore">- Read More -</div>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <Link href="/goa-escorts/rewati/">
                <div className="figure">
                  <Image src="/images/rewati/rw1.webp" width="385" height="525" alt=""/>
                  <div className="overlayprofile">
                    <div className="caption">
                      <div className="title">Rewati Goa Escort</div>
                      <div className="readmore">- Read More -</div>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="seosection">
          <div className="container text-center">
            <h2 className="maintitle">Meet the Luscious hyderabad Escorts</h2>
            <div className="shrtdesc">
              <p>The glamorous and drop-dead gorgeous Pune escorts you will meet here are alluring beyond belief. Most of our Pune escorts are well-educated, English-speaking, and ultramodern. Each of these ladies has something special about her. Many of these are well-versed in other languages as well. You will surely enjoy their titillating company.</p>
              <p>We cover the entire Pune and surrounding areas. Our in-call professional escort services are available in and around Pune. Picking one from these alluring babes is not easy for sure! You can come over to our place to have fun with your chosen Pune escort or you can choose from the exclusive escorts’ gallery on our website. We have spent a lot of time understanding our client’s requirements and, thus, we better understand your desires (told as well as untold ones) and preferences that you share with us.</p>
              <p>If you want the best Pune escorts, book from us. You can text or call our discreet and friendly assistants to make a booking anytime you want. We are delighted to arrange a booking whenever you want. To help you ensure maximum pleasure in each booking, our assistants will guide you and recommend the best escorts based on your previous bookings and experience. Please remember that your happiness is our commitment and that is why we pay attention to all your specifications and preferences at the time of booking – such as the escort’s attire, fantasy role play (if you want), etc. If you aren’t sure, we are here to assist you in choosing the right girl that would give you the most pleasurable and memorable experience.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
