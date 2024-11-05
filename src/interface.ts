export type Status = "Correct" | "Incorrect" | "Void"

export interface IOddItem {
    id: number,
    odd: number,
    status: Status
}

export interface IModifiedCombination {
    id: number,
    combinations: IOddItem[],
    odds: number,
    winning: number
}

export interface IOddsData {
    totalStake: number,
    allOdds: IOddItem[]
}