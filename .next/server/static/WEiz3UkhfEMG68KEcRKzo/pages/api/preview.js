module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("XCOm");


/***/ }),

/***/ "XCOm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return preview; });
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("qoWs");


function linkResolver(doc) {
  // Pretty URLs for known types
  if (doc.type === 'post') {
    return `/posts/${doc.uid}`;
  } // Fallback for other types, in case new custom types get created


  return `/${doc.uid}`;
}

async function preview(req, res) {
  const ref = req.query.token; // Check the token parameter against the Prismic SDK

  const url = await _lib_api__WEBPACK_IMPORTED_MODULE_0__[/* PrismicClient */ "a"].previewSession(ref, linkResolver, '/');

  if (!url) {
    return res.status(401).json({
      message: 'Invalid token'
    });
  } // Enable Preview Mode by setting the cookies


  res.setPreviewData({
    ref // pass the ref to pages so that they can fetch the draft ref

  }); // Redirect the user to the share endpoint from same origin. This is
  // necessary due to a Chrome bug:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=696204

  res.write(`<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`);
  res.end();
}

/***/ }),

/***/ "qoWs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export API_TOKEN */
/* unused harmony export API_LOCALE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrismicClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllPostsWithSlug; });
/* unused harmony export getAllPostsForHome */
/* unused harmony export getAllPostsForProducts */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return indexPageQuery; });
/* unused harmony export gearsPageQuery */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return productPageQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPostAndMorePosts; });
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vNl1");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_0__);

const REPOSITORY = "bikesbikesbikes";
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`; // export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'

const API_TOKEN = "MC5Yc19ra2hFQUFDRUFLUU1O.77-9BCLvv71UDTVxIEw377-977-9STfvv73vv73vv71g77-977-977-977-977-977-977-9De-_ve-_ve-_vTHvv70";
const API_LOCALE = "en-ca";
const PrismicClient = prismic_javascript__WEBPACK_IMPORTED_MODULE_0___default.a.client(REF_API_URL, {
  accessToken: API_TOKEN
});

async function fetchAPI(query, {
  previewData,
  variables
} = {}) {
  const prismicAPI = await PrismicClient.getApi();
  const res = await fetch(`${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`, {
    headers: {
      'Prismic-Ref': (previewData === null || previewData === void 0 ? void 0 : previewData.ref) || prismicAPI.masterRef.ref,
      'Content-Type': 'application/json',
      'Accept-Language': API_LOCALE,
      Authorization: `Token ${API_TOKEN}`
    }
  });

  if (res.status !== 200) {
    console.log(await res.text());
    throw new Error('Failed to fetch API');
  }

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

async function getAllPostsWithSlug() {
  var _data$allPosts;

  const data = await fetchAPI(`
    {
      allPosts {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `);
  return data === null || data === void 0 ? void 0 : (_data$allPosts = data.allPosts) === null || _data$allPosts === void 0 ? void 0 : _data$allPosts.edges;
}
async function getAllPostsForHome(previewData) {
  const data = await fetchAPI(`
    query {
      allPosts(sortBy: date_DESC) {
        edges {
          node {
            date
            title
            content
            coverimage
            excerpt
            author {
              ...on Author {
                name
                picture
              }
            }
            _meta {
              uid
            }
          }
        }
      }
    }
  `, {
    previewData
  });
  return data.allPosts.edges;
}
async function getAllPostsForProducts(previewData) {
  const data = await fetchAPI(`
    query {
      allPost_products(sortBy: product_date_DESC){
         edges {
           node {
             product_date
             product_title
             product_image
             _meta{
               tags
               uid
             }
             product_price
             product_link {
               __typename
              ... on _ExternalLink{
                url
              }
            }
           }
         }
     	 }
     }
  `, {
    previewData
  });
  return data.allPost_products.edges;
} // INDEX PAGE

async function indexPageQuery(previewData) {
  const data = await fetchAPI(`
    query {
      allIndex_pages{
        edges{
          node{
            body{
              __typename
              ... on Index_pageBodyProduct_card{
                fields{
                  product_card_date
                  product_card_image
                  product_card_title
                  product_card_price
                  product_card_link {
                    ... on _ExternalLink{
                      url
                    }
                  }
                }
              }
              ... on Index_pageBodyProduct_page_specific_link{
                fields{
                  product_page_title
                  product_page_link
                  product_image
                }
              }
              ... on Index_pageBodyPage_title{
                fields{
                  page_title
                }
              }
              ... on Index_pageBodyOnline_advert{
                fields{
                  advert_image
                  advert_link{
                    ... on _ExternalLink{
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    `, {
    previewData
  });
  return data.allIndex_pages.edges;
} // GEARS PAGE

async function gearsPageQuery(previewData) {
  const data = await fetchAPI(`
    query {
      allPage_gearss{
        edges{
          node{
            page_title
            content_relation{
              __typename
            }
            _meta{
              uid
            }
            body{
              __typename
              ... on Page_gearsBodyProduct_card{
                fields{
                  product_card_date
                  product_card_image
                  product_card_title
                  product_card_price
                  product_card_link {
                    ... on _ExternalLink{
                      url
                    }
                  }
                }
              }
              ... on Page_gearsBodyProduct_page_specific_link{
                fields{
                  product_page_title
                  product_page_link
                  product_image
                }
              }
              ... on Page_gearsBodyPage_online_advert{
                fields{
                  page_advert_image
                  page_advert_link{
                    ... on _ExternalLink{
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    `, {
    previewData
  });
  return data.allPage_gearss.edges;
}
async function productPageQuery(previewData) {
  const data = await fetchAPI(`
    query {
      allProduct_pages{
        edges{
          node{
            page_title
            _meta{
              uid
            }
            body{
              __typename
              ... on Product_pageBodyProduct_card{
                fields{
                  product_card_date
                  product_card_image
                  product_card_title
                  product_card_price
                  product_card_link {
                    ... on _ExternalLink{
                      url
                    }
                  }
                }
              }
              ... on Product_pageBodyProduct_page_specific_link{
                fields{
                  product_page_title
                  product_page_link
                  product_image
                }
              }
              ... on Product_pageBodyPage_online_advert{
                fields{
                  page_advert_image
                  page_advert_link{
                    ... on _ExternalLink{
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    `, {
    previewData
  });
  return data.allProduct_pages.edges;
}
async function getPostAndMorePosts(slug, previewData) {
  const data = await fetchAPI(`
  query PostBySlug($slug: String!, $lang: String!) {
    post(uid: $slug, lang: $lang) {
      title
      content
      date
      coverimage
      author {
        ...on Author {
          name
          picture
        }
      }
      _meta {
        uid
      }
    }

   morePosts: allPosts(sortBy: date_DESC, first: 3) {
      edges {
        node {
          title
          content
          date
          coverimage
          excerpt
          author{
            ...on Author {
              name
              picture
            }
          }
          _meta {
            uid
          }
        }
      }
    }
  }
  `, {
    previewData,
    variables: {
      slug,
      lang: API_LOCALE
    }
  });
  data.morePosts = data.morePosts.edges.filter(({
    node
  }) => node._meta.uid !== slug).slice(0, 2);
  return data;
}

/***/ }),

/***/ "vNl1":
/***/ (function(module, exports) {

module.exports = require("prismic-javascript");

/***/ })

/******/ });