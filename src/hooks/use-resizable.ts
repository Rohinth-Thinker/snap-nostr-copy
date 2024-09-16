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

    // TODO: Add limit to width and height
    if (knobRef.current === ResizeKnobPosition.left) {
      newWidthRef.current = startWidthRef.current - (e.clientX - startXRef.current);
    } else if (knobRef.current === ResizeKnobPosition.right) {
      newWidthRef.current = startWidthRef.current + (e.clientX - startXRef.current);
    } else if (knobRef.current === ResizeKnobPosition.bottom) {
      newHeightRef.current = startHeightRef.current + (e.clientY - startYRef.current);
    }

    if (cardWrapperRef.current) {
      cardWrapperRef.current.style.width = Math.max(newWidthRef.current, 50) + 'px';
      cardWrapperRef.current.style.height = Math.max(newHeightRef.current, 50) + 'px';
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
