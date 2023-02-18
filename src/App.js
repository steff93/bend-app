import { useEffect, useState } from "react";
import Area from "./components/Area/Area";
import { getJsonObject, prepareGroups } from "./components/dataHelpers";
import "./App.scss";

function App() {
  const [showAreas, setShowAreas] = useState(false);
  const [availableAreas, setAvailableAreas] = useState({});

  useEffect(() => {
    getJsonObject("/assets/areas.json").then((result) => {
      setAvailableAreas(result);
      setShowAreas(true);
    });
  }, []);

  prepareGroups();

  return (
    <div className="bend-app">
      <div className="areas-container">
        {showAreas &&
          availableAreas.map((area) => {
            return <Area key={area.areaId} name={area.name} />;
          })}
      </div>
    </div>
  );
}

export default App;
