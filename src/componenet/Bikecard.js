import React from "react";
import reactDom from "react-dom";
import "./Bikecard.css";
import BikeData from "./Bikedata";

const Bikecard = () => {
  return(
    <div className="bikeComponent">
        <div id="image">
            <img src="https://moto-trips.pl/wp-content/uploads/2020/11/315042_2021_HONDA_NC750X-1536x864.jpg" alt="" />
        </div>
        <div id="bikeDesc">
            <div id="logoContainer">
                <img src="https://moto-trips.pl/wp-content/uploads/elementor/thumbs/logo-honda-ojxxoyjmo6r7cwioln7tkgw1tpps2g6nd1d4mxyjxw.png" alt="" />
            </div>
            <h3>Honda NC750X DCT 2021</h3>
            <div className="descContainer">
                <div className="descElement">
                    <label for="">Capacity</label>
                    <p>745</p>
                </div>
                <div className="descElement">
                    <label for="">Power</label>
                    <p>59</p>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Bikecard;
