import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

import { fetchHeroes } from '../../redux/reducer/heroes/actions';
import { Loading, Content } from '../../components/common';

class Heroes extends Component {
  componentDidMount() {
    this.props.fetchHeroes();
  }

  handleChangePage = (e, offset) => {
    const { pagination, fetchHeroes } = this.props;
    fetchHeroes(pagination.limit, pagination.limit * offset);
  };

  render() {
    const { heroes, pagination, history } = this.props;

    if (!heroes.length) {
      return (
        <Content>
          <Loading />
        </Content>
      );
    }
    return (
      <>
        <Content>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {heroes.map(hero => (
                <TableRow key={hero.name}>
                  <TableCell>{hero.name}</TableCell>
                  <TableCell>{hero.description}</TableCell>
                  <TableCell>
                    <IconButton color="secondary" onClick={() => history.push(`/hero/${hero.id}`)}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={pagination.total}
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
        </Content>
      </>
    );
  }
}

const mapStateToProps = state => ({
  heroes: state.heroes.heroes || [],
  pagination: state.heroes.pagination,
});

const mapDispatchToProps = dispatch => ({
  fetchHeroes: (limit, offset) => {
    dispatch(fetchHeroes(limit, offset));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Heroes);
