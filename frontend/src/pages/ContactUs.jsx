import { useState } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaCheckCircle,
} from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';


const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const emailBody = `
New Contact Form Submission

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Subject: ${form.subject}

Message:
${form.message}
      `.trim();

      const mailtoLink = `mailto:brainsoftwarehouse@gmail.com?subject=${encodeURIComponent(
        form.subject
      )}&body=${encodeURIComponent(emailBody)}`;

      const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone}
*Subject:* ${form.subject}

*Message:*
${form.message}
      `.trim();

      const whatsappLink = `https://wa.me/923001566440?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      window.open(whatsappLink, '_blank');

      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 600);

      setSuccess(
        'Opening WhatsApp and your email app — please send both to complete your message.'
      );
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });

      setTimeout(() => setSuccess(''), 8000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-[#0F1E4A] placeholder-gray-400 focus:outline-none focus:border-[#38BDF8] focus:bg-white focus:ring-2 focus:ring-[#38BDF8]/20 transition-all duration-200';
  const labelClass = 'block text-sm font-bold text-[#0F1E4A] mb-2';

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Brain Software House — reach out for custom software, web development, or digital marketing services."
        keywords="contact, Brain Software House, web development, custom software, Bahawalpur"
      />

      <PageHeader
        title="Contact Us"
        subtitle="Have a project in mind? Let's talk and bring your ideas to life."
        breadcrumbs={[{ label: 'Contact Us',href:"/contact-us" }]}
      />

      <section className="bg-white py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <div className="space-y-6">
              <div className="bg-[#0F1E4A] rounded-3xl p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
                    Get In Touch
                  </h2>

                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-[#38BDF8]/15 text-[#38BDF8] text-lg">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#38BDF8] tracking-wider uppercase mb-1">
                          Our Location
                        </p>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Bahawalpur+Punjab+Pakistan"
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-300 text-sm leading-relaxed hover:text-[#38BDF8] transition-colors duration-200"
                        >
                          Bahawalpur, Punjab, Pakistan
                        </a>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-[#38BDF8]/15 text-[#38BDF8] text-lg">
                        <FaPhoneAlt />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#38BDF8] tracking-wider uppercase mb-1">
                          Call Us
                        </p>
                        <a
                          href="tel:+923004506850"
                          className="block text-gray-300 text-sm hover:text-[#38BDF8] transition-colors duration-200"
                        >
                          +92 300 4506850
                        </a>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-[#38BDF8]/15 text-[#38BDF8] text-lg">
                        <FaWhatsapp />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#38BDF8] tracking-wider uppercase mb-1">
                          WhatsApp
                        </p>
                        <a
                          href="https://wa.me/923001566440"
                          target="_blank"
                          rel="noreferrer"
                          className="block text-gray-300 text-sm hover:text-[#38BDF8] transition-colors duration-200"
                        >
                          +92 300 1566440
                        </a>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-[#38BDF8]/15 text-[#38BDF8] text-lg">
                        <FaEnvelope />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#38BDF8] tracking-wider uppercase mb-1">
                          Email Us
                        </p>
                        <a
                          href="mailto:brainsoftwarehouse@gmail.com"
                          className="block text-gray-300 text-sm hover:text-[#38BDF8] transition-colors duration-200 break-all"
                        >
                          brainsoftwarehouse@gmail.com
                        </a>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-xs font-bold text-[#38BDF8] tracking-wider uppercase mb-4">
                      Follow Us
                    </p>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://www.facebook.com/brainsoftwarehouse/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#38BDF8] hover:text-[#0F1E4A] hover:border-[#38BDF8] transition-all duration-300"
                      >
                        <FaFacebookF className="text-sm" />
                      </a>
                      <a
                        href="https://instagram.com/brainsoftwarehouse"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#38BDF8] hover:text-[#0F1E4A] hover:border-[#38BDF8] transition-all duration-300"
                      >
                        <FaInstagram className="text-sm" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/brain-software-house-8771722b0/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#38BDF8] hover:text-[#0F1E4A] hover:border-[#38BDF8] transition-all duration-300"
                      >
                        <FaLinkedinIn className="text-sm" />
                      </a>
                      <a
                        href="https://wa.me/923001566440"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="WhatsApp"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300"
                      >
                        <FaWhatsapp className="text-sm" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm h-80">
                <iframe
                  title="Brain Software House Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.8375956799887!2d71.6745!3d29.3953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIzJzQzLjEiTiA3McKwNDAnMjguMiJF!5e0!3m2!1sen!2s!4v1700000000000"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden h-fit lg:sticky lg:top-24">
              <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-[#38BDF8]/10 to-transparent rounded-bl-full pointer-events-none"></div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-px bg-[#38BDF8]"></span>
                  <span className="text-[#2563EB] text-xs font-bold tracking-widest uppercase">
                    Send Message
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1E4A] mb-2">
                  Let's Work Together
                </h2>
                <p className="text-gray-600 text-sm mb-8">
                  Fill the form and we'll get back to you within 24 hours.
                </p>

                {success && (
                  <div className="mb-6 flex items-start gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-sm">
                    <FaCheckCircle className="text-green-600 shrink-0 mt-0.5" />
                    <span>{success}</span>
                  </div>
                )}

                {error && (
                  <div className="mb-6 flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className={labelClass}>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className={inputClass}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+92 300 0000000"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your project..."
                      className={`${inputClass} resize-none`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#38BDF8] text-[#0F1E4A] px-6 py-4 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-[#38BDF8]/30 hover:bg-[#2563EB] hover:text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#0F1E4A] border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-sm" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;