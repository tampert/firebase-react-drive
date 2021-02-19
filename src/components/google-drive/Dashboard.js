import React from "react";
import { Container } from "react-bootstrap";
import { useFolder } from "./../../hooks/useFolder";
import AddFolderButton from "./AddFolderButton";
import Navbar from "./NavBar";
import Folder from "./Folder";

export default function Dashboard() {
  const { folder, childFolders } = useFolder("fZHcEGC8Ffuem3TD9MOX");
  // console.log(childFolders);
  return (
    <>
      <Navbar />
      <Container fluid>
        <AddFolderButton currentFolder={folder} />
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "150px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
