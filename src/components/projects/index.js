const Projects = () => {
  return (
    <section className="ftco-section ftco-project" id="projects">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big big-2">Projects</h1>
            <h2 className="mb-4">My Projects</h2>
            <p>
              "A Project is complete when it starts working for you, rather than
              you working for it"
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <a href="https://github.com/yogesh8633/THE-FOOD-ORDERING-APP" target="_blank" rel="noreferrer" >
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-center"
                style={{
                  backgroundImage: "url('assets/images/project-4.png')",
                }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>The Food Ordering App</h3>
                  <span>Web Design</span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-8">
            <a href="https://github.com/yogesh8633/divide-pay" target="_blank" rel="noreferrer">
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-center"
                style={{
                  backgroundImage: "url('assets/images/project-2.png')",
                }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>Divide-Pay</h3>
                  <span>Web Design</span>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-8">
            <a href="https://frontendzonartra.s3.ap-south-1.amazonaws.com/index.html" target="_blank" rel="noreferrer">
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-center"
                style={{
                  backgroundImage: "url('assets/images/project-1.png')",
                }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>Zonarta - E-commerce Landing Page</h3>
                  <span>Web Design</span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="https://github.com/yogesh8633/EXPENSE-TRACKER" target="_blank" rel="noreferrer">
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-center"
                style={{
                  backgroundImage: "url('assets/images/project-3.png')",
                }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>Expense Tracker</h3>
                  <span>Web Design</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
