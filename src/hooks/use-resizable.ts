import { useEffect, useState, useRef, RefObject } from 'react';

enum ResizeKnobPosition {
  left = 'left',
  right = 'right',
  bottom = 'bottom',
}

interface UseResizableProps {
  cardWrapperRef: RefObject<HTMLDivElement>;
  leftResizeKnob?: RefObject<HTMLDivElement>;
  rightResizeKnob?: RefObject<HTMLDivElement>;
  bottomResizeKnob?: RefObject<HTMLDivElement>;
  initialWidth?: number;
  initialHeight?: number;
}

const useResizable = ({
  cardWrapperRef,
  leftResizeKnob,
  rightResizeKnob,
  bottomResizeKnob,
  initialWidth = 300,
  initialHeight = 200,
}: UseResizableProps) => {
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);

  const isResizingRef = useRef(false);
  const knobRef = useRef<ResizeKnobPosition>(ResizeKnobPosition.left);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const startWidthRef = useRef(width);
  const startHeightRef = useRef(height);
  const newWidthRef = useRef(width);
  const newHeightRef = useRef(height);

  const handlePointerDown = (
    event: MouseEvent | TouchEvent,
    knobPosition: ResizeKnobPosition
  ) => {
    isResizingRef.current = true;
    knobRef.current = knobPosition;

    // Determine initial touch/mouse positions
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;

    if (knobPosition === ResizeKnobPosition.left || knobPosition === ResizeKnobPosition.right) {
      startXRef.current = clientX;
      startWidthRef.current = cardWrapperRef.current?.offsetWidth || 0;
    }

    if (knobPosition === ResizeKnobPosition.bottom) {
      startYRef.current = clientY;
      startHeightRef.current = cardWrapperRef.current?.offsetHeight || 0;
    }

    document.body.style.userSelect = 'none';
  };

  const handlePointerMove = (event: MouseEvent | TouchEvent) => {
    if (!isResizingRef.current) return;

    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;

    if (knobRef.current === ResizeKnobPosition.left) {
      const width = startWidthRef.current - (clientX - startXRef.current);
      newWidthRef.current = Math.max(width, 400);
    } else if (knobRef.current === ResizeKnobPosition.right) {
      const width = startWidthRef.current + (clientX - startXRef.current);
      newWidthRef.current = Math.max(width, 400);
    } else if (knobRef.current === ResizeKnobPosition.bottom) {
      const height = startHeightRef.current + (clientY - startYRef.current);
      newHeightRef.current = Math.max(height, 380);
    }

    if (cardWrapperRef.current) {
      if (knobRef.current === ResizeKnobPosition.left || knobRef.current === ResizeKnobPosition.right) {
        cardWrapperRef.current.style.width = Math.max(newWidthRef.current, 50) + 'px';
      } else if (knobRef.current === ResizeKnobPosition.bottom) {
        cardWrapperRef.current.style.height = Math.max(newHeightRef.current, 50) + 'px';
      }
    }
  };

  const handlePointerUp = () => {
    isResizingRef.current = false;
    document.body.style.userSelect = '';
    setWidth(newWidthRef.current);
    setHeight(newHeightRef.current);
  };

  useEffect(() => {
    const attachListener = (
      knobRef: RefObject<HTMLDivElement> | undefined,
      position: ResizeKnobPosition
    ) => {
      if (knobRef && knobRef.current) {
        const pointerDownHandler = (e: MouseEvent | TouchEvent) => handlePointerDown(e, position);
        knobRef.current.addEventListener('mousedown', pointerDownHandler);
        knobRef.current.addEventListener('touchstart', pointerDownHandler, { passive: false });

        return () => {
          if (knobRef.current) {
            knobRef.current.removeEventListener('mousedown', pointerDownHandler);
            knobRef.current.removeEventListener('touchstart', pointerDownHandler);
          }
        };
      }
    };

    const cleanupLeft = attachListener(leftResizeKnob, ResizeKnobPosition.left);
    const cleanupRight = attachListener(rightResizeKnob, ResizeKnobPosition.right);
    const cleanupBottom = attachListener(bottomResizeKnob, ResizeKnobPosition.bottom);

    document.addEventListener('mousemove', handlePointerMove);
    document.addEventListener('mouseup', handlePointerUp);
    document.addEventListener('touchmove', handlePointerMove, { passive: false });
    document.addEventListener('touchend', handlePointerUp);

    return () => {
      cleanupLeft && cleanupLeft();
      cleanupRight && cleanupRight();
      cleanupBottom && cleanupBottom();
      document.removeEventListener('mousemove', handlePointerMove);
      document.removeEventListener('mouseup', handlePointerUp);
      document.removeEventListener('touchmove', handlePointerMove);
      document.removeEventListener('touchend', handlePointerUp);
    };
  }, [leftResizeKnob, rightResizeKnob, bottomResizeKnob, cardWrapperRef]);

  return { width, height, setWidth, setHeight };
};

export default useResizable;
