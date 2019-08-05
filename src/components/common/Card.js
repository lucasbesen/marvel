import React from 'react';
import { Field } from 'react-final-form';
import styled from 'styled-components';

import { handleWithDescription, getByLocalStorage } from '../../helpers';
import { TextField } from './';

import type { Hero } from '../../types/Hero';

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
  width: ${({ readOnly }: boolean) => (readOnly ? '60px' : '200px')};
  height: ${({ readOnly }: boolean) => (readOnly ? '60px' : '200px')};
  border-radius: ${({ readOnly }: boolean) => (readOnly ? '30px' : '100px')};
`;

const Title = styled.span`
  font-weight: 600;
`;

type Props = {
  hero: Hero,
  renderAction?: () => React.ReactNode,
  readOnly?: boolean,
};

const Card = ({ hero, renderAction, readOnly }: Props): React.ReactNode => (
  <Wrapper>
    <Picture readOnly={readOnly} src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
    <FieldsWrapper>
      <FieldWrapper>
        {readOnly ? (
          <Title>{getByLocalStorage(hero.id, hero.name, 'name')}</Title>
        ) : (
          <Field name="name" component={TextField} type="text" label="Name" fullWidth />
        )}
      </FieldWrapper>
      <FieldWrapper>
        <FieldWrapper>
          {readOnly ? (
            <span>{handleWithDescription(getByLocalStorage(hero.id, hero.description, 'description'))}</span>
          ) : (
            <Field name="description" component={TextField} type="text" label="Description" fullWidth />
          )}
        </FieldWrapper>
      </FieldWrapper>
      {renderAction && renderAction()}
    </FieldsWrapper>
  </Wrapper>
);

export default Card;
