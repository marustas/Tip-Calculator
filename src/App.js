import { useState } from "react";
import "./App.css";

const Bill = ({ onSetBill, bill }) => {
  return (
    <div>
      <label>How much was the bil??</label>
      <input
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
        type="text"
      ></input>
    </div>
  );
};

const Total = ({ cost, bill }) => {
  return (
    <p>
      You pay ${cost} (${bill} + ${cost - bill} tip )
    </p>
  );
};

const ResetBtn = ({ onReset }) => {
  return <button onClick={(e) => onReset()}>Reset</button>;
};

const Tip = ({ children, tip, onSetTip }) => {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(event) => onSetTip(event.target.value)}>
        <option value="0">Dissatisfied 0%</option>
        <option value="5">It was okay 5%</option>
        <option value="10">It was good 10%</option>
        <option value="20">It was wonderful 20%</option>
      </select>
    </div>
  );
};

const App = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState("0");
  const [tipFriend, setTipFriend] = useState("0");

  let cost;
  cost = ((Number(tip) + Number(tipFriend)) / 200) * bill + bill;

  const handleReset = () => {
    setBill(0);
    setTip("0");
    setTipFriend("0");
  };
  return (
    <div className="App">
      <Bill bill={bill} onSetBill={setBill} />
      <Tip tip={tip} onSetTip={setTip}>
        How did you like the service?
      </Tip>
      <Tip tipFriend={tip} onSetTip={setTipFriend}>
        How did your friend like the service?
      </Tip>
      {bill > 0 ? (
        <div>
          <Total cost={cost} bill={bill} />
          <ResetBtn onReset={handleReset} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
