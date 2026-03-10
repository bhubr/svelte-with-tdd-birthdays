<script lang="ts">
	export let name: string;
	export let dob: string;
</script>

<span><strong>{name}</strong></span>
<span>{dob}</span>

<style>
	span {
		display: inline-block;
		width: 100px;
	}
</style>
