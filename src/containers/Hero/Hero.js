import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getHero } from '../../redux/reducer/heroes/actions';
import { Loading, Content } from '../../components/common';
import HeroForm from '../../components/hero/HeroForm';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  overflow-y: auto;
  padding-top: 20px;
`;

class Hero extends Component {
  componentDidMount() {
    this.props.getHero(this.props.match.params.id);
  }
  render() {
    const { hero, history } = this.props;

    if (!Object.keys(hero).length) {
      return (
        <Content>
          <Loading />
        </Content>
      );
    }
    return (
      <Content>
        <Wrapper>
          <HeroForm hero={hero} history={history} />
        </Wrapper>
      </Content>
    );
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
