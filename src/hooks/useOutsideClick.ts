import { useEffect, useState } from 'react';

function useOutsideClick(setShowMenu: CallableFunction) {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!target) return;

    function handleClickOutside(event: MouseEvent) {
      //when mousedown event called
      if (target && !target.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowMenu, target]);

  return { setTarget };
}

export default useOutsideClick;
