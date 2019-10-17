import styled from 'styled-components';

export const LandingStyles = styled.div`
  /* Frexible screen */
  .borders {
    .top {
      position: fixed;
      top: -5vh;
      width: 100vw;
      height: 3%;
      background-color: whitesmoke;
      z-index: 10;
      animation: topBar 0.8s 1s forwards;
    }
    .bottom {
      position: fixed;
      bottom: -5vh;
      width: 100vw;
      height: 3%;
      background-color: whitesmoke;
      z-index: 10;
      animation: bottomBar 0.8s 1s forwards;
    }
    .right {
      position: fixed;
      right: -5vw;
      width: 3%;
      height: 100vh;
      text-align: center;
      z-index: 10;
      background-color: whitesmoke;
      animation: rightBar 0.8s 1s forwards;

      .sideMenu {
        position: relative;
        top: 50%;
        left: 0;
        font-size: 1.5rem;
        transform: rotate(90deg);
        animation:fadein 1s;
        -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 1s; /* Firefox < 16 */
        -ms-animation: fadein 1s; /* Internet Explorer */
        -o-animation: fadein 1s; /* Opera < 12.1 */
        z-index: 11;

        .icon {
          color: #808080;

          &:hover {
            color: #f75990;
          }
          &:focus {
            color: #f75990;
          }
        }
      }
    }

    .left {
      position: fixed;
      left: -5vw;
      width: 3%;
      height: 100vh;
      background-color: whitesmoke;
      z-index: 10;
      animation: leftBar 0.8s 1s forwards;
    }
  }

  .body {
    background-color: #fffafa;
    overflow: hidden;
  }

  .displayNone {
    display: none;
  }

  .inVisible {
    visibility: hidden;
  }

  .headerWrapperStart {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100vw;
    background-color: #0049b7;
    transition: width 1s;
    overflow: hidden;
  }

  .headerWrapperMoved {
    position: relative;
    top: 0;
    height: 160vh;
    width: 50vw;
    background-color: #0049b7;
    transition: width 0.8s;
  }

  .headerWrapper {
    position: relative;
    top: 0;
    height: 160vh;
    width: 100%;
    background-color: #0049b7;
    transition: width 0.8s;
  }
  .hello {
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 5em;
    /* for iOS's opacity issue */ 
    color: white;
    opacity:0; 
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #f75998;
    animation:fadein 0.5s 0.8s forwards;
    -webkit-animation: fadein 0.5s 0.8s forwards; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 0.5s 0.8s forwards; /* Firefox < 16 */
    -ms-animation: fadein 0.5s 0.8s forwards; /* Internet Explorer */
    -o-animation: fadein 0.5s 0.8s forwards; /* Opera < 12.1 */
  }

  .header {
    position: relative;
    height: 100vh;
    width: 100%;
  }

  .scrollGuide {
    position: absolute;
   top:40%;
    left: 70%;
    height: 200px;
    width: 100px;
    transition: 0.5s ease-in;
    text-align: left;
    animation:fadein 7s, 2.2s infinite; 
    -webkit-animation: fadein 7s, 2.2s infinite; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 7s, 2.2s infinite; /* Firefox < 16 */
    -ms-animation: fadein 7s, 2.2s infinite; /* Internet Explorer */
    -o-animation: fadein 7s, 2.2s infinite; /* Opera < 12.1 */

    .scrollText {
      position: absolute;
      top: 0%;
      left: 6%;
      color: #fff;
      transform: rotate(-90deg);
      font-size: 1em;
    }

    .arrow-down1 {
      position: absolute;
      left: 22%;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 10px solid #fff685;




      animation: arrow1 2.2s infinite;
      -webkit-animation: arrow1 2.2s infinite; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: arrow1 2.2s infinite; /* Firefox < 16 */
      -ms-animation: arrow1 2.2s infinite; /* Internet Explorer */
      -o-animation: arrow1 2.2s infinite; /* Opera < 12.1 */
     
    }

    .arrow-down2 {
      position: absolute;
      left: 22%;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 10px solid #fff685;
      animation: arrow2 2.2s infinite;
      -webkit-animation: arrow2 2.2s infinite; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: arrow2 2.2s infinite; /* Firefox < 16 */
      -ms-animation: arrow2 2.2s infinite; /* Internet Explorer */
      -o-animation: arrow2 2.2s infinite; /* Opera < 12.1 */
     
    }
  }
  .profAnimate {
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0; 
    padding-top: 10%;
    padding-bottom: 10%;
    animation:fadein 0.5s 0.6s forwards;
    -webkit-animation: fadein 0.5s 0.6s forwards; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 0.5s 0.6s forwards; /* Firefox < 16 */
    -ms-animation: fadein 0.5s 0.6s forwards; /* Internet Explorer */
    -o-animation: fadein 0.5s 0.6s forwards; /* Opera < 12.1 */
 
  }

  .profile {
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    padding-top: 10%;
    padding-bottom: 5%;
  }

  .namePic {
    .profImg {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 150px;
      height: 150px;
      border-radius: 100%;
    }
    .name {
      position: relative;
      padding-top: 5%;
      text-align: center;
      color: #fff685;
      font-weight: bold;
    }
  }

  .profText {
    text-align: center;
    position: relative;
    padding-top: 5%;
    max-height: 100%;
    max-width: 100%;
    color: white;
  }
  .links {
    position: relative;
    padding-top: 5%;
    text-align: center;
    font-size: 2em;
    .icons {
      margin: 0 5%;
      color: white;
      z-index: 3;
      &:hover {
        color: #f75990;
      }
      &:focus {
        color: #f75990;
      }
    }
  }

  .skillWrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .skillContent {
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #00ddff;
    color: white;
    padding-top: 5%;

    .title {
      text-align: center;
      color: #fff685;
    }

    .skillTitle {
      color: #0049b8;
      padding-bottom: 5%;
    }

    .skillList {
      position: relative;
      top: 0;
      left: 0;
      height: 100%;
      width: auto;
      padding-bottom: 5%;

      .icons {
        font-size: 5rem;
        color: #f75990;
        padding-top: 3%;
      }

      .frontend {
        position: relative;
        text-align: center;
        padding-bottom: 5%;
      }
      .backend {
        position: relative;
        text-align: center;
        padding-bottom: 5%;
      }
      .gameDevelopment {
        position: relative;
        text-align: center;
        padding-bottom: 5%;
      }
      .tools {
        position: relative;
        text-align: center;
      }
    }
  }


  .linkedWebsite{
  color:#0049b7;
  :hover {
          color: #00ddff;
        }
        &:focus {
          color: #00ddff;
        }
}

  @media screen and (min-width: 1200px) {
    .headerWrapperMoved {
      height: 170vh;
    }

    .headerWrapper {
      height: 170vh;
    }

    .scrollGuide {
      left: 85%;
      .scrollText {
        left: 46%;
      }
      .arrow-down1 {
        left: 62%;
      }

      .arrow-down2 {
        left: 62%;
        animation:arrow2MinWid1200 2.2s infinite;
        -webkit-animation: arrow2MinWid1200 2.2s infinite; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: arrow2MinWid1200 2.2s infinite; /* Firefox < 16 */
        -ms-animation: arrow2MinWid1200 2.2s infinite; /* Internet Explorer */
        -o-animation: arrow2MinWid1200 2.2s infinite; /* Opera < 12.1 */
        animation: arrow2MinWid1200 2.2s infinite;
      }
    }

    .namePic {
      display: flex;
      justify-content: center;
      .profImg {
        margin: 0 3% 0 0;
        padding: 0;
      }
      .name {
        font-size: 2em;
      }
    }

    .profText {
      font-size: 2em;
    }
    .links {
      font-size: 3em;
    }

    .skillContent {
      padding-top: 3%;
      padding-bottom: 0;

      .title {
        text-align: center;
      }

      .skillTitle {
        padding-bottom: 3%;
        font-size: 2em;
      }

      .skillList {
        display: flex;
        justify-content: center;
        padding-bottom: 0;

        .icons {
          font-size: 5rem;
        }

        .frontend {
          margin: 0 5%;
        }
        .backend {
          margin: 0 5%;
        }
        .gameDevelopment {
          margin: 0 5%;
        }
        .tools {
          margin: 0 5%;
        }
      }
    }

    .projectWrapper {
      position: relative;
      height: 100%;
      width: 100%;
    }
  }

  @media screen and (min-width: 860px) and (max-width: 1199px) {
    .borders {
      display: none;
    }
    .headerWrapperMoved {
      height: 200vh;
    }

    .headerWrapper {
      height: 200vh;
    }

    .scrollGuide {
left:90%;
    }

    .namePic {
      .profImg {
        width: 200px;
        height: 200px;
      }
      .name {
        font-size: 2em;
      }
    }

    .profText {
      padding: 5%;
      font-size: 2em;
    }
    .links {
      .icons {
        font-size: 2em;
      }
    }

    .skillContent {
      .title {
        font-size: 2em;
      }
      .skillTitle {
        padding: 1% 0;
      }

      .skillList {
        font-size: 2em;
        .icons {
          font-size: 8rem;
        }
      }
    }

  }


  }

  @media screen and (min-width: 480px) and (max-width: 859px) {
    .borders {
      display: none;
    }

    .headerWrapperMoved {
      height: 200vh;
    }

    .headerWrapper {
      height: 200vh;
    }

    .scrollGuide {
      .scrollText {
        /* top: 10%; */
        left: 24%;
        font-size: 1em;
      }
      .arrow-down1 {
        left: 40%;

        animation:arrow1MaxWid996 2.2s infinite;
        -webkit-animation: arrow1MaxWid996 2.2s infinite; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: arrow1MaxWid996 2.2s infinite; /* Firefox < 16 */
        -ms-animation: arrow1MaxWid996 2.2s infinite; /* Internet Explorer */
        -o-animation: arrow1MaxWid996 2.2s infinite; /* Opera < 12.1 */
        animation: arrow1MaxWid996 2.2s infinite;
      }
      .arrow-down2 {
        left: 40%;
        animation:arrow2MaxWid996 2.2s infinite;
        -webkit-animation: arrow2MaxWid996 2.2s infinite; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: arrow2MaxWid996 2.2s infinite; /* Firefox < 16 */
        -ms-animation: arrow2MaxWid996 2.2s infinite; /* Internet Explorer */
        -o-animation: arrow2MaxWid996 2.2s infinite; /* Opera < 12.1 */
        animation: arrow2MaxWid996 2.2s infinite;
      }
    }

    .namePic {
      .profImg {
        width: 200px;
        height: 200px;
      }
      .name {
        font-size: 1.5em;
      }
    }

    .profText {
      padding: 5%;
      font-size: 1.5em;
    }
    .links {
      .icons {
        font-size: 1.5em;
      }
    }

    .skillContent {
      .title {
        font-size: 1.5em;
      }
      .skillTitle {
        padding: 1% 0;
      }

      .skillList {
        font-size: 1.5em;
        .icons {
          font-size: 6rem;
        }
      }
    }

  }

  /* @media screen and (min-width: 480px) and (max-width: 767px) {
    .borders {
      display: none;
    }
  } */

  @media screen and (max-width: 479px) {
    .borders {
      display: none;
    }
  }

  /* Keyframes */
  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes arrow1 {
    0% {
      top: 17%;
    }
    50% {
      top: 19%;
    }
    100% {
      top: 17%;
    }
  }
  @keyframes arrow2 {
    0% {
      top: 23%;
    }
    50% {
      top: 25%;
    }
    100% {
      top: 23%;
    }
  }

  @keyframes arrow1MaxWid996 {
    0% {
      top: 27%;
    }
    50% {
      top: 29%;
    }
    100% {
      top: 27%;
    }
  }
  @keyframes arrow2MaxWid996 {
    0% {
      top: 33%;
    }
    50% {
      top: 35%;
    }
    100% {
      top: 33%;
    }
  }

  @keyframes arrow2MinWid1200 {
    0% {
      top: 23%;
    }
    50% {
      top: 25%;
    }
    100% {
      top: 23%;
    }
  }

  @keyframes moveToLeft {
    0% {
      width: 100vw;
      /* transform: translateX(0); */
    }
    100% {
      width: 50vw;
      /* transform: translateX(-50vw); */
    }
  }
  @keyframes moveToRight {
    0% {
      width: 100vw;
      /* transform: translateX(-50vw); */
    }
    100% {
      width: 50vw;
      /* transform: translateX(0); */
    }
  }

  @keyframes profMove {
    0% {
      top: 0;
      left: -100vw;
    }
    100% {
      top: 0;
      left: -7vw;
    }
  }

  @keyframes topBar {
    0% {
      top: -5vh;
    }
    100% {
      top: 0;
    }
  }
  @keyframes rightBar {
    0% {
      right: -5vh;
    }
    100% {
      right: 0;
    }
  }
  @keyframes bottomBar {
    0% {
      bottom: -5vh;
    }
    100% {
      bottom: 0;
    }
  }
  @keyframes leftBar {
    0% {
      left: -5vh;
    }
    100% {
      left: 0;
    }
  }


  @keyframes animate {
    50% {
      transform: translate(-20px, 0) scale(0.5);
      color: black;
    }
    80% {
      transform: translate(10px, 0) scale(1);
      color: #ff1d58;
    }
    99% {
      transform: translate(0) scale(1);
      color: black;
    }
    100% {
      transform: translate(0) scale(1);
      color: black;
      opacity: 1;
    }
  }

  @keyframes animatedBackground {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 100% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  @keyframes animatedBackgroundMax420 {
    0% {
      transform:scale(0.7);
      background-position: 0 0;
    }
    50% {
      transform:scale(0.7);
      background-position: 100% 0;
    }
    100% {
      transform:scale(0.7);
      background-position: 0 0;
    }
  }


  @keyframes fadein {
    0% {
      opacity: 0;
 
    }
    100% {
      opacity: 1;
  
    }
  }

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }  
`;
