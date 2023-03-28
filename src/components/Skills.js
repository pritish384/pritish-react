import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import React from 'react';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Learning is a Great process of becoming more Expert with the experience that come as a reward, my passion of learning about the latest and the in-demand Technology made me master in these skills.<br></br></p>
                        <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <input type="image" img src = {meter1} alt="photo" />
                                {/* <img src={meter1} /> */}
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <input type="image" img src = {meter2} alt="photo" />

                                {/* <img src={meter2}  /> */}
                                <h5>BOT Development</h5>
                            </div>
                            <div className="item">
                                <input type="image" img src = {meter3} alt="photo" />
                                {/* <img src={meter3} /> */}
                                <h5>Programming</h5>
                            </div>
                            {/* <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div> */}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp}/> */}
        <input type="image" className="background-image-left" img src = {colorSharp} alt="photo" />

    </section>
  )
}
