import React from 'react'
import './carousels.css'
const Carousels = () => {
  return (
    <div id="home-carousels">
        <section className="carousel" aria-label="Gallery">
            <ol className="carousel__viewport">
              <li id="carousel__slide1"
                  tabindex="0"
                  className="carousel__slide" style={{ backgroundRepeat: 'no-repeat',backgroundSize: 'cover' }}>
                <div className="carousel__snapper">
                    <div className="slide">
                        <h1>Join us as Driver</h1>
                        <p>Login to experience a new world of confidence and independence.</p>
                        <button className=""> Login</button>
                    </div>
                </div>
                  <a href="#carousel__slide4"
                     class="carousel__prev">Go to last slide</a>
                  <a href="#carousel__slide2"
                     class="carousel__next">Go to next slide</a>
                
                
              </li>
              <li id="carousel__slide2"
                  tabindex="0"
                  className="carousel__slide" style={{  backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className="carousel__snapper">
                    <div className="slide">
                        <h1>Login to know more</h1>
                        <p>Look upon ways of safe travel with SheSafe.</p>
                        <button class="">Login</button>
                    </div>
                </div>
                <a href="#carousel__slide1"
                   class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide3"
                   class="carousel__next">Go to next slide</a>
              </li>
              <li id="carousel__slide3"
                  tabindex="0"
                  className="carousel__slide" style={{  backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className="carousel__snapper">
                    <div className="slide">
                        <h1>Find my walkmate</h1>
                        <p>Join our Chatbuddy to get in contact with a walkmate and make new friends on way.</p>
                        <button class="">Know More</button>
                    </div>
                </div>
                <a href="#carousel__slide2"
                   class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide4"
                   class="carousel__next">Go to next slide</a>
              </li>
              <li id="carousel__slide4"
                  tabindex="0"
                  className="carousel__slide">
                <div className="carousel__snapper">
                    <div className="slide">
                        <h1>Coming soon</h1>
                        <p>"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence."-Helen Keller</p>
                        <button class="">Know More</button>
                    </div>
                </div>
                <a href="#carousel__slide3"
                   class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide1"
                   class="carousel__next">Go to first slide</a>
              </li>
            </ol>
            <aside className="carousel__navigation">
              <ol className="carousel__navigation-list">
                <li class="carousel__navigation-item">
                  <a href="#carousel__slide1"
                     class="carousel__navigation-button">Go to slide 1</a>
                </li>
                <li class="carousel__navigation-item">
                  <a href="#carousel__slide2"
                     class="carousel__navigation-button">Go to slide 2</a>
                </li>
                <li class="carousel__navigation-item">
                  <a href="#carousel__slide3"
                     class="carousel__navigation-button">Go to slide 3</a>
                </li>
                <li class="carousel__navigation-item">
                  <a href="#carousel__slide4"
                     class="carousel__navigation-button">Go to slide 4</a>
                </li>
              </ol>
            </aside>
          </section>
          </div>
  )
}

export default Carousels
