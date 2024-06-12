export interface IIntersectionObserverProps {
  onIntersection: () => void;
  threshold?: number;
  rootMargin?: string;
}
