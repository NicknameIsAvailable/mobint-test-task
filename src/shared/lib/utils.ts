import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import axios, {CreateAxiosDefaults} from "axios";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const options: CreateAxiosDefaults = {
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'TOKEN': '123'
    },
    withCredentials: true
}

export const api = axios.create(options)