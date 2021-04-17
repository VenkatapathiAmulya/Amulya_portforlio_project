import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() { 
  return (
    <div className='cards'>
      <h1>Projects ,Skills ,Experience</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img_project.jpg'
              text='project ...'
              label='project1'
              path='/projects'
            />
            <CardItem
              src='images/img_project.jpg'
              text='project ....'
              label='project2'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img_skills.jpg'
              text='skills ...'
              label='skills'
              path='/skills'
            />
            <CardItem
              src='images/img_skills.jpg'
              text='skills ...'
              label='skills'
              path='/skills'
            />
            <CardItem
              src='images/img_skills.jpg'
              text='skills ...'
              label='skills'
              path='/skills'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
