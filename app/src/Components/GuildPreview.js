import React from 'react'
import {Link} from 'react-router-dom'

export default class GuildPreview extends React.Component {
  render() {
    return (
      <div className='row'>
      {this.props.guild ? <div>
          <table>
            <thead className='table-fill'>
              <tr>
                <th className='text-left'>Character</th>
                <th className='text-left'>Achievement Points</th>
                <th>Avatar</th>
              </tr>
            </thead>
            <tbody className='table-hover'>
                {this.props.guild.map((data) => {
                  return (
                    <tr key={data.character.name}>
                      <td className='text-left' key={data.character.name}>
                        {data.character.name}
                      </td>
                      <td className='text-left' key={data.character.achievementPoints}>
                        {data.character.achievementPoints}
                      </td>
                      <td className='text-left' key={data.character.thumbnail}>
                        <img className='smallavatar'
                          src={`http://render-us.worldofwarcraft.com/character/${data.character.thumbnail}`}
                          alt={data.character.name}></img>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      : <p className='active text'>Enter a Guild Name and Realm</p>}
    </div>
    )
  }
}
