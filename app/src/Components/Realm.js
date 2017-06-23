import React from 'react'
import Api from '../Utils/Api'

export default class Realm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      realms: []
    }
  }
  componentDidMount (){
    Api.fetchWowRealm()
      .then((realm)=>{
        const realms = realm.data.realms
        this.setState({realms})

     })
  }
  render (){
      let realmfilter = this.state.realms.filter((realm) => {
      return this.props.bg === realm.battlegroup
      })
      return(
       <ul>
         {realmfilter.map(realm =>
           <li key={realm.name}>
             <p>{realm.name}
               <span
               className={"status " + (realm.status
                 ? 'on'
                 : 'off')}>
               {realm.status
                 ? ' Online'
                 : ' Offline'}
               </span>
             </p>
           </li>
         )}
       </ul>
    )
  }
}
