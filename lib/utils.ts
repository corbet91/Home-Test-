import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function removeEmptyAndUndefined<T extends Record<string, any>>(
  obj: T
): T {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (obj[key] === null || obj[key] === undefined || obj[key] === "") {
        delete obj[key];
      }
    }
  }

  return obj;
}
