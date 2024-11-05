import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { modifyCombinationsData } from "../../utils";

interface CalculatorProps {

}

const Calculator: FunctionComponent<CalculatorProps> = () => {
    const headerFields = ["Combinations", "Odds", "Winnings"]
    const combinations = useSelector((state: RootState) => state.calculator.combinations)
    const totalStake = useSelector((state: RootState) => state.calculator.totalStake)
    const allOdds = useSelector((state: RootState) => state.calculator.allOdds)
    const combinationsData = modifyCombinationsData(combinations, totalStake, allOdds.length)
    return (
        <div className="mt-6">
            <div className="mb-5">
                <h1 className="text-[#409a1a]">
                    System Bets Calculator
                </h1>
            </div>
            <div>
                <table className="w-full">
                    <tr>
                        {["", ...headerFields].map((header, index) => {
                            return (
                                <th key={index} className="text-center">{header}</th>
                            )
                        })}
                    </tr>
                    {
                        combinationsData.map((combination) => {
                            return (
                                <tr key={combination.id}>
                                    <td className="text-center">{combination.id + 1}</td>
                                    <td className="flex justify-between">
                                        {
                                            combination.combinations.map((elem, index) => {
                                                return (
                                                    <p
                                                        key={elem.id}
                                                        className={`w-[50%] text-center border-white ${index !== 0 ? "border-l-2" : ""}`}
                                                        style={{
                                                            color: elem.status === "Incorrect" ? "red" : elem.status === "Void" ? "yellow" : "white"
                                                        }}
                                                    >{(elem.odd).toFixed(2)}</p>
                                                )
                                            })
                                        }
                                    </td>
                                    <td className="text-center">{combination.odds}</td>
                                    <td className="text-center">{(combination.winning).toFixed(2)}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    );
}

export default Calculator;