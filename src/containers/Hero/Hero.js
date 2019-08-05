import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import type { History } from 'history';

import { getHero } from '../../redux/reducer/heroes/actions';
import { Content, NoData } from '../../components/common';
import HeroForm from '../../components/hero/HeroForm';

import type { Hero as HeroType } from '../../types/Hero';
import type { State } from '../../types/State';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  overflow-y: auto;
  padding-top: 20px;
`;

type Props = {
  hero: HeroType,
  history: History,
  getHero: (id: string) => void,
};

class Hero extends React.Component<Props> {
  componentDidMount() {
    this.props.getHero(this.props.match.params.id);
  }

  render(): React.Node {
    const { hero, history } = this.props;

    if (!Object.keys(hero).length) {
      return (
        <Content>
          <NoData />
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

const mapStateToProps = (state: State): State => ({
  hero: state.heroes.hero,
});

const mapDispatchToProps = dispatch => ({
  getHero: (id: string) => {
    dispatch(getHero(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hero);
