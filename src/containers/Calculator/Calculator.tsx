import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";
import {addNumber, checkResult, clearResult, removeNumber,} from "./calculatorSlice.ts";


const Calculator = () => {
    const buttonNumber = ['1','2','3','4','5','6','7','8','9'];
    const {value, result} = useSelector((state: RootState) => state.calculator);
    const dispatch = useDispatch();


    return (
        <div style={{width: '300px'}}>
            <div style={{background: "#eee", borderRadius: '5px', marginBottom: '10px', padding: '5px'}}>
                {result ? result : (value ? value : '0')}
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px'}}>
                {buttonNumber.map((item) => (
                    <button key={item} onClick={() => dispatch(addNumber((item)))}>
                        {item}
                    </button>
                ))}
                <button onClick={() => dispatch(addNumber('+'))}>+</button>
                <button onClick={() => dispatch(addNumber(0))}>{0}</button>
                <button onClick={() => dispatch(addNumber('*'))}>{'*'}</button>
                <button onClick={() => dispatch(addNumber('-'))}>{'-'}</button>
                <button onClick={() => dispatch(checkResult())}>=</button>
                <button onClick={() => dispatch(removeNumber())}>←</button>
                <button onClick={() => dispatch(addNumber('/'))}>{'/'}</button>
                <button onClick={() => dispatch(clearResult())}>C</button>
            </div>
        </div>
    );
};

export default Calculator;


