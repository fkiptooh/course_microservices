import { useEffect, useState } from "react";
import userService from "../../services/user.service";
import { Role } from "../../models/role";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../models/user";
// import { clearCurrentUser } from '../../store/actions/user';

const UserPage = () => {
  const [userList, setUserList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const currentUser = useSelector(state => state.user);

  const changeRole = () => {
    // const newRole = User.role.name() === Role.ADMIN ? Role.USER : Role.ADMIN;
    // userService.changeRole(newRole).then((response) => {
    //     // dispatch(clearCurrentUser());
    //     // navigate('/login');
    // }).catch((err)=>{
    //     setErrorMessage('Unexpected error occured');
    //     console.log(err);
    // });
  };

  useEffect(() => {
    userService.getAllUsers().then((response) => {
      setUserList(response.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="pt-5">
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-6">
                <h3>All Users</h3>
              </div>
              <div className="col-6 text-end">
                <button className="btn btn-primary">Create Course</button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Role</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((item, ind) => (
                  <tr key={item.id}>
                    <th scope="row">{ind + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.role}</td>
                    <td>
                      <button className="btn btn-primary me-1">Edit</button>
                      <button className="btn btn-danger me-1">Delete</button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => changeRole()}
                      >
                        Change Role
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <CourseSave ref={saveComponent} course={selectedCourse} onSaved={(p)=>saveCourseWatcher(p)}></CourseSave>
        <CourseDelete ref={deleteComponent} onConfirmed={()=> deleteCourse()}></CourseDelete> */}
    </div>
  );
};

export { UserPage };
