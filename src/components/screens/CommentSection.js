import React, {Component} from 'react';
import CommentList from '../CommentList';
import FormComponent from '../FormComponent';
import Context from '../Context';
import Footer from '../Footer';
// import "../css/comment.css";

export default class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            loading: false,
            bookid: 0
        };

        this.addComment = this.addComment.bind(this);
    }

    /**
     *
     * @param {Adcomment} comment
     */
    addComment(comment) {
        this.setState({
            loading: false,
            comments: [comment, ...this.state.comments]
        });
    }

    // componentDidMount() {
    //   //loading
    //   this.setState({ loading: true });

    //   //get all the comments
    //   fetch("/api/comments")
    //     .then(res => res.json())
    //     .then(comments => {
    //       this.setState(
    //         {
    //           comments: comments,
    //           loading: false
    //         },
    //         () => console.log("Comments fetched..", comments)
    //       );
    //     });
    //   // .catch(err => {
    //   //   this.setState({ loading: false });
    //   // });
    // }

    componentDidMount() {
        //loading mode
        this.setState({loading: true});

        //get all the comments
        fetch('/getComments', {
            method: 'POST',
            body: JSON.stringify({
                bookid: this.props.bookid
            }),
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    comments: res,
                    loading: false
                });
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    render() {
        // const loadingSpin = this.state.loading ? "App-logo Spin" : "App-logo";
        // const { comments, loading } = this.state;
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <div className='App container bg-light shadow'>
                            <div>
                                <img
                                    class='author-img'
                                    src={this.props.imagelink}
                                ></img>
                                <br />
                                <h2>{this.props.title}</h2>
                            </div>
                            <header className='App-header'>
                                <h1 className='App-title'>
                                    Geek Text Comments
                                    <span
                                        className='px-2'
                                        role='img'
                                        aria-label='Chat'
                                    >
                                        💬
                                    </span>
                                </h1>
                            </header>

                            <div className='row'>
                                <div className='col-4  pt-3 border-right'>
                                    <h6>Say something about your purchase</h6>
                                    {/* Comment Form Component */}
                                    <FormComponent
                                        addComment={this.addComment}
                                        username={context.username}
                                    />
                                </div>
                                <div className='col-8  pt-3 bg-white'>
                                    {/* Comment List Component */}
                                    <CommentList
                                        loading={this.state.loading}
                                        comments={this.state.comments}
                                        username={this.props.username}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <Footer /> */}
                    </React.Fragment>
                )}
            </Context.Consumer>
        );
    }
}
