import React, {useEffect} from "react";
import {Paper} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import UserStyles from "../../styles/users";
import {TailwindCard} from "../../components/Cards/TailwindCard";
import {useDispatch, useSelector} from "react-redux";
import {getters} from "../../redux/selectors/selectors";
import {AuthRequest} from "../../data/requests";
import {getCoursesQuery, getProgramsQuery, getUsersListQuery} from "../../data/queries";
import {getCookie} from "../../utils/common";
import {dispatchers} from "../../redux/dispatchers/dispatchers";

const Home = (props) => {
    const {classes} = props;
    const {usersList} = useSelector(getters.getUsersList);
    const {programsList} = useSelector(getters.getProgramsList);
    const {coursesList} = useSelector(getters.getCoursesList);
    const {setUsersList} = dispatchers.usersListDispatcher(useDispatch())
    const {setProgramsList} = dispatchers.programsListDispatcher(useDispatch())
    const {setCoursesList} = dispatchers.coursesListDispatcher(useDispatch())

    useEffect(() => {
        if(usersList !== []) {
            AuthRequest(getUsersListQuery(), setUsersList, "getUsersList", getCookie("user"))
            AuthRequest(getProgramsQuery(), setProgramsList, "getProgramsList", getCookie("user"))
            AuthRequest(getCoursesQuery(), setCoursesList, "getCoursesList", getCookie("user"))
        }
    }, [])

    return (
        <Paper elevation={4} className={classes.paper}>
            <div className={"grid grid-cols-3 gap-12"}>
                <TailwindCard
                    title={"USERS"}
                    value={usersList.length}
                    color={"bg-gradient-to-r from-yellow-300 to-green-200"}
                />
                <TailwindCard
                    title={"ADMINS"}
                    value={usersList.filter(x => x.role["id"] === "admin").length}
                    color={"bg-gradient-to-r from-green-300 to-blue-200"}
                />
                <TailwindCard
                    title={"TEACHERS"}
                    value={usersList.filter(x => x.role["id"] === "teacher").length}
                    color={"bg-gradient-to-r from-green-300 to-blue-200"}
                />
                <TailwindCard
                    title={"STUDENTS"}
                    value={usersList.filter(x => x.role["id"] === "student").length}
                    color={"bg-gradient-to-r from-green-300 to-blue-200"}
                />
                <TailwindCard
                    title={"PROGRAMS"}
                    value={programsList.length}
                    color={"bg-gradient-to-r from-green-300 to-blue-200"}
                />
                <TailwindCard
                    title={"COURSES"}
                    value={coursesList.length}
                    color={"bg-gradient-to-r from-green-300 to-blue-200"}
                />
            </div>
        </Paper>
    );
}

export default withStyles(UserStyles)(Home);