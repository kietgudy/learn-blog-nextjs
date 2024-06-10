"use client";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

interface Props {
  blogs: Blog[];
}
function AppTable(props: Props) {
  const { blogs } = props;
  return (
    <>
    <div className="mb-3" style={{display: "flex", justifyContent: "space-between"}}>
        <h2>Manage Blogs</h2>
        <Button>+ Add new blog</Button>
    </div>
    <Table bordered hover size="lg">
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog) => {
          return (
            <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>{blog.title}</td>
              <td>{blog.author}</td>
              <td>
                <Button variant="secondary">View</Button>
                <Button variant="warning" className="mx-3">Edit</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
    </>
  );
}

export default AppTable;
