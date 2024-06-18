import styled from "styled-components";
import {theme} from "../../styles/Theme.styled.tsx";

export const WrapperNav = styled.div`
    display: flex;
    flex-direction: column;
`

export const Navigate = styled.a`
    img {
        width: 17px;
        height: 17px;
        margin-right: 14px;
    }
    font-weight: 400;
    color: ${theme.color.white.light};
    padding-top: 5px;
    padding-left: 23px;
    padding-bottom: 5px;
    
    &:hover {
        background-color: ${theme.color.white.dark};
    }
`
