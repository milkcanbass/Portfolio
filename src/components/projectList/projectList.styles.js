import styled from 'styled-components';
export const ProjectListStyles = styled.div`
  .projectListWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f75998;
    padding: 5% 0;

    .title {
      color: #fff685;
      padding: 15px 0;
    }
    .projectWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 15px 0 30px 0;
    }
  }

  @media screen and (min-width: 1200px) {
    .projectListWrapper {
      padding: 3% 0;

      .title {
        font-size: 2em;
      }
      .projectWrapper {
      }
    }
  }
  @media screen and (min-width: 860px) and (max-width: 1199px) {
    .projectListWrapper {
      padding: 3% 0;
      .title {
        font-size: 2em;
      }
      .projectWrapper {
      }
    }
  }

  @media screen and (min-width: 480px) and (max-width: 859px) {
    .projectListWrapper {
      padding: 3% 0;
      .title {
        font-size: 1.5em;
      }
      .projectWrapper {
      }
    }
  }
`;
