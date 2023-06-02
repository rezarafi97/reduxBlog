import { useParams, Link, useNavigate } from "react-router-dom";
import { useDeleteBlogMutation, useGetBlogQuery } from "../api/apiSlice";
import ShowTime from "./ShowTime";
import ShowAuthor from "./ShowAuthor";
import ReactionButtons from "./ReactionButtons";
import Spinner from "./Spinner";

const SingleBlogPage = () => {
    const { blogId } = useParams();

    const { data: blog, isFetching, isSuccess } = useGetBlogQuery(blogId);
    const [deleteBlog] = useDeleteBlogMutation();

    const navigate = useNavigate();

    const handleDelete = async () => {
        if (blog) {
            await deleteBlog(blogId);
            navigate("/");
        }
    };

    if (!blog) {
        return (
            <section>
                <h2>پستی که دنبالش میگردی وجود نداره دوست من 🤗</h2>
            </section>
        );
    }

    let content;
    if (isFetching) {
        content = <Spinner text="در حال بارگذاری ..." />;
    } else if (isSuccess) {
        content = (
            <article className="blog">
                <h2>{blog.title}</h2>

                <div style={{ marginTop: "10px", marginRight: "20px" }}>
                    <ShowTime timestamp={blog.date} />
                    <ShowAuthor userId={blog.user} />
                </div>

                <p className="blog-content">{blog.content}</p>

                <ReactionButtons blog={blog} />

                <Link to={`/editBlog/${blog.id}`} className="button">
                    ویرایش پست
                </Link>
                <button
                    className="muted-button"
                    style={{ marginRight: "10px" }}
                    onClick={handleDelete}
                >
                    حذف پست
                </button>
            </article>
        );
    }

    return <section> {content} </section>;
};

export default SingleBlogPage;
