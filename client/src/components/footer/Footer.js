import React from 'react';
import { Grid } from 'semantic-ui-react';
import './Footer.styles.scss'

const Footer = () => {
	return (
    <Grid className="footer-container">
      <Grid.Row>
        <Grid.Column>
          Based in Northern California, we take our production process seriously, knowing the quality our environment provides to the rest of the world.
          <br />We are a tech company re-sell willing to provide the best and only the best possible products. Thank you for shopping with us today!
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column><i className="fab fa-facebook-square"></i></Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column><i className="fab fa-instagram"></i></Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column><i className="fab fa-linkedin"></i></Grid.Column>
      </Grid.Row>
      <Grid.Row>
        &nbsp;&nbsp;&nbsp;© 2020 Copyright. monarchtracker.com, all rights reserved.
      </Grid.Row>
    </Grid>
	);
};

export default Footer;
