// vue 프로젝트의 시작점
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// createApp 에 전달하는 객체는 컴포넌트
// 모든 앱에는 다른 컴포넌트를 자식으로 포함할 수 있는 최상위 컴포넌트가 필요

app.use(createPinia())
app.use(router)

app.mount('#app')
