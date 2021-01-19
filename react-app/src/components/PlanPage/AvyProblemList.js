import React from "react";
import AvyProblem from "../AvyProblem";

const AvyFriendList = ({ avyProblems }) => {
  if (!avyProblems?.length) {
    return (
      <div className="avy-problems-list avy-problems-list--no-content">
        <h2>Avalanche Problems</h2>
        <p>No problems added to this tour</p>
      </div>
    );
  }

  return (
    <div className="avy-problems-list avy-problems-list--no-content">
      <h2>Avalanche Problem{avyProblems.length > 1 && "s"}</h2>
      <ul>
        {avyProblems.map((problem) => (
          <li key={problem.id} className="avy-problems-list__item">
            <AvyProblem
              aspect_elevation={problem.aspect_elevation}
              isInteractive={false}
            />
            <div>
              <p>
                <strong>Type</strong> {problem.problem_type?.name || "N/A"}
              </p>
              <p>
                <strong>Size</strong> {problem.size || "N/A"}
              </p>
              <p>
                <strong>Likelihood</strong> {problem.likelihood || "N/A"}
              </p>
              <p>
                <strong>Weak layer</strong> {problem.weak_layer || "N/A"}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvyFriendList;
