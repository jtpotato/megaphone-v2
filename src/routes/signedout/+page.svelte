<script>
	import Text from '$lib/ui/boba-ui/Text.svelte';
	import Post from '$lib/ui/boba-ui/Post.svelte';
	import ExternalLink from '$lib/ui/boba-ui/ExternalLink.svelte';
</script>

<div>
	<Text>You're not signed in, but that's okay. You can still check out the cool stuff here.</Text>
	<Text>Top Shouts:</Text>
	<Post
		profileName="John Citizen"
		profileHandle="@jcitizen"
		profilePictureURL="https://pbs.twimg.com/profile_images/1469062206377582600/8uH6FfBy_400x400.png"
	>
		Hey guys, just letting you know that the Post component now works! We hope. Report any bugs to <ExternalLink
			href="https://github.com/jtpotato/megaphone-v2"
			>https://github.com/jtpotato/megaphone-v2</ExternalLink
		>
	</Post>
</div>
