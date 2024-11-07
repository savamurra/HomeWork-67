import './App.css';
import Keyboard from "./containers/Keyboard/Keyboard.tsx";
import Calculator from "./containers/Calculator/Calculator.tsx";

const App = () => (
    <div style={{display: "flex", justifyContent: "space-between", width: '700px'}}>
        <div style={{marginBottom: '50px'}}>
            Замок
            <Keyboard/>
        </div>
        <div>
            Калькулятор
            <Calculator/>
        </div>
    </div>
);

export default App;
