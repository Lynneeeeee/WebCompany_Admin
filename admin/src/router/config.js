import Home from '../views/home/Home.vue'
import Center from '../views/center/Center.vue'
import UserAdd from '../views/user-manage/UserAdd'
import UserList from '../views/user-manage/UserList'
import NewsAdd from '../views/news-manage/NewsAdd'
import NewsList from '../views/news-manage/NewsList'
import ProdAdd from '../views/product-manage/ProdAdd'
import ProdList from '../views/product-manage/ProdList'

const routesconfig = [
    {
        path: "/index",
        component: Home
    },
    {
        path: "/center",
        component: Center
    },
    {
        path: "/user-manage/adduser",
        component: UserAdd
    },
    {
        path: "/user-manage/listuser",
        component: UserList
    },
    {
        path: "/news-manage/addnews",
        component: NewsAdd
    },
    {
        path: "/news-manage/listnews",
        component: NewsList
    },
    {
        path: "/prod-manage/addprod",
        component: ProdAdd
    },
    {
        path: "/prod-manage/listprod",
        component: ProdList
    },
]

export default routesconfig