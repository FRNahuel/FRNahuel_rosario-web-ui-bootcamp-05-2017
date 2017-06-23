import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Nav from './Components/Nav'
import RealmList from './Components/RealmList'
import User from './Components/User'
import Guild from './Components/Guild'
import Top from './Components/Top'


export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Nav />
          <Route exact path='/RealmList' component={RealmList} />
          <Route path='/User' component={User} />
          <Route path='/Guild' component={Guild} />
          <Route path='/Top' component={Top} />
        </div>
      </BrowserRouter>
    );

  }
}
