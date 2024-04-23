/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

const getWidth = () => window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

const getHeight = () => window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

const useOnResize = (fnToExecute, delay = 150) => {
    // On conserve la largeur actuelle de la fenêtre
    const [width, setWidth] = useState(getWidth());
    const [height, setHeight] = useState(getHeight());
    const [isResizing, setIsResizing] = useState(false);

    useEffect(() => {
        // On va implémenter un timer pour éviter d'exécuter trop régulièrement le hook
        let timeout = null;

        const resizeListener = () => {
            // Préviens l'éxécution du précédent timeout
            if (timeout !== null) {
                clearTimeout(timeout);
            }

            if (!isResizing) {
                setIsResizing(true);
            }

            // On update l'état après 150ms ou le délai passé en paramètre
            timeout = window.setTimeout(() => {
                setWidth(getWidth());
                setHeight(getHeight());
                setIsResizing(false);
                fnToExecute(getWidth(), getHeight());
            }, delay);
        };

        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, []);

    return { isResizing, height, width };
};

export default useOnResize;
