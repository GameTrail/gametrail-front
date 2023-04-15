import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3em;
    margin-bottom: -3em;
    text-align: center;
    justify-content:space-evenly;
    h1{
        font-size: 1.5em;
        margin-left: 0em;
    }
    .crown{
        color: ${({ theme }) => theme.nord.yellow};
        @keyframes changeColor {
            0% {
                color: #ee7752
            }
           
            20% {
                color: #e73c7e
            }
            40% {
                color: #23a6d5
            }
            60% {
                color: #23d5ab
            }
            80% {
                color: #e73c7e
            }
            100% {
                color: #ee7752
            }
     }
        animation: changeColor 2s linear infinite;
    }
    .gear {
        cursor: pointer;
        color: ${({ theme }) => theme.nord.gray3};
        animation: rotateGear 5s linear infinite;
        width: 20%;
        height: 20%;
        margin-left: -1.5em;
    }
    @keyframes rotateGear {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    img{
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 100%;
        box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
    }
    @media (max-width: 768px) {
        flex-direction: column;
        padding-top: 10px;
        h1{
            margin-top: 1rem;
            margin-bottom: 3rem;
            font-size: larger;
            margin-left: 0em;
        }
        .gear {
            cursor: pointer;
            color: ${({ theme }) => theme.nord.gray3};
            animation: rotateGear 5s linear infinite;
            width: 13%;
            height: 13%;
            margin-left: 0em;
        }
    };
`;

export const RateButton = styled.button`
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;
    margin-top: 1em;
    margin-bottom: 3em;
    padding: 0.8em;
    border-radius: 8px;
    width: 100px;
    border: none;
    background-color: ${({ theme }) => (theme.nord.gray3)};
    color: ${({ theme }) => (theme.nord.white0)};
    &:hover {
        transition: all 0.3s ease-in-out;
        box-shadow: 0 0 10px 0;
        background-color: ${({ theme }) => (theme.nord.gray3)};
    }
    @media (max-width: 768px) {
        width: 105px;
        font-size: 0.8rem;
        font-weight: 400;
        border-radius: 8px;
        margin-bottom: 6em;
    }
`;

export const RateContainer = styled.form`
  position: absolute; 
  top: 0; 
  right: 0; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.nord.gray2};
  margin-top: 8rem;
  height: auto;
  border-radius: 8px;
  margin-right: 8rem;
  z-index: 1;
  h2{
      color: ${({ theme }) => theme.nord.white0};
      margin-bottom:1rem;
  }
  label{
      color: ${({ theme }) => theme.nord.white0};
  }
  width: auto;
  padding: 1rem;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
  @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      position:fixed;
      gap:0.5rem;
      width: 83%;
      margin-right: 2em;
  };
`;

export const RateInput = styled.input`
    width: 100px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.nord.gray3};
    padding: 0 10px;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.nord.gray3};
    background-color: ${({ theme }) => theme.nord.white0};
    &:focus {
        outline: none;
    }
    @media (max-width: 768px) {
        width: 105px;
        font-size: 0.8rem;
        font-weight: 400;
        padding: 0 10px;
        border-radius: 8px;
    }
`;

export const RateLabel = styled.label`
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.nord.gray3};
    @media (max-width: 768px) {
        font-size: 0.8rem;
        font-weight: 400;
    }
`;

export const RateButtonSubmit = styled.button`
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 8px;
    margin-top: 1rem;
    width: 100px;
    border: none;
    background-color: ${({ theme }) => (theme.nord.gray3)};
    color: ${({ theme }) => (theme.nord.white0)};
    &:hover {
        transition: all 0.3s ease-in-out;
        box-shadow: 0 0 10px 0;
        background-color: ${({ theme }) => (theme.nord.gray3)};
    }
    @media (max-width: 768px) {
        width: 105px;
        font-size: 0.8rem;
        font-weight: 400;
        padding: 10px 20px;
        border-radius: 8px;
    }
`;

export const CloseRateContainer = styled.button`
    background-color: ${({ theme }) => theme.nord.gray1};
    color: ${({ theme }) => theme.nord.white0};
    font-size: 1.2rem;
    font-weight: 400;
    border-radius: 8px;
    border:none;
    width: 50px;
    padding: 2px 5px;

    cursor: pointer;
`;

export const ErrorContainer = styled.div`
  text-align: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.nord.red};
  color: ${({ theme }) => theme.nord.white2};
  border-color: black;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  height: auto;
  padding: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  };
`;
