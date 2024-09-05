import styled  from "styled-components"

export const Button = styled.button`
    padding: 10px 18px;
    color: white;
    background: #000000;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;

        &:hover{
            background-color: white;
            color: black;
            border: 1px solid black;
            transition: 0.3s background ease-in;
        }
`;
export const OutlineButton = styled(Button)`
background-color: white;
color: black;
border: 1px solid black;
      &:hover{
            background-color: black;
            color: white;
            border: 1px solid transparent;
        }
`;
