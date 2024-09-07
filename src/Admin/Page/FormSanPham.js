import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FormSanPham = () => {
    const [sanpham, setSanpham] = useState({});
    const { id } = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [categories, setCategories] = useState(1);
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSanpham = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8080/api/v1/products/${id}`);
                setSanpham(data);
                setName(data.name);
                setPrice(data.price);
                setCategories(data.category_id);
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

    const handleProductNameChange = (event) => {
        const { value } = event.target;
        setName(value);
        setSanpham(prevState => ({
            ...prevState,
            name: value,
        }));
    };

    const handlePriceChange = (event) => {
        const { value } = event.target;
        setPrice(value);
        setSanpham(prevState => ({
            ...prevState,
            price: value,
        }));
    };

    const handleCategoriesChange = (event) => {
        const { value } = event.target;
        setCategories(value);
        setSanpham(prevState => ({
            ...prevState,
            category_id: value,
        }));
    };

    const createSanPham = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('category_id', categories);


        try {
            await axios.post('http://localhost:8080/api/v1/products', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert('Sản phẩm đã được tạo thành công!');
            navigate(`/qlsanpham`)
        } catch (error) {
            console.error('Có lỗi xảy ra khi tạo sản phẩm:', error);
            alert('Có lỗi xảy ra khi tạo sản phẩm.');
        }
    };
    console.log(name,price,categories)
    return (
        <div className='w-1/2 mx-auto p-4'>
            <h2 className='text-center text-xl'>Add Product</h2>
            <form className='border p-8' onSubmit={createSanPham}>
                <div>
                    <label htmlFor="productName">Tên sản phẩm:</label>
                    <input
                        className='m-5 text-black w-[300px]'
                        type="text"
                        id="productName"
                        name="product_name"
                        value={name}
                        onChange={handleProductNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="price">Giá:</label>
                    <input
                        className='m-5'
                        type="number"
                        id="price"
                        name="price"
                        value={price}
                        onChange={handlePriceChange}
                    />
                </div>
                <div>
                    <label htmlFor="categories">Danh mục</label>
                    <input
                        className='m-5'
                        type="text"
                        id="categories"
                        name="categories"
                        value={categories}
                        onChange={handleCategoriesChange}
                    />
                </div>
                <div>
                    <label htmlFor="image">Hình ảnh</label>
                    <input
                        className='m-5'
                        type="file"
                        id="image"
                        name="image"
                        onChange={onImageChange}
                    />
                    {image && <img src={URL.createObjectURL(image)} alt="preview" className='h-32'/>}
                </div>
                <button type="submit" className='py-5 px-8 mt-2 ml-80 bg-red-300 text-white rounded-xl'>Lưu</button>
            </form>
        </div>
    );
};

export default FormSanPham;
