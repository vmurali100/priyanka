import React, { useState, useEffect } from "react";
import axios from "axios";
import Progress from "./Progress";

const Progressbar = () => {
  const [bars, setbars] = useState([]);
  const [buttons, setbuttons] = useState([]);
  const [selectedBar, setselectedBar] = useState(0);
  const [limit, setlimit] = useState(100);

  useEffect(() => {
    console.log("object");
    getBarsFromApi();
  }, []);

  const getBarsFromApi = () => {
    axios.get("http://pb-api.herokuapp.com/bars").then((response) => {
      console.log(response);
      setbuttons(response.data.buttons);
      setbars(response.data.bars);
      setlimit(response.data.limit);
    });
  };

  const handleClick = (btnValue) => {
    console.log(btnValue);
    const allBarValues = [...bars];
    let val = allBarValues[selectedBar] + btnValue;
    if (val <= 0) {
      val = 0;
    }
    allBarValues[selectedBar] = val;
    setbars(allBarValues);
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm item">One of three columns</div>
        <div class="col-sm item">
          <div className="bars">
            {bars.map((bar) => {
              return <Progress bar={bar} />;
            })}
          </div>
          <ul>
            <li>
              <select name="" id="">
                {bars.map((bar, i) => {
                  return <option>Progress Bar #{i + 1}</option>;
                })}
              </select>
            </li>
            {buttons.map((btn) => {
              return (
                <li>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => {
                      handleClick(btn);
                    }}
                  >
                    {btn}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div class="col-sm item">One of three columns</div>
      </div>
    </div>
  );
};

export default Progressbar;
