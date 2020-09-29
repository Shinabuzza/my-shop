import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { setGuitars } from './actions/guitars';
import logo from './logo.jpg';
import ru from './ru.jpg';
import us from './us.jpg';
import guitars from './reducers/guitars';

class App extends Component {
  render() {
    const { guitars } = this.props.guitars;
    const { setGuitars } = this.props;
    const newGuitars = [
      {
        id: 0,
        title: 'Shopping Cart'
      }
    ];
    return (
      <div className="Containter">

        <header className="App-header">
          <p>
            <img src={logo} className="App-logo" alt="logo" />
          </p>
          <div className="Langs">
            <img src={ru} className="Ru-lang" alt="ru" />
            <img src={us} className="Us-lang" alt="us" />
          </div>
        </header>
      </div>

    );
  }
}
const mapStateToProps = state => ({
  guitars: guitars.guitars,
  ...state
});
const mapDispatchToProps = dispatch => ({
  setGuitars: guitars => dispatch(setGuitars(guitars))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
