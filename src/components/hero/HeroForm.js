import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import { toast } from 'react-toastify';
import Button from '@material-ui/core/Button/Button';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBack';
import ListSubheader from '@material-ui/core/ListSubheader';

import { TextField } from '../../components/common';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  background-color: #fff;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const FieldsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 10%;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Picture = styled.img`
  width: 200px;
  border-radius: 100px;
`;

class HeroForm extends Component {
  onSubmit = values => {
    const { hero } = this.props;

    localStorage.setItem(`${hero.id}-name`, values.name);
    localStorage.setItem(`${hero.id}-description`, values.description);
    toast.success('Saved!');
  };

  validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.description) {
      errors.description = 'Required';
    }
    return errors;
  };

  render() {
    const { hero, history } = this.props;
    const initialValues = {
      name: localStorage.getItem(`${hero.id}-name`) || hero.name,
      description: localStorage.getItem(`${hero.id}-description`) || hero.description,
    };

    return (
      <Form
        onSubmit={this.onSubmit}
        initialValues={initialValues}
        validate={this.validate}
        render={({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <IconButton onClick={() => history.push('/heroes')}>
              <BackIcon />
            </IconButton>
            <Wrapper>
              <Picture src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
              <FieldsWrapper>
                <FieldWrapper>
                  <Field name="name" component={TextField} type="text" label="Name" fullWidth />
                </FieldWrapper>
                <FieldWrapper>
                  <Field name="description" component={TextField} type="text" label="Description" fullWidth />
                </FieldWrapper>
                <div>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    type="submit"
                    disabled={submitting || pristine}
                  >
                    Save
                  </Button>
                </div>
              </FieldsWrapper>
            </Wrapper>
            <List subheader={<ListSubheader component="div">Movies/TV Shows</ListSubheader>}>
              {hero.series &&
                hero.series.items.map((item, index) => (
                  <ListItem key={`${item.name}-${index}`}>
                    <ListItemText primary={item.name} />
                  </ListItem>
                ))}
            </List>
          </form>
        )}
      />
    );
  }
}

export default HeroForm;
