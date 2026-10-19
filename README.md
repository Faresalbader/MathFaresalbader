# دليل المذاكرة – الرياضيات 1-1

موقع ثابت (HTML / CSS / JavaScript) بدون أي خطوات بناء.

## الهيكل

```
.
├── index.html      الصفحة الرئيسية
├── style.css       التنسيقات
├── app.js          المنطق (المذاكرة، الميداليات، GeoGebra، ...)
├── .nojekyll       يمنع GitHub Pages من معالجة الملفات بـ Jekyll
└── .gitignore
```

## النشر على GitHub Pages

1. أنشئ مستودعًا جديدًا على GitHub (مثلًا `math-study-guide`).
2. ارفع محتويات هذا المجلد إلى الفرع `main`:
   ```bash
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/math-study-guide.git
   git push -u origin main
   ```
3. من المستودع: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** / folder: **/ (root)** ثم **Save**.
4. بعد دقيقة تقريبًا يعمل الموقع على:
   `https://USERNAME.github.io/math-study-guide/`

## ملاحظات

- GeoGebra وخط Cairo ومكتبة jsPDF تُحمَّل من الإنترنت (CDN)، فيلزم اتصال بالإنترنت.
- للتجربة محليًا افتح `index.html` مباشرة، أو شغّل `python3 -m http.server` ثم افتح `http://localhost:8000`.
