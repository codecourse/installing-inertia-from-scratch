import { unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { Link, Head } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    message: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->${ssrInterpolate(__props.message)} `);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Dashboard`);
          } else {
            return [
              createTextVNode("Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Home</title><meta name="description" content="Codecourse home"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Home"),
              createVNode("meta", {
                name: "description",
                content: "Codecourse home"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
