import React from 'react';
import { nanoid } from 'nanoid';
import { Button, ButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => (
        <li key={option}>
          <Button type="button" aria-label={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        </li>
      ))}
    </ButtonList>
  );
};
