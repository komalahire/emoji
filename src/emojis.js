import React, { Component } from "react";
import JsonData from './emojiList.json';
import "./emojis.css";

function search_emoji(query) {
    return function (z) {
        return z.keywords.toLowerCase().includes(query.toLowerCase()) || z.title.toLowerCase().includes(query.toLowerCase());
    }
}

class PostList extends Component {
    constructor(props) {
        super(props);
           this.state = { json: props.emojiList, query: '' };
    }


    handleInputChange = () => {
        this.setState({
            query: this.search_emoji.value
        })
    }
    render() {
        const emoji = this.state.json.filter(search_emoji(this.state.query)).slice(0, 20).map(JsonDatails => (

            <div className="emojies">
                {JsonDatails.symbol}
                <span className="text">
                    {JsonDatails.title}
                </span>
            </div>
        ));
        return (
            <div>
                <form>
                    <input
                        placeholder="Search" ref={input => this.search_emoji = input} onChange={this.handleInputChange} className="input" />
                </form>
                <h6>{emoji}</h6>
            </div>

        )
    }
}

export default PostList