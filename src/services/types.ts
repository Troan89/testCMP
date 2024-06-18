export type ListRow = Child[];
export type Child = {
	child:[];
	equipmentCosts: number;
	estimatedProfit: number;
	id: number;
	machineOperatorSalary: number;
	mainCosts: number;
	materials: number;
	mimExploitation: number;
	overheads: number;
	rowName: string;
	salary: number
	supportCosts: number
	total: number
}

export type GetListRowId = {
	eID: number | undefined
}

export type DeleteRow = {
	eID: number | undefined
	rID: number | null
}

export type CreateUpdateRowList = {
	eID: number,
	equipmentCosts: number,
	estimatedProfit: number,
	machineOperatorSalary: number,
	mainCosts: number,
	materials: number,
	mimExploitation: number,
	overheads: number,
	parentId: number | null,
	rowName: string,
	salary: number,
	supportCosts: number
}

export type UpdateData = {
	equipmentCosts: number;
	estimatedProfit: number;
	machineOperatorSalary: number;
	mainCosts: number;
	materials: number;
	mimExploitation: number;
	overheads: number;
	rowName: string;
	salary: number;
	supportCosts: number;
}