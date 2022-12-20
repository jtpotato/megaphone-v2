<script>
	import '$lib/ui/boba-ui/styles.css';
	import DevWarning from '$lib/ui/DevWarning.svelte';
	import Header from '$lib/ui/Header.svelte';
	import { isProduction } from './stores';

	let page_isProduction = false;
	isProduction.subscribe((value) => {
		page_isProduction = value;
	})
</script>

<div class="app">
	{#if !page_isProduction}
		<DevWarning />
	{/if}
	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
