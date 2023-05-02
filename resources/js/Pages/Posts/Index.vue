<template>
    <div class="max-w-3xl w-full mx-auto py-12 space-y-10">
        <form v-on:submit.prevent="post">
            <label for="body">Body</label>
            <textarea name="body" id="body" rows="4" class="border w-full p-2" v-model="form.body"></textarea>

            <div v-if="form.errors.body" class="text-red-500">
                {{ form.errors.body }}
            </div>

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
        form.post(route('posts.store'), {
            preserveScroll: true,
            onSuccess: () => {
                form.reset()
            }
        })
    }
</script>
