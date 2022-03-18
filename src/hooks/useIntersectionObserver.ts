import { useEffect, useState } from 'react';

interface useIntersectionObserverProps { 
  root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
  destroyer?: boolean;
}

const useIntersectionObserver = ({
  root,
  rootMargin = '0px',
  threshold = 1,
  onIntersect,
  destroyer = false,
}: useIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!target) return;
    if (destroyer) return () => observer.unobserve(target);

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { root, rootMargin, threshold },
    );
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [onIntersect, root, rootMargin, target, threshold, destroyer]);

  return { setTarget };
};

export default useIntersectionObserver;
