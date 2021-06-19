import React from 'react';
import Grid from '@material-ui/core/Grid';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PhoneIcon from '@material-ui/icons/Phone';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import {Wrapper} from "../index";
import StatCard from "../../styles/statCard";

const Widgets = () =>{
    return (
      <Wrapper>
        <Grid container spacing={8}>

          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Campaigns"
              value={103}
              icon={<LocalOfferIcon />}
              color="#3f51b5"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Customers"
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
    )
}
export default Widgets;
