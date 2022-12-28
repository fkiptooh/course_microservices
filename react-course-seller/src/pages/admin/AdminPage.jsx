import CourseService from '../../services/course.service';
import { useEffect, useRef, useState } from "react";
import { CourseSave } from '../../components/CourseSave';

const AdminPage = () => {
    const [courseList, setCourseList] = useState([]);
    const saveComponent = useRef();
    useEffect(()=>{
        CourseService.getAllCourses().then((response)=>{
            setCourseList(response.data); 
        })
    },[]);
    const createCourseRequest = () => {
        saveComponent.current?.showCourseModal();
    };
    return(
        <div className='container'>
            <div className="pt-5">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-6">
                                <h3>All Courses</h3>
                            </div>
                            <div className="col-6 text-end">
                                <button className="btn btn-primary" onClick={()=> createCourseRequest()}>
                                    Create Course
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courseList.map((item, ind)=>
                                <tr key={item.id}>
                                    <th scope="row">{ind + 1}</th>
                                    <td>{item.title}</td>
                                    <td>{`Ksh ${item.price}`}</td>
                                    <td>{new Date(item.createdTime).toLocaleDateString()}</td>
                                    <td>
                                        <button className="btn btn-primary me-1">
                                            Edit
                                        </button>
                                        <button className="btn btn-danger">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <CourseSave ref={saveComponent}></CourseSave>
        </div>
    );
};

export {AdminPage};
