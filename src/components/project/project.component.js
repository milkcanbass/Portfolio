import React from 'react';

const Project = ({ name, imageUrl }) => {
  return (
    <div>
      <div>{name}</div>
      <img src={imageUrl} />
    </div>
  );
};

export default Project;
