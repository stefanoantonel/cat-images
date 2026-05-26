<script>
	import ImageContainer from '@/components/ImageContainer.svelte';
</script>

<header>Discover the cuttest cats</header>

<ImageContainer />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');

	header {
		text-align: center;
		color: #333;
		padding: 2rem 2rem 3rem;
		font-size: 2.5rem;
		font-weight: 700;
		background: transparent;
		font-family: 'Caveat', cursive;
		letter-spacing: -0.5px;
	}
	:global(body) {
		margin: 0;
		background-color: #f5f1e8;
	}
</style>
