const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="container" style={{marginTop:"15%"}}>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="text">
              <span className="subheading">Hello!</span>
              <h1 className="mb-4 mt-3">
                I'm <span>Yogesh Gupta</span>
              </h1>
              <h2 className="mb-4">A Freelance Web Designer</h2>
              <p>
                <a href="#contact" className="btn btn-primary py-3 px-4">
                  Hire me
                </a>{" "}
                <a
                  href="#projects"
                  className="btn btn-white btn-outline-white py-3 px-4"
                >
                  My works
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-6 homeImg">
            <img src="assets/images/bg_1.png" alt ="MY_IMAGE"style={{  height: "150%",marginTop: "-26%"}}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
