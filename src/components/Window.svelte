<script lang="ts">
  import type { Snippet } from "svelte";
  import { fade } from "svelte/transition";

  // Take children prop to render window content
  const { children }: { children: Snippet } = $props();

  // Window position state
  let position = $state({
    x: window.innerWidth / 2 - 150,
    y: window.innerHeight / 2 - 100,
  });
  // Dragging state
  let isDragging: boolean = $state(false);
  let offset = $state({ x: 0, y: 0 });

  /** Handle mouse down event to start dragging */
  const onMouseDown = (e: MouseEvent) => {
    isDragging = true;
    offset = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  /** Handle mouse move event to update window position */
  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    position = {
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    };
  };

  /** Handle mouse up event to stop dragging */
  const onMouseUp = () => {
    isDragging = false;
  };
</script>

<svelte:window on:mousemove={onMouseMove} on:mouseup={onMouseUp} />

<div
  class="fixed min-h-[200px] w-[300px] rounded-lg border bg-card text-card-foreground shadow-lg"
  style="left: {position.x}px; top: {position.y}px;"
  transition:fade={{ duration: 150 }}
>
  <!-- Add draggable handle to the first child only -->
  <div onmousedown={onMouseDown} class="cursor-move">
    {@render children()}
  </div>
</div>
