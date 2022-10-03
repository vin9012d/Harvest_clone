import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import counter from "../module.css/Counter.module.css"

  
    const timeconvert = (tm) => {
      const minute = Math.floor(tm / 60);
      const hour = Math.floor(minute / 60);
      const remain_minute = minute % 60;
      return hour + ":" + remain_minute;
    };
    const timeConverttToSecond = (tm) => {
      var check = tm.includes(":");

      if (check) {
        var arr = tm.split(":");
        let hour = +arr[0] * 60 * 60;
        let minute = +arr[1] * 60;
        console.log(arr);
        return hour + minute;
      } else {
        var hour = +tm * 60 * 60;
        return hour;
      }
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
      console.log(obj[key]) 
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
           console.log(obj[key]);
           if (obj[key].id === id) {
             tempweek[day][key].time = vinod;
             setweek(() => tempweek);
           }
         }
    }
    if (state === true) {
      setTimeout(() => {
        setVinod((vinod) => vinod + 1);
      }, 10);
    }
  }, [vinod, state]);

  return (
    //     <div>
    //   {vinod}
    //       {isClockRunning?<button onClick={handleStop}>Stop</button>: <button onClick={handleStatus}>Start</button>}

    //     </div>
    <>
      {clock}
      {/* {isClockRunning ? (
        <button
          onClick={handleStop}
          className={time.time_firstdiv_right_data_right_button}
        >
          <div className={time.clock}></div>
          <p>Stop</p>
        </button>
      ) : (
        <Button backgroundColor={"black"} color="white" onClick={handleStatus}>
          Start
        </Button>
      )} */}
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
