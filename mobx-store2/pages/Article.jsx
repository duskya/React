import React from 'react';
import { inject, observer } from "mobx-react";

@inject("articlesStore","usersStore")
@observer
class Article extends React.Component {
  componentDidMount() {
    // 去做请求 
    const slug = this.props.match.params.id;
    console.log(this.props)
    this.props.articlesStore.loadArticle(slug);
    this.props.usersStore.login();
  }
//   componentDidMount，（装载完成），在render之后调用

  render() {
    const slug = this.props.match.params.id;
    console.log(this.props)
    console.log(slug);
    // 提供一个 方法 
    const article = this.props.articlesStore.getArticle(slug);
    if (!article) {
      return (
        <div>Loading...</div>
      )
    }
    console.log(article)
    return (
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{article.title}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Article;