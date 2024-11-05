import { IModifiedCombination, IOddItem, Status } from "./interface"




export const getListOfSystem = (maxOddsCount: number) => {
    const arrOfMaxOddsCount = []
    for (let i = 2; i <= maxOddsCount; i++) {
        for (let j = 2; j <= i; j++) {
            if (i !== j) {
                arrOfMaxOddsCount.push([j, i])
            }
        }
    }

    return arrOfMaxOddsCount
}

export const setCombinations = (oddsCount: number, combinationOddsCount: number) => {
    const array = Array(oddsCount).fill(0).map((_, i) => i);
    const combinations: IOddItem[][] = [];
    const combine = (index: number, current: number[]) => {
        const currentArray = current
        if (currentArray.length === combinationOddsCount) {
            combinations.push([...currentArray.map(elem => {
                return ({
                    id: elem,
                    odd: 2.00,
                    status: "Correct" as Status
                })
            })]);
            return;
        }
        for (let i = index; i < array.length; i++) {
            currentArray.push(array[i]);
            combine(i + 1, currentArray);
            currentArray.pop();
        }
    };
    combine(0, []);
    return combinations;
}

export const getAllOdds = (oddsCount: number) => {
    const array = Array(oddsCount).fill(0).map((_, i) => i);
    return array.map((elem) => ({
        id: elem,
        odd: 2.00,
        status: "Correct" as Status
    }))
}

const getCombinationOdd = (combination: IOddItem[]) => {
    return combination.find(combination => combination.status === "Incorrect") ? 0 : combination.reduce(
        (accumulator, currentValue) => {
            if (currentValue.status === "Correct") {
                return accumulator + currentValue.odd
            } else {
                return accumulator + 0
            }
        },
        0,
    )
}

export const modifyCombinationsData = (combinations: IOddItem[][], totalStake: number, oddsLength: number) => {
    const modifiedCombinations: IModifiedCombination[] = []
    combinations.forEach((combination, index) => {
        const odds = getCombinationOdd(combination)
        modifiedCombinations.push({
            id: index,
            combinations: combination,
            odds,
            winning: odds * (totalStake / oddsLength)
        })
    })
    return modifiedCombinations
}

export const getWinningSum = (combinations: IOddItem[][], totalStake: number, oddsLength: number) => {
    return combinations.reduce(
        (accumulator, currentValue) =>
            accumulator + getCombinationOdd(currentValue) * totalStake / oddsLength,
        0,
    )
}