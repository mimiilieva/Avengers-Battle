import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AvengersSelection from './AvengersSelection';
import BattleResults from './BattleResults';
import ListOfBattles from './ListOfBattles';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';




class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <Switch>
                <Route exact path="/" component={AvengersSelection}/>
                <Route path="/battle/:id" component={BattleResults}/>
                <Route path="/battles/" component={ListOfBattles}/>
            </Switch>
        )
    }
}


ReactDOM.render(<BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
