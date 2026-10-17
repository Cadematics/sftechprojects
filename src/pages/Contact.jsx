
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message. Please try again.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Contact submit error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <main className="bg-gray-50 text-gray-900">
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Have a project in mind or just want to say hi? We'd love to hear from you.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {/* Contact Form */}
            <div className="w-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'success' && (
                  <div className="rounded-lg bg-green-50 border border-green-200 p-4 shadow-sm" role="status">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm font-semibold text-green-800">
                        Thank you! Your message has been sent successfully. We will be in touch shortly.
                      </p>
                    </div>
                  </div>
                )}

                {status === 'error' && errorMessage && (
                  <div className="rounded-lg bg-red-50 border border-red-200 p-4 shadow-sm" role="alert">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm font-semibold text-red-800">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Full name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="rounded-md bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="w-full flex items-center">
                 <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                            <span className="material-symbols-outlined">mail</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                            <p className="mt-1 text-gray-600">contact@baylabtech.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                            <span className="material-symbols-outlined">call</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                            <p className="mt-1 text-gray-600">(123) 456-7890</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                            <span className="material-symbols-outlined">location_on</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                            <p className="mt-1 text-gray-600">123 Engineering Lane<br/>San Francisco, CA 94105</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
