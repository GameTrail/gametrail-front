import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    `;

export const Label = styled.label`
    width: 100%;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    `;

export const Input = styled.input`
    width: 100%;
    height: 2rem;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  background-color: ${({ theme }) => theme.nord.white2};
  border: 0.1rem solid ${({ theme }) => theme.nord.white0};
  border-radius: 0.5rem;
    `;

export const InputDate = styled.input`
    width: 90%;
    height: 2rem;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  background-color: ${({ theme }) => theme.nord.white2};
  border: 0.1rem solid ${({ theme }) => theme.nord.white0};
  border-radius: 0.5rem;
    `;

export const InputTextArea = styled.textarea`
    width: 100%;
    height: 10rem;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  background-color: ${({ theme }) => theme.nord.white2};
  border: 0.1rem solid ${({ theme }) => theme.nord.white0};
  border-radius: 0.5rem;
    `;

export const FieldContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    flex-wrap: nowrap;
    padding: 0 0 0 0;
    margin: 0 0 1.2em 0;
  
    `;

export const DateFieldContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: end;
    align-content: end;
    flex-wrap: nowrap;
    padding: 0 0 0 0;
    margin: 0 0 1.2em 3%;
    `;

export const ButtonRow = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    `;

export const Button = styled.button`
    width: 100%;
    height: 3em;
    border: 0.1em solid ${({ theme }) => theme.nord.white0};
    border-radius: 0.5em;
    background-color: ${({ theme }) => theme.nord.blue2};
    color: ${({ theme }) => theme.nord.gray0};
    cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.nord.green};
  }
  transition: background-color 0.2s;
  font-size: 1.7rem;
`;
