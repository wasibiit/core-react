import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PhoneIcon from '@material-ui/icons/Phone';
import {Wrapper} from "../index";
import { mockFeed } from '../../utils/feed';
import StatCard from "../../utils/StatCard";
class Widgets extends Component {
  state = {
    feed: mockFeed.slice(0,3),
    stats: [
      {
        title: 'Comments',
        value: 24
      },
      {
        title: 'Likes',
        value: 45
      },
      {
        title: 'Shares',
        value: 984
      }
    ]
  }

  render() {
    // const { feed, stats } = this.state;

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
        </Grid>
      </Wrapper>
    )
  }
}

export default Widgets;