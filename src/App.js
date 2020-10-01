import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { setGuitars } from './actions/guitars';
import Menu from './components/menu'
import guitars from './reducers/guitars';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import GuitarCard from './components/GuitarCard';


class App extends Component {
  componentDidMount() {
    const { setGuitars } = this.props;
    axios.get('/guitars.json').then(({ data }) => {
      setGuitars(data)
    });
  }




  render() {
    const { guitars, isReady } = this.props;
    return (
      <Container>
        <Menu />
        <ul>
          {!isReady
            ? 'Загрузка...'
            : guitars.map(guitar => <GuitarCard {...guitar} />)}</ul>
      </Container >

    );
  }
}
const mapStateToProps = state => ({
  guitars: guitars.items,
  isReady: guitars.isReady
});
const mapDispatchToProps = dispatch => ({
  setGuitars: guitars => dispatch(setGuitars(guitars))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
