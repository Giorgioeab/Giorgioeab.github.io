import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-white/50 dark:bg-black/50 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 py-8">
            <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
                <p>&copy; {new Date().getFullYear()} {t('common.brand')}. {t('footer.rights')}</p>
            </div>
        </footer>
    );
};

export default Footer;
