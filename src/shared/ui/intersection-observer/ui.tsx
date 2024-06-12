import { FC, useEffect, useRef } from "react";
import { IIntersectionObserverProps } from "@/shared/ui/intersection-observer/model.ts";

export const IntersectionObserverComponent: FC<IIntersectionObserverProps> = ({
  onIntersection,
  threshold = 0.5,
  rootMargin = "0px",
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentTarget = targetRef.current;
    if (!currentTarget) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && onIntersection) {
          onIntersection();
        }
      },
      { threshold, root: null, rootMargin },
    );

    observer.observe(currentTarget);

    return () => {
      observer.unobserve(currentTarget);
    };
  }, [onIntersection, threshold, rootMargin]);

  return <div ref={targetRef} />;
};
