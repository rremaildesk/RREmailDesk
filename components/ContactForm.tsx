import React, { useState } from 'react';
import { contactPageContent } from '../data/content';

interface FormData {
  name: string;
  email: string;
  issueType: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    issueType: 'login',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    // Simulate API call
    setTimeout(() => {
      // In a real application, you would send formData to a backend API here.
      // For this example, we'll just simulate a success/failure.
      const success = Math.random() > 0.2; // 80% chance of success

      if (success) {
        setSubmitMessage(contactPageContent.formSuccessMessage);
        setIsSuccess(true);
        setFormData({ name: '', email: '', issueType: 'login', message: '' }); // Clear form
      } else {
        setSubmitMessage(contactPageContent.formFailureMessage);
        setIsSuccess(false);
      }
      setIsSubmitting(false);
    }, 1500);
  };

  const issueTypes = [
    { value: 'login', label: 'Login / Password Reset' },
    { value: 'configuration', label: 'Email Configuration' },
    { value: 'sending-receiving', label: 'Sending / Receiving Issues' },
    { value: 'billing', label: 'Billing / Renewal' },
    { value: 'general', label: 'General Technical Support' },
  ];

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center">{contactPageContent.formTitle}</h3>
      <div className="mb-4">
        <label htmlFor="name" className="block text-darkText text-sm font-semibold mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-3 px-4 text-darkText leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-darkText text-sm font-semibold mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-3 px-4 text-darkText leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="issueType" className="block text-darkText text-sm font-semibold mb-2">
          Type of Issue
        </label>
        <select
          id="issueType"
          name="issueType"
          value={formData.issueType}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-darkText leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          {issueTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-darkText text-sm font-semibold mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          className="shadow appearance-none border rounded w-full py-3 px-4 text-darkText leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className={`w-full bg-accent hover:bg-green-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      {submitMessage && (
        <p className={`mt-4 text-center font-medium ${isSuccess ? 'text-accent' : 'text-red-600'}`}>
          {submitMessage}
        </p>
      )}
    </form>
  );
};