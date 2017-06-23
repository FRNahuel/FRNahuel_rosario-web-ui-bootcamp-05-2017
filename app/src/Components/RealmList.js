import React from 'react'
import Realm from './Realm'

const battlegroups= ['Bloodlust','Vengeance','AU/NZ Battle Group',
'Rampage','Cyclone','Shadowburn','Ruin','Vindication','Reckoning']

export default class RealmList extends React.Component {
  render() {
    return (
      <div>
        <h1 className='text'> Realms </h1>
        {battlegroups.map((bg) => {
          return (
            <div key={bg} className='titlelist'>
              <p className="title">Battlegroup: {bg}</p>
              <Realm bg={bg}/>
          </div>
          )
        })}
      </div>
    )
  }
}
