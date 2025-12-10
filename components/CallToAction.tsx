import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/outline';

interface CallToActionProps {
  phoneNumber: string;
  buttonText?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export const CallToAction: React.FC<CallToActionProps> = ({
  phoneNumber,
  buttonText = 'Call Now',
  className = '',
  size = 'medium',
}) => {
  let buttonClasses = 'inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-dark';
  let iconSize = 'h-5 w-5';

  switch (size) {
    case 'small':
      buttonClasses += ' px-4 py-2 text-sm';
      iconSize = 'h-4 w-4';
      break;
    case 'large':
      buttonClasses += ' px-8 py-4 text-lg';
      iconSize = 'h-6 w-6';
      break;
    default: // medium
      buttonClasses += ' px-6 py-3 text-base';
      iconSize = 'h-5 w-5';
      break;
  }

  return (
    <a
      href={`tel:${phoneNumber}`}
      className={`bg-accent text-white hover:bg-green-700 ${buttonClasses} ${className}`}
    >
      <PhoneIcon className={`${iconSize} mr-2`} />
      {buttonText}
    </a>
  );
};