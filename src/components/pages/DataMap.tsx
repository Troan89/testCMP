import {StyledTableCell, StyledTableRow, textColorLight} from "./CMP.styled.ts";
import {theme} from "../../styles/Theme.styled.tsx";
import Edit from "../../assets/Edit.svg";
import Delete from "../../assets/Delete.svg";
import {ChildRow} from "./ChildRow.tsx";
import RowCreate from "../RowCreate.tsx";
import {Child} from "../../services/types.ts";
import React, {useState} from "react";
import {useUpdateRowMutation} from "../../services/api.ts";

type Props = {
    data: Child[]
    handleAddRowClick: (id: number) => void
    handleDeleteRowClick: (id: number) => void
    isAdding: number | null
    eID: number
    handleRowAdded: (newRow: Child) => void
}

export const DataMap = (props: Props) => {

    const [editingRowId, setEditingRowId] = useState<number | null>(null)
    const [name, setName] = useState<string>('')

    const [updateRow] = useUpdateRowMutation()

    const handleRowDoubleClick = (id: number) => {
        setEditingRowId(id);
    };

    const handleSaveChanges = (newValue: string) => {
        setName(newValue)
    };

    const handleCancelEditing = async (e: React.KeyboardEvent, id: number | null) => {
        if (e.key === 'Enter') {
            try {
                setEditingRowId(null);

                const res = await updateRow({
                    eID: props.eID,
                    equipmentCosts: 0,
                    estimatedProfit: 0,
                    machineOperatorSalary: 0,
                    mainCosts: 0,
                    materials: 0,
                    mimExploitation: 0,
                    overheads: 0,
                    parentId: id, // set to null if no parent
                    rowName: name,
                    salary: 0,
                    supportCosts: 0
                })
                console.log(res)
            } catch (error) {
                console.error('Failed to create row:', error);
            }
        }
    };

    return (
        props.data !== undefined && props.data.length > 0
            ? props.data.map((row, index) => (
                <>
                    <StyledTableRow key={index}
                                    style={{
                                        background: 'rgba(32, 33, 36, 1)',
                                        position: 'relative',
                                    }}>
                        <StyledTableCell style={{
                            color: `${textColorLight}`,
                            borderBottom: `1px solid ${theme.color.border}`,
                        }}>
                            <img src={Edit} onClick={() => props.handleAddRowClick(row.id)} alt=''/>
                            <img src={Delete} onClick={() => props.handleDeleteRowClick(row.id)} alt=''/>
                        </StyledTableCell>
                        <StyledTableCell
                            style={{
                                color: `${textColorLight}`,
                                borderBottom: `1px solid ${theme.color.border}`
                            }}
                            onDoubleClick={() => handleRowDoubleClick(row.id)}
                        >
                            {editingRowId === row.id
                                ? (
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => {
                                            const newValue = e.currentTarget.value;
                                            handleSaveChanges(newValue)
                                        }}
                                        onKeyPress={(e) => handleCancelEditing(e, row.id)}
                                    />
                                )
                                : row.rowName
                            }
                        </StyledTableCell>
                        <StyledTableCell style={{
                            color: `${textColorLight}`,
                            borderBottom: `1px solid ${theme.color.border}`
                        }}>
                            {row.salary}
                        </StyledTableCell>
                        <StyledTableCell style={{
                            color: `${textColorLight}`,
                            borderBottom: `1px solid ${theme.color.border}`
                        }}>
                            {row.materials}
                        </StyledTableCell>
                        <StyledTableCell style={{
                            color: `${textColorLight}`,
                            borderBottom: `1px solid ${theme.color.border}`
                        }}>
                            {row.equipmentCosts}
                        </StyledTableCell>
                        <StyledTableCell style={{
                            color: `${textColorLight}`,
                            borderBottom: `1px solid ${theme.color.border}`
                        }}>
                            {row.estimatedProfit}
                        </StyledTableCell>
                    </StyledTableRow>
                    {row.child.length > 0 && row.child.map((item, index) => (
                        <ChildRow
                            key={index}
                            childRow={item}
                            handleAddRowClick={props.handleAddRowClick}
                            handleDeleteRowClick={props.handleDeleteRowClick}
                            eID={props.eID}
                            isAdding={props.isAdding}
                            handleRowAdded={props.handleRowAdded}
                            level={1}
                            handleRowDoubleClick={handleRowDoubleClick}
                            handleCancelEditing={handleCancelEditing}
                            editingRowId={editingRowId}
                            handleSaveChanges={handleSaveChanges}
                            name={name}
                        />
                    ))}
                    {props.isAdding === row.id && (
                        <RowCreate eID={props.eID} parentId={row.id} onRowCreated={props.handleRowAdded}/>

                    )}
                </>
            ))
            : <RowCreate eID={props.eID} parentId={null} onRowCreated={props.handleRowAdded}/>
    );
};
