import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/apiActions";
import { useNavigate } from "react-router-dom";
import { addToDetails } from "../redux/actions/detailsActions";
import SearchBar from "./SearchBar";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const HomePage = () => {
    const { loading, posts, error } = useSelector(state => state.posts);

    console.log(loading, posts, error)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    function handleCardDetails(post) {
        dispatch(addToDetails(post));
        navigate(`/item/${post.id}`);
    }

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>

    return (
        <div>
        <SearchBar />
        <div className="mainDiv">
            {
                posts && posts.map((post) => {
                    return (
                        <div className="items" key={post.id} onClick={() => {
                            handleCardDetails(post)
                        }}>
                            <img id="imgs" src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
                            <div className="texts">
                                <div className="card-div">
                                    <div className="card-left-div">
                                            <div className="card-title">{post.title.slice(0, 10)}</div>
                                            <div>
                                            <p className="card-para">Body: {post.body.slice(0, 70)}</p>
                                            <p className="read-more">Read More...</p>
                                            </div>
                                    </div>
                                    <div className="card-right-div">
                                        <ChevronRightIcon className="card-icon" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }

        </div>
        </div>

    )
}

export default HomePage

