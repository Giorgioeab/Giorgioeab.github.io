import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion as Motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { ExternalLink, Lock } from 'lucide-react';
import { toast } from 'sonner';
import portfolioScreenshotPtBr from '../assets/portfolio_screenshot_pt_br.webp';
import portfolioScreenshotEn from '../assets/portfolio_screenshot_en.webp';
import portfolioScreenshotEs from '../assets/portfolio_screenshot_es.webp';

import projeto2Image from '../assets/espanhol_essencia_thumb.webp';

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

    const handlePrivateRepo = (e: React.MouseEvent) => {
        e.preventDefault();
        toast.info(t('projects.privateRepo'), {
            description: t('projects.privateRepoDesc')
        });
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
            tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'PHP', 'MySQL'],
            image: projeto2Image,
            links: { demo: 'https://lp.espanholessencia.com.br', github: '#' }
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
                                        {project.links.github === '#' ? (
                                            <button
                                                onClick={handlePrivateRepo}
                                                className="p-2 bg-white rounded-full text-gray-900 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                                                title={t('projects.privateRepo')}
                                            >
                                                <Lock size={20} />
                                            </button>
                                        ) : (
                                            <a
                                                href={project.links.github}
                                                className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-800 hover:text-white transition-colors"
                                                title={t('projects.viewCode')}
                                            >
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    width={20}
                                                    height={20}
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap justify-center items-center gap-2 mt-auto">
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
