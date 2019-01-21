import Vue from 'vue'
import Router from 'vue-router'
import CKEditor from '../components/CKEditor'
import UploadImage from '../components/UploadImage'
import Tinymce from '../components/Tinymce'
import Main from '../views/Main'
import Home from '../views/Home'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '*',
      name: 'Home',
      component: Home,
      redirect: {path: '/main'},
      children: [
        {path: 'main', name: 'Main', component: Main},
        {path: 'ckEditor', name: 'CKEditor', component: CKEditor},
        {path: 'uploadImage', name: 'UploadImage', component: UploadImage},
        {path: 'tinymce', name: 'Tinymce', component: Tinymce},
      ]
    },
  ]
})
