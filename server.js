const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); 
const multer = require('multer');
const path = require('path');
const app = express();
const fs = require('fs');
app.use(cors());
app.use(express.json()); 
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  port:3307,
  database: "qlnt",
});

// Đảm bảo rằng thư mục uploads tồn tại
const uploadDir = path.join(__dirname, 'src', 'Material', 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });


app.get("/", (re, res) => {
  return res.json("From Backend Side");
});
//fetch sp
app.get("/products", (req, res) => {
  const sql = "SELECT * FROM products ";
  connection.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//fetch user
app.get("/admin", (req, res) => {
  const sql = "SELECT * FROM admin ";
  connection.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
//fetch sp by id
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
 res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods"," GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Header","Content-Type,Authorization");
  const sql = "SELECT * FROM products WHERE product_id = ?";
  connection.query(sql, [productId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//delete sp by id
app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  const sql = "DELETE FROM products WHERE product_id = ?";
  connection.query(sql, [productId], (err, result) => {
    if (err) return res.json(err);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "Product deleted successfully" });
  });
  console.log(sql, productId)
});

// fetch categories from products by id

app.get('/categories/:id', (req, res) => {
  const category_id = parseInt(req.params.id);

  const sql = "SELECT * FROM products WHERE category_id = ?";
  connection.query(sql, [category_id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
///search
app.get('/search/:value', (req, res) => {
  const value = req.params.value.toString(); // Chuyển đổi giá trị thành chuỗi

  const sql = "SELECT * FROM products WHERE product_name LIKE ?";
  connection.query(sql, [`%${value}%`], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
///fetch sp admin by id
app.get('/qlsanham/:id', (req, res) => {
  const id = parseInt(req.params.id); 

  const sql = "SELECT * FROM products WHERE product_id = ?";
  connection.query(sql, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

/////fetch loai sp admin by id
app.get('/qllsanham/:id', (req, res) => {
  const id = parseInt(req.params.id); 

  const sql = "SELECT * FROM categories WHERE category_id = ?";
  connection.query(sql, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
/////fetch user admin by id
app.get('/admin/:id', (req, res) => {
  const id = parseInt(req.params.id); 

  const sql = "SELECT * FROM admin WHERE id = ?";
  connection.query(sql, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
///add sp
app.post('/createSanPham', upload.single('image'),(req, res) => {
  const product_name = req.body.product_name;
    const price = req.body.price;
    const category_id = req.body.category_id;
    const image = req.file.path.replace(/\\/g, '/').replace(/^.*\/uploads\//, '/uploads/');

  connection.query(
    "INSERT INTO products (product_name, price, category_id,image_url) VALUES (?,?,?,?)",
    [product_name, price, category_id,image],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
);
});

//update san pham 
app.post('/updateSanPham/', upload.single('image'),(req, res) => {
  const id = req.body.id;
  const product_name = req.body.product_name;
    const price = req.body.price;
    const category_id = req.body.category_id;
    const image = req.file.path.replace(/\\/g, '/').replace(/^.*\/uploads\//, '/uploads/');

  connection.query(
    "UPDATE  products SET product_name= ?,price=?,category_id=?,image_url=? WHERE product_id = ?",
    [product_name, price, category_id,image,id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Update Successed");
      }
    }
);
  console.log(id)
});
////

//fetch sp by id =1
app.get("/productsIdOne", (req, res) => {
  const sql = "SELECT * FROM products where category_id=1";
  connection.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
//fetch categories
app.get("/categories", (req, res) => {
  const sql = "SELECT * FROM categories ";
  connection.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
//fetch categories
app.get("/categories", (req, res) => {
  const sql = "SELECT * FROM categories ";
  connection.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
//delete loai sp by id
app.delete('/loaisp/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  const sql = "DELETE FROM categories WHERE category_id = ?";
  connection.query(sql, [productId], (err, result) => {
    if (err) return res.json(err);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({ message: "Category deleted successfully" });
  });
  console.log(sql, productId)
});
///add loai sp
app.post('/createLoaiSanPham', upload.single('image'),(req, res) => {
  const category_name = req.body.category_name;
    const image = req.file.path.replace(/\\/g, '/').replace(/^.*\/uploads\//, '/uploads/');

  connection.query(
    "INSERT INTO categories (category_name,category_imgage) VALUES (?,?)",
    [category_name,image],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
);
});

//update loai san pham 
app.post('/updateLoaiSanPham/', upload.single('image'),(req, res) => {
  const id = req.body.id;
  const category_name = req.body.category_name;
    const image = req.file.path.replace(/\\/g, '/').replace(/^.*\/uploads\//, '/uploads/');

  connection.query(
    "UPDATE  categories SET category_name= ?,category_imgage=? WHERE category_id = ?",
    [category_name,image,id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Update Successed");
      }
    }
);

});
//delete loai user by id
app.delete('/admin/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const sql = "DELETE FROM admin WHERE id = ?";
  connection.query(sql, [id], (err, result) => {
    if (err) return res.json(err);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User deleted successfully" });
  });
});
///add user
app.post('/createUser',(req, res) => {
  const user_name = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  connection.query(
    "INSERT INTO admin (username,password,email) VALUES (?,?,?)",
    [user_name,password,email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
);
});

//update user
app.post('/updateUser/', upload.single('image'),(req, res) => {
  const id = req.body.id;
  const user_name = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  connection.query(
    "UPDATE  admin SET username= ?,password=?,email=? WHERE id = ?",
    [user_name,password,email,id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Update Successed");
      }
    }
);

});
//create Bill and detail-bill
app.post('/createBill', async (req, res) => {
  try {
    const currentDate = new Date();
    const currentDay = ('0' + currentDate.getDate()).slice(-2);
    const currentHour = ('0' + currentDate.getHours()).slice(-2); 
    const currentMinute = ('0' + currentDate.getMinutes()).slice(-2); 
    const currentSecond = ('0' + currentDate.getSeconds()).slice(-2);
    const sodh = `${currentDay}${currentHour}${currentMinute}${currentSecond}`;

    const email = req.body.email;
    const address = req.body.address;
    const name = req.body.name;
    const phone = req.body.phone;
    const cart = req.body.cart;
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.count, 0);
    const status = 0;

    await new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO bill (sodh, name_customer, date_order, status, address, email, phone, total) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [sodh, name, currentDate, status, address, email, phone, totalPrice],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            console.log(`Bill ${sodh} inserted successfully.`);
            resolve();
          }
        }
      );
    });

    await Promise.all(cart.map(async (item) => {
      const { id, name, price, count } = item;
      await new Promise((resolve, reject) => {
        connection.query(
          "INSERT INTO detail_bill (sodh, product_id, count, price, name_product) VALUES (?, ?, ?, ?, ?)",
          [sodh, id, count, price, name],
          (err, result) => {
            if (err) {
              reject(err);
            } else {
              console.log(`Product ${name} inserted into detail_bill successfully.`);
              resolve();
            }
          }
        );
      });
    }));

    res.send("Bill created successfully.");
  } catch (error) {
    console.error("Error creating Bill:", error);
    res.status(500).send("Internal Server Error.");
  }
});

//fetch bill by status = 0
app.get("/bill0", (req, res) => {
  const sql = "SELECT * FROM bill where status =0";
  connection.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
//fetch bill by status = 1
app.get("/bill1", (req, res) => {
  const sql = "SELECT * FROM bill where status =1";
  connection.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
//update status
app.post('/updateStatus', (req, res) => {
  const { sodh, status } = req.body;

  connection.query(
      "UPDATE bill SET status = ? WHERE sodh = ?",
      [status, sodh],
      (err, result) => {
          if (err) {
              console.log(err);
              res.status(500).send('Error updating status');
          } else {
              res.send('Status updated successfully');
          }
      }
  );
});
///fetch chi tiet hoa don
app.get("/ctdh/:id", (req, res) => {
  const id = req.params.id.toString();
  console.log(id)
  const sql = "SELECT * FROM detail_bill where sodh =?";
  connection.query(sql,[id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.listen(5000, () => {
  console.log("listening port 5000");
});
