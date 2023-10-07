import React, { useEffect } from "react";
import "../Style/Home.css";
import SvgImage0 from "../Assets/YouTube.png";
import SvgImage1 from "../Assets/LinkedIn.png";
import SvgImage2 from "../Assets/Instagram.png";
import SvgImage from "../Assets/amico.png";
function Home() {
  useEffect(() => {}, []);

  return (
    <>
      <div className="outer ">
        <section className="wrapper">
          <div className="container">
            <div className="grid-cols-2">
              <div className="grid-item-1">
                <h1 className="main-heading">
                  Beyond The <span>Limitations</span>
                  <br />
                  Next To The <span>Perfection</span>
                </h1>
                <div className="btn_wrapper">
                  <button className="btn view_more_btn">
                    <img
                      src={SvgImage0}
                      alt="team-img"
                      style={{ width: "150%", height: "auto" }}
                    />
                  </button>
                  <button className="btn view_more_btn">
                    <img
                      src={SvgImage1}
                      alt="team-img"
                      style={{ width: "150%", height: "auto" }}
                    />
                  </button>
                  <button className="btn view_more_btn">
                    <img
                      src={SvgImage2}
                      alt="team-img"
                      style={{ width: "150%", height: "auto" }}
                    />
                  </button>
                </div>
              </div>
              <div className="grid-item-2">
                <div className="team_img_wrapper">
                  <img src={SvgImage} alt="team-img" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
