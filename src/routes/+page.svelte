<script>
	import Link from '$lib/ui/boba-ui/ExternalLink.svelte';
	import InternalLink from '$lib/ui/boba-ui/InternalLink.svelte';
	import Text from '$lib/ui/boba-ui/Text.svelte';
	import Button from '$lib/ui/boba-ui/Button.svelte';
	import { isSignedIn } from './stores';

	let page_isSignedIn = false;

	isSignedIn.subscribe((value) => {
		page_isSignedIn;
	});

	const redirToPosts = () => {
		if (page_isSignedIn) {
			console.log('signedin');
			window.location.href = '/';
			return;
		}
		console.log('signedout');
		window.location.href = '/signedout';
	};
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div>
	<Text variant="h1">We're Megaphone 📢</Text>
	<Text>
		As our name implies, our mission is to give people a voice. We also know that the internet can
		be a toxic, dangerous place. While allowing people to be heard and creating a safe environment
		sound like two conflicting goals, we are confident that it is possible. While our platform's
		<Link href="https://github.com/jtpotato/megaphone-v2/blob/main/TOS.md">Terms of Service</Link> sound
		harsh, it's really just a verbose way of saying "please be nice".
	</Text>
	<Text>
		At least, that's what we would say if we were serious about this. Megaphone is one of <Link
			href="https://youtube.com/@jtpotato">my</Link
		>
		silly projects, and I doubt any of what I just said above is true. Do have a look around anyway.
	</Text>
	<InternalLink href="/signedin">
		<Button>
			<p class="text-white">See Top Posts</p>
		</Button>
	</InternalLink>
	<div class="h-5" />
	<Text>
		And if you're so curious, we do have a list of <Link
			href="https://github.com/jtpotato/megaphone-v2/issues">known technical issues</Link
		>.
	</Text>
</div>
