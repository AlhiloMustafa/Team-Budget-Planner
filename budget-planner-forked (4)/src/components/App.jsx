import React, { useState } from "react";
import Header from "./Header";

import Team from "./Team";
import CreateArea from "./CreateArea";
import Table from "./Table";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [teams, setTeams] = useState([]);

  function justDelete(id) {
    setTeams((prevTeams) => {
      return prevTeams.filter((someteam, index) => {
        return index !== id;
      });
    });
  }

  function addTeam(newteam) {
    setTeams((prevTeams) => {
      return [...prevTeams, newteam];
    });
  }

  return (
    <div>
      <Header />

      <CreateArea passTeam={addTeam} />
      <Table />
      {teams.map((oneTeam, index) => {
        return (
          <Team
            tname={oneTeam.tname}
            product={oneTeam.product}
            budget={oneTeam.budget}
            description={oneTeam.description}
            toDelete={justDelete}
            key={index}
            id={index}
          />
        );
      })}
    </div>
  );
}

export default App;
