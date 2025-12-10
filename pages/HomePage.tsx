import React from 'react';
import { CallToAction } from '../components/CallToAction';
import { SUPPORT_PHONE_NUMBER, APP_NAME, APP_DESCRIPTION } from '../constants';
import { homePageContent } from '../data/content';
import { SEO } from '../components/SEO';
import { seoPages } from '../data/seo';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { PageLayout } from '../components/PageLayout';

export const HomePage: React.FC = () => {
  const seo = seoPages.home;

  return (
    <PageLayout className="space-y-12">
      <SEO title={seo.title} description={seo.metaDescription} />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24 rounded-lg shadow-xl text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1
            className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight"
            dangerouslySetInnerHTML={{ __html: homePageContent.heroHeadline }}
          ></h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {homePageContent.heroDescription}
          </p>
          <CallToAction phoneNumber={SUPPORT_PHONE_NUMBER} buttonText="Call Now for Instant Support" size="large" />
        </div>
      </section>

      {/* Services Summary Section */}
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
          {homePageContent.servicesSummaryTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homePageContent.servicesSummary.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">{service.title}</h3>
              <p className="text-lightText mb-4">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/services"
            className="inline-flex items-center text-primary font-semibold hover:underline text-lg transition-colors"
          >
            View All Services <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section (Placeholder) */}
      <section className="bg-softBackground py-12 rounded-lg text-center shadow-inner">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Why Choose Our Support?</h2>
        <div className="max-w-3xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4">
            <img src="https://picsum.photos/100/100?random=6" alt="Expert Technicians" className="mx-auto mb-4 rounded-full" />
            <h3 className="text-xl font-heading font-semibold text-darkText mb-2">Expert Technicians</h3>
            <p className="text-lightText">Our team comprises highly skilled and experienced Roadrunner email specialists.</p>
          </div>
          <div className="p-4">
            <img src="https://picsum.photos/100/100?random=7" alt="24/7 Availability" className="mx-auto mb-4 rounded-full" />
            <h3 className="text-xl font-heading font-semibold text-darkText mb-2">24/7 Availability</h3>
            <p className="text-lightText">Support available around the clock, whenever you need us.</p>
          </div>
          <div className="p-4">
            <img src="https://picsum.photos/100/100?random=8" alt="Fast & Reliable" className="mx-auto mb-4 rounded-full" />
            <h3 className="text-xl font-heading font-semibold text-darkText mb-2">Fast & Reliable</h3>
            <p className="text-lightText">Quick diagnostics and effective solutions to minimize your downtime.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};