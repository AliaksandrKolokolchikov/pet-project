import { useEffect, useRef, useState } from 'react';

export const useOutsideClickListener = (initialIsVisible: boolean) => {
  const [isShow, setIsShow] = useState<boolean>(initialIsVisible);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
  return { ref, isShow, setIsShow };
};
