import React from 'react'
import Api from '../Utils/Api'

export default class TopList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      topPlayers: [],

    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    Api.fetchWowTop(this.state.value)
      .then((response) => {
        const topPlayers = response.data.rows.splice(0,10)
        this.setState({topPlayers: topPlayers})
        console.log(this.state.topPlayers)
      })
  }

  render() {
    return (
      <div className='row'>
        <div>
          <form className='column' onSubmit={this.handleSubmit}>
            <label>
              Top player List
              <select className='select' value={this.state.value} onChange={this.handleChange}>
                <option value="2v2">2vs2</option>
                <option value="3v3">3vs3</option>
                <option value="5v5">5vs5</option>
                <option value="rgb">rgb</option>
              </select>
            </label>
            <input className='button' type="submit" value="Submit" />
          </form>
          <div className='column'>
            <table>
              <thead className='table-fill'>
                  <tr>
                  <th className='text-left'>Ranking</th>
                  <th className='text-left'>Character</th>
                </tr>
              </thead>
              <tbody className='table-hover'>
              {this.state.topPlayers.map((player,id) => {
                return (
                    <tr>
                      <td className='text-left'>{player.ranking}</td>
                      <td className='text-left'>{player.name} </td>
                    </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
