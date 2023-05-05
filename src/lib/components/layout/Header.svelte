<script>
	import { theme } from '../../../stores';
	import ThemeButton from './ThemeButton.svelte';

	let isLight;

	theme.subscribe((v) => {
		isLight = v;
	});

	function handleButtonClick() {
		theme.update((v) => !v);
	}
</script>

<header class={isLight ? 'light' : 'dark'}>
	<h1>Observing...</h1>
	<ThemeButton on:click={handleButtonClick} isLight={isLight}/>
</header>
<aside class={isLight ? 'light' : 'dark'}>
	<div id="profile-wrapper">
		<div id="profile-image" />
		<div>
			<p>
				Personal blog by <a href="https://www.linkedin.com/in/dongyeong-chon-05b840248/" class={isLight ? 'light' : 'dark'}
					>Dongyeong Chon</a
				>.
			</p>
			<p>I share what I observed.</p>
		</div>
	</div>
</aside>

<style>
	header {
		margin-bottom: 2.625rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	h1 {
		margin: 0;
	}
	p {
		margin: 0;
	}
	#profile-wrapper {
		display: flex;
		align-items: center;
		margin-bottom: 2.5rem;
	}
	#profile-image {
		margin-right: 0.875rem;
		margin-bottom: 0;
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 50%;
		background-color: #005ecc;
	}
</style>
