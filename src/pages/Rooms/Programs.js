import React from "react";
import {CardContent} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Paper} from "@material-ui/core/Paper";

const Programs = () => {
    {
        return (

            <form>

                <div className="text-xs-center pb-xs">
                    <div className={"form"} style={{background: 'linear-gradient( lightgrey, white)'}}>
                        <h2>Form Validation</h2>
                    </div>
                    <div style={{margin: "normal", backgroundColor: "", hight: "30px"}}>
                        <CardContent>
                            <div style={{display: "flex", justifyContent: "space-evenly"}}>

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
                                <Button variant="raised" type="submit">Delete</Button>
                                <Button variant="raised" type="submit">Save</Button>
                            </div>
                        </CardContent>
                    </div>
                </div>

            </form>
        )
            ;
    }
}

export default Programs;
