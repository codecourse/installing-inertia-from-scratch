import createServer from '@inertiajs/vue3/server'
import { createInertiaApp } from '@inertiajs/vue3'
import { createSSRApp, h } from 'vue'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ZiggyVue } from 'ziggy'
import { renderToString } from '@vue/server-renderer';

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        title: title => title ? `${title} - Codecourse` : `Codecourse`,
        resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
        setup({ el, App, props, plugin }) {
            return createSSRApp({ render: () => h(App, props) })
                .use(plugin)
                .use(ZiggyVue, {
                    ...props.initialPage.props.ziggy
                })
        },
    })
)
