import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddUser = () => {
    const [user, setUser] = useState([]);
    const { id } = useParams();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate =useNavigate();

    useEffect(() => {
        const fetchSanpham = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/admin/${id}`);
                setUser(data);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
            }
        };
        fetchSanpham();
    }, [id]);

    const handleUserNameChange = (event, userId) => {
        const { value } = event.target;
        const updatedUser = user.map(item => {
            if (item.id === userId) {
                return { ...item, username: value };
            }
            return item;
        });
        setName(value);
        setUser(updatedUser);
    };


    const handleEmailChange = (event, userId) => {
        const { value } = event.target;
        const updatedSanpham = user.map(item => {
            if (item.id === userId) {
                return { ...item, email: value };
            }
            return item;
        });
        setEmail(value);
        setUser(updatedSanpham);
    };
    const handlePasswordChange = (event, userId) => {
        const { value } = event.target;
        const updatedSanpham = user.map(item => {
            if (item.id === userId) {
                return { ...item, password: value };
            }
            return item;
        });
        setPassword(value);
        setUser(updatedSanpham);
    };

    const createSanPham = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', name);
        formData.append('password', password);
        formData.append('email', email);

        try {
            await axios.post('http://localhost:5000/createUser', formData);
            alert('User đã được tạo thành công!');
            navigate(`/qluser`)
        } catch (error) {
            console.error('Error creating User:', error);
            alert('Có lỗi xảy ra khi tạo User.');
        }
    };

    return (
        <div className='w-1/2 mx-auto p-4'>
            <h2 className='text-center text-xl'>Edit Product</h2>
            {user.map((item, index) => (
                <form key={index} className='border p-8' onSubmit={createSanPham}>
                    <div>
                        <label htmlFor="productName">User Name:</label>
                        <input
                            className='m-5 text-black w-[300px]'
                            type="text"
                            id="productName"
                            name="product_name"
                            value={item.username}
                            onChange={(e) => handleUserNameChange(e, item.id)}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Email:</label>
                        <input
                            className='m-5'
                            type="email"
                            id="email"
                            name="email"
                            value={item.email}
                            onChange={(e) => handleEmailChange(e, item.id)}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Password</label>
                        <input
                            className='m-5'
                            type="password"
                            id="description"
                            name="description"
                            value={item.password}
                            onChange={(e) => handlePasswordChange(e, item.id)}
                        />
                    </div>
                    <button type="submit" className='py-5 px-8 mt-2 ml-80 bg-red-300 text-white rounded-xl'>Save</button>
                </form>
            ))}
        </div>
    );
};

export default AddUser