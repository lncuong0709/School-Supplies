import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditSP = () => {
    const [sanpham, setSanpham] = useState([]);
    const { id } = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [categories, setCategories] = useState(1);
    const [image, setImage] = useState(null);
    const navigate =useNavigate();

    useEffect(() => {
        const fetchSanpham = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8080/api/v1/products/${id}`);
                setSanpham(data);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
            }
        };
        fetchSanpham();
    }, [id]);

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    };

    const handleProductNameChange = (event, productId) => {
        const { value } = event.target;
        const updatedSanpham = sanpham.map(item => {
            if (item.product_id === productId) {
                return { ...item, product_name: value };
            }
            return item;
        });
        setName(value);
        setSanpham(updatedSanpham);
    };

    const handlePriceChange = (event, productId) => {
        const { value } = event.target;
        const updatedSanpham = sanpham.map(item => {
            if (item.product_id === productId) {
                return { ...item, price: value };
            }
            return item;
        });
        setPrice(value);
        setSanpham(updatedSanpham);
    };

    const handleCategoriesChange = (event, productId) => {
        const { value } = event.target;
        const updatedSanpham = sanpham.map(item => {
            if (item.product_id === productId) {
                return { ...item, category_id: value };
            }
            return item;
        });
        setCategories(value);
        setSanpham(updatedSanpham);
    };

    const createSanPham = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('product_name', name);
        formData.append('price', price);
        formData.append('category_id', categories);
        formData.append('image', image);
        formData.append('id', id);

        try {
            await axios.post('http://localhost:5000/updateSanPham', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Sản phẩm đã được update thành công!');
            navigate(`/qlsanpham`)
        } catch (error) {
            console.error('Error creating product:', error);
            alert('Có lỗi xảy ra khi tạo sản phẩm.');
        }
    };

    return (
        <div className='w-1/2 mx-auto p-4'>
            <h2 className='text-center text-xl'>Edit Product</h2>
           
                <form key={sanpham} className='border p-8' onSubmit={createSanPham}>
                    <div>
                        <label htmlFor="productId">Product ID:</label>
                        <input
                            className='m-5'
                            type="text"
                            id="productId"
                            name="product_id"
                            value={sanpham.id}
                            disabled
                        />
                    </div>
                    <div>
                        <label htmlFor="productName">Product Name:</label>
                        <input
                            className='m-5 text-black w-[300px]'
                            type="text"
                            id="productName"
                            name="product_name"
                            value={sanpham.name}
                            onChange={(e) => handleProductNameChange(e, sanpham.id)}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <input
                            className='m-5'
                            type="number"
                            id="price"
                            name="price"
                            value={sanpham.price}
                            onChange={(e) => handlePriceChange(e, sanpham.id)}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Categories</label>
                        <input
                            className='m-5'
                            type="text"
                            id="description"
                            name="description"
                            value={sanpham.category_id}
                            onChange={(e) => handleCategoriesChange(e, sanpham.product_id)}
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Image</label>
                        <input
                            className='m-5'
                            type="file"
                            id="image"
                            name="image"
                            onChange={onImageChange}
                        />
                        {image && <img src={URL.createObjectURL(image)} alt="preview image" />}
                    </div>
                    <button type="submit" className='py-5 px-8 mt-2 ml-80 bg-red-300 text-white rounded-xl'>Save</button>
                </form>
        </div>
    );
};

export default FormEditSP