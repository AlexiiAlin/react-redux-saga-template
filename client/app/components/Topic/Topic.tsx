import * as React from 'react';
import { Row } from "../../shared/interfaces";
import {getRow} from "../../shared/mocks";

interface TopicProps {
    match: any
}

interface TopicState {
    row: Row
}

export class Topic extends React.Component<TopicProps, TopicState> {

    constructor(props: TopicProps) {
        super(props);

        this.state = {
            row: {} as Row
        }
    }

    componentWillMount() {
        const row = getRow(this.props.match.params.id);
        this.setState({row});
    }

    render() {
        const { row } = this.state;
        return(
            <h1>{row && row.title}</h1>
        )
    }
}