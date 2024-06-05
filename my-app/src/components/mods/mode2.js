import GameBase from "../GameBase";
import React from "react";


class Mode2 extends GameBase {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.state) return null;

    return (
      <div className="block">
        <div className="mode">
{/* ------------------------------------------------------------------------------------------------------------------- */}
          <table className="table2">
            <tbody>
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
{/* --------------------------------------------------------------------------------------------------------------------- */}


{/* --------------------------------------------------------------------------------------------------------------------- */}
          <table className="stats">
            <tbody>
              <tr>
                <td>
                  <p>Available clicks: </p>
                </td>
                <td>
                  <p>{this.state.availableClicks}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <span>{this.state.resultText}</span>
                </td>
              </tr>
            </tbody>
          </table>
{/* --------------------------------------------------------------------------------------------------------------------------------- */}
        </div>
      </div>
    );
  }
}

export default Mode2;
