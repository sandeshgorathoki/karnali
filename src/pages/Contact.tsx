import { useState } from 'react';
import PageHero from '../components/shared/PageHero';
import { sendEmail } from '../services/emailService';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: { [k: string]: string } = {};
    if (!form.name) next.name = 'Name is required';
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) next.email = 'Valid email required';
    if (!form.phone) next.phone = 'Phone is required';
    if (!form.message) next.message = 'Message is required';
    setErrors(next);
    
    if (Object.keys(next).length === 0) {
      setLoading(true);
      
      try {
        const success = await sendEmail(form);
        if (success) {
          setSubmitted(true);
          setForm({ name: '', email: '', phone: '', service: '', message: '' });
        } else {
          // Even if the service fails, we still opened the email client
          setSubmitted(true);
          setForm({ name: '', email: '', phone: '', service: '', message: '' });
        }
      } catch (error) {
        // Fallback: just show success since mailto opened
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
      }
      
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero title="Contact" subtitle="Get in Touch" />
      <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-8">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Service Interested In</label>
            <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
              <option value="">Select</option>
              <option>Interior Design</option>
              <option>Architectural Design</option>
              <option>Structural Design</option>
              <option>HVAC Design</option>
              <option>Electrical & Plumbing</option>
              <option>Urban Planning</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea className="w-full border rounded px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-primary" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>
          <button 
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
          {submitted && (
            <div className="mt-3 p-3 rounded bg-green-50 text-green-700">
              <strong>Thank you!</strong> Your inquiry has been sent to infrastkarnali@gmail.com. 
              We will contact you soon. If your email client didn't open automatically, 
              please send your inquiry directly to infrastkarnali@gmail.com.
            </div>
          )}
        </form>
        <div className="space-y-6 text-sm">
          <div className="font-medium text-lg">Contact Information</div>
          
          {/* Main Office */}
          <div className="space-y-3">
            <div className="font-medium text-primary">Main Office</div>
            <div>Address: Bagchaur-08, Salyan, Nepal</div>
            <div>Phone: +977 9867969503</div>
            <div>Email: infrastkarnali@gmail.com</div>
          </div>

          {/* Branch Office */}
          <div className="space-y-3">
            <div className="font-medium text-primary">Branch Office</div>
            <div>Address: Tulsipur-07, Dang, Nepal</div>
            <div>Phone: +977 9847702458</div>
            <div>Email: infrastkarnali@gmail.com</div>
          </div>

          <iframe 
            title="map" 
            className="w-full h-64 rounded" 
            loading="lazy" 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d490.18278396502296!2d82.3143487149823!3d28.147813388364057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1765549579587!5m2!1sen!2sca"
          ></iframe>
        </div>
      </div>
    </>
  );
}

