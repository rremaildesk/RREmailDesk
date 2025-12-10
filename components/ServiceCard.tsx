import React from 'react';
import { Service } from '../types';
import { CallToAction } from './CallToAction';
import { SUPPORT_PHONE_NUMBER } from '../constants';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      {service.icon && <div className="text-primary mb-4">{service.icon}</div>}
      <h3 className="text-xl font-heading font-semibold text-primary mb-3">{service.title}</h3>
      <p className="text-lightText mb-6 flex-grow">{service.description}</p>
      <CallToAction phoneNumber={SUPPORT_PHONE_NUMBER} buttonText="Call for Support" />
    </div>
  );
};