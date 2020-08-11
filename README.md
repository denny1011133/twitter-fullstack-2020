# Simple Twitter
**Simple Twitter**是一個三人協力打造出復刻Twitter的專案作品!

![1](https://i.imgur.com/hD3uB4w.png)
![2](https://i.imgur.com/l33gj9n.png) 
## 基礎環境設定
利用[Node.js](https://nodejs.org/en/)建立伺服器  
利用[MySQL](https://www.mysql.com/)搭配[MySQL Workbench](https://www.mysql.com/products/workbench/)建立資料庫

## 使用套件 
1. [express](https://expressjs.com/)   
2. [express-handlebars](https://www.npmjs.com/package/express-handlebars)   
3. [body-parser](https://www.npmjs.com/package/body-parser)   
4. [method-override](https://www.npmjs.com/package/method-override)      
5. [express-session](https://www.npmjs.com/package/express-session)   
6. [passport](http://www.passportjs.org/)   
7. [passport-local](http://www.passportjs.org/packages/passport-local/)     
8. [bcryptjs](https://www.npmjs.com/package/bcryptjs)   
9. [connect-flash](https://www.npmjs.com/package/connect-flash) 
10. [dotenv](https://www.npmjs.com/package/dotenv)
11. [faker](https://github.com/marak/faker.js)
12. [imgur-node-api](https://www.npmjs.com/package/imgur-node-api)
13. [moment](https://www.npmjs.com/package/moment)
14. [multer](https://www.npmjs.com/package/multer)
15. [mysql2](https://www.npmjs.com/package/mysql2)
16. [sequelize](https://www.npmjs.com/package/sequelize)
17. [sequelize cli](https://www.npmjs.com/package/sequelize-cli)


## 安裝步驟
```bash
1. git clone https://github.com/denny1011133/twitter-fullstack-2020.git
```
```bash
2. cd twitter-fullstack-2020
```
```bash
3. npm install
```
```bash
4. 新增種子資料
- 終端機上執行 npm run seed
- 確認在 MySQL Workbench 中的資料已經建立了
```
```bash
5. 建立.env的檔案，自行輸入相關資料
   IMGUR_CLIENT_ID="XXXXXXX"
```
```bash
6. 執行程式
終端機輸入: npm run dev
開啟網頁輸入: http://localhost:3000
```
## 測試帳號
| name | email | password |
| ------ | ------ | ----- |
| root | root@example.com | 12346578 |
| user1 | user1@example.com | 12346578 |
| user2 | user2@example.com | 12346578 |
| user3 | user3@example.com | 12346578 |
| user4 | user4@example.com | 12346578 |
| user5 | user5@example.com | 12346578 |
