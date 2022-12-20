<script lang="ts">
	export let action = () => {
		//do nothing
	}; // seriously how do you do this?
</script>

<button
	on:click={action}
	class="bg-gradient-to-r from-orange-300 to-purple-300 w-fit p-4 rounded-lg drop-shadow-lg"
>
	<slot />
</button>
