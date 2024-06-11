"use client";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import useSWR, { Fetcher } from "swr";

const DetailBlog = ({ params }: { params: { id: string } }) => {
  const fetcher: Fetcher<Blog, string> = (url: string) =>
    fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <Link style={{color: 'black'}} href={"/blogs"}>
        Go back
      </Link>
      <Card className="text-center mt-3">
        <Card.Header>Title: {data?.title}</Card.Header>
        <Card.Body>
          <Card.Text>Content: {data?.content}</Card.Text>
        </Card.Body>
        <Card.Footer>
          Authors: <strong>{data?.author}</strong>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default DetailBlog;
