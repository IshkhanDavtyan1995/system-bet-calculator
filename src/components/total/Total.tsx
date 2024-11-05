import { FunctionComponent } from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { getWinningSum } from "../../utils";

interface TotalProps {

}

const Total: FunctionComponent<TotalProps> = () => {

    const combinations = useSelector((state: RootState) => state.calculator.combinations)
    const totalStake = useSelector((state: RootState) => state.calculator.totalStake)
    const allOdds = useSelector((state: RootState) => state.calculator.allOdds)

    return (
        <div className="mt-6">
            <div>
                <p>
                    Winnings: {getWinningSum(combinations, totalStake, allOdds.length).toFixed(2)}
                </p>
            </div>
            <div>
                <p>
                    Stake: {(totalStake).toFixed(2)}
                </p>
            </div>
            <div>
                <p>
                    Stake per combination: {(totalStake / allOdds.length).toFixed(2)}
                </p>
            </div>
        </div>
    );
}

export default Total;