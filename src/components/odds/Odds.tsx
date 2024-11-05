import { FunctionComponent, memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { STATUSES } from "../../constants";
import { setAllOdds, setTotalStake } from "../../store/calculatorSlice";
import { handleChangeOddValue, handleTotalStakeChange } from "./utils";

interface OddsProps {

}

const Odds: FunctionComponent<OddsProps> = () => {
    const allOdds = useSelector((state: RootState) => state.calculator.allOdds)
    const totalStake = useSelector((state: RootState) => state.calculator.totalStake)
    const oddsCount = useSelector((state: RootState) => state.calculator.oddsCount)
    const combinationOddsCount = useSelector((state: RootState) => state.calculator.combinationOddsCount)
    const [isValidForm, setIsValidForm] = useState(true)

    const dispatch = useDispatch()

    const [odds, setOdds] = useState({
        totalStake,
        allOdds
    })

    useEffect(() => {
        setOdds({
            totalStake,
            allOdds
        })
    }, [allOdds, totalStake])

    const handleStatusSelect = (e: any) => {
        const updatedOdds = odds.allOdds.map((odd) => {
            if (odd.id === parseInt(e.target.name)) {
                return ({
                    ...odd,
                    status: e.target.value
                })
            }
            return odd
        })
        setOdds(state => ({ ...state, allOdds: updatedOdds }))
    }

    const handleComputeClick = () => {
        dispatch(setAllOdds(odds.allOdds))
        dispatch(setTotalStake(odds.totalStake))
    }

    return (
        <div className="bg-[#252525] w-full px-4 py-8 rounded-3xl">
            <div className="flex justify-between">
                <div>
                    <p>
                        Total Stake
                    </p>
                </div>
                <div>
                    <input defaultValue={totalStake} onChange={(e) => handleTotalStakeChange(e, setOdds, setIsValidForm,isValidForm)} />
                </div>
                <div>
                    <p>EUR</p>
                </div>
            </div>
            <div className="mt-8">
                <div className="flex justify-end mb-4 w-full">
                    <div className="flex justify-between  w-40">
                        {Object.values(STATUSES).map((status) => {
                            return (
                                <div>
                                    <p style={{
                                        color: status === "Incorrect" ? "red" : status === "Void" ? "yellow" : "white"
                                    }}>{status}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {
                    allOdds.map((elem) => {
                        return (
                            <div key={`${elem.id}-${oddsCount}-${combinationOddsCount}`} className="flex justify-between mb-4">
                                <div>
                                    <p>Odds {elem.id}</p>
                                </div>
                                <div>
                                    <input type="number" defaultValue={elem.odd.toFixed(2)} onChange={(e) => handleChangeOddValue(e, odds, setAllOdds, setIsValidForm,isValidForm)} name={`${elem.id}`} pattern="[0-9]*[.,]?[0-9]*" />
                                </div>
                                <div className="flex justify-between max-w-36 w-full">
                                    {
                                        Object.values(STATUSES).map((status, index) => {
                                            return (
                                                <div key={`${index}-${oddsCount}-${combinationOddsCount}`}>
                                                    <input type="radio" defaultChecked={elem.status === status} name={`${elem.id}`} value={status} onChange={handleStatusSelect} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-center">
                <button disabled={!isValidForm} onClick={handleComputeClick} className="bg-[#181818] hover:bg-[#363636] px-2 py-1 rounded-lg">Compute</button>
            </div>
        </div>
    );
}

export default Odds;