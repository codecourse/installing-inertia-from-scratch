<template>
    {{ message }} <Link :href="route('dashboard')">Dashboard</Link>

    <!-- <Head title="Home" /> -->

    <Head>
        <title>Home</title>
        <meta name="description" content="Codecourse home" />
    </Head>
</template>

<script setup>
    import { Head, Link } from '@inertiajs/vue3'

    defineProps({
        message: String
    })
</script>
