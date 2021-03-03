<script>
    import { onMount } from 'svelte';
    import 'flatpickr/dist/themes/light.css';
    import flatpickr from 'flatpickr';
    import { German } from 'flatpickr/dist/l10n/de.js';

    export let date;

    if (date === 'new') {
    } else {
    }

    function save() {
        console.log(fp.selectedDates);
    }

    let fp;
    onMount(() => {
        fp = flatpickr('#datepicker', {
            locale: German,
            altInput: true,
            altFormat: 'd.m.Y',
            dateFormat: 'Y-m-d',
            defaultDate: 'today',
            disable: [], // TODO
        });
    });
</script>

<style>
</style>

<h1>DETAILS FOR {date}</h1>

<form on:submit|preventDefault="{save}">
    <input type="text" id="datepicker" placeholder="Datum wählen" readonly />

    <button type="submit">Eintragen</button>
</form>
