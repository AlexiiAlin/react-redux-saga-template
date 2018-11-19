import * as React from 'react';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Row } from "../../shared/interfaces";
import {Link} from "react-router-dom";

interface TopicsProps {
    rows: Row[]
}

export class Topics extends React.Component<TopicsProps, {}> {
    render() {
        const { rows } = this.props;
        return(
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Username</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell><Link to={`/topics/${row.id}`}>{row.title}</Link></TableCell>
                                    <TableCell>{row.userName}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}