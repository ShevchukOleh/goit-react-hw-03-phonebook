import styled from 'styled-components';

export const Form = styled.form`
    display: table-caption;
    border: 1px solid #262c4d;
    border-radius: 3px;
    padding: 10px 130px 10px 5px;
`;
export const Label = styled.label`
    font-size: 14px;
    line-height: 1.2;
`;
export const Input = styled.input`
    font-size: 16px;
    line-height: 1.2;  
    padding: 5px;
    margin-bottom: 20px;
    border: 1px solid #262c4d;
    border-radius: 3px;
`;
export const Button = styled.button`
    font-size: 16px;
    line-height: 1.2;
    padding: 5px 15px;
    border: 1px solid #262c4d;
    border-radius: 3px;
    color: white;
    background-color: #262c4d;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        background-color:#126904; 
    }
`;