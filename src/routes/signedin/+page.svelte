<script lang="ts">
	import Text from "$lib/ui/boba-ui/Text.svelte";
    import { getAuth } from "firebase/auth";
    const auth = getAuth();
    let currentUserEmail = auth.currentUser?.email
</script>

<div>
    <Text>You are signed in as: {currentUserEmail}</Text>

    <!--The bit where we tell people to say something-->
</div>