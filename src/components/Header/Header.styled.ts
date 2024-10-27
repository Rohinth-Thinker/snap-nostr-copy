import styled from "styled-components";
import { tablet } from "../../shared/Global.styled";

export const HomePageHeader = styled.header`
    height: 75px;
    padding: 50px 60px 0 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${tablet(`
        flex-direction: column-reverse;
        height: auto;
        padding: 20px;
    `)}
`;


export const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    ${tablet(`
        width: 100%;
        justify-content: space-between;
    `)}
`;
