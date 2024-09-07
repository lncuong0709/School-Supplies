import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddLoaiSP = () => {
    const [loaiSanpham, setLoaiSanpham] = useState([]);
    const { id } = useParams();
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const navigate =useNavigate();

    useEffect(() => {
        const fetchSanpham = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/qllsanham/${id}`);
                setLoaiSanpham(data);
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

    const handleCategoryNameChange = (event, CategoriesId) => {
        const { value } = event.target;
        const updatedLoaiSanpham = loaiSanpham.map(item => {
            if (item.category_id === CategoriesId) {
                return { ...item, category_name: value };
            }
            return item;
        });
        setName(value);
        setLoaiSanpham(updatedLoaiSanpham);
    };



    const createLoaiSanPham = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', image);

        try {
            await axios.post('http://localhost:8080/api/v1/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Loại sản phẩm đã được update thành công!');
            navigate(`/qlloaisp`)
        } catch (error) {
            console.error('Error creating product:', error);
            alert('Có lỗi xảy ra khi tạo loại sản phẩm.');
        }
    };

    return (
        <div className='w-1/2 mx-auto p-4'>
            <h2 className='text-center text-xl'>Add Categories</h2>
            {loaiSanpham.map((item, index) => (
                <form key={index} className='border p-8' onSubmit={createLoaiSanPham}>
                    <div>
                        <label htmlFor="productId">Categories ID:</label>
                        <input
                            className='m-5'
                            type="text"
                            id="category_id"
                            name="category_id"
                            value={item.id}
                            disabled
                        />
                    </div>
                    <div>
                        <label htmlFor="productName">Categories Name:</label>
                        <input
                            className='m-5 text-black w-[300px]'
                            type="text"
                            id="CategoriesName"
                            name="Categories_name"
                            value={item.name}
                            onChange={(e) => handleCategoryNameChange(e, item.id)}
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
            ))}
        </div>
    );
};

export default AddLoaiSP