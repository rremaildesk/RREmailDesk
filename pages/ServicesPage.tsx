import React from 'react';
import { SEO } from '../components/SEO';
import { seoPages } from '../data/seo';
import { servicesPageContent } from '../data/content';
import { ServiceCard } from '../components/ServiceCard';
import {
  KeyIcon,
  Cog6ToothIcon,
  PaperAirplaneIcon,
  InboxStackIcon,
  CreditCardIcon,
  LifebuoyIcon,
} from '@heroicons/react/24/outline';
import { PageLayout } from '../components/PageLayout';
import { CallToAction } from '../components/CallToAction';
import { SUPPORT_PHONE_NUMBER } from '../constants';

export const ServicesPage: React.FC = () => {
  const seo = seoPages.services;

  const serviceIcons = {
    'login-password-account-recovery': <KeyIcon className="h-12 w-12" />,
    'email-configuration': <Cog6ToothIcon className="h-12 w-12" />,
    'sending-receiving-spam-troubleshooting': <PaperAirplaneIcon className="h-12 w-12" />,
    'attachment-delivery-inbox-problems': <InboxStackIcon className="h-12 w-12" />,
    'billing-renewal-cancellation-support': <CreditCardIcon className="h-12 w-12" />,
    'general-technical-support': <LifebuoyIcon className="h-12 w-12" />,
  };

  const servicesWithIcons = servicesPageContent.map((service) => ({
    ...service,
    icon: serviceIcons[service.id as keyof typeof serviceIcons],
  }));

  return (
    <PageLayout>
      <SEO title={seo.title} description={seo.metaDescription} />

      <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 text-center">
        Our Expert Support Services
      </h1>
      <p className="text-lg md:text-xl text-lightText mb-12 text-center max-w-3xl mx-auto">
        We provide comprehensive technical assistance for every aspect of your Roadrunner email experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesWithIcons.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <section className="bg-primary text-white text-center py-12 px-6 rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl font-heading font-bold mb-4">Can't Find Your Issue?</h2>
        <p className="text-lg mb-6">Our team handles a wide range of Roadrunner email problems not listed here. Don't hesitate to reach out for personalized help.</p>
        <CallToAction phoneNumber={SUPPORT_PHONE_NUMBER} buttonText="Get Customized Support" size="large" className="bg-accent hover:bg-green-700" />
      </section>
    </PageLayout>
  );
};