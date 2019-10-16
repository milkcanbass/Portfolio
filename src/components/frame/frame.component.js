import React from 'react'

const Frame =()=>{
    return(          
    <div className={this.state.load ? "displayNone" : "borders"}>
    <div className="top" />
    <div className="left" />
    <div className="bottom" />
    <div className="right">
      <div className={this.state.sidebar ? "sideMenu" : "inVisible"}>
        <a
          href="mailto:shintarokai.com@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </a>
      </div>
    </div>
  </div>)
}

export default Frame