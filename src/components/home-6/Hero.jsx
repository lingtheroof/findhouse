import GlobalHeroFilter from "../common/GlobalHeroFilter";

const Hero = () => {
  return (
    <section className="home-six home6-overlay">
      <div className="container">
        <div className="row posr">
          <div className="col-lg-12">
            <div className="home_content home6">
              <div className="home-text home6 text-center">
                <h2 className="fz55">Enjoy The Finest Homes</h2>
                <p className="fz18">
                  From as low as $10 per day with limited time offer discounts.
                </p>
              </div>
              <GlobalHeroFilter className="home6" />
            </div>
          </div>
        </div>
      </div>

 {/* End .container */}

 <div className="container ovh">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="main-title text-center mb40">
              <h2>Latest For Sale</h2>
              <p>Handpicked properties by our team.</p>
            </div>
          </div>
          {/* End .col */}

          <div className="col-lg-12">
            <div className="feature_property_slider gutter-x15">
              <FeaturedProperties />
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container .ovh */}


    </section>
  );
};

export default Hero;
