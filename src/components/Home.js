import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Home(){

    let history = useNavigate();

    const handleEdit = (id, name, age) => {
        localStorage.setItem("Name", name)
        localStorage.setItem("Age", age)
        localStorage.setItem("id", id)
    }

    const handleDelete = (id) => {
        var index = Employees.map(function(e){
            return e.id
        }).indexOf(id);

        Employees.splice(index,1);

        history('/');
    }


    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                            ?
                            Employees.map((item) =>{
                                return(
                                    <tr key={item.id}>
                                        <td>{item.Name}</td>
                                        <td>{item.Age}</td>
                                        <td>
                                            <Link to={'/edit'}>
                                                <Button onClick={() => handleEdit(item.id, item.Name, item.Age)}>Edit</Button>
                                            </Link>
                                            &nbsp;
                                            <Button onClick={() => handleDelete(item.id)} >Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                        }
                    </tbody>
                </table>
                <br/><br/>
                <Link className="d-grid" to={'/create'}><Button>Create</Button></Link>
            </div>
        </Fragment>
    )
}

export default Home;