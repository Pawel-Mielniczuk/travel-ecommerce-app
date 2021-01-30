import React, { propTypes } from 'react';


const Rating = ({ value, text, color }) => (
  <div className='rating__wrapper'>
    <span style={{color}}>
      <span 
        className={value >=1 
          ? 'fas fa-star'
          : value >= 0.5 
          ? 'fas fa-star-half-alt'
          : 'fas fa-star'}
          >
      </span>
    </span>
    <span style={{color}}>
      <span 
        className={value >=3
          ? 'fas fa-star'
          : value >= 2.5 
          ? 'fas fa-star-half-alt'
          : 'fas fa-star'}
          >
      </span>
    </span>
    <span style={{color}}>
      <span 
        className={value >=4 
          ? 'fas fa-star'
          : value >= 3.5 
          ? 'fas fa-star-half-alt'
          : 'fas fa-star'}
          >
      </span>
    </span>
    <span style={{color}}>
      <span 
        className={value >=5
          ? 'fas fa-star'
          : value >= 4.5 
          ? 'fas fa-star-half-alt'
          : 'fas fa-star'}
          >
      </span>
    </span>
    <span style={{color}}>
      <span 
        className={value >=5
          ? 'fas fa-star'
          : value >= 4.5 
          ? 'fas fa-star-half-alt'
          : 'fas fa-star'}
          >
      </span>
    </span>
    <span>{text ? text : ''}</span>
  </div>
)

Rating.defaultProps = {
  color: '#f8e825',
}



export default Rating;