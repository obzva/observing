<script>
	import { theme } from '../../../stores';
	import { getFormattedDate } from '../../utils';

	export let title;
	export let href;
	export let createdAt;
	export let location;
	export let headLine;

	let isLight;

	theme.subscribe((v) => {
		isLight = v;
	});
</script>

<article>
	<header>
		<h3>
			<a {href} class={isLight ? 'light' : 'dark'}>{title}</a>
		</h3>
		<small class={isLight ? 'light' : 'dark'}
			>{getFormattedDate(createdAt) + ' • ' + location}</small
		>
	</header>
	<p>{headLine}</p>
</article>

<style>
	h3 {
		margin: 3.5rem 0 0.4375rem 0;
		font-size: 1.75rem;
	}
	a {
		text-decoration: none;
	}
	p {
		margin: 0 0 1.75rem 0;
	}
</style>
