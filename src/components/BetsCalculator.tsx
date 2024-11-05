import { FunctionComponent } from "react";
import Header from "./header/Header";
import System from "./system/System";
import Odds from "./odds/Odds";
import Total from "./total/Total";
import Calculator from "./calculator/Calculator";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface BetsCalculatorProps {

}

const BetsCalculator: FunctionComponent<BetsCalculatorProps> = () => {
    const showResult = useSelector((state: RootState) => state.calculator.showResult)
    return (
        <div className="p-10">
            <Header />
            <div className="flex mt-7">
                <System />
                <Odds />
            </div>
            {
                showResult ? <>
                    <Calculator />
                    <Total />
                </> : null
            }
        </div>
    );
}

export default BetsCalculator;