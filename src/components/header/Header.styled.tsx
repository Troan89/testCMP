import styled from "styled-components";
import {theme} from "../../styles/Theme.styled.tsx";

export const Wrapper = styled.div`
    img {
        width: 24px;
        height: 24px;
        margin-top: 10px;
    }
    border-bottom: 1px solid ${theme.color.border} ;
`

export const WrapperNav = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding-left: 20px;
    align-items: center;
    border-bottom: 1px solid ${theme.color.border} ;
    height: 44px;
   
`

export const TitleNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.color.white.dark};
    font-size: 14px;
    font-weight: 400;

    height: 44px;
    width: 234px;
    border-right: 1px solid ${theme.color.border};

    p {
        margin: 0;
        padding-left: 20px;
    }

    p:last-child {
        font-size: 10px;
    }
    
    img {
        margin: 0;
    }
`
export const WrapperTitle = styled.div`
    display: flex;
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 400;
    color: ${theme.color.white.light};
    height: 44px;
    padding-left: 15px;
`