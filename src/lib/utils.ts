import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// cn stands for 'class names' and is the standard utility for
// merging Tailwind classes, especially handling conflicting styles.
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
