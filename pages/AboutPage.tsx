import React from 'react';
import { SEO } from '../components/SEO';
import { seoPages } from '../data/seo';
import { aboutPageContent } from '../data/content';
import { CallToAction } from '../components/CallToAction';
import { SUPPORT_PHONE_NUMBER } from '../constants';
import { PageLayout } from '../components/PageLayout';

export const AboutPage: React.FC = () => {
  const seo = seoPages.about;

  return (
    <PageLayout className="max-w-4xl">
      <SEO title={seo.title} description={seo.metaDescription} />

      <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 text-center">
        {aboutPageContent.title}
      </h1>
      <p className="text-lg md:text-xl text-lightText mb-10 text-center">
        {aboutPageContent.headline}
      </p>

      <div className="bg-white rounded-lg shadow-md p-6 md:p-10 space-y-6">
        <p className="text-darkText leading-relaxed text-lg">
          {aboutPageContent.paragraph1}
        </p>
        <p className="text-darkText leading-relaxed text-lg">
          {aboutPageContent.paragraph2}
        </p>
        <p className="text-darkText leading-relaxed text-lg">
          {aboutPageContent.paragraph3}
        </p>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-heading font-semibold text-primary mb-4">Ready for reliable support?</h2>
          <CallToAction phoneNumber={SUPPORT_PHONE_NUMBER} buttonText="Speak to an Expert Now" size="large" />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <img src="https://picsum.photos/150/150?random=9" alt="Our Team" className="rounded-full mb-4" />
          <h3 className="text-xl font-heading font-semibold text-primary mb-2">Our Dedicated Team</h3>
          <p className="text-lightText">A group of passionate professionals committed to solving your email challenges with expertise and care.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <img src="https://picsum.photos/150/150?random=10" alt="Our Mission" className="rounded-full mb-4" />
          <h3 className="text-xl font-heading font-semibold text-primary mb-2">Our Mission</h3>
          <p className="text-lightText">To provide unparalleled Roadrunner email support, ensuring every user has a seamless and secure email experience.</p>
        </div>
      </div>
    </PageLayout>
  );
};