import React from "react";
import "./styles.css";

function Sidebar({ onSorting, onFilterPrice }) {
  const txtMinValue = React.createRef();
  const txtMaxValue = React.createRef();
  return (
    <div>
      <div className="leftbar p-r-20 p-r-0-sm">
        <h4 className="m-text14 p-b-10">
          <strong>Sort by name</strong>
        </h4>
        <div className="p-t-22 bo3">
          <div className="p-b-3">
            <button
              className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4"
              onClick={() => onSorting(1)}
            >
              From A to Z
            </button>
          </div>
          <div className="p-t-3 p-b-32">
            <button
              className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4"
              onClick={() => onSorting(2)}
            >
              From Z to A
            </button>
          </div>
        </div>
        <h4 className="m-text14 p-b-10">
          <strong>Filter by price</strong>
        </h4>

        <div className="filter-price p-t-22 p-b-50 bo3">
          <div className="flex-sb-m flex-w p-t-16">
            <div className="row">
              <div className="form-group text-left col-md-6">
                <label>Min</label>
                <input
                  ref={txtMinValue}
                  className="form-control"
                  placeholder="Min"
                  type="number"
                />
              </div>
              <div className="form-group text-right col-md-6">
                <label>Max</label>
                <input
                  ref={txtMaxValue}
                  className="form-control"
                  placeholder="Max"
                  type="number"
                />
              </div>
              <button
                className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4"
                onClick={() =>
                  onFilterPrice(
                    txtMinValue.current.value,
                    txtMaxValue.current.value
                  )
                }
              >
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
