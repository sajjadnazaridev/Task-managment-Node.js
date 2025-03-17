# API مدیریت وظایف

یک API ساده برای مدیریت وظایف (Todos) و کاربران، توسعه داده شده با Node.js و MongoDB.

---

## قابلیت‌های کلیدی

### مدیریت وظایف

- **افزودن وظیفه جدید** (`POST /todos`)
- **دریافت همه وظایف** (`GET /todos`)
- **دریافت یک وظیفه خاص** (`GET /todos/:id`)
- **آپدیت وظیفه** (`PUT /todos/:id`)
- **حذف وظیفه** (`DELETE /todos/:id`)

### مدیریت کاربران

- **ثبت نام کاربر** (`POST /auth/register`)
- **ورود کاربر** (`POST /auth/login`)
- **دریافت لیست کاربران** (`GET /users`) _(نیاز به توکن معتبر)_

---

## تکنولوژی‌های استفاده شده

- **زبان/پلتفرم**: Node.js • Express.js
- **پایگاه داده**: MongoDB • Mongoose
- **احراز هویت**: JWT • bcrypt
- **تست**: Jest • Supertest
- **ابزارها**: Nodemon

---

## راه‌اندازی پروژه

### پیش‌نیازها

- نصب [Node.js](https://nodejs.org) (نسخه ۱۴ یا بالاتر)
- نصب [MongoDB](https://www.mongodb.com/try/download/community)
- ابزارهایی مثل [Postman](https://www.postman.com)

### مراحل نصب

1. **کلون پروژه**:

   ```bash
   git clone https://github.com/sajjadnazaridev/Task-managment-Node.js.git
   cd Task-managment-Node.js
   ```

2. **نصب وابستگی‌ها**:

   ```bash
   npm install
   ```

3. **راه‌اندازی پایگاه داده**:
   - مطمئن شوید MongoDB در حال اجراست.

---

## اجرای پروژه

```bash
npm start
```

---

## اجرای تست‌ها

```bash
npm test
```

---

## مشارکت

- گزارش باگ یا پیشنهادات را در [Issues](https://github.com/sajjadnazaridev/Task-managment-Node.js.git/issues) مطرح کنید.
- برای مشارکت، از طریق Pull Request اقدام نمایید.
