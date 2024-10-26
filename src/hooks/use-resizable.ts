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

  const handleMouseDown = (e: MouseEvent, knobPosition: ResizeKnobPosition) => {
    isResizingRef.current = true;
    knobRef.current = knobPosition;

    if (knobPosition === ResizeKnobPosition.left || knobPosition === ResizeKnobPosition.right) {
      startXRef.current = e.clientX;
      startWidthRef.current = cardWrapperRef.current?.offsetWidth || 0;
    }

    if (knobPosition === ResizeKnobPosition.bottom) {
      startYRef.current = e.clientY;
      startHeightRef.current = cardWrapperRef.current?.offsetHeight || 0;
    }

    document.body.style.userSelect = 'none';
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizingRef.current) return;

    if (knobRef.current === ResizeKnobPosition.left) {
      const width = startWidthRef.current - (e.clientX - startXRef.current);
      newWidthRef.current = Math.max(width, 400);
    } else if (knobRef.current === ResizeKnobPosition.right) {
      const width = startWidthRef.current + (e.clientX - startXRef.current);
      newWidthRef.current = Math.max(width, 400);
    } else if (knobRef.current === ResizeKnobPosition.bottom) {
      const height = startHeightRef.current + (e.clientY - startYRef.current);
      newHeightRef.current = Math.max(height, 380);
    }

    if (cardWrapperRef.current) {
      if(knobRef.current === ResizeKnobPosition.left || knobRef.current === ResizeKnobPosition.right) {
        cardWrapperRef.current.style.width = Math.max(newWidthRef.current, 50) + 'px';
      } else if(knobRef.current === ResizeKnobPosition.bottom) {
        cardWrapperRef.current.style.height = Math.max(newHeightRef.current, 50) + 'px';
      }
    }
  };

  const handleMouseUp = () => {
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
        const mouseDownHandler = (e: MouseEvent) => handleMouseDown(e, position);
        knobRef.current.addEventListener('mousedown', mouseDownHandler);

        return () => {
          if (knobRef.current) {
            knobRef.current.removeEventListener('mousedown', mouseDownHandler);
          }
        };
      }
    };

    const cleanupLeft = attachListener(leftResizeKnob, ResizeKnobPosition.left);
    const cleanupRight = attachListener(rightResizeKnob, ResizeKnobPosition.right);
    const cleanupBottom = attachListener(bottomResizeKnob, ResizeKnobPosition.bottom);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      cleanupLeft && cleanupLeft();
      cleanupRight && cleanupRight();
      cleanupBottom && cleanupBottom();
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [leftResizeKnob, rightResizeKnob, bottomResizeKnob, cardWrapperRef]);

  return { width, height, setWidth, setHeight };
};

export default useResizable;
