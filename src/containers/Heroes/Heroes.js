import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

import { fetchHeroes, getHero as test } from '../../redux/reducer/heroes/actions';

const StyledPaper = withStyles({
  root: {
    width: '1000px',
    maxWidth: '1000px',
    height: '500px',
    maxHeight: '500px',
    overflowY: 'auto',
  },
})(Paper);

const Heroes = ({ heroes, pagination, fetchHeroes, getHero }) => {
  const handleChangePage = (e, offset) => {
    fetchHeroes(pagination.limit, pagination.limit * offset);
  };

  return (
    <>
      <StyledPaper>
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
                  <button onClick={() => getHero(hero.id)}>visualizar</button>
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
          onChangePage={handleChangePage}
        />
      </StyledPaper>
    </>
  );
};

const mapStateToProps = state => ({
  heroes: state.heroes.heroes || [],
  pagination: state.heroes.pagination,
});

const mapDispatchToProps = dispatch => ({
  fetchHeroes: (limit, offset) => {
    dispatch(fetchHeroes(limit, offset));
  },
  getHero: id => {
    dispatch(test(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Heroes);
