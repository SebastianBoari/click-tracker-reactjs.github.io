import { useState } from "react";

const ClickTracker = () => {
  const [clicks, setClicks] = useState(0);
  const [lastClick, setLastClick] = useState(null);
  const [color, setColor] = useState("#F8F7FF");

  const clicksTracker = () => {
    setClicks(clicks + 1);
    setLastClick(new Date());
    setColor("#008DD5");
  };

  const clickReset = () =>{
    setClicks(0);
    setLastClick(null);
    setColor("#F8F7FF");
  };

  return (
    <>
      <section id="clickTrackerSection">
        <article id="clickTrackerPanel">
          <div id="panelHeader">
            <h2 id="panelHeaderTitle">Cantidad de clicks realizados</h2>
            <p id="panelHeaderNumber" style={{ color }}>{clicks}</p>
          </div>
          <div id="panelMid">
            <button className="panelMidBtn" onClick={clicksTracker}>Haz click</button>
            <button className="panelMidBtn" onClick={clickReset}>Reset</button>
          </div>
          <div id="panelBottom">
            <h3 id="panelBottomTitle">Fecha y hora del último click</h3>
            <p id="panelBottomDate" style={{ color }}>{lastClick ? `${lastClick.toLocaleDateString()} ${lastClick.toLocaleTimeString()}` : "Aún no se ha hecho un click"}</p>
          </div>
        </article>
      </section>
    </>
  );
};

export default ClickTracker;

