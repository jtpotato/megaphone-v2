import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { isSignedIn } from '../stores';

export const load = (() => {
	let page_isSignedIn;
	isSignedIn.subscribe((value) => {
        console.log("isSignedIn value changed");
		page_isSignedIn = value;
	});
    
	if (page_isSignedIn) {
		console.log('user not signed interface');
		throw redirect(307, '/login');
	}
}) satisfies LayoutServerLoad;
