import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import TablePagination from '@material-ui/core/TablePagination';
import Toolbar from '@material-ui/core/Toolbar';

import type { History } from 'history';

import { fetchHeroes } from '../../redux/reducer/heroes/actions';
import { Content, NoData, Card, TextField } from '../../components/common';

import type { Pagination } from '../../types/Pagination';
import type { Hero } from '../../types/Hero';
import type { State } from '../../types/State';

const GridContainer = styled.div`
  display: grid;
  padding: 24px;
  grid-template-columns: 50% 50%;
`;

const GridColumn = styled.div`
  display: inline-grid;
  max-height: 150px;
  cursor: pointer;
  padding: 5px 5px 0px 5px;
  &:hover {
    border: 1px solid #d3d3d3;
  }
`;

type Props = {
  pagination: Pagination,
  heroes: [Hero],
  history: History,
  fetchHeroes: (limit: number, offset: number, name: string) => void,
};

class Heroes extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchHeroes();
  }

  handleChangePage = (e, offset) => {
    const { pagination, fetchHeroes } = this.props;
    fetchHeroes(pagination.limit, pagination.limit * offset);
  };

  handleSearch = (e: React.Event) => {
    const value: string = e.target.value;
    const { pagination, fetchHeroes } = this.props;
    fetchHeroes(pagination.limit, pagination.offset, value);
  };

  render() {
    const { heroes, pagination, history } = this.props;

    return (
      <>
        <Content>
          <Toolbar>
            <div>
              <TextField input={{ onBlur: this.handleSearch }} meta={{}} label="It feches on blur" />
            </div>
          </Toolbar>
          {!heroes.length ? (
            <Content>
              <NoData />
            </Content>
          ) : (
            <>
              <GridContainer>
                {heroes.map(hero => (
                  <GridColumn key={hero.id} onClick={() => history.push(`/hero/${hero.id}`)}>
                    <Card hero={hero} readOnly />
                  </GridColumn>
                ))}
              </GridContainer>
              <TablePagination
                component="div"
                count={pagination.total || 0}
                rowsPerPageOptions={[10]}
                rowsPerPage={10}
                page={pagination.offset / 10}
                backIconButtonProps={{
                  'aria-label': 'previous page',
                }}
                nextIconButtonProps={{
                  'aria-label': 'next page',
                }}
                onChangePage={this.handleChangePage}
              />
            </>
          )}
        </Content>
      </>
    );
  }
}

const mapStateToProps = (state: State) => ({
  heroes: state.heroes.heroes || [],
  pagination: state.heroes.pagination,
});

const mapDispatchToProps = dispatch => ({
  fetchHeroes: (limit: number, offset: number, name: string) => {
    dispatch(fetchHeroes(limit, offset, name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Heroes);
