import React from "react";
import { Link } from "react-router-dom";
import { numberFormat } from "../../helpers/numberFormat";
import { nameFormat } from "../../helpers/nameFormat";
import "./styles.css";

function ProductList({ listItem, onAddItem }) {
  return (
    <div className="row">
      {listItem &&
        listItem.map(item => {
          return (
            <div
              key={item.id}
              className="col-sm-12 col-md-6 col-lg-4 p-b-50 item"
            >
              <div className="block2">
                <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                  <img
                    src={item.img_url}
                    className="product-img"
                    alt="IMG-PRODUCT"
                  />

                  <div className="block2-overlay trans-0-4">
                    <div className="block2-btn-addcart w-size1 trans-0-4">
                      <button
                        className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4"
                        onClick={() => {
                          onAddItem(item);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="block2-txt p-t-20">
                  <Link
                    to={`/product-detail/${
                      item.cat_path
                        ? item.cat_path.split(".html").join("")
                        : null
                    }`}
                  >
                    <div className="block2-name dis-block s-text3 p-b-5">
                      {nameFormat(item.name)}
                    </div>
                  </Link>
                  <span className="block2-price m-text6 p-r-5">
                    {numberFormat(item.price)} vnd
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ProductList;
