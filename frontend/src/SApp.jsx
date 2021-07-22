import styled from 'styled-components';

const defaultColor = '#b8bfb6';

const SApp = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 60px 40px 40px 40px;
  background-color: ${(props) => props.backColor || defaultColor};
  transition: 1s background-color ease-in;

  .btn-menu-toggle {
    position: fixed;
    top: 50%;
    left: 40px;
    transform: translate(-50%, -50%);

    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: none;
    background: #ffffff;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    z-index: 10;

    p {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #737972;

      &::before,
      &::after {
        content: '';
        width: 40px;
        height: 1px;
        background-color: #737972;
        margin: 3px 0;
      }
    }
  }

  .social-links {
    position: fixed;
    top: 50%;
    right: 40px;
    transform: translate(50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 30px;
    list-style-type: none;
    z-index: 10;
    transition: 0.2s;

    &:hover {
      padding-right: 40px;
    }

    .social-link {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: none;
      background: #ffffff;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        width: 70px;
        height: 70px;
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }

  header {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 40px;
    width: 100%;
    height: 60px;

    .name-title {
      height: 54px;

      svg {
        width: 285px;
        height: 54px;
        transition: 1s ease-in;
      }
    }
  }

  main {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.color || defaultColor};
    overflow: hidden;
    transition: 1s background-color ease-in;

    .menu-toggle  {
      display: flex;
      width: 200%;
      height: 100%;
      transition: 1s transform cubic-bezier(1, -0.5, 0.1, 1.5);

      &.hide {
        transform: translateX(-50%);
      }

      .menu {
        background-color: #fff;
        width: 50%;
        height: 100%;

        .menu-list {
          display: flex;
          gap: 40px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          list-style-type: none;

          .menu-item {
            .menu-link {
              font-size: 60px;
              text-transform: uppercase;
              text-decoration: none;
              color: ${(props) => props.backColor || defaultColor};
              position: relative;
              transition: 1s;

              &::before {
                position: absolute;
                top: 50%;
                left: -15%;
                transform: translateY(-50%);
                content: '';
                display: inline-block;
                width: 0;
                height: 4px;
                background-color: ${(props) => props.backColor || defaultColor};
                transition: 0.4s;
              }

              &::after {
                position: absolute;
                top: 50%;
                right: -15%;
                transform: translateY(-50%);
                content: '';
                display: inline-block;
                width: 0;
                height: 4px;
                background-color: ${(props) => props.backColor || defaultColor};
                transition: 0.4s;
              }

              &:hover {
                &::before {
                  width: 15%;
                }

                &::after {
                  right: -15%;
                  width: 15%;
                }
              }

              &.selected {
                &::after {
                  width: 130%;
                }
              }
            }
          }
        }
      }

      .content-page {
        width: 50%;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
      }
    }
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;

    p {
      font-weight: 300;
      font-size: 16px;
      letter-spacing: 0.1em;
    }
  }
`;

export default SApp;
