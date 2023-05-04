<script>
	import { theme } from '../../../stores';

	let isLight;

	theme.subscribe((v) => {
		isLight = v;
	});
</script>

<footer>
	<p>
		<a href="https://github.com/obzva" class={isLight ? 'light' : 'dark'}>Github</a>
		•
		<a
			href="https://www.linkedin.com/in/dongyeong-chon-05b840248/"
			class={isLight ? 'light' : 'dark'}>Linkedin</a
		>
	</p>
	<p>Made with <a href="https://svelte.dev/" class={isLight ? 'light' : 'dark'}>Svelte</a></p>
</footer>

<style>
	footer {
		margin-top: auto;
		padding-top: 1.75rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
