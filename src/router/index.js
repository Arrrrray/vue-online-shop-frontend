// 路由文件
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Cart from '@/pages/Cart'
import Detail from '@/pages/Detail';

// Admin Components
import Index from '@/pages/admin/Index';
import New from '@/pages/admin/New';
import Products from '@/pages/admin/Products';
import Edit from '@/pages/admin/Edit';
import Manufacturers from '@/pages/admin/Manufacturers';
import NewManufacturers from '@/pages/admin/NewManufacturers';
import EditManufacturers from '@/pages/admin/EditManufacturers';

// 使用 Vue.use(Router) 告诉 Vue，我们应用接入了路由
Vue.use(Router)

// 在导出的路由实例中，我们通过 routes 数组定义了项目所有的页面，每个页面是一个类似 { path, name, component } 的对象。
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
          path: 'new',
          name: 'New',
          component: New,
        },
        {
          path: '',
          name: 'Products',
          component: Products,
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit,
        },
        {
          path: 'manufacturers',
          name: 'Manufacturers',
          component: Manufacturers,
        },
        {
          path: 'manufacturers/new',
          name: 'NewManufacturers',
          component: NewManufacturers,
        },
        {
          path: 'manufacturers/edit/:id',
          name: 'EditManufacturers',
          component: EditManufacturers,
        },
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
    },
  ]
})

