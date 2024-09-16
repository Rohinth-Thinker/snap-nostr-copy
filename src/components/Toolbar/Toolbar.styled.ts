import styled from "styled-components";

export const ToolbarContainer = styled.ul`
    width: 100px;
    border-radius: 8px;
    background-color: #272727;
    padding: 20px 5px 5px 5px;
    margin: none;
    list-style-type: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const Tool = styled.li<{$withBackground?: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    width: 70px;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.1s;

    background: ${props => props.$withBackground ? 'linear-gradient(45deg, #CE66FF, #FE983B)': 'transparent' };

    & span {
        color: ${props => props.$withBackground ? '#FFF': '#9F9F9F'};
        font-weight: ${props => props.$withBackground ? '600': 'normal'};;
    }

    &:hover {
        background-color: #323131;
    }
`;

export const ToolName = styled.span`
    color: #9F9F9F;
    font-size: 12px;
`;

export const ColorTool = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: linear-gradient(120deg, #FFE58A, #DF9BFF);
`;