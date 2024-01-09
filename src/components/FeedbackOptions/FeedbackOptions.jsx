import React from 'react';
import { Button, ButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const uniqueKey = 'feedback-option'; 

  return (
    <ButtonList>
      {options.map(option => (
        <li key={`${uniqueKey}-${option}`}>
          <Button type="button" aria-label={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        </li>
      ))}
    </ButtonList>
  );
};
