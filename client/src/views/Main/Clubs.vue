<template>
  <div class="explore">
    <p>
      Clubs I changed my MainLayout to adopt lazy loading but these are not
      displaying and console shows : runtime-core.esm-bundler.js:40 [Vue warn]:
      Invalid VNode type: undefined (undefined) warn2 @
      runtime-core.esm-bundler.js:40 patch @ runtime-core.esm-bundler.js:5128
      componentUpdateFn @ runtime-core.esm-bundler.js:5656 run @
      reactivity.esm-bundler.js:190 instance.update @
      runtime-core.esm-bundler.js:5763 setupRenderEffect @
      runtime-core.esm-bundler.js:5777 mountComponent @
      runtime-core.esm-bundler.js:5559 processComponent @
      runtime-core.esm-bundler.js:5517 patch @ runtime-core.esm-bundler.js:5119
      mountChildren @ runtime-core.esm-bundler.js:5303 mountElement @
      runtime-core.esm-bundler.js:5213 processElement @
      runtime-core.esm-bundler.js:5196 patch @ runtime-core.esm-bundler.js:5116
      mountChildren @ runtime-core.esm-bundler.js:5303 mountElement @
      runtime-core.esm-bundler.js:5213 processElement @
      runtime-core.esm-bundler.js:5196 patch @ runtime-core.esm-bundler.js:5116
      componentUpdateFn @ runtime-core.esm-bundler.js:5656 run @
      reactivity.esm-bundler.js:190 instance.update @
      runtime-core.esm-bundler.js:5763 setupRenderEffect @
      runtime-core.esm-bundler.js:5777 mountComponent @
      runtime-core.esm-bundler.js:5559 processComponent @
      runtime-core.esm-bundler.js:5517 patch @ runtime-core.esm-bundler.js:5119
      componentUpdateFn @ runtime-core.esm-bundler.js:5729 run @
      reactivity.esm-bundler.js:190 instance.update @
      runtime-core.esm-bundler.js:5763 callWithErrorHandling @
      runtime-core.esm-bundler.js:173 flushJobs @
      runtime-core.esm-bundler.js:406 Promise.then (async) queueFlush @
      runtime-core.esm-bundler.js:298 queuePostFlushCb @
      runtime-core.esm-bundler.js:320 queueEffectWithSuspense @
      runtime-core.esm-bundler.js:1604 scheduler @
      runtime-core.esm-bundler.js:1838 triggerEffect @
      reactivity.esm-bundler.js:400 triggerEffects @
      reactivity.esm-bundler.js:390 triggerRefValue @
      reactivity.esm-bundler.js:1021 (anonymous) @
      reactivity.esm-bundler.js:1158 triggerEffect @
      reactivity.esm-bundler.js:400 triggerEffects @
      reactivity.esm-bundler.js:385 triggerRefValue @
      reactivity.esm-bundler.js:1021 (anonymous) @
      reactivity.esm-bundler.js:1158 triggerEffect @
      reactivity.esm-bundler.js:400 triggerEffects @
      reactivity.esm-bundler.js:385 triggerRefValue @
      reactivity.esm-bundler.js:1021 set value @ reactivity.esm-bundler.js:1066
      finalizeNavigation @ vue-router.mjs:3334 (anonymous) @ vue-router.mjs:3207
      Promise.then (async) pushWithRedirect @ vue-router.mjs:3174 push @
      vue-router.mjs:3099 install @ vue-router.mjs:3530 use @
      runtime-core.esm-bundler.js:4399 (anonymous) @ main.ts:22
      runtime-core.esm-bundler.js:40 [Vue warn]: Failed to resolve component:
      AppLayout If this is a native custom element, make sure to exclude it from
      component resolution via compilerOptions.isCustomElement. warn2 @
      runtime-core.esm-bundler.js:40 resolveAsset @
      runtime-core.esm-bundler.js:2905 resolveComponent @
      runtime-core.esm-bundler.js:2854 _sfc_render @ App.vue:2
      renderComponentRoot @ runtime-core.esm-bundler.js:914 componentUpdateFn @
      runtime-core.esm-bundler.js:5649 run @ reactivity.esm-bundler.js:190
      instance.update @ runtime-core.esm-bundler.js:5763 setupRenderEffect @
      runtime-core.esm-bundler.js:5777 mountComponent @
      runtime-core.esm-bundler.js:5559 processComponent @
      runtime-core.esm-bundler.js:5517 patch @ runtime-core.esm-bundler.js:5119
      componentUpdateFn @ runtime-core.esm-bundler.js:5656 run @
      reactivity.esm-bundler.js:190 instance.update @
      runtime-core.esm-bundler.js:5763 setupRenderEffect @
      runtime-core.esm-bundler.js:5777 mountComponent @
      runtime-core.esm-bundler.js:5559 processComponent @
      runtime-core.esm-bundler.js:5517 patch @ runtime-core.esm-bundler.js:5119
      mountChildren @ runtime-core.esm-bundler.js:5303 mountElement @
      runtime-core.esm-bundler.js:5213 processElement @
      runtime-core.esm-bundler.js:5196 patch @ runtime-core.esm-bundler.js:5116
      mountChildren @ runtime-core.esm-bundler.js:5303 mountElement @
      runtime-core.esm-bundler.js:5213 processElement @
      runtime-core.esm-bundler.js:5196 patch @ runtime-core.esm-bundler.js:5116
      mountChildren @ runtime-core.esm-bundler.js:5303 mountElement @
      runtime-core.esm-bundler.js:5213 processElement @
      runtime-core.esm-bundler.js:5196 patch @ runtime-core.esm-bundler.js:5116
      componentUpdateFn @ runtime-core.esm-bundler.js:5656 run @
      reactivity.esm-bundler.js:190 instance.update @
      runtime-core.esm-bundler.js:5763 setupRenderEffect @
      runtime-core.esm-bundler.js:5777 mountComponent @
      runtime-core.esm-bundler.js:5559 processComponent @
      runtime-core.esm-bundler.js:5517 patch @ runtime-core.esm-bundler.js:5119
      componentUpdateFn @ runtime-core.esm-bundler.js:5729 run @
      reactivity.esm-bundler.js:190 instance.update @
      runtime-core.esm-bundler.js:5763 callWithErrorHandling @
      runtime-core.esm-bundler.js:173 flushJobs @
      runtime-core.esm-bundler.js:406 Promise.then (async) queueFlush @
      runtime-core.esm-bundler.js:298 queuePostFlushCb @
      runtime-core.esm-bundler.js:320 queueEffectWithSuspense @
      runtime-core.esm-bundler.js:1604 scheduler @
      runtime-core.esm-bundler.js:1838 triggerEffect @
      reactivity.esm-bundler.js:400 triggerEffects @
      reactivity.esm-bundler.js:390 triggerRefValue @
      reactivity.esm-bundler.js:1021 (anonymous) @
      reactivity.esm-bundler.js:1158 triggerEffect @
      reactivity.esm-bundler.js:400 triggerEffects @
      reactivity.esm-bundler.js:385 triggerRefValue @
      reactivity.esm-bundler.js:1021 (anonymous) @
      reactivity.esm-bundler.js:1158 triggerEffect @
      reactivity.esm-bundler.js:400 triggerEffects @
      reactivity.esm-bundler.js:385 triggerRefValue @
      reactivity.esm-bundler.js:1021 set value @ reactivity.esm-bundler.js:1066
      finalizeNavigation @ vue-router.mjs:3334 (anonymous) @ vue-router.mjs:3207
      Promise.then (async) pushWithRedirect @ vue-router.mjs:3174 push @
      vue-router.mjs:3099 install @ vue-router.mjs:3530 use @
      runtime-core.esm-bundler.js:4399 (anonymous) @ main.ts:22
      runtime-core.esm-bundler.js:40 [Vue warn]: Invalid VNode type: undefined
      (undefined)
    </p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Clubs",
  });
</script>

<style scoped>
  .explore {
    color: rgb(218, 236, 236);
  }
</style>
