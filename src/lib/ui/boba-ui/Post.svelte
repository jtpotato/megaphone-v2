<script lang="ts">
	import Card from './Card.svelte';

	export let profilePictureURL = '';
	export let profileName = '';
	export let profileHandle = '';
</script>

<!--Built on Card.svelte, designed for Twitter-esque posts-->

<Card>
	<div class="flex items-center gap-2 mb-2">
		<img src={profilePictureURL} alt="A Profile" class="h-12 w-12 rounded-full" />
		<div>
			<p>
				{profileName}
			</p>
			<p class="text-orange-300">{profileHandle}</p>
		</div>
	</div>
	<div class="ml-14">
		<slot />
	</div>
</Card>
