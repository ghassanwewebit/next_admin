import AdminPage from "../../../../admin/layout/adminPage"
import AllPagesPosts from './../../../../admin/components/contentComp/contentPages/posts/allposts'


    const data= [
        {"id": "1000","code": "f230fh0g3","name": "Bamboo Watch","description": "Product Description","image": "bamboo-watch.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1001","code": "nvklal433","name": "Black Watch","description": "Product Description","image": "black-watch.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4},
        {"id": "1029","code": "gwuby345v","name": "Yoga Set","description": "Product Description","image": "yoga-set.jpg","price": 20,"category": "Fitness","quantity": 25,"inventoryStatus": "INSTOCK","rating": 8}
    ]
     
export default function AllPosts(){



    return (
        <AdminPage>
            <AllPagesPosts data={data}/>
        </AdminPage>
    )
}