import { useEffect, useRef,useState } from 'react';

const MouseFollower = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animate circle to follow dot with delay
  useEffect(() => {
    const followInterval = setInterval(() => {
      setCirclePos(prevPos => ({
        x: prevPos.x + (mousePos.x - prevPos.x) * 0.1,
        y: prevPos.y + (mousePos.y - prevPos.y) * 0.1
      }));
    }, 10); // ~60fps

    return () => {
      clearInterval(followInterval);
    };
  }, [mousePos]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-lg"
    >
      <div
        className="absolute border-2 border-secondary rounded-full w-24 h-24 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${circlePos.x}px`,
          top: `${circlePos.y}px`,
          transition: 'transform 0.05s ease-out'
        }}
      />
      <div
        className="absolute bg-secondary rounded-full w-3 h-3 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      />
    </div>
  );
}

export default MouseFollower