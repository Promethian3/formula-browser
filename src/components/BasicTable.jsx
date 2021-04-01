import React, { useMemo } from 'react';
import { FORMULA_COLUMNS } from "../config/columns";
import db from "../config/db.json";
import { useTable } from 'react-table';
// import { Link } from "react-router-dom";

const fmls = db.map((f,i) => ({...f, index:i})).filter(f=>f.index < 25);

export const BasicTable = () => {
    const columns = useMemo(() => FORMULA_COLUMNS, []);
    const data = useMemo(() => (fmls), []);

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <table {...getTableProps()}>
            <thead>
                { headerGroups.map(group => (
                    <tr {...group.getHeaderGroupProps()}>
                        { group.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                { rows.map((row,i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            { row.cells.map((cell) => { 
                                let elem = cell.render("Cell");
                                // if(cell?.column?.Header === "Title") { 
                                //     elem = (<Link to={`/movie/${movies.list[i].movie_id}`}>{elem}</Link>);
                                // }
                                return (<td {...cell.getCellProps()}>{elem}</td>);
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
