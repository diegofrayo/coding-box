## Container with the same height and width

```css
.window {
  aspect-ratio: 1/1;
  width: 400px;
}
```

## @container example

```css
.my-container {
	container-name: audio-chat;
	container-type: inline-size;

	@container audio-chat (max-width: 400px) {
		.controls {
			flex-direction: column;

			.volume-slider-container {
				@apply mb-3;
				width: 100%;
			}
		}
	}
}
```