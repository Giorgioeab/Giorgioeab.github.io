import React, { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { motion as Motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { Code, Database, Layout, Server, Smartphone, Globe } from 'lucide-react';

interface Skill {
    name: string;
    icon: ReactElement;
    items: string[];
}

const Skills: React.FC = () => {
    const { t } = useTranslation();

    const skills: Skill[] = [
        { name: t('skills.categories.frontend'), icon: <Layout size={32} />, items: ['React', 'Vite', 'Tailwind', 'TypeScript'] },
        { name: t('skills.categories.backend'), icon: <Server size={32} />, items: ['Node.js', 'Python', 'SQL'] },
        { name: t('skills.categories.mobile'), icon: <Smartphone size={32} />, items: ['React Native'] },
        { name: t('skills.categories.devops'), icon: <Globe size={32} />, items: ['Docker', 'CI/CD'] },
        { name: t('skills.categories.tools'), icon: <Code size={32} />, items: ['Git', 'VS Code', 'Figma'] },
        { name: t('skills.categories.database'), icon: <Database size={32} />, items: ['PostgreSQL', 'MongoDB', 'Redis'] },
    ];

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <Motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
                >
                    {t('skills.title')}
                </Motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <Motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard hoverEffect={true} className="h-full">
                                <div className="flex items-center mb-4 text-blue-600 dark:text-blue-400">
                                    {skill.icon}
                                    <h3 className="text-xl font-bold ml-3 text-gray-900 dark:text-white">{skill.name}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
