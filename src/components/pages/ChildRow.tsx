import {theme} from "../../styles/Theme.styled.tsx";
import {Child} from "../../services/types.ts";
import Edit from "../../assets/Edit.svg";
import Delete from "../../assets/Delete.svg";
import RowCreate from "../RowCreate.tsx";
import {LineContainer, StyledTableCell, StyledTableRow, textColorLight} from "./CMP.styled.ts";
import React from "react";

type Props = {
    childRow: Child
    handleAddRowClick: (id: number) => void
    handleDeleteRowClick: (id: number) => void
    eID: number
    isAdding: number | null
    handleRowAdded: (newRow: any) => void
    level: number
    handleRowDoubleClick: (id:number) => void
    handleCancelEditing: (e: React.KeyboardEvent, id: number) => void
    editingRowId: number | null
    handleSaveChanges: (newValue: string) => void
    name: string
}

export const ChildRow = (props: Props) => {
    return (
        <>
            <StyledTableRow>
                <StyledTableCell
                    style={{borderBottom: `1px solid ${theme.color.border}`}}>
                    <LineContainer level={props.level}>
                        <div style={{width: '40px'}}>
                            <img src={Edit} onClick={() => props.handleAddRowClick(props.childRow.id)} alt=''/>
                            <img src={Delete} onClick={() => props.handleDeleteRowClick(props.childRow.id)} alt=''/>
                        </div>
                    </LineContainer>
                </StyledTableCell>
                <StyledTableCell style={{
                    color: `${textColorLight}`,
                    borderBottom: `1px solid ${theme.color.border}`
                }}
                                 onDoubleClick={() => props.handleRowDoubleClick(props.childRow.id)}
                >
                    {props.editingRowId === props.childRow.id
                        ? (
                            <input
                                type="text"
                                value={props.name}
                                onChange={(e) => {
                                    const newValue = e.currentTarget.value;
                                    props.handleSaveChanges(newValue)
                                }}
                                onKeyPress={(e) => props.handleCancelEditing(e,props.childRow.id)}
                            />
                        )
                        : props.childRow.rowName
                    }
                </StyledTableCell>
                <StyledTableCell style={{
                    color: `${textColorLight}`,
                    borderBottom: `1px solid ${theme.color.border}`
                }}>{props.childRow.salary}</StyledTableCell>
                <StyledTableCell style={{
                    color: `${textColorLight}`,
                    borderBottom: `1px solid ${theme.color.border}`
                }}>{props.childRow.materials}</StyledTableCell>
                <StyledTableCell style={{
                    color: `${textColorLight}`,
                    borderBottom: `1px solid ${theme.color.border}`
                }}>{props.childRow.equipmentCosts}</StyledTableCell>
                <StyledTableCell style={{
                    color: `${textColorLight}`,
                    borderBottom: `1px solid ${theme.color.border}`
                }}>{props.childRow.estimatedProfit}</StyledTableCell>
            </StyledTableRow>
            {props.childRow.child.length > 0 && props.childRow.child.map((item, index) => <ChildRow
                handleRowAdded={props.handleRowAdded} isAdding={props.isAdding} eID={props.eID}
                handleDeleteRowClick={props.handleDeleteRowClick} handleAddRowClick={props.handleAddRowClick}
                key={index} childRow={item} level={props.level + 1} editingRowId={props.editingRowId} name={props.name}
                handleCancelEditing={props.handleCancelEditing} handleSaveChanges={props.handleSaveChanges}
                handleRowDoubleClick={props.handleRowDoubleClick}/>)}
            {props.isAdding === props.childRow.id && (
                <RowCreate eID={props.eID} parentId={props.childRow.id} onRowCreated={props.handleRowAdded}/>
            )}
        </>

    );
};

