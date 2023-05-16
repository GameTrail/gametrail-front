import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;
    .crown{
        color: ${({ theme }) => theme.nord.yellow};
        width: 25px;
        height: 25px;
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
  
`;

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 700px;
  padding:1rem;
  text-align: center;
  border-radius: 30px;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3}; 
  background-color: ${({ theme }) => theme.nord.gray0};
  @media (max-width: 768px) {
      flex-direction: column;         
      width: 80vw;         
      height: 100%;
      justify-content: center;
      padding-top: 10px;     
  };
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;         
      width: 100%;         
      height: 100%;
      justify-content: center;
      padding-top: 10px; 
  };
`;

export const PremiumDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const AvatarPreview = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  margin-bottom: 1rem;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom:1rem;
  @media (max-width: 768px) {

  };

`;
export const ProfileFormTitle = styled.h1`
  color: ${({ theme }) => theme.nord.white1};
  line-height: 1.2;
  text-align: center;
  font-size: 1.6rem;
  margin-bottom:1rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  };
`;
export const Label = styled.label`
  color: ${({ theme }) => theme.nord.white1};
  font-size: 1.2em;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  };
`;

export const Input = styled.input`
  padding: 15px;
  margin: auto;
  display: flex;
  border-radius: 9px;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.nord.white1};
  color: ${({ theme }) => theme.nord.gray1};
  width: 100%;
  max-width: 400px;
  outline: none;
  border: none;
  font-size: 1em;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  };
`;
export const ErrorContainer = styled.div`
  text-align: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.nord.red};
  color: ${({ theme }) => theme.nord.white2};
  border-color: black;
  width: 50%;
  margin:0 auto;
  height: auto;
  padding: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
    width: 80%;
  };
`;
export const Button = styled.button`
    height: 60px;
    width: 200px;
    border-radius: 9px;
    padding: 0 10px;
    font-size: 1.4rem;
    margin: 0 auto;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => (theme.nord.white2)};
    background: ${({ theme }) => (theme.nord.gray1)};
    @media (max-width: 768px) {
        width: 120px;
        height:40px;
        font-size: 0.8rem;
    };
    &:hover {
        box-shadow: 0 0 3px ${({ theme }) => theme.nord.gray2};
        background-color: ${({ theme }) => (theme.nord.white2)};
        color: ${({ theme }) => (theme.nord.gray1)};
    }
`;
