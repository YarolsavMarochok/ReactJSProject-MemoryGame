import { useState } from "react";
import "./styleForSelectModes.css";
import GameBase from "./GameBase";

class Mode1 extends GameBase {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.state) return null;

    return (
      <div className="block">
        <div className="mode">
          <table>
            <tbody>
              <tr>
                <td colSpan={2}><p id="result">Game in proces</p></td>
              </tr>
              <tr>
                <td>
                  <p>1 X 4</p>
                </td>
                <td>
                  <button onClick={this.restartGame}>RELOAD</button>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  {this.arrayOfNumbers.map((cardId) =>
                    this.getCardHtml(cardId)
                  )}
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <td>
                  <p>Hello, this is stats</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Available clicks: </p>
                </td>
                <td>
                  <p>{this.state.availableClicks}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Mode1;
