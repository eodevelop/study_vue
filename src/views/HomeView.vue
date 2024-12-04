<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function clickHandler(event: Event) {
  const target = event.target as HTMLElement
  if (target.id === 'btnTemplateSyntax') {
    router.push('/template-syntax')
    return
  }
}
</script>

<template>
  <button id="btnTemplateSyntax" @click="clickHandler">TemplateSyntax</button>
</template>
