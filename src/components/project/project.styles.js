import styled from 'styled-components';
export const ProjectStyles = styled.div`
  .projectWrapper {
    height: 300px;
    width: 250px;
    margin: 5px;

    :hover .projectBody {
      opacity: 0.7;
      /* transition: all 1s; */
    }

    img {
      background-position: center;
      background-size: cover;
    }

    .projectBody {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 255px;
      width: 250px;
      opacity: 0;
      transition: all 1s;
      .background {
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
        .description {
          color: white;
          text-align: center;
        }
      }
    }

    .projectFooter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      width: 250px;
      background-color: white;
      .name {
        font-size: 1.2em;
        color: black;
        visibility: visible;
        margin-left: 3px;
        text-decoration: none;
      }

      .githubIcon {
        font-size: 1.5em;
        color: black;
        text-decoration: none;
        margin-right: 3px;
      }
    }

    :hover .projectBody&.description {
      visibility: visible;
    }
  }
`;
