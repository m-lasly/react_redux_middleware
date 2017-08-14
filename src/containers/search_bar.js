import React, {Component} from 'react';
import {connect}  from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

 class SerachBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.onChangeInput=this.onChangeInput.bind(this);
    this.onFormSubmit=this.onFormSubmit.bind(this);
  }

  onChangeInput(event) {
    //console.log(event.target.value);
    this.setState({term:event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    //we nned to go to fetch weather data
    this.props.fetchWeather(this.state.term);
      this.setState({term:''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input placeholder="get forcast for 5 days for cities" className="form-control" value={this.state.term} onChange={this.onChangeInput}/>
        <span className="input-group-btn">

          <button type="submit" className="btn btn-secondary">
            Search</button>
        </span>
      </form>
    );
  }

}
function mapDispatchToProps(dispatch) {
  //Whanever selectBook is called , the result should be passed to all of our reducers

  return bindActionCreators({fetchWeather},dispatch );

}
export default connect(null,mapDispatchToProps)(SerachBar);
