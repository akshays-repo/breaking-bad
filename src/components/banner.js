import React from 'react'
import './ban.css'

const Banner = ({quote = '', Author = "", nextquote}) => (
    <div>
        <div className="BreakingBad">
        <div className="walter smile">
          <div className="beard mustache" />
          <div className="hair" />
          <div className="head" />
          <div className="eyes" />
          <div className="glasses" />
          <div className="nose" />
        </div>
        <div className="walter">
          <div className="beard " />
          <div className="head" />
          <div className="eyes" />
          <div className="nose plaster" />
        </div>
        <div className="walter">
          <div className="beard mustache" />
          <div className="head" />
          <div className="hat" />
          <div className="eyes" />
          <div className="glasses shades" />
          <div className="nose" />
        </div>
        <div className="logo">
          <p>
            <span className="element">
              Br<span className="number">35</span>
            </span>eaking
          </p>
          <p>
            <span className="element">
              Ba<span className="number">56</span>
            </span>d
          </p>

         
        </div>
        <div className="logo-1">          
        <p >{quote}</p> - <p style={{fontSize:"10px"}}>{Author}</p>
        </div>


        <footer><p>crafted by Akshay-s</p></footer>
      </div>

    </div>
)

export default Banner