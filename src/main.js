import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible';
import { ActionBar, ActionBarButton, ActionBarIcon, AddressEdit, AddressList, Button, Card, CellGroup, Checkbox, CheckboxGroup, ContactCard, Dialog, Field, Form, Icon, Stepper, SubmitBar, Tab, Tabs, Toast, TreeSelect } from 'vant'
import router from './router/index';
import './common/css/base.less'
import store from './store'
const app = createApp(App);
app.use(Button)
    .use(Icon)
    .use(Tab)
    .use(Tabs)
    .use(TreeSelect)
    .use(Stepper)
    .use(ActionBarButton)
    .use(ActionBarIcon)
    .use(ActionBar)
    .use(Toast)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(SubmitBar)
    .use(ContactCard)
    .use(Card)
    .use(Dialog)
    .use(AddressList)
    .use(AddressEdit)
    .use(Field)
    .use(CellGroup)
    .use(Form)
    
    ;

app.use(router);
app.use(store)
app.mount('#app');
