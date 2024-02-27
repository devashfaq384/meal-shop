
const blogPost = ({ params }) => {
  return (
    <div>
        This the post data into a slug component
        <h1>
            {params.slug}
        </h1>
    </div>
  )
}

export default blogPost