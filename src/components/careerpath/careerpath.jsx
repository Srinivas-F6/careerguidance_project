import React, { useState } from "react";
import { Aftertenth } from "./Aftertenth";
import { Aftertwelve } from "./Aftertwelve";
import { Destionation } from "./destination";
import data from './careerguaid_data.json';


function CareerPath() {
  const [aftertenth, setAfterTenth] = useState(null);
  const [aftertwelve, setAfterTwelve] = useState(null);
  const [destination, setDestination] = useState(null);


  const handleAfterTenth = (tenth) => {
    setAfterTenth(tenth);
  };

  const handleAfterTwelve = (twelve) => {
    setAfterTwelve(twelve);
  };

  return (
    <>
      {!aftertenth && (
        <Aftertenth
          afterTenth={data.paths_after_10th}
          onClickExplore={handleAfterTenth}
        />
      )}
      {
        aftertenth && !aftertwelve && (
          <Aftertwelve
            afterTwelve={aftertenth}
            onClickExplore={handleAfterTwelve}
            onClickReset={() => { setAfterTenth(null) }}
          />
        )
      }
      {
        aftertwelve && !destination && (
          <Destionation
            dest={aftertwelve}
            onClickReset={() => { setAfterTwelve(null) }}
          />
        )
      }
    </>
  );
}

export default CareerPath;
