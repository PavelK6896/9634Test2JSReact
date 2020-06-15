import React from 'react';
import {Route, Switch} from "react-router-dom";
import Test1 from "./pages/test/Test1";
import Data1 from "./pages/data/Data1";



function App() {
    return (
        <Switch>
            <Route path={'/data'} exact component={Data1}/>
            <Route path={'/test'} exact component={Test1}/>
            <Route path={''} component={Data1}/>
        </Switch>
    );
}

export default App;
