import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const navigate = useNavigate();x``
  const [formData, setFormData] = useState({     // sử dụng uestate để tạo state cho "fromData bao gồm 'email và password"
    email: '',                                   // // setfromData được dùng để cập nhật giá trị của fromData
    password: '',
  });

  const handleChange = (e) => {                  // hàm sử lý sự kiện thay đổi giá trị trong trường input(email và password)
    const { name, value } = e.target;            // mỗi khi người dùng nhập vào một trường, nó sẽ cập nhật gí trị của fromData
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isValidEmail = () => {                  // hàm kiểm tra tính hợp lệ ủa email theo một regenx nhất định
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(formData.email);
  };

  const handleSubmit = (e) => {                 //  xử lý sự kiện khi người dùng nhâpj vào "login"
    e.preventDefault();                         // kiêmr tra mail không hợp lệ, hiện thị thông báo lỗi                                                 // 
    if (!isValidEmail()) {                      // nếu thông tin hợp lệ " hiển thị thông báo đăng nhập thành công" và chuyển hướng người dùng đên tranb
      alert('Email không hợp lệ. Vui lòng kiểm tra lại.');
      return;
    }
    //   e.preventDefault();     sự kiện để ngăn chặn hành vi mặc định của trình duyệt trong một sự kiện cụ thể.
    alert('Đăng nhập thành công!');
    navigate('/');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default SignIn;
