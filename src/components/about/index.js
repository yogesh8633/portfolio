import resume from "../contact/utils/RESUME-YOGESH.pdf";

const AboutUs = () => {
  return (
    <section className="ftco-about img ftco-section ftco-no-pb" id="about">
      <div className="container">
        <div className="row d-flex">
          {/* <div className="col-md-6 col-lg-5 d-flex">
            <div className="img-about img d-flex align-items-stretch">
              <div className="overlay"></div>
              <div
                className="img d-flex align-self-stretch aligsn-items-center"
                style={{ backgroundImage: "url(assets/images/photo-2.png)" }}
              ></div>
            </div>
          </div> */}
          <div className="col-md-12 col-lg-12 pl-lg-5 pb-5">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section ftco-animate">
                <h1 className="big">About</h1>
                <h2 className="mb-4">About Me</h2>
                <p>
                  With over 3.2 years of experience in frontend development, I
                  specialize in designing and developing high-performance web
                  applications using ReactJS, Next.js, and modern JavaScript
                  frameworks. I have consistently delivered projects that
                  improve performance and user engagement, demonstrating strong
                  project management and technical skills.
                </p>
                <ul className="about-info mt-4 px-md-0 px-2 ">
                  <li className="d-flex">
                    <span>Name:</span> <span>Yogesh Gupta</span>
                  </li>
                  <li className="d-flex">
                    <span>Date of birth:</span> <span>October 04, 2000</span>
                  </li>
                  <li className="d-flex">
                    <span>Address:</span> <span>Sec 1A Dwarka New Delhi</span>
                  </li>
                  <li className="d-flex">
                    <span>Zip code:</span> <span>110045</span>
                  </li>
                  <li className="d-flex">
                    <span>Email:</span>{" "}
                    <a href="mailto:yogeshg9711@gmail.com">
                      yogeshg9711@gmail.com
                    </a>
                  </li>
                  <li className="d-flex">
                    <span>Phone: </span>{" "}
                    <a href="tel://9711708633">+91-9711708633</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="counter-wrap ftco-animate d-flex mt-md-3">
              <div className="text">
                <p>
                  <a
                    href={resume}
                    download="RESUME-YOGESH"
                    target="_blank"
                    className="btn btn-primary py-3 px-3"
                    rel="noreferrer">
                    Download CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
