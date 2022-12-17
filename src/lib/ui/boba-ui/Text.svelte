<script lang="ts">
	export let variant: '' | 'p' | 'h1' = '';

	let tailwindClass = '';
	if (variant === 'h1') {
		tailwindClass = 'text-7xl';
	}
</script>

<p class="mb-5 {tailwindClass}">
	<slot />
</p>
