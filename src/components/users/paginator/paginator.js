import * as React from "react";
import s from "./paginator.module.css";


const Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const pagesStart = ((currentPage - 5) < 0) ? 0 : currentPage - 5;
    const pagesEnd = currentPage + 5;
    const slicedPages = pages.slice(pagesStart, pagesEnd);
    const paginator = slicedPages.map(page => <button onClick={() =>
                                                      onPageChanged(page)}
                                                      className={currentPage === page ? s.currentPage : ''}
                                                      >{page}</button>);

    return (
        <>
            {paginator}
            <span>Всего страниц: {pagesCount}</span>
        </>
    )
}

export default Paginator;