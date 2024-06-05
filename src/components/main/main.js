import React from "react";
import "./main.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main>
        <table cellSpacing={'20px'} className="mainTable">
          <tbody>
            <tr>
              <td>
                <Link to="/mode1">
                  <div className="mode">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <p>1 X 4</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Link>
              </td>

              <td>
                <Link to="/mode2">
                  <div className="mode">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <p>2 X 4</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Link>
              </td>
            </tr>

            <tr>
              <td>
                <Link to="/mode3">
                  <div className="mode">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <p>3 X 4</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Link>
              </td>

              <td>
                <Link to="/mode4">
                  <div className="mode">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <p>4 X 4</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}
