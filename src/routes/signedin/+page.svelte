<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/ui/boba-ui/Button.svelte';
	import Post from '$lib/ui/boba-ui/Post.svelte';
	import Text from '$lib/ui/boba-ui/Text.svelte';
	import { getAuth } from 'firebase/auth';
	import {
		addDoc,
		collection,
		doc,
		DocumentSnapshot,
		getDoc,
		getDocs,
		getFirestore,
		limit,
		orderBy,
		query,
		setDoc,
		type DocumentData
	} from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { userProfile } from '../stores';

	const db = getFirestore();
	const auth = getAuth();

	let shoutContents = '';

	const sendShout = async () => {
		if (auth.currentUser) {
			await addDoc(collection(db, 'posts'), {
				authorid: auth.currentUser.uid,
				content: shoutContents,
				unixdate: Date.now().toString()
			});

			shoutContents = '';
			await getLatestPosts();
		} else {
			goto('/login');
		}
	};

	let recentPostsList: any[] = [];
	const recentPostsStore = writable(recentPostsList);

	const getLatestPosts = async () => {
		recentPostsList = [];
		const recentPostsQuery = query(collection(db, 'posts'), orderBy('unixdate', 'desc'), limit(10));
		const recentPostsSnapshot = await getDocs(recentPostsQuery);
		recentPostsSnapshot.forEach(async (post) => {
			console.log('Recieved post');
			const docRef = doc(db, 'users', post.data().authorid);
			const docSnap = await getDoc(docRef);
			recentPostsList.push({
				authorid: post.data().authorid,
				content: post.data().content,
				unixdate: post.data().unixdate,
				authorname: docSnap.data()!.username,
				authorhandle: docSnap.data()!.handle
			});
			console.log(recentPostsList);
			recentPostsStore.set(recentPostsList);
		});
	}

	onMount(async () => {
		await getLatestPosts();
	});

	const getNameFromID = async (uid: string) => {

		return docSnap.data()!.name;
	};
</script>

<div>
	<Text>You are signed in as: {$userProfile ? $userProfile.username : ''}</Text>

	<!--The bit where we tell people to say something-->
	<input placeholder="Say something here" bind:value={shoutContents} />
	<div class="h-5" />
	<Button action={sendShout}>Send</Button>

	<div class="h-5" />

	<!--The bit where people read something-->
	<Text>Recent Posts</Text>
	{#each $recentPostsStore as post}
		<Post profileName={post.authorname} profileHandle="@{post.authorhandle}">{post.content}</Post>
		<div class="h-5" />
	{/each}
</div>
