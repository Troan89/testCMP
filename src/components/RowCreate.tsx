import React, {useState} from 'react';
import {useCreateRowMutation} from "../services/api.ts";
import styled from "styled-components";
import {theme} from "../styles/Theme.styled.tsx";
import {StyledTableCell, StyledTableRow} from "./pages/CMP.styled.ts";

type Props = {
    eID: number
    parentId: number | null
    onRowCreated: (newRow: any) => void
}
const textColor = theme.color.white.light

const RowCreate = (props: Props) => {
    const [createRow] = useCreateRowMutation();
    const [newRow, setNewRow] = useState({
        eID: props.eID,
        equipmentCosts: 0,
        estimatedProfit: 0,
        machineOperatorSalary: 0,
        mainCosts: 0,
        materials: 0,
        mimExploitation: 0,
        overheads: 0,
        parentId: props.parentId, // set to null if no parent
        rowName: '',
        salary: 0,
        supportCosts: 0
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setNewRow({
            ...newRow,
            [name]: value,
        });
    };

    const handleKeyPress = async (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            try {
                const result = await createRow(newRow).unwrap();
                props.onRowCreated(result);
            } catch (error) {
                console.error('Failed to create row:', error);
            }
        }
    };

    return (
        <StyledTableRow>
            <StyledTableCell style={{color: `${textColor}`, borderBottom: `1px solid ${theme.color.border}`}}>

            </StyledTableCell>
            <StyledTableCell style={{color: `${textColor}`, borderBottom: `1px solid ${theme.color.border}`}}>
                <Input
                    type="text"
                    name="rowName"
                    value={newRow.rowName}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Название"
                />
            </StyledTableCell>
            <StyledTableCell style={{color: `${textColor}`, borderBottom: `1px solid ${theme.color.border}`}}>
                <input
                    type="number"
                    name="mainCosts"
                    value={newRow.mainCosts}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Основная з/п"
                />
            </StyledTableCell>
            <StyledTableCell style={{color: `${textColor}`, borderBottom: `1px solid ${theme.color.border}`}}>
                <input
                    type="number"
                    name="equipmentCosts"
                    value={newRow.equipmentCosts}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Оборудование"
                />
            </StyledTableCell>
            <StyledTableCell style={{color: `${textColor}`, borderBottom: `1px solid ${theme.color.border}`}}>
                <input
                    type="number"
                    name="overheads"
                    value={newRow.overheads}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Накладные расходы"
                />
            </StyledTableCell>
            <StyledTableCell style={{color: `${textColor}`, borderBottom: `1px solid ${theme.color.border}`}}>
                <input
                    type="number"
                    name="estimatedProfit"
                    value={newRow.estimatedProfit}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Сметная прибыль"
                />
            </StyledTableCell>
        </StyledTableRow>
    );
};

export default RowCreate;

const Input = styled.input`
    border: none; /* Убираем рамку */
    outline: none; /* Убираем контур фокуса */
    width: 100%; /* Ширина по содержимому */
    //padding: 8px; /* Отступы вокруг текста */
    background: rgba(32, 33, 36, 1); /* Убираем фон */
    color: inherit; /* Наследуем цвет текста */
    font: inherit; /* Наследуем шрифт */  

`