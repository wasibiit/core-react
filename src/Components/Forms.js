import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import {NativeSelect} from "@material-ui/core";
import {InputLabel} from "@material-ui/core";

import React from "react";

const Programs = () => {
    return (
        <div className={"Programs"}>
            <form>
                <Card>
                    <CardContent>
                        <form>
                            <div className="text-xs-center pb-xs">
                                {/*<img src="/static/images/" alt="form validation"/>*/}
                                <div className={"form"}>
                                    <h2>Form Validation</h2>
                                </div>
                            </div>
                            <div className="text-xs-center pb-xs"
                                 style={{display: "flex", justifyContent: "space-evenly"}}>
                                <TextField
                                    id="UserName"
                                    label="User-Name"
                                    className="Programs"
                                     margine= "normal"
                                />

                                    <div>
                                        <InputLabel htmlFor="select"/>
                                        <NativeSelect id="select" select margin="30px">
                                            <option value="BS Programs"> BS Programs</option>
                                            <option value="BS Computer Science"> BS Computer Science</option>
                                            <option value="BS Psychology"> BS Psychology</option>
                                            <option value="BS Physics"> BS Physics</option>
                                            <option value="BS Zology"> BS Zology</option>
                                        </NativeSelect>

                                    </div>
                                <div>
                                    <InputLabel htmlFor="select"></InputLabel>
                                    <NativeSelect id="select" select margin="30px">
                                        <option value="Duration">Duration</option>
                                        <option value="2017-21">2017-21</option>
                                        <option value="2021-25">2021-25</option>
                                        <option value="2025-28">2025-28</option>
                                        <option value="2028-32">2028-32</option>
                                    </NativeSelect>
                                </div>
                                <Button variant="raised" type="submit">Delete</Button>

                                <Button variant="raised" type="submit">Save</Button>
                            </div>

                        </form>
                    </CardContent>
                </Card>
            </form>
        </div>
    );
}
export default Programs
