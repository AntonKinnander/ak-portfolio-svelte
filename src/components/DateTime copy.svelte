<script>
  import { onMount } from "svelte";
  //export a time and date in format dd/mm/yyyy hh:mm
  let date = new Date();
  let time = `${date.getHours()}:${date.getMinutes()}`;
  let today = `${date.getDate()}/${date.getMonth() + 1}/2001`;
  onMount(() => {
    const interval = setInterval(() => {
      date = new Date();
      time = `${date.getHours()}:${date.getMinutes()}`;
      //define date, month and day update but year is meant to be static 2001
      today = `${date.getDate()}/${date.getMonth() + 1}/2001`;
    }, 1000);
    return () => clearInterval(interval);
  });
</script>

<div class="flex flex-row items-center justify-start gap-4">
  <p>{today} {time}</p>
</div>
