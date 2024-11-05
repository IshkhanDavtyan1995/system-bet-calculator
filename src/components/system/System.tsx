import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getListOfSystem } from "../../utils";
import { setOddsCountAndCombinationOddsCount } from "../../store/calculatorSlice";
import { MAX_ODDS_COUNT } from "../../constants";

interface SystemProps {

}

const System: FunctionComponent<SystemProps> = () => {
    const oddsCount = useSelector((state: RootState) => state.calculator.oddsCount)
    const combinationOddsCount = useSelector((state: RootState) => state.calculator.combinationOddsCount)
    const combinations = useSelector((state: RootState) => state.calculator.combinations)
    const dispatch = useDispatch()
    const systemList = getListOfSystem(MAX_ODDS_COUNT)
    const handleSystemSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const [combinationOddsCount, oddsCount] = e.target.value.split(",")
        if (oddsCount && combinationOddsCount) {
            dispatch(setOddsCountAndCombinationOddsCount([parseInt(combinationOddsCount), parseInt(oddsCount)]))
        } else {
            return "something went wrong";
        }
    }

    return (
        <div className="mr-2">
            <div className="flex rounded-3xl mb-4 bg-[#252525] p-4">
                <div className="mr-7">
                    <p>System</p>
                </div>
                <div>
                    <select name="system" onChange={handleSystemSelect} className="rounded-md cursor-pointer">
                        {
                            systemList.map((elem, index) => {
                                return (
                                    <option value={elem.toLocaleString()} key={index}>{elem[0]} from {elem[1]}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="rounded-3xl bg-[#252525] p-4">
                <p>A system {combinationOddsCount} from {oddsCount} contains {combinations.length} combinations</p>
            </div>
        </div>
    );
}

export default System;