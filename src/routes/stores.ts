import { writable } from "svelte/store";

export const isSignedIn = writable(false);
export const isProduction = writable(false);