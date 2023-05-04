<script>
	import { articleHeaderObjList } from '../../constants';
	import ArticleRow from './ArticleRow.svelte';
</script>

<main>
	{#each articleHeaderObjList as articleHeaderObj}
		<ArticleRow {...articleHeaderObj} />
	{/each}
</main>
