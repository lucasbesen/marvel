import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getHero } from '../../redux/reducer/heroes/actions';

class Hero extends Component {
  componentDidMount() {
    this.props.getHero(this.props.match.params.id);
  }
  render() {
    const { hero, classes } = this.props;

    console.log('xxx', this.props);
    return <div>oioi</div>;
  }
}

const mapStateToProps = state => ({
  hero: state.heroes.hero,
});

const mapDispatchToProps = dispatch => ({
  getHero: id => {
    dispatch(getHero(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hero);
