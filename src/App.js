import { useState } from "react";
import "./App.css";

const Bill = ({ onSetBill }) => {
  return (
    <div>
      <p>How much was the bil??</p>
      <input
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

const ResetBtn = ({ onSetBill, onSetTip, onSetTipFriend }) => {
  const reset = () => {
    onSetBill(0);
    onSetTip("0");
    onSetTipFriend("0");
  };
  return <button onClick={(e) => reset()}>Reset</button>;
};

const Tip = ({ tip, onSetTip }) => {
  return (
    <div>
      <p>How did you like the service?</p>
      <select value={tip} onChange={(event) => onSetTip(event.target.value)}>
        <option value="0">Dissatisfied 0%</option>
        <option value="5">It was okay 5%</option>
        <option value="10">It was good 10%</option>
        <option value="20">It was wonderful 20%</option>
      </select>
    </div>
  );
};
const TipFriend = ({ tipFriend, onSetTipFriend }) => {
  return (
    <div>
      <p>How did your friend like the service?</p>
      <select
        value={tipFriend}
        onChange={(event) => onSetTipFriend(event.target.value)}
      >
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
  return (
    <div className="App">
      <Bill onSetBill={setBill} />
      <Tip tip={tip} onSetTip={setTip} />
      <TipFriend tipFriend={tipFriend} onSetTipFriend={setTipFriend} />
      <Total cost={cost} bill={bill} />
      <ResetBtn
        onSetBill={setBill}
        onSetTip={setTip}
        onSetTipFriend={setTipFriend}
      />
    </div>
  );
};

export default App;
