
import styled from'styled-components';

export const ButtonContainer= styled.button`
    padding: 7px 10px;
    font-size: 1.2rem;
    background:var(--mainPink);
    color:var(--mainWhite);
    border: 0.05rem solid;
    border-radius: 7px; 
    cursor:pointer;
    transition:all 0.5s ease-in-out;
    margin-right: 20px;
   &:hover{
       background:#ff8080;
       color:var(--mainWhite);
   }
   &:focus{
       outline:none !important;
   }
`;
