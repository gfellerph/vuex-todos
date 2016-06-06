<template>
	<div class="popup" :class="['popup', {open: open}]">
		<div class="popup-toggler" @click="togglePopup">
			<slot name="label"></slot>
		</div>
		<div class="popup-content card-panel" data-anchor="{{anchor}}">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script>
	import cuid from 'cuid';

	export default {
		data () {
			return {
				open: false
			}
		},
		props: {
			anchor: {
				required: false,
				default: 'left',
				type: String
			}
		},
		methods: {
			togglePopup () {
				this.open = !this.open;
			}
		}
	}
</script>

<style lang="scss">
	.popup {
		position: relative;
		perspective: 500px;
		z-index: 2;
	}

	.popup-content {
		position: absolute;
		left: 0;
		margin: 0;
		background: white;
		min-width: 250px;
		opacity: 0;
		visibility: hidden;
		transform: rotateX(-70deg);
		transform-origin: top center;
		transition: all 250ms, visibility 250ms 250ms;

		&[data-anchor="right"] {
			right: 0;
			left: auto;
		}

		.open & {
			opacity: 1;
			visibility: visible;
			transform: rotateX(0);
			transition: all 200ms ease-out, visibility 0s 0s;
		}
	}

	.popup-toggler {
		cursor: pointer;
	}
</style>