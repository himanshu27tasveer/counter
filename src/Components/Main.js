import { useState } from "react";




function Main() {
  
    const [count, setCount] = useState("");
    const [currMax, setcurrMax] = useState(1000);
    const [currInitCount, setcurrInitCount] = useState(1);
    const [max, setMax] = useState("");
    const [initCount, setInitCount] = useState("");


    const increment = () => {
        setCount(+count < +currMax ? +count + 1 : +count);
    }

    const decrement = () => {
        setCount(+count - 1);
    }

    const editCount = (e) => {
        let newValue = +e.target.value;
        if (!isNaN(newValue)) {
            if (newValue >= currInitCount && newValue <= currMax) {
                setCount(newValue);
            }
            else {
                if (newValue < currInitCount) {
                    setcurrInitCount(newValue);
                    setCount(currInitCount);
                }
                if (newValue > currMax) {
                    setCount(currMax);
                }
            }
        }
    }

    const modifyMax = (e) => {
        let newMax = e.target.value;
        setMax(newMax);
    }

    const modifyInit = (e) => {
        let newInit = e.target.value;
        setInitCount(newInit);
    }

    const initialise = () => {
        let cnt, mx;
        if (initCount === "" || isNaN(initCount)) {
            cnt = 1;
        }
        else {
            cnt = +initCount;
        }
        if (max === "" || isNaN(max)) {
            mx = 1000;
        }
        else {
            mx = max;
        }
        if (cnt > mx) {
            cnt = 1;
            mx = 1000;
        }
        setcurrInitCount(cnt);
        setcurrMax(mx);
        setCount(cnt);
        setMax(mx);
        setInitCount(cnt);
    }

    const resetCounter = () => {
        setcurrInitCount(1);
        setcurrMax(1000);
        setCount("");
        setMax("");
        setInitCount("");
    }


  return (
    <main>
      <div id="init">
        <div>
          <label>Initialise Value: </label>
          <input
            type="text"
            placeholder="Initial Counter Value"
                      value={initCount}
                      onChange={modifyInit}
          />
        </div>
        <br />
        <div>
          <label>Max Value: </label>
          <input
            type="text"
            align="right"
            placeholder="Enter Max Value"
                      value={max}
                      onChange={modifyMax}
          />
        </div>
        <div id="btn-div">
            <button className="reinit" onClick={initialise}>
                Initialize Counter
            </button>
            <button className="reinit" onClick={resetCounter}>
                Reset Counter
            </button>
        </div>
        
      </div>
      <div id="counter">
        <button onClick={() => decrement()}>-</button>
        <span>
          <input
            type="text"
            value={count}
            onChange={(e) => editCount(e)}          
          />
        </span>
        <button onClick={() => increment()}>+</button>
      </div>
    </main>
  );
}

export default Main;