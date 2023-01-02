<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/ui/boba-ui/Button.svelte';
	import { redirect } from '@sveltejs/kit';
	import { isSignedIn } from '../stores';

	let page_isSignedIn: boolean;
	isSignedIn.subscribe((value) => {
		page_isSignedIn = value;
	});

	const goHome = () => {
		goto("/");
	}
</script>

<div>
	{#if page_isSignedIn}
		<slot />
	{:else}
		<p>Aw snap, you don't appear to be signed in.</p>
		<Button action={goHome}>Go Home</Button>
	{/if}
</div>
