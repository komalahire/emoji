import React, { Component } from "react";
import "./Header.css";
import cat1 from './cat1.png';
import cat2 from './cat2.png';

class Header extends Component {
  render() {
    return (
      <header className="component-header">
        <img src={cat1} />
        Emoji Search 
        <img src={cat2} />
        <a class="github" href="https://github.com/komalahire/react_emoji_project" >Fork me on GitHub</a>
      </header>
    );
  }
}

export default Header