/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './HomePage.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types'; // ES6
import { fetchArticles } from '../actions';
import ArticleDetailCol from '../components/ArticleDetailCol';
import Seo from './../components/Seo'
const HomePage = props => {

  const [colapseArticleName, setcolapseArticleName] = useState('');

  const renderArticles = () => {
    return props.articles.map(article => (
      <>
        <div className="col s12 m6 l6 xl4" key={article.title}>
          <div className="card ">
            <div className="card-image">
              <LazyLoadImage alt={article.title} src={`data:image/jpeg;base64,${article.image}`} />
            </div>
            <div className="card-content">
              <span className="card-title _fontSizenormal">
                <h1>{article.title}</h1></span>
              <p>Description: {article.desc}</p>
              <span className="truncate"> Content : {article.content}</span>

            </div>
            <div className="card-content">
              Posted Date: <span>{article.date}</span>
              <div className="divider" />
              <span>
                Tags: {article.tags.map(t => (
                <span className="chip" key={Math.random()}>{t}</span>
              ))}
              </span>
            </div>
            <div className="card-action">
              <ul className="collapsible popout">
                <li onClick={() => enableArticleDet(article.title)}>
                  <div className="collapsible-header">
                    <i className="mdi-navigation-chevron-right"></i> Read More</div>
                  <div className="collapsible-body">
                    {colapseArticleName == article.title &&
                      <ArticleDetailCol data={article} />}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ));

  };

  const enableArticleDet = (title) => {
    //declaring Collapsible
    if (typeof window !== 'undefined') {
      import('materialize-css').then((M) => {
        let elems = document.querySelectorAll('.collapsible');
        let instances = M.Collapsible.init(elems);
      });
    }
    setcolapseArticleName(title)
  }

  const { fetchArticles: loadArticles } = props;

  useEffect(() => {

    if (typeof window !== 'undefined') {
      import('materialize-css').then((M) => {
        let elems = document.querySelectorAll('.collapsible');
        let instances = M.Collapsible.init(elems);
      });
    }

    window.scrollTo(0, 0);
    loadArticles();
  }, [loadArticles]);

  return (
    <div>
      <Seo/>
      <div className="row">
        <div className="section">
          <h1>Popular Articles</h1>
        </div>
        <div className="divider" />
        <div className="section">
          <div className="row">{renderArticles()}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

//Fetching Response
const loadData = store => {
  return store.dispatch(fetchArticles()); 
};

HomePage.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.any),
  fetchArticles: PropTypes.func
};

HomePage.defaultProps = {
  articles: [],
  fetchArticles: null
};

export default {
  component: connect(
    mapStateToProps,
    { fetchArticles }
  )(HomePage),
  loadData
};
