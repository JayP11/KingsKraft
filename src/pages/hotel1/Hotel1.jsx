import React, { useEffect, useState } from "react";
import images from "../../constants/images";
import { IoLocationSharp } from "react-icons/io5";
import "./Hotel1.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Facility } from "../../components";
import { ACCEPT_HEADER, getslugproperty as url } from "../../Utils/Constant";

import { useLocation } from "react-router-dom";
import { Footer, Navbar } from "../../common";
import { Helmet } from "react-helmet";
import { useLocationContext } from "../../context/location_context";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import axios from "axios";

const Hotel1 = () => {
  // const location = useLocation();
  // const navigate = useNavigate();

  const [data, setdata] = useState();
  const [getGalleryData, setGalleryData] = useState([]);

  const [AllImages, setAllImages] = useState(1);
  const [AmenitiesImages, setAmenitiesImages] = useState([]);
  const [RestroImages, setRestroImages] = useState([]);
  const [OutdoorImages, setOutdoorImages] = useState([]);
  const [RoomsImages, setRoomsImages] = useState([]);

  useEffect(() => {
    // console.log("locato -=>", location.state.item);
    window.scrollTo(0, 0);
  }, []);

  function ImageGallery() {
    const [imageToShow, setImageToShow] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);

    //looping through our images array to create img elements
    const imageCards = getGalleryData.map((image) => (
      <>
        {AllImages === 1 ? (
          <>
            <img
              className="image-card"
              onClick={() => showImage(image)}
              src={image.image_full}
              alt=""
            />
          </>
        ) : (
          <>
            {AllImages === 2 && image.gal_category === 9 ? (
              <>
                <img
                  className="image-card"
                  onClick={() => showImage(image)}
                  src={image.image_full}
                  alt=""
                />
              </>
            ) : (
              <>
                {AllImages == 3 && image.gal_category == 7 ? (
                  <>
                    {" "}
                    <img
                      className="image-card"
                      onClick={() => showImage(image)}
                      src={image.image_full}
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    {AllImages == 4 && image.gal_category == 8 ? (
                      <>
                        {" "}
                        <img
                          className="image-card"
                          onClick={() => showImage(image)}
                          src={image.image_full}
                          alt=""
                        />
                      </>
                    ) : (
                      <>
                        {AllImages == 5 && image.gal_category == 5 ? (
                          <>
                            {" "}
                            <img
                              className="image-card"
                              onClick={() => showImage(image)}
                              src={image.image_full}
                              alt=""
                            />
                          </>
                        ) : null}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </>
    ));

    // <>{AllImages == 3 && image.gal_category == 7 ?<></> : null }

    //function to show a specific image in the lightbox, amd make lightbox visible
    const showImage = (image) => {
      console.log(";;", image);
      setImageToShow(image);
      setLightBoxDisplay(true);
    };

    //hide lightbox
    const hideLightBox = () => {
      setLightBoxDisplay(false);
    };

    //show next image in lightbox
    const showNext = (e) => {
      e.stopPropagation();
      let currentIndex = getGalleryData.indexOf(imageToShow);
      if (currentIndex >= getGalleryData.length - 1) {
        setLightBoxDisplay(false);
      } else {
        let nextImage = getGalleryData[currentIndex + 1];
        console.log("next", nextImage);

        setImageToShow(nextImage);
      }
    };

    //show previous image in lightbox
    const showPrev = (e) => {
      e.stopPropagation();
      let currentIndex = getGalleryData.indexOf(imageToShow);
      if (currentIndex <= 0) {
        setLightBoxDisplay(false);
      } else {
        let nextImage = getGalleryData[currentIndex - 1];
        console.log("prew", nextImage);
        setImageToShow(nextImage);
      }
    };

    return (
      <div>
        <div className="lightbox_main_wrapp">{imageCards}</div>

        {lightboxDisplay ? (
          <div id="lightbox" onClick={hideLightBox}>
            <button className="lightbox_btn_wrapp" onClick={showPrev}>
              <BsFillCaretLeftFill
                className="lightbox_btn"
                style={{ color: "#0c4e62" }}
              />
            </button>
            <img id="lightbox-img" src={imageToShow.image_full}></img>
            <button className="lightbox_btn_wrapp" onClick={showNext}>
              <BsFillCaretRightFill
                className="lightbox_btn"
                style={{ color: "#0c4e62" }}
              />
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }

  // useEffect(() => {
  //   window.history.pushState(null, document.title, window.location.href);
  //   window.addEventListener('popstate', handlePopstate);

  //   return () => {
  //     window.removeEventListener('popstate', handlePopstate);
  //   };
  // }, []);

  // const handlePopstate = () => {
  //   window.history.pushState(null, document.title, window.location.href);
  // };

  //getting perams
  const paramm = useParams();

  var slug = paramm.id;

  // const HotelName = location.state.item.title;
  // console.log("image-slider", HotelName);

  useEffect(() => {
    // console.log("location.state.item.propertyamenities is", location.state.item.propertyamenities);
  }, []);

  const { single_product1, fetchSingleProduct } = useLocationContext();

  // useEffect(() => {
  //   fetchSingleProduct(`${url}${slug}`);
  //   // console.log(" single_product is", name);
  //   // console.log(" location", slug);
  // }, [slug]);

  useEffect(() => {
    // try {
    //   const response = await axios.get(`${url}${slug}`, {
    //     headers: {
    //       Accept: ACCEPT_HEADER,
    //     },
    //   });

    //   const singleProduct = response.data;

    //   if (singleProduct.success === 1) {

    //     setdata(singleProduct.data)
    //     console.log("singleproduct-->response1 ", singleProduct);
    //   }

    // } catch (error) {
    //   console.log(error);
    // }
    // const response = await axios.get(url);

    axios
      .get(`${url}${slug}`, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      })
      .then((res) => {
        // console.log("ggg", JSON.stringify(res.data, null, 2));
        console.log("ggg", res.data);
        if (res.data.success == 1) {
          setdata(res.data.data);
          setGalleryData(res.data.data.propertygallery);
          console.log("testtt", res.data.data.propertygallery);
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  }, [slug]);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Service",
            name: "Kings Kraft",
            url: "https://www.kingskraft.com/",
            logo: "	https://www.kingskraft.com/static/media/logo03.5e3eb5d2b95d278d0198.webp",
            description: "Your organization description.",
            telephone: "098799 64314",
            email: "kingskraft.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Raiko Hotels & Resort LLP",
              addressLocality: "101 Deep Complex Kotechanagar Main Road,",
              addressRegion: "Off. Aminmarg",
              postalCode: "360004",
              addressCountry: "INDIA",
            },

            SameAs: [
              "https://www.facebook.com/KingsKraftIndia?mibextid=ZbWKwL",

              "https://www.instagram.com/kingskraft.hotel/?igshid=YmMyMTA2M2Y%3D",
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "King's Kraft",
            url: "https://www.kingskraft.com/",
            logo: "https://www.kingskraft.com/static/media/logo03.5e3eb5d2b95d278d0198.webp",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.kingskraft.com/hotelpage{search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Management",
            name: "Kings Kraft",
            url: "https://www.kingskraft.com/",
            logo: "	https://www.kingskraft.com/static/media/logo03.5e3eb5d2b95d278d0198.webp",
            description: "Your organization description.",
            telephone: "098799 64314",
            email: "kingskraft.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Raiko Hotels & Resort LLP",
              addressLocality: "101 Deep Complex Kotechanagar Main Road,",
              addressRegion: "Off. Aminmarg",
              postalCode: "360004",
              addressCountry: "INDIA",
            },

            SameAs: [
              "https://www.facebook.com/KingsKraftIndia?mibextid=ZbWKwL",

              "https://www.instagram.com/kingskraft.hotel/?igshid=YmMyMTA2M2Y%3D",
            ],
          })}
        </script>

        {/* <title>{`${HotelName} | King's Kraft Hotels & Resorts`}</title> */}
        <meta
          name="description"
          content="Our Hotels | King's Kraft Hotels & Resorts"
        />
      </Helmet>
      <Navbar />
      <section className="hotel1-wrapp">
        {/* {location.state.item &&
        location.state.item.property &&
        location.state.item.property.length > 0
          ? location.state.item.property.map((item, index) => {
              console.log("propertyamenities", item.propertyamenities);
              return ( */}
        <>
          <div className="hotel1-sec1-wrapp">
            <div className="hotel1-sec1-base">
              <div className="sec1-des-main-wrapp">
                <div className="sec1-des-wrapp">
                  {/* <Link to="/" className="hotel-logo-part">
                    <img
                      src={images.king}
                      alt="brand logo"
                      className="hotel-logo"
                    />
                    <p className="hotel-logo-text">Hotels & Resorts</p>
                  </Link> */}
                  <div className="sec-hotel-name-wrapp">
                    <p>Hotel</p>
                    <h1>{data?.title}</h1>
                    {/* <div className="shr"></div> */}
                    {/* <h3>{location.state.place}</h3> */}
                  </div>
                </div>
                <div
                  className="hotel1-text"
                  dangerouslySetInnerHTML={{
                    __html: data?.description,
                  }}></div>
              </div>
              <div className="sec1-des-img-wrapp">
                {data?.image_full ? (
                  <img src={data?.image_full} alt="" className="sec1-des-img" />
                ) : (
                  <img src={images.heroimg5} alt="" className="sec1-des-img" />
                )}
              </div>
            </div>
          </div>
          <div className="hotel1-sec2-wrapp">
            <div className="hotel1-sec2-base">
              <ul className="hotel1-sec2-list-wrapp">
                <p
                  className="hotel1-sec2-single-list"
                  dangerouslySetInnerHTML={{
                    __html: data?.general_description,
                  }}>
                  {/* 26 Club & Cosy Rooms */}
                </p>
              </ul>
              <div className="sec2-foot-wrapp">
                <div className="sec2-foot-single">
                  <a href={data?.map} target="_blank" style={{ flex: 0 }}>
                    <IoLocationSharp className="sec2-foot-icon" />
                  </a>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: data?.contactus_description,
                    }}></p>
                </div>
                <div className="sec2-foot-no-wrapp">
                  <div className="sec2-foot-single">
                    <FaPhoneAlt className="sec2-foot-icon" />
                    <a href="">
                      {data?.number1}
                      <br />
                      {data?.number2}
                    </a>
                  </div>
                  <div className="sec2-foot-single">
                    <IoMdMail className="sec2-foot-icon" />
                    <a href={data?.email}>{data?.email}</a>
                  </div>
                </div>

                <div className="sec2-foot-no-wrapp">
                  <div className="sec2-foot-single">
                    <FaFacebookSquare className="sec2-foot-icon" />
                    <a href={data?.facebook} target="_blank">
                      {data?.fb_name}
                    </a>
                  </div>

                  <div className="sec2-foot-single">
                    <FaInstagramSquare className="sec2-foot-icon" />
                    <a href={data?.instagram} target="_blank">
                      {data?.insta_name}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="img-filter-main">
            <div
              className="img-filter-btn img-filter-btn-active"
              style={{
                backgroundColor: AllImages == 1 ? "var(--color-brand)" : "#fff",
                color:
                  AllImages == 1 ? "var(--color-golden)" : "var(--color-brand)",
              }}
              onClick={() => {
                setAllImages(1);
              }}>
              All
            </div>
            <div
              className="img-filter-btn"
              style={{
                backgroundColor: AllImages == 2 ? "var(--color-brand)" : "#fff",
                color:
                  AllImages == 2 ? "var(--color-golden)" : "var(--color-brand)",
              }}
              onClick={() => {
                setAllImages(2);
              }}>
              Amenities
            </div>
            <div
              className="img-filter-btn"
              style={{
                backgroundColor: AllImages == 3 ? "var(--color-brand)" : "#fff",
                color:
                  AllImages == 3 ? "var(--color-golden)" : "var(--color-brand)",
              }}
              onClick={() => {
                setAllImages(3);
              }}>
              Outdoor
            </div>
            <div
              className="img-filter-btn"
              style={{
                backgroundColor: AllImages == 4 ? "var(--color-brand)" : "#fff",
                color:
                  AllImages == 4 ? "var(--color-golden)" : "var(--color-brand)",
              }}
              onClick={() => {
                setAllImages(4);
              }}>
              Rooms
            </div>
            <div
              className="img-filter-btn"
              style={{
                backgroundColor: AllImages == 5 ? "var(--color-brand)" : "#fff",
                color:
                  AllImages == 5 ? "var(--color-golden)" : "var(--color-brand)",
              }}
              onClick={() => {
                setAllImages(5);
              }}>
              Restaurant
            </div>
          </div>
          <ImageGallery />
          {data && data.propertyamenities.length > 0 ? (
            <Facility item={data && data} />
          ) : null}
        </>
        {/* );
            console.log("🚀 ~ file: Hotel1.jsx:393 ~ Hotel1 ~ setAmenitiesImages:", setAmenitiesImages)
            })
          : null} */}
      </section>
      <Footer />
      {/* {console.log("whatsapp icon number", location.state.item.number1)} */}
      {/* <a
        className="whats-app"
        href={
          "https://api.whatsapp.com/send?phone=" +
          `${location.state.item.number1}`
        }
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className="my-float" />
      </a> */}
    </>
  );
};

export default Hotel1;
