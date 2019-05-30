import React from "react";

function withPagination(Component) {
    class WithPagination extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                showItems: [], // list of showing items
                pages: [], // list of all pages
                selectingPage: 1 // current selecting page
            }
        }

        componentDidMount() {
            console.log("did mount")
            this.updateListPages(this.props.products);
            this.setState({
                showItems: this.getListData(1, this.props.products)
            })
        }

        componentWillReceiveProps(props) {
            if (props.products != this.props.products) {
                console.log("products changed")
                this.updateListPages(props.products);
                this.setState({
                    showItems: this.getListData(this.state.selectingPage, props.products)
                })
            }
        }

        updateListPages = items => {
            // divide pages if item list > 10
            let tempList = [];
            for (let i = 0; i < (items.length / 10); i++) {
                tempList = [...tempList, i + 1];
            }
            this.setState({ pages: tempList });
        }

        /**
         * On page change action.
         * Update selecting page and show items.
         */
        onPageChange = pageNum => {
            this.setState({
                selectingPage: pageNum,
                showItems: this.getListData(pageNum, this.props.products)
            })
        }

        /** Filter list showing items depends on current page */
        getListData = (page, currentItem) => {
            let showingData = [...currentItem];
            if (showingData.length > 10) {
                let endIndex = page * 10 - 1;
                let startIndex = page * 10 - 10;
                showingData = showingData.slice(startIndex, endIndex);
            }

            return showingData;

        }

        render() {
            return (
                <>
                    {/* Wrapped Component */}
                    <Component listItem={this.state.showItems} {...this.props} />
                    {/* Pagination */}
                    <div className="row">
                        <div className="products-pagination">
                            {
                                this.state.pages.map(page => (
                                    <a
                                        key={page}
                                        onClick={() => this.onPageChange(page)}
                                        className={
                                            this.state.selectingPage === page
                                                ? "active-pagination item-pagination flex-c-m trans-0-4"
                                                : "item-pagination flex-c-m trans-0-4"
                                        }
                                    >
                                        {page}
                                    </a>
                                ))}
                        </div>
                    </div>
                </>
            )
        }
    }
    return WithPagination;
}

export default withPagination;