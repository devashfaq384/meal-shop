import Link from "next/link"

const page = () => {
  return (
    <div>
      the blog is here
      <p>
        <Link href='/blog/post-1'>Link to post-1 of the blog </Link>
      </p>
      <p>
        <Link href='/blog/post-2'>Link to post-2 of the blog </Link>
      </p>
      <p>
        <Link href='/blog/post-3'>Link to post-3 of the blog </Link>
      </p>
    </div>
  )
}

export default page
