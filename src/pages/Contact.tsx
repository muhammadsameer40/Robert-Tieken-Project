import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, Mail, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

const CONTACT_BG =
  'https://media.base44.com/images/public/6a04eb295d2a048bc01a0caa/c7115cbb9_generated_dcd948c7.png';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  try {

   await emailjs.send(
  'service_b1na7h9',
  'template_gjecwi9',
  {
    name: form.name,
    email: form.email,
    subject: form.subject,
    message: form.message,
  },
  '_FrXOv4Ct-Gmv7l4U'
);

    setSubmitted(true);

    setForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

  } catch (error) {

    console.log(error);

    alert('Failed to send message');

  } finally {

    setLoading(false);

  }
};

  const handleChange =
    (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const inputClass =
    'w-full rounded-md border border-input bg-background px-3 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background';

  return (
    <section className="pt-[80px] pb-20 lg:pb-32">
      <div className="relative h-64 lg:h-72 overflow-hidden mb-16">
        <img src={CONTACT_BG} alt="English countryside" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-white">Get in Touch</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Let&apos;s Connect</h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Whether you&apos;d like to share your thoughts on the book, inquire about events, or simply say hello —
                Robert would love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Email</p>
                  <p className="font-body text-foreground">contact@roberttieken.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Response time</p>
                  <p className="font-body text-foreground">Usually within 48 hours</p>
                </div>
              </div>
            </div>

            <blockquote className="border-l-2 border-accent pl-4">
              <p className="font-accent italic text-lg text-foreground/70">
                &ldquo;Every call, every message reminds me why I write — to connect.&rdquo;
              </p>
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-card border border-border rounded-xl p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Thank You</h3>
                <p className="font-accent italic text-lg text-muted-foreground">
                  Your message has been sent. Robert will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 lg:p-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-sm text-foreground mb-1.5 block">Name</label>
                    <input
  name="name"
  value={form.name}
  onChange={handleChange('name')}
  required
  placeholder="Your name"
  className={inputClass}
/>
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-1.5 block">Email</label>
                   <input
  name="email"
  type="email"
  value={form.email}
  onChange={handleChange('email')}
  required
  placeholder="your@email.com"
  className={inputClass}
/>
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm text-foreground mb-1.5 block">Subject</label>
                  <input
  name="subject"
  value={form.subject}
  onChange={handleChange('subject')}
  placeholder="What is this about?"
  className={inputClass}
/>
                </div>
                <div>
                  <label className="font-body text-sm text-foreground mb-1.5 block">Message</label>
                  <textarea
  name="message"
  value={form.message}
  onChange={handleChange('message')}
  required
  placeholder="Your message..."
  rows={6}
  className={`${inputClass} resize-none`}
/>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 font-body text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
