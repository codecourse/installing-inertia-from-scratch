<template>
    <div class="max-w-3xl w-full mx-auto py-10 space-y-10">
        <form v-on:submit.prevent="post">
            <label for="body">Body</label>
            <textarea name="body" id="body" rows="4" class="border w-full p-2" v-model="form.body"></textarea>

            <button type="submit">Post</button>
        </form>
    </div>
</template>

<script setup>
    import { useForm } from '@inertiajs/vue3'

    const form = useForm({
        body: ''
    })

    const post = () => {
        form.post(route('posts.store'))
    }
</script>
