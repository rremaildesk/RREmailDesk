import { SEOPageMeta } from '../types';
import { SUPPORT_PHONE_NUMBER, APP_NAME, APP_DESCRIPTION } from '../constants';

export const seoPages: { [key: string]: SEOPageMeta } = {
  home: {
    title: `${APP_NAME} – Live Support ${SUPPORT_PHONE_NUMBER}`,
    metaDescription: `Facing Roadrunner email login, configuration, sending or payment issues? Call ${SUPPORT_PHONE_NUMBER} for fast, expert assistance across the USA.`,
    url: '/',
  },
  about: {
    title: `About Us | Dedicated Roadrunner Email Support in USA | ${SUPPORT_PHONE_NUMBER}`,
    metaDescription: `Learn about ${APP_NAME}, your trusted partner for reliable, 24/7 Roadrunner email technical help in the USA. Fast, friendly, effective solutions.`,
    url: '/about-us',
  },
  services: {
    title: `Roadrunner Email Technical Support – Login, Configuration, Billing & More | ${SUPPORT_PHONE_NUMBER}`,
    metaDescription: `We offer professional support for Roadrunner email login problems, mail configuration, sending/receiving errors, billing, cancellation and more. Call us at ${SUPPORT_PHONE_NUMBER}.`,
    url: '/services',
  },
  blog: {
    title: `Roadrunner Email Help Articles & Guides | ${APP_NAME} Blog | ${SUPPORT_PHONE_NUMBER}`,
    metaDescription: `Find expert articles and step-by-step guides on fixing common Roadrunner email issues, configuration, and account management. Call ${SUPPORT_PHONE_NUMBER} for more help.`,
    url: '/blog',
  },
  contact: {
    title: `Contact Roadrunner Email Support – Call ${SUPPORT_PHONE_NUMBER} Now | ${APP_NAME}`,
    metaDescription: `Get immediate assistance for your Roadrunner email issues. Contact us via phone at ${SUPPORT_PHONE_NUMBER} or use our online form.`,
    url: '/contact',
  },
};