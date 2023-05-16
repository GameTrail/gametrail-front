import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
`;

export const AddContainer = styled.div`
margin-top: 2.5%;
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
`;

export const Information = styled.div`
display: flex;
flex-direction: row;
gap: 0.2em;
@media (max-width: 320px) {
    flex-direction: column;
    width: 90%;
    
}
`;

export const ImageInput = styled.label`
    input[type="file"] {
        display: none;
    }
    cursor: pointer;
`;

export const ImageSelector = styled.p`
    color: ${({ theme }) => (theme.nord.blue3)};
    text-decoration-line: underline;
`;

export const ImagePreview = styled.img`
    width: 500px;
    @media (max-width: 767px) {
    width: 300px;
    
}
`;

export const AddButton = styled.button`
    height: 60px;
    width: 200px;
    border-radius: 9px;
    padding: 0 10px;
    font-size: 1.4rem;
    margin-top: 1em;
    margin-bottom: 2em;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => (theme.nord.white2)};
    background: ${({ theme }) => (theme.nord.blue3)};
    @media (max-width: 768px) {
        font-size: 0.8rem;
        height:30px;
    }

    &:hover {
        box-shadow: 0 0 3px ${({ theme }) => theme.nord.gray2};
        background-color: ${({ theme }) => theme.nord.white2};
        color: ${({ theme }) => theme.nord.blue3};
    }
`;

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    background-color: ${({ theme }) => (theme.nord.gray3)};
    color: ${({ theme }) => (theme.nord.white1)};
  }
`;
