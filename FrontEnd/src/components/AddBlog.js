import React, {Component} from "react";
import TutorialDataService from "../services/blog.service";
import Menu from "./Menu";

export class AddBlog extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);
        this.newTutorial = this.newTutorial.bind(this);


        this.state = {
            id: "",
            title: "",
            content: "",
            date: "",
            published: false,

            submitted: false
        };
    }

    onChangeTitle(e) {
        this.setState({title: e.target.value});
    }

    onChangeContent(e) {
        this.setState({content: e.target.value});
    }

    onChangeDate(e) {
        this.setState({date: e.target.value});
    }

    saveTutorial() {
        var data = {
            title: this.state.title,
            content: this.state.content,
            date: this.state.date
        };

        TutorialDataService.create(data).then(response => {
            this.setState({
                id: response.data.id,
                title: response.data.title,
                content: response.data.content,
                date: response.data.date,
                published: response.data.published,

                submitted: true
            });
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        });
    }

    newTutorial() {
        this.setState({
            id: null,
            title: "",
            content: "",
            date: "",
            published: false,

            submitted: false
        });
    }

    render() {
        return (

<>
<div>
<Menu></Menu>
</div>

            <div className="submit-form">
                {
                this.state.submitted ? (
                    <div>
                        <h4>You Added Blog SucessFully!</h4>
                        <button className="btn btn-success"
                            onClick={
                                this.newTutorial
                        }>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" required
                                value={
                                    this.state.title
                                }
                                onChange={
                                    this.onChangeTitle
                                }
                                name="title"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <input type="text" className="form-control" id="content" required
                                value={
                                    this.state.content
                                }
                                onChange={
                                    this.onChangeContent
                                }
                                name="content"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input type="text" className="form-control" id="date" required
                                value={
                                    this.state.date
                                }
                                onChange={
                                    this.onChangeDate
                                }
                                name="date"/>
                        </div>

                        <button onClick={
                            this.saveTutorial
                        }
                        className="btn btn-success">
                            Add Blog
                        </button>
                    </div>
                )
            } </div>
                                </>
        );
    }
}
