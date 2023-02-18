import { useEffect, useState } from "react";
import Area from "./components/Area/Area";
import { prepareGroups } from "./components/dataHelpers";
import "./App.scss";

function App() {
  const [showAreas, setShowAreas] = useState(false);
  const [availableAreas, setAvailableAreas] = useState({});

  useEffect(() => {
    prepareGroups().then((result) => {
      setAvailableAreas(result);
      setShowAreas(true);
    });
  }, []);

  return (
    <div className="bend-app">
      <div className="areas-container">
        {showAreas &&
          availableAreas.map((area) => {
            return (
              <Area key={area.areaId} name={area.name} members={area.members} />
            );
          })}
      </div>
    </div>
  );
}

export default App;
