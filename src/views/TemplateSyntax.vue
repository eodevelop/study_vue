<script setup lang="ts">
import { onMounted } from 'vue'

const msg = 'test'

const rawHtml = ` <span style="color: red">이것은 빨간색이어야 합니다.</span>`

const dynamicId = 'dynamicId'

const isButtonDisabled = true

const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green',
}

const number = 1
const ok = true
const message = 'hello'
const id = 1

const date = new Date()

function toTitleDate(date: Date) {
  return date
}

function formatDate(date: Date) {
  return date.toISOString()
}

onMounted(() => {
  const dynamicIdElement = document.getElementById(dynamicId)
  if (dynamicIdElement) {
    dynamicIdElement.textContent = 'test'
  }

  const listIdElement = document.getElementById('list-1')
  if (listIdElement) {
    listIdElement.textContent = 'test'
  }
})
</script>

<template>
  <span>메세지: {{ msg }}</span>
  <hr />

  <p>텍스트 보간법 사용: {{ rawHtml }}</p>
  <p>v-html 디렉티브 사용: <span v-html="rawHtml"></span></p>
  <hr />

  <div v-bind:id="dynamicId"></div>
  <hr />

  <button :disabled="isButtonDisabled">버튼</button>
  <hr />

  <div v-bind="objectOfAttrs">test</div>
  <hr />

  <div>
    {{ number + 1 }}
    {{ ok ? '예' : '아니오' }}
    {{ message.split('').reverse().join('') }}
  </div>
  <div :id="`list-${id}`"></div>
  <hr />

  <div>
    <!--    표현식만 작동 가능-->
    <!--    쉽게 말해서 return 안에 들어갈 수 있는거만 가능 -->

    <!-- 이것은 표현식이 아니라 선언식입니다: -->
    <!--    {{ var a = 1 }}-->

    <!-- 흐름 제어도 작동하지 않습니다. 삼항 표현식을 사용하십시오. -->
    <!--    {{ if (ok) { return message } }}-->
  </div>
  <hr />

  <time :title="toTitleDate(date)" :datetime="date">
    {{ formatDate(date) }}
  </time>
  <hr />
</template>
