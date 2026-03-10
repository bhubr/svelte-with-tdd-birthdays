<script lang="ts">
	import Birthday from './Birthday.svelte';
	import type { IBirthday } from './types';

	export let data: { birthdays: IBirthday[] };
</script>

{#each data.birthdays as birthday}
	<Birthday name={birthday.name} dob={birthday.dob} />
{/each}
