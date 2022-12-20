<script lang="ts">
	import { goto } from "$app/navigation";
    import { isSignedIn } from "../stores";

    let page_isSignedIn: boolean;
    isSignedIn.subscribe((value) => { page_isSignedIn = value; });
</script>

<div>
    {#if page_isSignedIn}
        <slot />
    {:else}
        <script>
            goto("/login")
        </script>
    {/if}
</div>