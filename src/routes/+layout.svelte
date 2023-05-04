<script>
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import '../app.css';
	import { theme } from '../stores';

	let isLight;

	theme.subscribe((v) => {
		isLight = v;
	});
</script>

<div id="body" class={isLight ? 'light' : 'dark'}>
	<div id="container">
		<Header />
		<slot />
		<Footer />
	</div>
</div>

<style>
	#container {
		min-height: 100vh;
		min-height: 100dvh;
		max-width: 42rem;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		padding: 2.625rem 1.3125rem;
	}
</style>
