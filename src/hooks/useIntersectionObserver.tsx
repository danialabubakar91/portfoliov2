import {useState, useEffect, useRef} from 'react'

const useIntersectionObserver = (callback: IntersectionObserverCallback, options: IntersectionObserverInit) => {
    const observer = useRef<IntersectionObserver | null>(null);
    const elementRef = useRef<HTMLElement[]>([]);

    
}