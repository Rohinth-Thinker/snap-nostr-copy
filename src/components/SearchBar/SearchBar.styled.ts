import styled from "styled-components";

export const SearchBarContainer = styled.label`
    background-color: #272727;
    border: 1px solid #71717187;
    border-radius: 8px;
    padding: 10px 40px;
    width: 550px;
    height: 50px;
    box-shadow: 0 25px 40px 11px #00000040;
    transform: translateX(-10%);

    display: flex;
    align-items: center;
    gap: 10px;

    transition: all 0.2s;

    cursor: text;

    &:hover {
        border: 1px solid #717171;
    }

    &:focus-within {
        padding-left: 10px;
        outline: #CE66FF solid 2px;
    }
`;


export const SearchBarForm = styled.form`
    height: 100%;
    width: 100%;
`;

export const SearchInput = styled.input`
    border: none;
    background-color: transparent;
    height: 100%;
    width: 100%;
    font-size: 16px;
    outline: none;
    color: #FFF;
`;