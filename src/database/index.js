//数据业务 模块化
import Loki from 'lokijs'//js database localStorage IndexDB封装库
//db 数据库句柄 notes数据库名字
export const db = new Loki('notes', {
  autoload: true,//自动加载
  autoloadCallback: databaseInitialize,//第一次链接执行的回调函数
  autosave: true,//自动保存
  autosaveInterval: 3000,
  persistenceMethod: 'localStorage'//持久化localStorage
})

function databaseInitialize () {//
  const notes = db.getCollection('notes')//有notes数据表？
  if (notes === null) {
    db.addCollection('notes')//添加一个集合 
  }
}

export function loadCollection (collection){//load 打开表
  return new Promise(resolve => {
    db.loadDatabase({}, () => {
      const _collection = db.getCollection(collection) || db.addCollection(collection)
      resolve(_collection)//返回一个以给定值解析后的Promise 对象。
    })
  })
}