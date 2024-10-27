import styled from "styled-components";

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
`;
