import React from 'react';
import { SEO } from '../components/SEO';
import { seoPages } from '../data/seo';
import { ContactForm } from '../components/ContactForm';
import { SUPPORT_PHONE_NUMBER } from '../constants';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { contactPageContent } from '../data/content';
import { PageLayout } from '../components/PageLayout';

export const ContactPage: React.FC = () => {
  const seo = seoPages.contact;

  return (
    <PageLayout>
      <SEO title={seo.title} description={seo.metaDescription} />

      <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 text-center">
        {contactPageContent.headline}
      </h1>
      <p className="text-lg md:text-xl text-lightText mb-12 text-center max-w-3xl mx-auto">
        {contactPageContent.description}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Contact Information Section */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">Reach Out to Us</h2>

            <div className="flex items-center mb-6">
              <PhoneIcon className="h-8 w-8 text-accent mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-heading font-semibold text-darkText mb-1">{contactPageContent.phoneLabel}</h3>
                <a href={`tel:${SUPPORT_PHONE_NUMBER}`} className="text-2xl md:text-3xl font-bold text-primary hover:underline">
                  {SUPPORT_PHONE_NUMBER}
                </a>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <EnvelopeIcon className="h-8 w-8 text-accent mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-heading font-semibold text-darkText mb-1">Email Support</h3>
                <p className="text-lightText text-lg">{contactPageContent.emailPlaceholder}</p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <MapPinIcon className="h-8 w-8 text-accent mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-heading font-semibold text-darkText mb-1">Our Location (Placeholder)</h3>
                <p className="text-lightText text-lg">{contactPageContent.addressPlaceholder}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-heading font-semibold text-darkText mb-4">Request a Call Back</h3>
            <p className="text-lightText mb-4">Fill out the form to the right, and we'll get back to you as soon as possible. Please provide your phone number in the message field if you prefer a call back.</p>
            {/* Live Chat/Callback Widget Placeholder */}
            <button className="w-full bg-blue-100 text-primary py-3 px-4 rounded-lg font-semibold hover:bg-blue-200 transition-colors duration-200">
              Live Chat (Coming Soon)
            </button>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex items-center justify-center">
          <ContactForm />
        </div>
      </div>
    </PageLayout>
  );
};