import mysql from 'mysql2'; // mysql 配置
import { 
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_PASSWORD,
  MYSQL_USER
} from '../app.config';
export const connection = mysql.createConnection({
  //createConnection方法创建连接对象 用对象的connect方法建立连接。
  //connection对象的end方法和destory方法。
  host: MYSQL_HOST,
  port: parseInt(MYSQL_PORT),
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE
})