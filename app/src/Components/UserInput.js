  import React from 'react'
  import Api from '../Utils/Api'
  import UserPreview from './UserPreview'

  export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        realm: '',
        character: null,
        item: null
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
    }

    handleChange(event) {
      this.setState({
        name: event.target.value,
      });
    }

    handleChange2(event) {
      this.setState({
        realm: event.target.value,
      })
    }

    handleSubmit(event) {
      event.preventDefault();
      Api.fetchWowUser(this.state.realm,this.state.name)
        .then((response) => {
        this.setState({character: response.data})
        })

      Api.fetchWowUserItem(this.state.realm,this.state.name)
      .then((response) => {
        this.setState({item: response.data})
      })


    }

    render() {
      return (
        <div>
          <div className='row'>
            <form className='column' onSubmit={this.handleSubmit}>
              <label>
                Character Name:
                <input type="text" value={this.state.name} onChange={this.handleChange} />
              </label>
              <label>
                Realm:
                <input type='text' value={this.state.realm} onChange={this.handleChange2} />
              </label>
              <input className='button' type="submit" value="Submit" />
            </form>
          </div>
        <UserPreview
          char={this.state.character}
          item={this.state.item}
        />
        </div>
      );
    }
  }
