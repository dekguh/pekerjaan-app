import ReactPaginate from "react-paginate"

const Pagination = ({ ...rest }) => {
    return (
        <ReactPaginate
            breakClassName='d-none'
            containerClassName='pagination__custom'
            pageClassName='pagination__custom-item'
            pageLinkClassName='pagination__custom-link'
            activeClassName=''
            activeLinkClassName='pagination__custom-active'
            previousClassName='d-none'
            nextClassName='d-none'
            {...rest}
        />
    )
}

export default Pagination
