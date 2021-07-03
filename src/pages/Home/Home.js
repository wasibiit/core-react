import React from "react";
import StatCard from "../../components/Cards/StatCard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Grid from "@material-ui/core/Grid";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PhoneIcon from "@material-ui/icons/Phone";
import {People} from "@material-ui/icons";
import EmailIcon from "@material-ui/icons/Email";
const Home = () => {
    return (
      <div className={"main"}>

              <Grid style={{padding: "20px"}} container spacing={8}>

                  <Grid item xl={6} sm={3}>
                      <StatCard
                          title="Tag"
                          color="#FB8122"
                          icon={<LocalOfferIcon />}
                      />
                  </Grid>
                  <Grid item xs={6} sm={3} >
                      <StatCard
                          title="Contact"
                          icon={<PhoneIcon />}
                          color="#FB8122"
                      />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                      <StatCard
                          title="Notification"
                          icon={<NotificationsIcon />}
                          color="#FB8122"
                      />
                  </Grid>
              </Grid>
              <Grid style={{padding: "20px"}}  container spacing={8}>

                  <Grid item xs={6} sm={3}>
                      <StatCard
                          title="LocalOffer"
                          color="#FB8122"
                          icon={<LocalOfferIcon />}

                      />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                      <StatCard
                          title="Contact"
                          icon={<EmailIcon />}
                          color="#FB8122"
                      />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                      <StatCard
                          title="People"
                          icon={<People/>}
                          color="#FB8122"
                      />
                  </Grid>
              </Grid>

        </div>

    );
}
export default Home;