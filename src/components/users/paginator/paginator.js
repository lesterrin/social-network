import * as React from "react";
import s from "./paginator.module.css";
import {useState} from "react";


const Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const paginator = [];
    const pagesPortionSize = 10;

    const [currentPagesPortion, setCurrentPagesPortion] = useState(Math.ceil(currentPage / pagesPortionSize));

    const pagesStart = (currentPagesPortion - 1) * 10 + 1;
    const pagesEnd = pagesStart + pagesPortionSize - 1;

    for (let i = pagesStart; i <= pagesEnd && i <= pagesCount; i++) {
        paginator.push(<button onClick={() => onPageChanged(i)}
                             className={currentPage === i ? `${s.blue} ${s.btn}` : s.btn}
                              >{i}</button>);
    }

    return (
        <div className={s.paginator}>
            {pagesStart > 1 && <button
                className={`${s.btn} ${s.blue}`}
                onClick={() => setCurrentPagesPortion(currentPagesPortion - 1)}
            >Previous</button>}
            {paginator}
            {pagesEnd < pagesCount && <button
                className={`${s.btn} ${s.blue}`}
                onClick={() => setCurrentPagesPortion(currentPagesPortion + 1)}
            >Next</button>}
            <div>Всего страниц: {pagesCount}</div>
        </div>
    )
}

export default Paginator;