import styled from 'styled-components';

const defaultColor = '#b8bfb6';

const SWork = styled.div`
  .projects-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    column-gap: 30px;
    row-gap: 20px;
    width: 100%;
    padding: 40px 10%;
    list-style-type: none;

    .projects-item {
      position: relative;
      width: 30%;
      min-width: 360px;
      height: 260px;
      padding: 10px;
      border-radius: 4px;
      background-color: white;

      &:hover .name-link {
        background-color: rgba(0, 0, 0, 0.8);

        .name,
        .link {
          opacity: 100%;
        }
      }

      .name-link {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        background-color: rgba(0, 0, 0, 0);
        border-radius: 4px;
        transition: background-color 0.2s ease-in;

        .name {
          font-weight: bold;
          font-size: 22px;
          color: #ffffff;
          opacity: 0;
          transition: opacity 0.1s ease-in;
        }

        .link {
          text-decoration: none;
          color: inherit;
          position: relative;
          padding: 19px 22px;
          transition: all 0.2s ease;
          color: #ffffff;
          opacity: 0;
          transition: opacity 0.1s ease-in;

          &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            border-radius: 28px;
            background-color: ${(props) => props.color || defaultColor};
            opacity: 50%;
            width: 56px;
            height: 56px;
            transition: all 0.3s ease;
          }
          &:hover {
            &:before {
              width: 100%;
              opacity: 100%;
            }

            svg {
              transform: translateX(0);
            }
          }

          &:active {
            transform: scale(0.96);
          }

          span {
            position: relative;
            font-size: 16px;
            line-height: 18px;
            font-weight: 900;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            vertical-align: middle;
          }

          svg {
            position: relative;
            top: 0;
            margin-left: 10px;
            fill: none;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke: #fff;
            stroke-width: 2;
            transform: translateX(-5px);
            transition: all 0.3s ease;
          }
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 3px;
      }
    }
  }
`;

export default SWork;
