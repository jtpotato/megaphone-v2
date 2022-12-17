<script>
	import Text from "$lib/ui/boba-ui/Text.svelte";
    import Post from "$lib/ui/boba-ui/Post.svelte";
</script>
<div>
    <Text>You're not signed in, but that's okay. You can still check out the cool stuff here.</Text>
    <Text>Top Shouts:</Text>
    <Post profileName="John Citizen" profileHandle="@jcitizen" profilePictureURL="https://pbs.twimg.com/profile_images/1469062206377582600/8uH6FfBy_400x400.png">
        This is to test if the Post feature works.
    </Post>
</div>