import React from "react";
import StatCard from "../../components/Cards/StatCard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Grid from "@material-ui/core/Grid";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import {Wrapper} from "../../components";
import Editor from "../../components/Editor/Editor";
import Charts from "../../components/Charts/Charts";
const Home = () => {
    return (
      <div className={"main"}>
          <Wrapper>
              <Grid container spacing={8}>

                  <Grid item xs={12} sm={6} md={3}>
                      <StatCard
                          title="Vedio"
                          value={103}
                          icon={<LocalOfferIcon />}
                          color="#3f51b5"
                      />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                      <StatCard
                          title="Contact"
                          value={230}
                          icon={<PhoneIcon />}
                          color="#9c27b0"
                      />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                      <StatCard
                          title="Queries"
                          value={323}
                          icon={<NotificationsIcon />}
                          color="#f44336"
                      />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                      <StatCard
                          title="Opens"
                          value={870}
                          icon={<EmailIcon />}
                          color="#ffd740"
                      />
                  </Grid>
              </Grid>
          </Wrapper>
          <div>

              <Charts/>
              <Editor/>

          </div>

        </div>

    );
}
export default Home;