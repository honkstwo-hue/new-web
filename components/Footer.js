'use client'; 
import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  useEffect(() => {
    // Run only if jQuery is loaded
    if (typeof window !== "undefined" && window.jQuery) {
      const $ = window.jQuery;

      $(document).ready(function () {
        // Toggle mobile menu
        $(".mobile_btn").on("click", function () {
          $(".main_menu").slideToggle();
          $(this).find("span").toggleClass("fa-rotate-45");
        });

        // Handle dropdowns on mobile
        function handleMobileDropdowns() {
          if ($(window).width() < 768) {
            $(".main_menu .has_dropdown > a")
              .off("click")
              .on("click", function (e) {
                e.preventDefault();
                const $parent = $(this).parent(".has_dropdown");
                const $submenu = $parent.children(".sub_menu, .mega_menu");
                $submenu.stop().slideToggle();
                $(this).find("i.fas").toggleClass("fa-rotate-90");
              });
          } else {
            $(".main_menu .sub_menu, .main_menu .mega_menu").removeAttr("style");
            $(".main_menu .has_dropdown > a").off("click");
          }
        }

        handleMobileDropdowns();
        $(window).on("resize", handleMobileDropdowns);
      });
    }
  }, []);

  return (
    <>
      <footer>
        <div className="foooterbg">
          <div className="container">
            <div className="logo">
              <Image src="/images/logo.png" width="125" height="45" alt="" />
            </div>
            <div className="borwhitebg"></div>
            <div className="row">
              {/* Quick Links */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="footertitle">Quick Links</div>
                <div className="footermenu">
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="">Book Services</Link></li>
                  </ul>
                </div>
              </div>

              {/* Locations */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="footertitle">Locations</div>
                <div className="footermenu">
                  <ul>
                    <li><Link href="/Mumbai Escorts/">Mumbai Escorts</Link></li>
                    <li><Link href="/jaipur-escorts/">Jaipur Escorts</Link></li>
                    <li><Link href="/kolkata-escorts/">Kolkata Escorts</Link></li>
                    <li><Link href="/hyderabad-escorts/">Hyderabad Escorts</Link></li>
                  </ul>
                </div>
              </div>

              {/* Extra Locations */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="footertitle">&nbsp;</div>
                <div className="footermenu">
                  <ul>
                    <li><Link href="/goa-escorts/">Goa Escorts</Link></li>
                    <li><Link href="/banglore-escorts/">Banglore Escorts</Link></li>
                  </ul>
                </div>
              </div>

              {/* Contact */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="footertitle">Get Help</div>
                <div className="footercontact">
                  <div className="icon"><i className="fa fa-phone"></i></div>
                  <div className="capss"><Link href="tel:+918421217359">+91 84212 17359</Link></div>
                </div>
                <div className="footercontact">
                  <div className="icon"><i className="fa fa-envelope"></i></div>
                  <div className="capss">
                    <Link href="mailto:enquiry@escortservice.com">enquiry@escortservice.com</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="copyright">
            <div className="container">
              © All Rights Reserved - 2024 - <Link href="">ESCORT SERVICES</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
