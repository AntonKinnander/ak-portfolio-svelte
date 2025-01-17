<script lang="ts">
    import * as Drawer from "$lib/components/ui/drawer";
  </script>
<div>
<Drawer.Root class="drawer-main">
    <Drawer.Trigger>Open</Drawer.Trigger>
    <Drawer.Content class="drawer-main">
      <Drawer.Header>
        <Drawer.Title>Are you sure absolutely sure?</Drawer.Title>
        <Drawer.Description>This action cannot be undone.</Drawer.Description>
      </Drawer.Header>
      <Drawer.Footer>
        <button class = "color-slate-200">X</button>
        <Drawer.Close></Drawer.Close>
      </Drawer.Footer>
    </Drawer.Content>
</Drawer.Root>
</div>


<style>
  button {
    padding: 0.5rem 1rem;
    background-color: #333;
    color: rgb(255, 0, 0);
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

.drawer-main {
    width: 50vw;
    color: blue;
}

  </style>