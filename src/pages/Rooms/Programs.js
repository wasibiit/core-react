import React from "react";
import {CardContent} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
const Programs = () => {
    {
        return (
            <Paper elevation={6}>
            <form>
                <div className="text-xs-center pb-xs">
                    <div className={"form"} style={{background: 'linear-gradient( lightgrey, white)'}}>
                        <h2 style={{textAlign:"center"}}>Form Validation</h2>
                    </div>
                    <div>
                        <CardContent>
                            <div style={{display: "flex", justifyContent: "space-evenly", padding:" 70px"}}>

                                <input type="text"
                                       placeholder="UserName"
                                       id="UserName"
                                       label="User-Name"
                                       className="Programs"
                                       margine="normal"/>
                                <input type="text"
                                       placeholder="Duration"
                                       id="Duration"
                                       label="Duration"
                                       className="Programs"
                                       margine="normal"/>
                                <Button
                                    style={{color:"#FB8122", backgroundColor:'#E1E2E2'}}
                                    variant="raised"
                                    type="submit">Delete</Button>
                                <Button
                                    style={{color:"#FB8122", backgroundColor:'#E1E2E2'}}
                                    variant="raised"
                                    type="submit">Save</Button>
                            </div>
                        </CardContent>
                    </div>
                </div>

            </form>
            </Paper>
        )
            ;
    }
}

export default Programs;
