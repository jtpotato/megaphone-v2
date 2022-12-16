<script>
	import Link from "$lib/ui/boba-ui/ExternalLink.svelte"
	import Text from "$lib/ui/boba-ui/Text.svelte"
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div>
	<Text variant="h1">We're Megaphone 📢</Text>
	<Text>
		As our name implies, our mission is to give people a voice.
		We also know that the internet can be a toxic, dangerous place.
		While allowing people to be heard and creating a safe environment sound like two conflicting goals,
		we are confident that it is possible. While our platform's Terms of Service sound harsh,
		it's really just a verbose way of saying "please be nice".
	</Text>
	<Text>
		At least, that's what we would say if we were serious about this. Megaphone is one of <Link href="https://youtube.com/@jtpotato">my</Link>
		silly projects, and I doubt any of what I just said above is true. Do have a look around anyway.
	</Text>
</div>
