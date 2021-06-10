import React from "react";
import StatCard from "../../components/Cards/StatCard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Grid from "@material-ui/core/Grid";
const Home = () => {
    return (
        <div className={"HomeDashboard"}>
            <Grid item xs={12} sm={6} md={3}>
                <StatCard
                    title="Queries"
                    value={323}
                    icon={<NotificationsIcon />}
                    color="Black"
                    bgColor={"pink"}
                />
            </Grid>
        </div>
    );
}
export default Home;