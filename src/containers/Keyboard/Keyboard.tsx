import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";
import {addPassword, checkCorrectPassword, removePassword} from "./keyboardSlice.ts";


const Keyboard = () => {
    const buttonNumber = ['1','2','3','4','5','6','7','8','9'];
    const {value, background, message} = useSelector((state: RootState) => state.keyboard);
    const dispatch = useDispatch();

    return (
        <div style={{width: '300px'}}>
            <div style={{background: background, borderRadius: '5px', marginBottom: '10px', padding: '5px'}}>
                {message ? message : (value.length === 0 ? 'Введите пароль' : value)}
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px'}}>
                {buttonNumber.map((item) => (
                    <button key={item} onClick={() => dispatch(addPassword(item))}>
                        {item}
                    </button>
                ))}
                <button onClick={() => dispatch(removePassword())}>{'>'}</button>
                <button onClick={() => dispatch(addPassword(0))}>{0}</button>
                <button onClick={() => dispatch(checkCorrectPassword())}>{'E'}</button>
            </div>
        </div>
    );
};

export default Keyboard;