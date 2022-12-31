<script>
	import Button from '$lib/ui/boba-ui/Button.svelte';
	import Card from '$lib/ui/boba-ui/Card.svelte';
	import Text from '$lib/ui/boba-ui/Text.svelte';
	import { getAuth } from 'firebase/auth';
	import { doc, getFirestore, setDoc } from 'firebase/firestore';
	import { goto } from '$app/navigation';

	let handle = '';
	let username = '';

	const updateProfile = async () => {
		const db = getFirestore();
		const auth = getAuth();
		if (auth.currentUser) {
			await setDoc(doc(db, 'users', auth.currentUser.uid), {
				handle: `${handle}`,
				username: username
			}).then(() => {
				console.log('written to firebase!');
				goto('/signedin');
			});
		}
	};
</script>

<div>
	<div
		class="bg-gradient-to-bl from-orange-300 to-purple-300 w-screen h-screen -z-10 absolute top-0 left-0"
	/>
	<Card glass>
		<p>Choose a handle</p>
		<input bind:value={handle} />
		<p>... and a username</p>
		<input bind:value={username} />
		<div class="h-6" />
		<Button action={updateProfile}>Let's Go!</Button>
	</Card>
</div>
