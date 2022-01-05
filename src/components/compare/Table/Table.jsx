import React from "react";
import "./table.css";

export const Table = ({ year, crime, stateOne, stateTwo }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <span className="item">Crime category:</span>
            </td>
            <td>
              <span> {crime}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span className="item">First State:</span>
            </td>
            <td>
              <span> {stateOne}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span className="item">Second State:</span>
            </td>
            <td>
              <span>{stateTwo}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span className="item">Year:</span>
            </td>
            <td>
              <span>{year}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
