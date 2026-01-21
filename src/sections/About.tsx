import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion as Motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import profilePhoto from '../assets/profilePhoto.png';

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-6">
                <Motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    <div className="w-full md:w-1/2">
                        <div className="relative w-64 h-64 mx-auto md:mx-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl rotate-6 opacity-50 blur-lg"></div>
                            <img
                                src={profilePhoto}
                                alt={t('about.imageAlt')}
                                loading="lazy"
                                className="relative w-full h-full object-cover rounded-2xl shadow-xl border-2 border-white dark:border-gray-800"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                            {t('about.title')}
                        </h2>
                        <GlassCard className="prose dark:prose-invert">
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                {t('about.description')}
                            </p>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">
                                {t('about.longDescription')}
                            </p>
                        </GlassCard>
                    </div>
                </Motion.div>
            </div>
        </section>
    );
};

export default About;
