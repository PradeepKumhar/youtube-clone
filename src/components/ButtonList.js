import React from 'react';
import Button from './Button';

function ButtonList() {
  return (
    <div className="flex space-x-3 overflow-x-auto p-2 m-2 scrollbar-hide">
      <Button name="All" />
      <Button name="Music" />
      <Button name="Mixes" />
      <Button name="Gaming" />
      <Button name="Sitcoms" />
      <Button name="Film reviews" />
      <Button name="Sports" />
      <Button name="Horror" />
      <Button name="Comedy" />
      <Button name="News" />
      <Button name="Live" />
      <Button name="Learning" />
    </div>
  );
}

export default ButtonList;
