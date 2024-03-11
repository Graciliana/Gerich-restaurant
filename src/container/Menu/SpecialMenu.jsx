import React from "react";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

import { SubHeading, MenuItem} from "../../components";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1>Today’s Special</h1>
    </div>

    <div className="app__specialMenu-menu flex__center">
      <div className="app__specialMenu-menu_wine flex__center">
        <h3 className="app__specialMenu-menu_heading">Wine & Beer</h3>
        <div className="app__specialMenu_menu_items">
         {data.wines.map((wine, index) => (
          <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
         ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu_img" />
      </div>
      <div className="app__specialMenu-menu_cocktails  flex__center">
        <h3 className="app__specialMenu-menu_heading">Cocktails</h3>
        <div className="app__specialMenu_menu_items">
        {data.cocktails.map((cocktails, index) => (
          <MenuItem key={cocktails.title + index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags}/>
         ))}
        </div>
      </div>
    </div>
    <div style={{marginTop:'15px'}}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
