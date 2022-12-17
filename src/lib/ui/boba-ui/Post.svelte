<script lang="ts">
	import Card from './Card.svelte';
	import Text from './Text.svelte';

	export let profilePictureURL: string;
	export let profileName: string;
	export let profileHandle: string = '';
</script>

<!--Built on Card.svelte, designed for Twitter-esque posts-->

<Card>
	<div class="flex items-center gap-2">
		<img src={profilePictureURL} alt="A Profile" class="h-12 w-12 rounded-full" />
		<div>
			<p>
				{profileName}
			</p>
			<p>{profileHandle}</p>
		</div>
	</div>
	<div class="ml-14">
		<slot />
	</div>
</Card>
