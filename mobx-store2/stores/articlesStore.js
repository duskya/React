import {observable,action} from 'mobx';
//observable 可以被观察 action修改状态方式
export class articlesStore{
    //可以被观察的map array object
    //从有到无 loading
    @observable articlesRegistry = observable.map()
    //任何分配给 observable 映射的值都会默认通过 observable 来传递使其转变成可观察的
    @action loadArticle(slug) {
        //articlesRegistry push
        //api 
        return fetch(`https://conduit.productionready.io/api/articles/${slug}`)
        //fetch提供了一种简单，合理的方式来跨网络异步获取资源
        .then(data => data.json())
        // .then(data => {
        //     console.log(data)
        // })
        .then(action(({article}) => {
            this.articlesRegistry.set(article.slug,article)
            console.log(article.slug,article)
        })
        )
    }
    getArticle(slug){
        return this.articlesRegistry.get(slug)
    }
}
export default new articlesStore();