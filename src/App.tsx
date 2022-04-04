import "./App.css";
import React from "react";
import Home from "./screen/home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const HOME = "/";
export const WEB3 = "/web3";
export const STAKING_GROUP = "/staking-group";
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path={HOME} component={Home} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
