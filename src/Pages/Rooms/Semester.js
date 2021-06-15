import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import {NativeSelect} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';


const Semester = () => {
    return (
        <div className={" Semester"}>
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
                                <div>
                                    <InputLabel htmlFor="select"/>
                                    <NativeSelect id="select" select margin="30px">
                                        <option value="BS Programs"> BS Programs</option>
                                        <option value="BS Computer Science"> BS Computer Science</option>
                                        <option value="BS Psychology"> BS Psychology</option>
                                        <option value="BS Physics"> BS Physics</option>
                                        <option value="BS Zology"> BS Zology</option>
                                        <option value="BS Math"> BS Math</option>
                                        <option value="BS English"> BS English</option>
                                        <option value="BS Urdu"> BS Urdu</option>
                                        <option value="BS Chemistry"> BS Chemistry</option>
                                    </NativeSelect>

                                </div>
                                {/*<div>*/}
                                {/*    <InputLabel htmlFor="select"></InputLabel>*/}
                                {/*    <NativeSelect id="select" select margin="30px">*/}

                                {/*        <option value="Semester">Semester</option>*/}
                                {/*        <option value="1">1st</option>*/}
                                {/*        <option value="2">2nd</option>*/}
                                {/*        <option value="3">3rd</option>*/}
                                {/*        <option value="5">5th</option>*/}
                                {/*        <option value="6">6th</option>*/}
                                {/*        <option value="7">thh</option>*/}
                                {/*        <option value="8">8th</option>*/}
                                {/*    </NativeSelect>*/}
                                {/*</div>*/}
                                <Button variant="raised" type="submit">Delete</Button>
                                <Button variant="raised" type="submit">Save</Button>
                            </div>
                        </CardContent>
                    </div>
                </div>
            </form>
        </div>

    );

}
export default Semester;
