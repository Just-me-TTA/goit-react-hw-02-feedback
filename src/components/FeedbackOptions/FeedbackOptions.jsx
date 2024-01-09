import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button, ButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [keys, setKeys] = useState(options.map(() => nanoid()));

  const regenerateKeys = () => {
    setKeys(options.map(() => nanoid()));
  };

  return (
    <ButtonList>
      {options.map((option, index) => (
        <li key={keys[index]}>
          <Button type="button" aria-label={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        </li>
      ))}
      <button type="button" onClick={regenerateKeys} style={{ marginTop: '10px' }}>
        Regenerate Keys
      </button>
    </ButtonList>
  );
};
