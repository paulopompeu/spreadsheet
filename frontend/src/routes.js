import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Spreadsheet from './pages/Spreadsheet'
// import New from './pages/New'

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            {/* <Route path="/" exact component={New}/> */}
            <Route path="/:id" component={Spreadsheet}/>
        </Switch>
        
        </BrowserRouter>  
    );
}