import React, { useState, type ReactElement, type ChangeEvent, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { motion as Motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface Status {
    type: 'success' | 'error';
    message: string;
}

interface ContactDetail {
    icon: ReactElement;
    title: string;
    value: string;
    style: string;
    valueClass?: string;
}

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<Status | null>(null);

    const whatsappNumber = t('contact.whatsappNumber');

    const sanitizeNumber = (number: string): string => number.replace(/\D/g, '');

    const buildWhatsappUrl = (number: string, message: string): string => {
        const sanitized = sanitizeNumber(number);
        const text = encodeURIComponent(message);
        return `https://wa.me/${sanitized}?text=${text}`;
    };

    const buildWhatsappMessage = (): string => (
        `${t('contact.whatsappMessage')}\n\n${t('contact.name')}: ${formData.name}\n${t('contact.email')}: ${formData.email}\n${t('contact.message')}: ${formData.message}`
    );

    const contactDetails: ContactDetail[] = [
        {
            icon: <Phone size={24} />,
            title: t('contact.phoneLabel'),
            value: t('contact.phoneNumber'),
            style: 'p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400',
        },
        {
            icon: <Mail size={24} />,
            title: t('contact.emailLabel'),
            value: t('contact.emailAddress'),
            valueClass: 'break-all',
            style: 'p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400',
        },
        {
            icon: <MapPin size={24} />,
            title: t('contact.locationLabel'),
            value: t('contact.locationValue'),
            style: 'p-3 bg-pink-100 dark:bg-pink-900/30 rounded-full text-pink-600 dark:text-pink-400',
        },
    ];

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        // In a real scenario, you would send the email here using EmailJS or Formspree
        // For now, we simulate the process and redirect to WhatsApp

        const text = buildWhatsappMessage();
        const whatsappUrl = buildWhatsappUrl(whatsappNumber, text);

        window.open(whatsappUrl, '_blank');

        // Reset form
        setFormData({ name: '', email: '', message: '' });
        setStatus({ type: 'success', message: t('contact.redirectNotice') });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
                <Motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
                >
                    {t('contact.title')}
                </Motion.h2>

                <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <Motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/3 space-y-8"
                    >
                        <GlassCard className="h-full">
                            <div className="space-y-6">
                                {contactDetails.map((detail) => (
                                    <div key={detail.title} className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                                        <div className={detail.style}>
                                            {detail.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white">{detail.title}</h3>
                                            <p className={detail.valueClass || ''}>{detail.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </Motion.div>

                    {/* Contact Form */}
                    <Motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-2/3"
                    >
                        <GlassCard>
                            <form onSubmit={handleSubmit} className="space-y-6" aria-label={t('contact.title')}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            {t('contact.name')}
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-900 dark:text-white"
                                            placeholder={t('contact.namePlaceholder')}
                                            aria-required="true"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            {t('contact.email')}
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-900 dark:text-white"
                                            placeholder={t('contact.emailPlaceholder')}
                                            aria-required="true"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        {t('contact.message')}
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none"
                                        placeholder={t('contact.messagePlaceholder')}
                                        aria-required="true"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                                >
                                    <Send size={20} />
                                    <span>{t('contact.send')}</span>
                                </button>

                                {status && (
                                    <p className={`text-sm ${status.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`} aria-live="polite">
                                        {status.message}
                                    </p>
                                )}
                            </form>
                        </GlassCard>
                    </Motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
