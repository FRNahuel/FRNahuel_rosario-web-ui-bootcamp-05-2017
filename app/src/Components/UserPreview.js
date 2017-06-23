import React from 'react'


export default class PlayerPreview extends React.Component {

  getGender() {
    const gender = ['Male','Female']
    return (
      <span>
        {gender[this.props.char.gender]}
      </span>
      )
  }

  getFaction() {
    const faction = {
      1:'Horde',
      2:'Alliance'
    }
    return (
      <span>
        {faction[this.props.char.faction]}
      </span>
    )
  }


  getClass() {
      const classes = {
        1:'Warrior',
        2:'Paladin',
        3:'Hunter',
        4:'Rogue',
        5:'Priest',
        6:'Death Knight',
        7:'Shaman',
        8:'Mage',
        9:'Warlock',
        10:'Monk',
        11:'Druid',
        12:'Demon Hunter'
      }
      return(
        <span>
          {classes[this.props.char.class]}
        </span>
    )
  }

  getRace() {
       const races = {
         1:'Human',
         2:'Orc',
         3:'Dwarf',
         4:'Night Elf',
         5:'Undead',
         6:'Tauren',
         7:'Gnome',
         8:'Troll',
         9:'Goblin',
         10:'Blood Elf',
         11:'Draenei',
         22:'Worgen',
         24:'Neutral Pandaren',
         25:'Alliance Pandaren',
         26:'Horde Pandaren'
       }
           return(
               <span>
                 {races[this.props.char.race]}
               </span>
           )
     }

getIcon(icon,data,name) {
  return(
    <div>
    <img className='icon'
      src={`https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`}
      alt={data}
      ></img>
    <p className='iteminfo'>{data}: {name} </p>
    </div>
  )
}


  render() {

    return (
      <div>
        {this.props.char
          ? <div className='containerInfo'>
              <p className='active'>General Information</p>
              <img className='avatar'
                src={`http://render-us.worldofwarcraft.com/character/${this.props.char.thumbnail}`}
                alt={this.props.char.name}></img>
              <p><span className='active'>Character Name: </span>{this.props.char.name}</p>
              <p><span className='active'>Realm: </span>{this.props.char.realm}</p>
              <p><span className='active'>Race: </span>{this.getRace()}</p>
              <p><span className='active'>Class: </span>{this.getClass()}</p>
              <p><span className='active'>Gender: </span>{this.getGender()}</p>
              <p><span className='active'>Faction: </span>{this.getFaction()}</p>
              <p><span className='active'>Achievement Points: </span>{this.props.char.achievementPoints}</p>
            </div>
          :<p className='text active'> Enter a character name and realm</p>}
        {this.props.item
          ?<div className='containerIcon'>
            <p className='active'>Item Information</p>
            <p>Average item Level: {this.props.item.items.averageItemLevel}</p>
            <div className='containerIcon'>
              {this.getIcon(this.props.item.items.head.icon,
                'Head',
                this.props.item.items.head.name)}
              {this.getIcon(this.props.item.items.neck.icon,
                'Neck')}
              {this.getIcon(this.props.item.items.shoulder.icon,
                'Shoulder')}
              {this.getIcon(this.props.item.items.back.icon,
                'Back')}
              {this.getIcon(this.props.item.items.chest.icon,
                'Chest')}
              {this.getIcon(this.props.item.items.trinket1.icon,
                'Trinket 1')}
              {this.getIcon(this.props.item.items.trinket2.icon,
                'Trinket 2')}
            </div>
            <div className='containerIcon'>
              {this.getIcon(this.props.item.items.wrist.icon,
                'Wrist')}
              {this.getIcon(this.props.item.items.hands.icon,
                'Hands')}
              {this.getIcon(this.props.item.items.waist.icon,
                'Waist')}
              {this.getIcon(this.props.item.items.legs.icon,
                'Legs')}
              {this.getIcon(this.props.item.items.feet.icon,
                'Feet')}
              {this.getIcon(this.props.item.items.finger1.icon,
                'Ring')}
              {this.getIcon(this.props.item.items.finger2.icon,
                'Ring')}
                            {this.getIcon(this.props.item.items.mainHand.icon,
                'Main Hand')}
            </div>
          </div>
          :  null}
        {this.props.char
          ?<div className='containerStats'>
              <p className='active'> Character Stats</p>
              <p><span className='active'>Health: </span>{this.props.char.stats.health}</p>
              <p
                className='powerType'>
                <span className='active'>{this.props.char.stats.powerType}:</span>{' '}
                {this.props.char.stats.power}
              </p>
              <p><span className='active'>Strength: </span>{this.props.char.stats.str}</p>
              <p><span className='active'>Agility: </span>{this.props.char.stats.agi}</p>
              <p><span className='active'>Intelligence: </span>{this.props.char.stats.int}</p>
              <p><span className='active'>Stamina: </span>{this.props.char.stats.sta}</p>
            </div>
          :null}
      </div>
    )
  }
}
