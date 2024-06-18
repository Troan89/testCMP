import {Paper, Table, TableBody, TableContainer, TableHead} from "@material-ui/core";
import {theme} from "../../styles/Theme.styled.tsx";
import {useDeleteRowMutation, useGetListRowQuery} from "../../services/api.ts";
import {useEffect, useState} from "react";
import {Child} from "../../services/types.ts";
import {StyledTableCell, StyledTableRow, textColorDark} from "./CMP.styled.ts";
import {DataMap} from "./DataMap.tsx";


export const CMPPages = () => {

    const eId = 125037
    const [rows, setRows] = useState<Child[]>([]);
    const [isAdding, setIsAdding] = useState<number | null>(null);
    const [isDeleting, setIsDeleting] = useState<number | null>(null);


    const handleAddRowClick = (id: number) => {
        setIsAdding(id);
    };

    const handleDeleteRowClick = (id: number) => {
        setIsDeleting(id);
        if (isDeleting) {
            deleteRow({eID: eId, rID: isDeleting})
        }
    };

    const handleRowAdded = (newRow: Child) => {
        const newRows = [...rows];
        const index = newRows.findIndex((row) => row.id === isAdding);
        newRows.splice(index + 1, 0, newRow);
        setRows(newRows);
        setIsAdding(null);
    };

    const {data} = useGetListRowQuery({eID: eId})
    const [deleteRow] = useDeleteRowMutation()

    useEffect(() => {
        if (data) {
            setRows(data);
        }
    }, [data]);

    const dataMap = <DataMap data={data!} handleAddRowClick={handleAddRowClick}
                             handleDeleteRowClick={handleDeleteRowClick} isAdding={isAdding} eID={eId}
                             handleRowAdded={handleRowAdded}/>
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell width='110px' style={{
                            color: `${textColorDark}`,
                            borderBottom: `1px solid ${theme.color.border}`,
                            padding: '0'
                        }}>
                            Уровень
                        </StyledTableCell>
                        <StyledTableCell
                            width='757px'
                            style={{
                            color: `${textColorDark}`,
                            borderBottom: `1px solid ${theme.color.border}`
                        }}
                            >
                            Наименование работ
                        </StyledTableCell>
                        <StyledTableCell width='200px' style={{
                            color: `${textColorDark}`,
                            borderBottom: `1px solid ${theme.color.border}`
                        }}>
                            Основная з/п
                        </StyledTableCell>
                        <StyledTableCell width='200px' style={{
                            color: `${textColorDark}`,
                            borderBottom: `1px solid ${theme.color.border}`
                        }}>
                            Оборудование
                        </StyledTableCell>
                        <StyledTableCell width='200px' style={{
                            color: `${textColorDark}`,
                            borderBottom: `1px solid ${theme.color.border}`
                        }}>
                            Накладные расходы
                        </StyledTableCell>
                        <StyledTableCell width='200px' style={{
                            color: `${textColorDark}`,
                            borderBottom: `1px solid ${theme.color.border}`
                        }}>
                            Сметная прибыль
                        </StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {dataMap}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

