import React, { useState, useRef, useEffect } from 'react';
import '../../../CSS/style.css';
import useIsMobile from '../../Hooks/useIsMobile';

interface WindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ title, onClose, children }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const windowRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const dragInfo = useRef({
    isDragging: false,
    offset: { x: 0, y: 0 },
  });

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (windowRef.current) {
      dragInfo.current.isDragging = true;
      const rect = windowRef.current.getBoundingClientRect();
      dragInfo.current.offset = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (dragInfo.current.isDragging && windowRef.current) {
        const newX = e.clientX - dragInfo.current.offset.x;
        const newY = e.clientY - dragInfo.current.offset.y;

        const { innerWidth, innerHeight } = window;
        const { offsetWidth, offsetHeight } = windowRef.current;

        const clampedX = Math.max(0, Math.min(newX, innerWidth - offsetWidth));
        const clampedY = Math.max(0, Math.min(newY, innerHeight - offsetHeight));

        setPosition({ x: clampedX, y: clampedY });
      }
    };

    const onMouseUp = () => {
      dragInfo.current.isDragging = false;
    };

    if (!isMobile) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isMobile]);

  return (
    <div
      ref={windowRef}
      className="window"
      style={isMobile ? {} : { left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className="topbar" onMouseDown={isMobile ? undefined : onMouseDown}>
        <span>{title}</span>
        <button onClick={onClose} className="closeButton"><img src='/buttons/x.svg' className='invert closeButtonSVG'/></button>
      </div>
      <div className="mainframe">
        {children}
      </div>
    </div>
  );
};

export default Window;
