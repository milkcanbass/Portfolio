import styled from "styled-components";

export const LoadingStyles = styled.div`
  .hide {
    display: none;
  }

  .background {
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: #0049b7;
  }

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 40px;
    display: flex;
    align-items: center;
  }

  .bar {
    background: white;
    margin: 0 3px;
    border-radius: 30%;
    animation: appear 0.8s forwards;
    :nth-child(2) {
      animation-delay: 0.1s;
    }
    :nth-child(3) {
      animation-delay: 0.2s;
    }
    :nth-child(4) {
      animation-delay: 0.3s;
    }
    :nth-child(5) {
      animation-delay: 0.4s;
    }
    :nth-child(6) {
      animation-delay: 0.5s;
    }
    :nth-child(7) {
      animation-delay: 0.6s;
    }
    :nth-child(8) {
      animation-delay: 0.7s;
    }
  }

  @keyframes appear {
    0% {
      height: 0px;
      width: 0px;
      background-color: #fff;
    }
    70% {
      height: 30px;
      width: 3px;
      opacity: 0.3;
      background-color: #fff;
    }
    90% {
      height: 60px;
      width: 6px;
      opacity: 1;
      background-color: #fff;
    }
    100% {
      height: 55px;
      width: 6px;
      background-color: #f75990;
    }
  }
`;
