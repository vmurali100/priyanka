import React, { useState, useEffect } from "react";
import axios from "axios";

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
  return (
    <div>
      {bars.map((bar) => {
        return <div className="bar"></div>;
      })}

      {/* {buttons} */}

      {/* {select} */}
    </div>
  );
};

export default Progressbar;
