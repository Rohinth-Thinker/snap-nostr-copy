import styled from "styled-components";
import { tablet } from "../../shared/Global.styled";

export const SearchBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: 17px;

    ${tablet(`
        width: 100%;
    `)}
`;

export const SearchBarContainer = styled.label`
    background-color: #272727;
    border: 1px solid #71717187;
    border-radius: 8px;
    padding: 10px 40px;
    width: 550px;
    height: 50px;
    box-shadow: 0 25px 40px 11px #00000040;
    transform: translateX(-10%);
    -webkit-transform: translateX(-10%);

    display: flex;
    align-items: center;
    gap: 10px;

    transition: all 0.2s;
    -webkit-transition: all 0.2s;

    cursor: text;

    &:hover {
        border: 1px solid #717171;
    }

    &:has(input:focus) {
        outline: #CE66FF solid 2px;
    }

    &:focus-within, &:has(input:not(:placeholder-shown)) {
        padding-left: 10px;
    }

    position: relative;

    ${tablet(`
        width: 100%;
        transform: unset;
        -webkit-transform: unset;
        padding: 10px 10px;
    `)}
`;


export const SearchBarForm = styled.form`
    height: 100%;
    width: 100%;
`;

export const SearchInput = styled.input`
    border: none;
    background-color: transparent !important;
    height: 100%;
    width: 100%;
    font-size: 16px;
    outline: none;
    color: #FFF;
`;

export const SearchBarProgressContainer = styled.div`
    position: absolute;
    inset: 3px 3px 1px;
    border-radius: .5rem;
    overflow: hidden;
    pointer-events: none;
    width: 100.5%;
    left: -2px;
    bottom: 0px;
`;

export const SearchBarProgress = styled.div`
    background: #27c4f5 linear-gradient(to right,#CE66FF,#FE983B);
    -webkit-animation: 3s linear infinite rainbow,.5s ease-out enter;
    animation: 3s linear infinite rainbow,.5s ease-out enter;
    transition: opacity .3s ease-in-out;
    -webkit-transition: opacity .3s ease-in-out;
    transform-origin: left;
    -webkit-transform-origin: left;
    background-size: 500%;
    z-index: 999999;
    position: absolute;
    display: block;
    width: 100%;
    opacity: 1;
    left: 0;
    bottom: 0;
    height: 2px;
`;
