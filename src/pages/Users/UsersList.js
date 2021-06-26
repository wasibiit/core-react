import React from "react"
import {Card, CardContent} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import DatePickers from "../../components/Calender/Dob";
import {Formik} from "formik";
export default class UsersList extends React.Component {
    render() {
        return(
            <Paper elevation={6}>
                <form>
                    <div className="text-xs-center pb-xs">
                        <div className={"form"} style={{background: 'linear-gradient( lightgrey, white)'}}>
                            <h2 style={{textAlign:"center"}}>Form Validation</h2>
                        </div>
                        <div>
                            <Card>
<<<<<<< Updated upstream
                                <div style={{display: "flex",justifyContent: "space-evenly", padding:" 40px"}}>
=======
                                <div style={{display: "flex", justifyContent: "space-evenly", padding:" 40px"}}>
>>>>>>> Stashed changes
                                    <CardContent style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: "space-evenly",
                                        flex: '1 0 auto',
                                        margin: "normal",
                                        overflow: 'visible',
                                        padding:"70px"}}>
                                        <input type="text"
                                               placeholder="FirstName"
                                               id="firstName"
                                               label="firstName"
                                               className="Programs"
                                               margine="normal"/>
                                        <input type="text"
                                               placeholder="LastName"
                                               id="LastName"
                                               label="LastName"
                                               className="Programs"
                                               margine="normal"/>
                                        <DatePickers/>
                                        <input type="password" placeholder= "Password"/>

                                        <Button
                                            style={{color:"#FB8122", backgroundColor:'#E1E2E2'}}
                                            variant="raised"
                                            type="submit">Delete</Button>
                                        <Button
                                            style={{color:"#FB8122", backgroundColor:'#E1E2E2',justifyContent: "space-evenly"}}
                                            variant="raised"
                                            type="submit">Save</Button>
                                    </CardContent>
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
                                </div>
                            </Card>
                        </div>
                    </div>

                </form>
            </Paper>
        )
    }
}