import { writable } from "svelte/store";

export const isSignedIn = writable(false);
export const isProduction = writable(false);
export const userProfile = writable({
    username: "",
    handle: ""
});