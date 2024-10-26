import styled from "styled-components";
import { tablet } from "../../shared/Global.styled";

export const RelaysContainer = styled.aside`
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 20px;
    box-shadow: 0 0 15px #444;
    color: #FFF;
    cursor: default;
    z-index: 100;

    border: 1px solid transparent;
    border-radius: 6px;
    background: 
        linear-gradient(90deg, #222, #222), 
        linear-gradient(to right, #FE983B , #CE66FF);

    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;

    min-width: 300px;

    display: flex;
    flex-direction: column;
    gap: 36px;

    will-change: transform, opacity;
    transition-property: transform, opacity;
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(.4,0,.2,1);

    ${tablet(`
        display: none;
        position: fixed;
        left: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10000;
    `)}
`;

export const RelaysCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 22px
`;

export const CloseButton = styled.button`
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
    background-color: transparent;

    &:hover {
        background-color: transparent;
        border: 1px solid #FE3B3B;
    }

    &:focus {
        outline: 1px solid #FE3B3B;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    gap: 8px;
`;

export const Input = styled.input`
    background-color: transparent;
    border: 1px solid #383838;
    border-radius: 6px;
    padding: 12px;
    flex: 1;
    color: #FFF;
`;

export const AddButton = styled.button`
    background-color: #383838;
    width: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: transparent;
        border: 1px solid #383838;
    }
`;

export const SaveButton = styled.button`
    border: 1px solid transparent;
    border-radius: 6px;
    background: 
        linear-gradient(90deg, #383838, #383838), 
        linear-gradient(to right, #CE66FF , #FE983B);

    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;

    width: 100%;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #FFF;
    cursor: pointer;
`;

export const RelayList = styled.ul`
    list-style-type: none;
    margin-top: 12px;
    padding: 0;

    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const RelayItem = styled.li`
    display: flex;
    align-items: center;
    gap: 8px;

    color: #9F9F9F;
    font-size: 14px;
`;
