import React from "react";

function Team(props) {
  function justDelete(event) {
    props.toDelete(props.id);
  }

  return (
    <table>
      <tr>
        <td>{props.tname}</td>
        <td>{props.product}</td>
        <td>{props.budget}</td>
        <td>{props.description}</td>
        <td>
          <button onClick={justDelete}>Delete |</button>

          <button onClick={justDelete}> Edit</button>
        </td>
      </tr>
    </table>
  );
}

export default Team;
