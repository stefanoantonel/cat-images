<script>
	import ImageContainer from '@/components/ImageContainer.svelte';
</script>

<h2 class="header">Discover the Cuttest cat images</h2>

<div class="app-content">
	<ImageContainer />
</div>

<div class="footer">App created with Svelte5</div>

<style>
	.header {
		text-align: center;
		background-color: #aa8749;
		color: white;
		font-style: italic;
		padding: 10px;
		height: 30px;
	}
	.app-content {
		/* full - header - footer */
		height: calc(100vh - 140px);
		overflow-y: auto;
	}
	.footer {
		height: 20px;
		background-color: #aa874955;
		color: gray;
		text-align: center;
		padding: 10px 0;
		line-height: 20px;
		font-size: small;
	}
</style>
