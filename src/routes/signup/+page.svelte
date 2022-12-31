<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/ui/boba-ui/Button.svelte';
	import Card from '$lib/ui/boba-ui/Card.svelte';
	import Text from '$lib/ui/boba-ui/Text.svelte';

	import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
	import { isSignedIn } from '../stores';

	let email: string;
	let password: string;

	const onSignUp = () => {
		const auth = getAuth();
		if (!email || !password) {
			return;
		}

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log('Signed Up!');
				goto('/signedin');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	};
</script>

<div class="flex justify-center align-center">
	<div
		class="bg-gradient-to-bl from-orange-300 to-purple-300 w-screen h-screen -z-10 absolute top-0 left-0"
	/>
	<Card glass class="w-1/2">
		<div class="flex flex-col space-y-4 align-center justify-center">
			<div>
				<Text variant="h2" class="text-center">Sign Up!</Text>
				<p class="text-center">We've got some cool stuff here. We hope.</p>
			</div>
			<div>
				<p>Email</p>
				<input bind:value={email} />
				<p>Password</p>
				<input type="password" bind:value={password} />
			</div>
			<Button action={onSignUp}>Sign Up</Button>
		</div>
	</Card>
</div>
