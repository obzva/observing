import { writable } from 'svelte/store';

const currentHour = new Date().getHours();
export const theme = writable(currentHour >= 6 && currentHour < 19);
