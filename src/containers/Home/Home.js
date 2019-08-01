import React from 'react';
import { connect } from 'react-redux';

import { fetchHeroes } from '../../redux/reducer/heroes/actions';

const Home = ({ fetchHeroes }) => <button onClick={() => fetchHeroes()}>carregar</button>;

const mapDispatchToProps = dispatch => ({
  fetchHeroes: () => {
    dispatch(fetchHeroes());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Home);
