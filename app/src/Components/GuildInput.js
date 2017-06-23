import React from 'react'
import Api from '../Utils/Api'
import GuildPreview from './GuildPreview.js'

export default class GuildInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guildName: '',
      realm: '',
      guild: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange(event) {
    this.setState({
      guildName: event.target.value,
    });
  }

  handleChange2(event) {
    this.setState({
      realm: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    Api.fetchWowGuild(this.state.realm,this.state.guildName)
      .then((response) => {
      this.setState({guild: response.data.members})
      console.log(this.state.guild)
      })


  }

  render() {
    return (
      <div>
        <div className='row'>
          <form className='column' onSubmit={this.handleSubmit}>
            <label>
              Guild Name:
              <input type="text" value={this.state.guildName} onChange={this.handleChange} />
            </label>
            <label>
              Realm:
              <input type='text' value={this.state.realm} onChange={this.handleChange2} />
            </label>
            <input className='button' type="submit" value="Submit" />
          </form>
        </div>
        <GuildPreview guild={this.state.guild}/>
      </div>
    );
  }
}
