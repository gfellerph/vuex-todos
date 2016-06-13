<template>
	<footer>
		<p class="grey-text center-align">Created with</p>
		<div class="footer-logos">
			<a href="http://vuejs.org/" target="_blank">
				<img src="~src/assets/logo.png" alt="vue js logo">
			</a>
			<i class="material-icons grey-text">add</i>
			<a href="https://firebase.google.com/" target="_blank">
				<img src="~src/assets/firebase.png" alt="firebase logo">
			</a>
		</div>
	</footer>
</template>

<style lang="scss">
	.footer-logos {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 20px 0;

		img {
			width: 42px;
			margin: 0 20px;
		}
	}
</style>