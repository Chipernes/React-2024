import { useState, useEffect, useRef } from 'react';

function useElementSize<T extends HTMLElement>() {
    const ref = useRef<T | null>(null);
    const [size, setSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

    useEffect(() => {
        const updateSize = () => {
            if (ref.current) {
                setSize({
                    width: ref.current.offsetWidth,
                    height: ref.current.offsetHeight,
                });
            }
        };

        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return [ref, size] as const;
}

export default useElementSize;
