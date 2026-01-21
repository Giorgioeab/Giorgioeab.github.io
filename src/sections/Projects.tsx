import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion as Motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { ExternalLink, Github } from 'lucide-react';
import portfolioScreenshotPtBr from '../assets/portfolio_screenshot_pt_br.png';
import portfolioScreenshotEn from '../assets/portfolio_screenshot_en.png';
import portfolioScreenshotEs from '../assets/portfolio_screenshot_es.png';

interface ProjectLinks {
    demo: string;
    github: string;
}

interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
    links: ProjectLinks;
}

const Projects: React.FC = () => {
    const { t, i18n } = useTranslation();

    // Select portfolio screenshot based on current language
    const getPortfolioScreenshot = (): string => {
        switch (i18n.language) {
            case 'en':
                return portfolioScreenshotEn;
            case 'es':
                return portfolioScreenshotEs;
            default:
                return portfolioScreenshotPtBr;
        }
    };

    const projects: Project[] = [
        {
            title: t('projects.items.0.title'),
            description: t('projects.items.0.description'),
            tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
            image: getPortfolioScreenshot(),
            links: { demo: 'https://giorgioeab.github.io', github: 'https://github.com/Giorgioeab/Giorgioeab.github.io/tree/develop' }
        },
        {
            title: t('projects.items.1.title'),
            description: t('projects.items.1.description'),
            tech: ['React', 'Node.js', 'Express', 'MongoDB', 'SCSS'],
            image: 'https://placehold.co/600x400/9333ea/ffffff?text=Task+Manager',
            links: { demo: '#', github: 'https://github.com/Giorgioeab/frontend-task_manager' }
        },
        {
            title: t('projects.items.2.title'),
            description: t('projects.items.2.description'),
            tech: ['Python', 'Tkinter', 'SQLite'],
            image: 'https://placehold.co/600x400/db2777/ffffff?text=SGE',
            links: { demo: '#', github: 'https://github.com/Giorgioeab/ProjetoSGE' }
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-6">
                <Motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
                >
                    {t('projects.title')}
                </Motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard className="overflow-hidden p-0 h-full flex flex-col">
                                <div className="relative overflow-hidden group h-48">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                        <a
                                            href={project.links.demo}
                                            className="p-2 bg-white rounded-full text-gray-900 hover:bg-blue-500 hover:text-white transition-colors"
                                            title={t('projects.viewDemo')}
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.links.github}
                                            className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-800 hover:text-white transition-colors"
                                            title={t('projects.viewCode')}
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </GlassCard>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
