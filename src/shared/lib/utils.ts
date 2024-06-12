import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios, { CreateAxiosDefaults } from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const options: CreateAxiosDefaults = {
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    TOKEN: "123",
  },
  withCredentials: true,
};

export const api = axios.create(options);
