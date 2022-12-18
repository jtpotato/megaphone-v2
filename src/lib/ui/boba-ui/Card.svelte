<script lang="ts">
	export let tailwindClasses = ""
	export let glass = false
	let customClasses = ""
	export { customClasses as class }
</script>

<div class="rounded-lg drop-shadow-lg p-5 bg-slate-50 {tailwindClasses} {customClasses} {glass ? "bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40" : ""}">
	<slot />
</div>
