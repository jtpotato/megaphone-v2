<script lang="ts">
	let customClasses = '';
	export { customClasses as class };

	export let variant: '' | 'p' | 'h1' | 'h2' = '';

	let tailwindClass = '';
	if (variant === 'h1') {
		tailwindClass = 'text-7xl';
	}
	if (variant === 'h2') {
		tailwindClass = 'text-4xl';
	}
</script>

<p class="mb-5 {tailwindClass} {customClasses}">
	<slot />
</p>
