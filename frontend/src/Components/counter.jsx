import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import counter from "../module.css/Counter.module.css"

  
    const timeconvert = (tm) => {
      console.log(tm)
      const hour = Math.floor(tm / 60);
      const remain_minute = tm % 60;
      return hour + ":" + remain_minute;
    };
   

export const Counter = ({day,id, time, setisClockRunning, isClockRunning,setweek,week }) => {
  const [vinod, setVinod] = useState(time);
  var clock = timeconvert(vinod);
  const [state, setState] = useState(false);
  const handleStatus = () => {
    setState(() => !state);
  };




  const handleStop = () => {
    var tempweek=week
    setState(() => !state);
    var obj = tempweek[day];
    // console.log(typeof())
    for (var key in obj) {
      if(obj[key].id===id){

        tempweek[day][key].time = vinod;
        setweek(()=>tempweek)
      }
    }
  };
  useEffect(() => {
    if(vinod%1000===0){
        var tempweek = week;
         var obj = tempweek[day];
         // console.log(typeof())
         for (var key in obj) {
           if (obj[key].id === id) {
             tempweek[day][key].time = vinod;
             setweek(() => tempweek);
           }
         }
    }

    if (state === true) {
      setTimeout(() => {
        setVinod((vinod) => vinod + 1);
      }, 1000);
    }
  }, [vinod, state]);

  return (
    //     <div>
    //   {vinod}
    //       {isClockRunning?<button onClick={handleStop}>Stop</button>: <button onClick={handleStatus}>Start</button>}

    //     </div>
    <>
      {clock}
      {state ? (
        <button
          onClick={handleStop}
          className={counter.time_firstdiv_right_data_right_button}
        >
          <div className={counter.clock}></div>
          <p>Stop</p>
        </button>
      ) : (
        <Button backgroundColor={"black"} color="white" onClick={handleStatus}>
          Start
        </Button>
      )}
    </>
  );
};
