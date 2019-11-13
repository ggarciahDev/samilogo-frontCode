import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  handleChange = e => {   //Este método cambia el state actual
    const query = e.target.value
    this.setState({ query })
  }

  handleSubmit = e => {   //Este método realiza una acción cuando se presiona el botón

  }

  render() {
    return (
      <form className="Search form-inline" onSubmit={ this.handleSubmit }>
        <label className="sr-only">Name</label>
        <input 
          type="text" 
          className="Search-input form-control mb-2 mr-sm-2"
          placeholder="Ej: Camisa azul"
          value={ this.state.value }
          onChange={ this.handleChange }
        />
        <button type="submit" className="btn btn-primary mb-2">Buscar</button>
      </form>    
    )
  }
}

export default Search;
