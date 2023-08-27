import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./UserList.css";
import ReactPaginate from "react-paginate";
import PageMenu from "../../Component/PageMenu/PageMenu";
import UserStats from "../UserStats/UserStats";
import Search from "../../Component/Search/Search";
import { FaTrash } from "react-icons/fa";
import ChangeRole from "../../Component/ChangeRole/ChangeRole";
import UseRedirectLogOutUser from "../../Component/customHook/UseRedirectLogOutUser";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../Redux/Features/Auth/authSlice";
import { shortenText } from "../Profile/Profile";
import { FILTER_USERS, selectUser } from "../../Redux/Features/FilterSlice";

const UserList = () => {
  UseRedirectLogOutUser("/login");
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const { users, isLoggedIn, isSuccess } = useSelector((state) => state.auth);

  const filteredUsers = useSelector(selectUser);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const removeUser = async (id) => {
    await dispatch(deleteUser(id));
    dispatch(getUsers());
  };

  const confirmDel = (id) => {
    confirmAlert({
      title: "Delete this User",
      message: "Are you sure delete this user.",
      buttons: [
        {
          label: "Delete",
          onClick: () => removeUser(id),
        },
        {
          label: "Cancel",
          // onClick: () => ('Click No')
        },
      ],
    });
  };

  useEffect(() => {
    dispatch(FILTER_USERS({ users, search }));
  }, [dispatch, users, search]);

  //start pagination
  const itemsPerPage = 4;

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredUsers.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredUsers.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredUsers.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  //end pagination
  return (
    <section className="userList">
      <div className="users">
        <UserStats />

        <div className="user-list">
          <div className="all-users">
            <span>
              <p className="all-user">All Users</p>
            </span>
            <span>
              <Search
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </span>
          </div>
          {users.length === 0 ? (
            <p>No User Found</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Change Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((user, index) => {
                  const { _id, name, email, role } = user;

                  return (
                    <tr key={_id}>
                      <td>{index + 1}</td>
                      <td>{shortenText(name, 8)}</td>
                      <td>{email}</td>
                      <td>{role}</td>
                      <td>
                        <ChangeRole _id={_id} email={email} />
                      </td>
                      <td>
                        <span className="trash">
                          <FaTrash
                            size={20}
                            color="red"
                            onClick={() => {
                              confirmDel(_id);
                            }}
                          />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        <hr />
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="Back"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="activePage"
        />
      </div>
    </section>
  );
};

export default UserList;
