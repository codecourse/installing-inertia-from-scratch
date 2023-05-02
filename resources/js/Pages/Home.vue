<template>
    {{ message }}

    <!-- <Head title="Home" /> -->

    <Head>
        <title>Codecourse</title>
        <meta name="description" content="Codecourse home" />
    </Head>
</template>

<script setup>
    import { Head } from '@inertiajs/vue3'

    defineProps({
        message: String
    })
</script>
