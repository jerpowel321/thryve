import React from 'react';
import './style.css';
import Emoji from '../Emoji'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      protein: 0,
      fat: 0,
      carbohydrate: 0,
      sugar: 0
    };
  }

  handleInputChange = (event) => {
    // Updating State
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log("Current Update:", name, value);

  }

  render() {
    return (
      <div className="form pb-5 pt-5 mt-5" >
        <div className="form-group row">
          <label className="form-label form-label-protein col-md-6 col-6 ml-5"><Emoji symbol="🥚" label="Protein" />Protein</label>
          <input className="form-input form-input-protein col-md-2 col-2"
            type="number"
            name="protein"
            min="0"
            onChange={this.handleInputChange}
            placeholder="0"
          />
        </div>
        <div className="form-group row">
          <label className="form-label form-label-fat col-md-6 col-6 ml-5"><Emoji symbol="🥑" label="Fat" />Fat</label>
          <input className="form-input form-input-fat col-md-2 col-2"
            type="number"
            name="fat"
            min="0"
            onChange={this.handleInputChange}
            placeholder="0"
          />
        </div>
        <div className="form-group row">
          <label className="form-label form-label-carbohydrate col-md-6 col-6 ml-5"><Emoji symbol="🥔" label="Carbohydrate" />Carbohydrate</label>
          <input className="form-input form-input-carbohydrate col-md-2 col-2"
            type="number"
            name="carbohydrate"
            min="0"
            onChange={this.handleInputChange}
            placeholder="0"
          />
        </div>
        <div className="form-group row">
          <label className="form-label form-label-sugar col-md-6 col-6 ml-5"><Emoji symbol="🍬" label="Sugar" />Sugar</label>
          <input className="form-input form-input-sugar col-md-2 col-2"
            type="number"
            name="sugar"
            min="0"
            onChange={this.handleInputChange}
            placeholder="0"
          />
          <p className="ml-5 pt-2"> Amounts are displayed in grams.</p>
        </div>
        <div className="text-center">
        <button type="submit" className="btn btn-submit">Search Now</button>
        </div>
      </div>


    );
  }
}


export default Form;