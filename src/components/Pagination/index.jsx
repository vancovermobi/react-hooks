import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
  pagination: {},
  onPageChange: null,
};

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _limit, _page, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);

  function handlePageChange(newPage) {
    if (pagination) {
      onPageChange(newPage);
    }
  }
  return (
    <div style={{ textAlign: "left" }}>
      <button
        style={{ width: "4rem", padding: "0.2rem 1rem", marginRight: "3rem", cursor: "pointer", }}
        disabled={_page <= 1}
        onClick={() => handlePageChange(_page - 1)}
      >
        prev
      </button>
      <button
        style={{ width: "4rem", padding: "0.2rem 1rem", cursor: "pointer" }}
        disabled={_page >= totalPages}
        onClick={() => handlePageChange(_page + 1)}
      >
        next
      </button>
    </div>
  );
}

export default Pagination;
