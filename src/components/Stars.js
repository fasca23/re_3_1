import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

function Stars({count = 0}) {
  function getStar() {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(<li key={i}><Star/></li>)
    }
    return result;
  }

  if (typeof count === 'number' && count >= 1 && count <= 5) {
    return (
      <div className="main-content">
        <ul className="card-body-stars">{getStar(count)}</ul>
      </div>
    );
  }
}

Stars.propTypes = {
  count: PropTypes.number.isRequired,
}
  
export default Stars;