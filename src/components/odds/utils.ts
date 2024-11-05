import { SetStateAction, Dispatch } from "react"
import { IOddItem, IOddsData } from "../../interface"

export const handleTotalStakeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setOdds: Dispatch<SetStateAction<IOddsData>>,
    setIsValidForm: Dispatch<SetStateAction<boolean>>,
    isValidForm: boolean) => {

    if (!isNaN(parseFloat(e.target.value)) && parseFloat(e.target.value) > 0) {
        if (!isValidForm) {
            setIsValidForm(true)
        }
        return setOdds(state => ({ ...state, totalStake: parseFloat(e.target.value) }))
    }
    if (isValidForm) {
        setIsValidForm(false)
    }
    return "something went wrong"
    // we can use some module to show notification 
}

export const handleChangeOddValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    odds: IOddsData,
    setOdds: Dispatch<SetStateAction<IOddsData>>,
    setIsValidForm: Dispatch<SetStateAction<boolean>>,
    isValidForm: boolean
) => {

    let hasError = false
    const updatedOdds = odds.allOdds.map((odd) => {
        if (odd.id === parseInt(e.target.name)) {
            if (!parseFloat(e.target.value) || parseFloat(e.target.value) <= 0) {
                hasError = true
                return odd
            }
            return ({
                ...odd,
                odd: parseFloat(e.target.value)
            })
        }
        return odd
    })
    if (!hasError) {
        if (!isValidForm) {
            setIsValidForm(true)
        }
        return setOdds(state => ({ ...state, allOdds: updatedOdds }))
    }
    if (isValidForm) {
        setIsValidForm(false)
    }
    return "something went wrong"
    // we can use some module to show notification 
}