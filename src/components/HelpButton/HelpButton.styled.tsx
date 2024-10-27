import styled from "styled-components";
import { tablet } from "../../shared/Global.styled";

export const StyledHelpButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 36px;
    color: #FFF;
    width: 65px;
    height: 65px;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: rgba(39,39,40,1);
    }

    &:focus {
        outline: #CE66FF solid 2px;
    }

    ${tablet(`
        width: 36px;
        height: 36px;
        font-size: 24px;
    `)}
`;
