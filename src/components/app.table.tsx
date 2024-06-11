"use client";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useState } from "react";
import CreateModal from "./create.modal";
import UpdateModal from "./update.modal";
import Link from "next/link";
import { toast } from "react-toastify";
import { mutate } from "swr";

interface Props {
  blogs: Blog[];
}
function AppTable(props: Props) {
  const { blogs } = props;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const handleDeleteBlog = (id: number) => {
    if (confirm(`Do you want to delete this blog id: ${id}`)) {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            toast.success("Delete blog success");
            mutate("http://localhost:8000/blogs");
          }
        });
    }
  };
  return (
    <>
      <div
        className="mb-3"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h2>Manage Blogs</h2>
        <Button onClick={() => setShowModalCreate(true)}>+ Add new blog</Button>
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
          {blogs.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Button variant="secondary">
                    <Link className="nav-link" href={`/blogs/${item.id}`}>
                      View
                    </Link>
                  </Button>
                  <Button
                    variant="warning"
                    className="mx-3"
                    onClick={() => {
                      setBlog(item);
                      setShowModalUpdate(true);
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => handleDeleteBlog(item.id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <CreateModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
      />
      <UpdateModal
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
        blog={blog}
        setBlog={setBlog}
      />
    </>
  );
}

export default AppTable;
