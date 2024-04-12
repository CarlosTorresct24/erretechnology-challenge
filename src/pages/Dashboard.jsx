import { useState } from "react";

import "./css/Dashboard.css";
import boxicon from "./icons/box.png";
import search from "./icons/search.png";
import chat from "./icons/chat.png";
import logout from "./icons/logout.png";
import home from "./icons/home.png";
import bell from "./icons/bell.png";
import Modal from "../components/Modal/Modal";
import Input from "../components/primitives/Input/Input";
import Button from "../components/primitives/Button/Button";

const usersArr = [
  {
    id: 1,
    name: "João Santos",
    score: 4,
    salesOwner: "Carlos Torres",
    email: "joao@mailinator.com",
  },
  {
    id: 2,
    name: "Carlos Torres",
    score: 6,
    salesOwner: "Joel Torres",
    email: "carlos@mailinator.com",
  },
  {
    id: 3,
    name: "Jose Saramago",
    score: 12,
    salesOwner: "Duarte Ribeiro",
    email: "jose_saramago@gmail.com",
  },
  {
    id: 4,
    name: "Adelaide Castro",
    score: 13,
    salesOwner: "João Sampaio",
    email: "adelaide@gmail.com",
  },
  {
    id: 5,
    name: "João Neves",
    score: 16,
    salesOwner: "Maria Castro",
    email: "joão_neves@gmail.com",
  },
];

function Dashboard() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [users, setUsers] = useState(usersArr);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);

    const filteredData = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredData);
  };

  const addUser = (e) => {
    e.preventDefault();

    setUsers((prevUsers) => [
      ...prevUsers,
      {
        id: users.length + 1,
        name: e.target[0].value,
        score: e.target[1].value,
        salesOwner: e.target[2].value,
        email: e.target[3].value,
      },
    ]);

    setIsCreateModalOpen(false);
  };

  const editUser = (e) => {
    e.preventDefault();

    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === editedUser.id
          ? {
              ...editUser,
              name: e.target[0].value,
              score: e.target[1].value,
              salesOwner: e.target[2].value,
              email: e.target[3].value,
            }
          : user
      )
    );

    setIsEditModalOpen(false);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <div className="background-white">
        <div className="menu-left">
          <div className="menu-icons">
            <a>
              <img className="icon-group" src={home} alt="" />
            </a>
            <a>
              <img className="icon-group" src={boxicon} alt="" />
            </a>
            <a>
              <img className="icon-group" src={chat} alt="" />
            </a>
            <div className="menu-logout">
              <a>
                <img className="icon-group" src={logout} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="middle-page">
          <div className="header-bar">
            <div className="search-bar">
              <img className="search-icon" src={search} alt="" />
              <input
                className="search-input"
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleInputChange}
              />
              <div
                className="btn-add"
                onClick={() => setIsCreateModalOpen(true)}
              >
                +
              </div>
            </div>
            <div className="profile-bar">
              <img className="bell-icon" src={bell} alt="" />
              <div className="circle-image">C</div>
            </div>
          </div>
          <table className="dashboard-table">
            <thead className="background-table">
              <th>Name</th>
              <th>Score</th>
              <th>Sales Owner</th>
              <th>Email</th>
              <th>Actions</th>
            </thead>
            <tbody>
              {(searchTerm.length > 0 ? filteredUsers : users).map((user) => (
                <tr className="data-dashboard" key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.score}</td>
                  <td>{user.salesOwner}</td>
                  <td>{user.email}</td>
                  <td>
                    <span
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setEditedUser(user);
                        setIsEditModalOpen(true);
                      }}
                    >
                      edit
                    </span>{" "}
                    |{" "}
                    <span
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => deleteUser(user.id)}
                    >
                      delete
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isCreateModalOpen && (
            <Modal title="Add user">
              <form onSubmit={(e) => addUser(e)}>
                <Input type="text" label="Name" placeholder="Insert name" />
                <Input type="number" label="Score" placeholder="Insert score" />
                <Input
                  type="text"
                  label="Sales Owner"
                  placeholder="Insert sales owner"
                />
                <Input type="email" label="Email" placeholder="Insert email" />
                <Button>Add user</Button>
                <Button
                  type="button"
                  style={{
                    display: "block",
                    backgroundColor: "gray",
                    marginTop: "5px",
                  }}
                  className="btn-main"
                  onClick={() => setIsCreateModalOpen(false)}
                >
                  Cancelar
                </Button>
              </form>
            </Modal>
          )}

          {isEditModalOpen && (
            <Modal title="Edit user">
              <form onSubmit={(e) => editUser(e)}>
                <Input
                  type="text"
                  label="Name"
                  placeholder="Insert name"
                  defaultValue={editedUser.name}
                />
                <Input
                  type="number"
                  label="Score"
                  placeholder="Insert score"
                  defaultValue={editedUser.score}
                />
                <Input
                  type="text"
                  label="Sales Owner"
                  placeholder="Insert sales owner"
                  defaultValue={editedUser.salesOwner}
                />
                <Input
                  type="email"
                  label="Email"
                  placeholder="Insert email"
                  defaultValue={editedUser.email}
                />
                <Button>Edit user</Button>
                <Button
                  type="button"
                  style={{
                    display: "block",
                    backgroundColor: "gray",
                    marginTop: "5px",
                  }}
                  className="btn-main"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancelar
                </Button>
              </form>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
