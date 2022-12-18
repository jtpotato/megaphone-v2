<script lang="ts">
    export let action = () => {};
</script>

<button on:click={action} class="bg-gradient-to-r from-orange-300 to-purple-300 w-fit p-4 rounded-lg drop-shadow-lg">
    <slot></slot>
</button>