import React from "react";
import PageNotFound from "../../assets/images/page-not-found.jpg"
function NotFound(props) {
  return (
    <div>
      <img src={PageNotFound} alt="IMG_PAGE_NOT_FOUND" />
      <h3 className="p-t-15">
        Sorry! We can't find the page you want to go
      </h3>
    </div>
  );
}

export default NotFound;
