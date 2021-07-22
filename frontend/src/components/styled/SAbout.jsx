import styled, { keyframes } from 'styled-components';

const wave = keyframes`
  0% {
    transform: rotate(0deg);
  } 
  40% {
    transform: rotate(0deg);
  }
  45% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(-15deg);
  }
  55% {
    transform: rotate(15deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const SAbout = styled.div`
  .content {
    width: 100%;
    padding: 0 10%;
    text-align: center;
    color: #3e3e3e;

    h2 {
      font-size: 40px;

      .contact-wave {
        display: inline-block;
        margin-left: 10px;
        font-weight: 500;
        animation: ${wave} 4s linear infinite;
      }
    }
  }
`;

export default SAbout;
