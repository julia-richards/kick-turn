import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import "../styles/Profile.css"


function Tabs(props) {
  return (
    <Router>
      <div>
        <h1>Tabs</h1>
        <div className='tabs'>
          <ul className='tab-header'>
            {props.tabs.map(folder => {
              return (
                <li key={folder.title}>
                  <NavLink to={`/tabs/${folder.title}`}>
                    {folder.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <Switch>
            {props.tabs.map(folder => {
              return (
                <Route path={`/tabs/${folder.title}`} key={folder.title}>
                  <div className='tab-content'>
                    {folder.content}
                  </div>
                </Route>
              );
            })}
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default Tabs;