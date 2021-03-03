import React, { useState } from "react";

function CreateArea(props) {
  const [team, setTeam] = useState({
    tname: "",
    product: "",
    budget: 0,
    description: ""
  });

  function makechange(event) {
    const { name, value } = event.target;

    setTeam((prevTeam) => {
      return {
        ...prevTeam,
        [name]: value
      };
    });
  }

  function postTeam(event) {
    props.passTeam(team);
    event.preventDefault();
    setTeam({
      tname: "",
      product: "",
      budget: 0,
      description: ""
    });
  }

  return (
    <div>
      <form>
        <input
          name="tname"
          onChange={makechange}
          value={team.tname}
          placeholder="Team"
        />
        <input
          name="product"
          onChange={makechange}
          value={team.product}
          placeholder="Product"
        />
        <input
          name="budget"
          onChange={makechange}
          value={team.budget}
          type="number"
          placeholder="Budget"
        />
        <textarea
          name="description"
          onChange={makechange}
          value={team.description}
          placeholder="More details.. "
          rows="3"
        />
        <button onClick={postTeam}> Add Project</button>
      </form>
    </div>
  );
}

export default CreateArea;
