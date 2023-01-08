<script>
	import { onMount } from 'svelte';

	export let filter = '';

	onMount(() => {
		console.log('The "Image" component has mounted');
	});
</script>

<img src="/photo.jpeg" class={`image ${filter}`.trim()} alt="Profile" />

<svg>
	<filter id="custom-filter-wavy">
		<feTurbulence id="turbulence" type="turbulence" numOctaves="1" result="NOISE" />
		<feDisplacementMap in="SourceGraphic" in2="NOISE" scale="50" />
		<animate
			xlink:href="#turbulence"
			attributeName="baseFrequency"
			dur="60s"
			keyTimes="0;0.5;1"
			values="0.01 0.02;0.02 0.04;0.01 0.02"
			repeatCount="indefinite"
		/>
	</filter>
</svg>

<style>
	.image {
		width: 300px;
	}

	.image.filter-1 {
		filter: blur(5px);
	}

	.image.filter-2 {
		filter: contrast(200%);
	}

	.image.filter-3 {
		filter: grayscale(80%);
	}

	.image.filter-4 {
		filter: hue-rotate(90deg);
	}

	.image.filter-5 {
		filter: drop-shadow(16px 16px 20px red) invert(75%);
	}

	.image.filter-6 {
		filter: saturate(200%);
	}

	.image.filter-7 {
		filter: url(#custom-filter-wavy);
	}
</style>
