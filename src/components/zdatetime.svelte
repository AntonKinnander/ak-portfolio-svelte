<script>
    import {onMount} from 'svelte';
//export a time and date in format dd/mm/yyyy hh:mm
    let date = new Date();
    let time = date.toLocaleTimeString();
    let today = date.toLocaleDateString();
    onMount(() => {
        const interval = setInterval(() => {
            date = new Date();
            time = date.toLocaleTimeString();
            today = date.toLocaleDateString();
        }, 1000);
        return () => clearInterval(interval);
    });    
</script>
