import React from "react";

const scores = {
  john: {
    level1: 95,
    level2: 85,
    level3: 90,
    level4: 80,
  },
  sarah: {
    level1: 80,
    level2: 90,
    level3: 85,
    level4: 95,
  },
  mary: {
    level1: 70,
    level2: 75,
    level3: 80,
    level4: 90,
  },
};

export const Scoreboard = () => {
  const totalScore = (student) => {
    return (
      student.level1 +
      student.level2 +
      student.level3 +
      student.level4
    );
  };

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-left">Student Name</th>
          <th className="py-3 px-6 text-center">Level 1</th>
          <th className="py-3 px-6 text-center">Level 2</th>
          <th className="py-3 px-6 text-center">Level 3</th>
          <th className="py-3 px-6 text-center">Level 4</th>
          <th className="py-3 px-6 text-center">Total</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        {Object.keys(scores).map((name) => (
          <tr key={name}>
            <td className="py-3 px-6 text-left whitespace-nowrap">
              {name}
            </td>
            <td className="py-3 px-6 text-center">
              {scores[name].level1}
            </td>
            <td className="py-3 px-6 text-center">
              {scores[name].level2}
            </td>
            <td className="py-3 px-6 text-center">
              {scores[name].level3}
            </td>
            <td className="py-3 px-6 text-center">
              {scores[name].level4}
            </td>
            <td className="py-3 px-6 text-center">
              {totalScore(scores[name])}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

