import React from 'react';
import Places from '../places/Places';
import './Cities.css';
import Banglore from '../../assets/Banglore.jpg';
import Bhubaneswar from '../../assets/Bhubaneswar.jpg';
import Chandigarh from '../../assets/Chandigarh.jpg';
import Chennai from '../../assets/Chennai.jpg';
import Hyderabad from '../../assets/Hyderabad.jpg';
import Kolkata from '../../assets/Kolkata.jpg';
import Lucknow from '../../assets/Lucknow.jpg';
import Jaipur from '../../assets/Jaipur.jpg';
import Mumbai from '../../assets/Mumbai.jpg';

const cities = [
  {
    id: 1,
    image: Banglore,
    title: 'Bangalore',
    
  },
  {
    id: 2,
    image: Bhubaneswar,
    title: 'Bhubaneshwar',
    
  },
  {
    id: 3,
    image: Chandigarh,
    title: 'Chandigarh',
    
  },
  {
    id: 4,
    image: Chennai,
    title: 'Chennai',
    
  },
  {
    id: 5,
    image: Hyderabad,
    title: 'Hyderabad',
    
  },
  {
    id: 6,
    image: Jaipur,
    title: 'Jaipur',
    
  },
  {
    id: 7,
    image: Kolkata,
    title: 'Kolkata',
    
  },
  {
    id: 8,
    image: Lucknow,
    title: 'Lucknow',
    
  },
  {
    id: 9,
    image: Mumbai,
    title: 'Mumbai',
    
  },
];

export default function Cities() {
  return (
    <div className="cities">
      {cities.map((city) => (
        <Places
          key={city.id}
          image={city.image}
          title={city.title}
         
        />
        
      ))}
    </div>
  );
}
