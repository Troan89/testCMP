import styled from "styled-components";
import {TableCell, TableRow} from "@material-ui/core";
import {theme} from "../../styles/Theme.styled.tsx";

type Props = {
    width?: string
}

export const textColorDark = theme.color.white.dark
export const textColorLight = theme.color.white.light
export const StyledTableCell = styled(TableCell)<Props>`
    border-bottom: 1px solid ${theme.color.border}; // Цвет бордера для каждой строки
    background: rgba(32, 33, 36, 1);
    width: ${props => props.width};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;

export const StyledTableRow = styled(TableRow)`
    border-bottom: 1px solid ${theme.color.border}; // Цвет бордера для каждой строки
    background: rgba(32, 33, 36, 1);
`;
export const LineContainer = styled.div<{ level: number }>`
    display: flex;
    align-items: center;
    position: relative;
    margin-left: ${props => props.level * 20}px;

    &::before {
        content: '';
        position: absolute;
        left: -10px;
        top: -145%;
        height: 220%;
        width: 2px;
        background: ${theme.color.white.light};
    }

    &::after {
        content: '';
        position: absolute;
        left: -10px;
        top: 40%;
        width: 10px;
        height: 2px;
        background: ${theme.color.white.light};
    }
`;
