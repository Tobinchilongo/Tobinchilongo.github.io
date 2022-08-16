import React from 'react';
import '../stylesheets/services.css';
import ServiceCard from './ServiceCard';
import { services } from './data/ServicesData';
import PageTitle from './PageTitle';

const Services = () => {
  const title = 'My Technical Skill Set';
  const desc = 'Below are the services I provide';
  return (
    <div className="services-page">
      <PageTitle title={title} desc={desc} />
      <ul className="services-container">
        {
          services.map((service) => (
            <li key={service.id}>
              <ServiceCard card={service} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};
export default Services;
