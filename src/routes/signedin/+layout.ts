// Could this be dangerous???

import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { isSignedIn } from '../stores';
import { getAuth } from 'firebase/auth';

let page_isSignedIn: boolean;

isSignedIn.subscribe((value) => {
	console.log(`isSignedIn value changed: ${value}`);
	page_isSignedIn = value;
});

export const load = (() => {
	if (!page_isSignedIn) {
		console.log('user not signed in');
		throw redirect(307, '/login');
	}
}) satisfies LayoutServerLoad;
