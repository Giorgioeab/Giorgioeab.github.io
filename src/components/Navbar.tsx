import React, { useState, useEffect, useRef, useMemo, useCallback, type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';

interface Language {
    code: string;
    label: string;
    flag: ReactElement;
}

interface NavLink {
    name: string;
    href: string;
}

const FLAGS: Record<string, ReactElement> = {
    pt: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48" className="w-6 h-4 rounded-sm object-cover shadow-sm">
            <rect width="72" height="48" fill="#009c3b" />
            <polygon points="36,8 64,24 36,40 8,24" fill="#ffdf00" />
            <circle cx="36" cy="24" r="10" fill="#002776" />
            <path d="M36,24" stroke="#ffffff" strokeWidth="2" />
        </svg>
    ),
    en: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48" className="w-6 h-4 rounded-sm object-cover shadow-sm">
            <defs>
                <pattern id="us-stripes" width="72" height="8" patternUnits="userSpaceOnUse">
                    <rect width="72" height="4" fill="#b22234" />
                    <rect y="4" width="72" height="4" fill="#ffffff" />
                </pattern>
                <pattern id="us-stars" x="2" y="2" width="8" height="8" patternUnits="userSpaceOnUse">
                    <circle cx="2.5" cy="2.5" r="1" fill="#ffffff" />
                </pattern>
            </defs>
            <rect width="72" height="48" fill="url(#us-stripes)" />
            <rect width="30" height="21" fill="#0a3161" />
            <rect width="30" height="21" fill="url(#us-stars)" />
        </svg>
    ),
    es: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48" className="w-6 h-4 rounded-sm object-cover shadow-sm">
            <rect width="72" height="48" fill="#AA151B" />
            <rect y="12" width="72" height="24" fill="#F1BF00" />
        </svg>
    )
};

const Navbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const langMenuRef = useRef<HTMLDivElement>(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close lang menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
                setIsLangMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const languages: Language[] = useMemo(() => ([
        { code: 'pt-BR', label: 'PT-BR', flag: FLAGS.pt },
        { code: 'en', label: 'EN', flag: FLAGS.en },
        { code: 'es', label: 'ES', flag: FLAGS.es }
    ]), []);

    const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

    const handleLanguageChange = useCallback((code: string) => {
        i18n.changeLanguage(code);
        localStorage.setItem('lang', code);
    }, [i18n]);

    const navLinks: NavLink[] = useMemo(() => ([
        { name: t('navbar.home'), href: '#' },
        { name: t('navbar.about'), href: '#about' },
        { name: t('navbar.skills'), href: '#skills' },
        { name: t('navbar.projects'), href: '#projects' },
        { name: t('navbar.contact'), href: '#contact' },
    ]), [t]);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-lg py-4'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
                >
                    {t('common.brand')}
                </Motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {link.name}
                        </a>
                    ))}

                    <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-300 dark:border-gray-700">
                        {/* Language Dropdown */}
                        <div className="relative" ref={langMenuRef}>
                            <button
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                className="flex items-center space-x-2 px-3 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300 border border-transparent hover:border-gray-300 dark:hover:border-gray-700"
                                aria-haspopup="listbox"
                                aria-expanded={isLangMenuOpen}
                                aria-label={t('common.language')}
                            >
                                {currentLang.flag}
                                <span className="text-sm font-medium ml-1">{currentLang.label}</span>
                                <ChevronDown size={14} className={`transform transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {isLangMenuOpen && (
                                    <Motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden backdrop-blur-md z-50"
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => {
                                                    handleLanguageChange(lang.code);
                                                    setIsLangMenuOpen(false);
                                                }}
                                                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${currentLang.code === lang.code ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                                                    }`}
                                            >
                                                {lang.flag}
                                                <span className="text-sm font-medium">{lang.label}</span>
                                            </button>
                                        ))}
                                    </Motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
                            title={t('common.toggleTheme')}
                            aria-label={t('common.toggleTheme')}
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
                        title={t('common.toggleTheme')}
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700 dark:text-gray-300"
                        aria-label={isOpen ? t('navbar.closeMenu', { defaultValue: 'Close menu' }) : t('navbar.openMenu', { defaultValue: 'Open menu' })}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <Motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
                    id="mobile-menu"
                >
                    <div className="px-6 py-4 flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 block"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">{t('common.language')}</p>
                            <div className="grid grid-cols-3 gap-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            i18n.changeLanguage(lang.code);
                                            setIsOpen(false);
                                        }}
                                        className={`flex flex-col items-center justify-center p-2 rounded-lg border ${currentLang.code === lang.code
                                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                                : 'border-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                                            }`}
                                    >
                                        <div className="mb-1 scale-150">{lang.flag}</div>
                                        <span className="text-xs font-medium">{lang.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </Motion.div>
            )}
        </nav>
    );
};

export default Navbar;
