<script>
  import { onMount } from "svelte";

  let date = new Date();
  let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let formattedDate = formatDateTime(date);

  onMount(() => {
    const interval = setInterval(() => {
      date = new Date();
      formattedDate = formatDateTime(date);
    }, 1000);

    return () => clearInterval(interval);
  });

  function formatDateTime(date) {
    const day = dayNames[date.getDay()];
    const dateNum = date.getDate();
    const month = monthNames[date.getMonth()];
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day} ${dateNum} ${month} 2001 ${hours}:${minutes}`;
  }
</script>

<div>
  <p>{formattedDate}</p>
</div>
