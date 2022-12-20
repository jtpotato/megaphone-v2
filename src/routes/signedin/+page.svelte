<script lang="ts">
	import Text from '$lib/ui/boba-ui/Text.svelte';
	import { getAuth } from 'firebase/auth';
	import {
		doc,
		DocumentSnapshot,
		getDoc,
		getFirestore,
		type DocumentData
	} from 'firebase/firestore';
	import { userProfile } from '../stores';
</script>

<div>
	<Text>You are signed in as: {$userProfile ? $userProfile.username : ''}</Text>

	<!--The bit where we tell people to say something-->
</div>
