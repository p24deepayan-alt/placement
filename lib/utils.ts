
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Minimalistic polyfill for clsx and tw-merge since we cannot install packages
// This is a simplified version for demonstration purposes.

// clsx
type ClassValue = string | number | boolean | undefined | null | { [key: string]: any } | ClassValue[];
function toVal(mix: ClassValue): string {
  let k, y, str = '';
  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if ((y = toVal(mix[k]))) {
            str && (str += ' ');
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += ' ');
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx(...args: ClassValue[]): string {
  let i = 0, tmp, x, str = '';
  while (i < args.length) {
    if ((tmp = args[i++])) {
      if ((x = toVal(tmp))) {
        str && (str += ' ');
        str += x;
      }
    }
  }
  return str;
}

// tailwind-merge (very simplified)
function twMerge(...args: string[]): string {
  const classStr = clsx(...args);
  const classMap = new Map<string, string>();
  classStr.split(/\s+/).forEach(cls => {
    if (cls) {
      const parts = cls.split('-');
      const key = parts.length > 1 ? parts.slice(0, -1).join('-') : parts[0];
      const conflictKey = parts[0]; // e.g., 'bg', 'text', 'p'
      
      // Simple conflict resolution: last one wins
      // This doesn't handle complex cases like p-2 vs px-2
      let hasConflict = false;
      for (const k of classMap.keys()) {
          if(k.startsWith(conflictKey)) {
              classMap.delete(k);
          }
      }
      classMap.set(cls, cls);
    }
  });
  return Array.from(classMap.values()).join(' ');
}