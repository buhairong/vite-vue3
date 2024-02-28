import { defineComponent } from "vue";

import 'styles/index.css'
import classes from 'styles/test.module.css'
import 'styles/test.less'

import test from './test?raw'

import logo from './assets/vue.svg'

import {a} from './test'

console.log(test)

export default defineComponent({
  setup() {
    return () => {
      return (<>
        <div class="root">hello vue3 jsx</div>
        <div class="css-variable">css variable</div>
        <div class="div">css @import</div>
        <div class={`${classes.moduleClass}`}>css module</div>
        <div class="div1">css pre-processors</div>
        <div>hello {a.name} {a.age}</div>
        <div><img src={logo} /></div>
      </>)
    }
  }
})