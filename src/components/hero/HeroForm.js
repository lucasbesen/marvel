import * as React from 'react';
import { Form } from 'react-final-form';
import { toast } from 'react-toastify';
import Button from '@material-ui/core/Button/Button';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBack';
import ListSubheader from '@material-ui/core/ListSubheader';

import type { History } from 'history';

import { Card } from '../../components/common';

import type { Hero, Item } from '../../types/Hero';
import { getByLocalStorage } from '../../helpers';

type FormRender = {
  handleSubmit: () => void,
  submitting: boolean,
  pristine: boolean,
};

type Error = {
  name?: string,
  description?: string,
};

type Values = {
  name?: string,
  description?: string,
};

type Props = {
  hero: Hero,
  history: History,
};

class HeroForm extends React.Component<Props> {
  onSubmit = (values: Values): void => {
    const { hero } = this.props;

    localStorage.setItem(`${hero.id}-name`, values.name);
    localStorage.setItem(`${hero.id}-description`, values.description);
    toast.success('Saved!');
  };

  validate = (values: Values): Error => {
    const errors: Error = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.description) {
      errors.description = 'Required';
    }
    return errors;
  };

  renderCard = (submitting: boolean, pristine: boolean): React.ReactNode => (
    <div>
      <Button variant="contained" color="secondary" size="small" type="submit" disabled={submitting || pristine}>
        Save
      </Button>
    </div>
  );

  render(): React.ReactNode {
    const { hero, history } = this.props;
    const initialValues: Values = {
      name: getByLocalStorage(hero.id, hero.name, 'name'),
      description: getByLocalStorage(hero.id, hero.description, 'description'),
    };

    return (
      <Form
        onSubmit={this.onSubmit}
        initialValues={initialValues}
        validate={this.validate}
        render={({ handleSubmit, submitting, pristine }: FormRender): React.ReactNode => (
          <form onSubmit={handleSubmit}>
            <IconButton onClick={() => history.push('/heroes')}>
              <BackIcon />
            </IconButton>
            <Card hero={hero} renderAction={() => this.renderCard(submitting, pristine)} />
            <List subheader={<ListSubheader component="div">Movies/TV Shows</ListSubheader>}>
              {hero.series &&
                hero.series.items.map((item: Item, index: number) => (
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
