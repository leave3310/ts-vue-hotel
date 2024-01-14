import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { defineRule, configure } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

Object.keys(AllRules).forEach(rule => {

    defineRule(rule, AllRules[rule]);
});

configure({
    // Generates an English message locale generator
    generateMessage: localize({
        zh_TW: {
            ...zhTW,
            messages: {
                ...zhTW.messages,
                required: "此欄位為必填",
                max: "字數上限為 0:{length} 字",
                phone: "手機號碼只能輸入十碼",
                email: "請輸入有效的 Email",
            },
        },
    }),
});

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
