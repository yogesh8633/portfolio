const Skills = () => {
  return (
    <section className="ftco-section" id="skills">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big big-2">Skills</h1>
            <h2 className="mb-4">My Skills</h2>
            <p>
              "It is possible to fly without motors, but not without knowledge
              and skill."
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>HTML</h3>
              <div className="progress">
                <div
                  className="progress-bar color-1"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "90%" }}
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>CSS</h3>
              <div className="progress">
                <div
                  className="progress-bar color-2"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "85%" }}
                >
                  <span>85%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>JavaScript</h3>
              <div className="progress">
                <div
                  className="progress-bar color-3"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                >
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>ReactJS</h3>
              <div className="progress">
                <div
                  className="progress-bar color-4"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%" }}
                >
                  <span>75%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>Bootstrap</h3>
              <div className="progress">
                <div
                  className="progress-bar color-5"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "70%" }}
                >
                  <span>70%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>C++</h3>
              <div className="progress">
                <div
                  className="progress-bar color-6"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                >
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
