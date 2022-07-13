import "./App.css";

function App() {
  return (
    <>
      <div>
        <section className="container-fluid t123" id="section1">
          <h1 className="text-center v-center">Sectionalize.</h1>
          <div className="row">
            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-10 col-sm-offset-2 text-center">
                  <h3>Robust</h3>
                  <p>
                    There is other content and snippets of details or features
                    that can be placed here..
                  </p>
                  <i className="fa fa-cog fa-5x"></i>
                </div>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="row">
                <div className="col-sm-10 col-sm-offset-1 text-center">
                  <h3>Simple</h3>
                  <p>
                    You may also want to create content that compells users to
                    scroll down more..
                  </p>
                  <i className="fa fa-user fa-5x"></i>
                </div>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="row">
                <div className="col-sm-10 text-center">
                  <h3>Clean</h3>
                  <p>
                    In the first 30 seconds of a user's visit to your site they
                    decide if they're going to stay..
                  </p>
                  <i className="fa fa-mobile fa-5x"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid" id="section2">
          <div className="row text">
            <div className="col-sm-12 col-sm-offset-2 text-center">
              <h1>What is Bootstrap?</h1>
              <br />
              <p className="lead">
                Bootstrap is a free collection of tools for creating websites
                and web applications. It contains HTML and CSS-based design
                templates for typography, forms, buttons, navigation and other
                interface components, as well as optional JavaScript extensions.
                It is the No.1 project on GitHub with 65,000+ stars and 23,800
                forks (as of March 2014) [1] and has been used by NASA and
                MSNBC, among many others..
              </p>
              <br />
              <i
                style={{ "font-size": "120px" }}
                className="fa fa-camera fa-5x"
              ></i >
              <p>Big 'ol Camera Icon</p>
            </div>
          </div>
        </section>

        <section className="container-fluid" id="section3">
          <h1 className="text-center">Bootstrap is Responsive</h1>
          <div className="row">
            <div className="col-sm-12 col-sm-offset-3">
              <p className="text-center lead">
                Vertical scrolling has become a popular and lasting trend in Web
                design. The question becomes, is it here to stay?
              </p>
              <div className="row justify-content-center">
                <div className="col-3 ">
                  Some brand-tacular designs even have home page content that is
                  taller that 12,000 pixels. That's a lotta content.
                </div>
                <div className="col-3 text-end">
                  Anyhoo, this is just some random blurb of text, and
                  Bootply.com is a playground and code editor for Bootstrap.
                </div>
              </div>
              <p className="text-center">
                <img
                  src={'./DeccanLogic/1.png'}
                  alt={"Image1"} 
                  className="img-fluid mx-auto d-block abc "
                />
              </p>
            </div>
          </div>
        </section>

        <section className="container-fluid" id="section4">
          <h2 className="text-center">
            Change this Content. Change the world.
          </h2>
          <div className="row">
            <div className="col-sm-12 col-sm-offset-2">
              <img
                src={"./DeccanLogic/2.jpg"}
                alt={"Image2"} 
                className="img-fluid abc1 mx-auto d-block "
              />
              <p className="text-center">
                Images will scale down proportionately as browser width narrows.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default App;
