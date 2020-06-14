import React from 'react';
import { Grid } from 'semantic-ui-react';

const Footer = () => {
	return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          Based in Northern California, we take our production process seriously, knowing the quality our environment provides to the rest of the world
          <br />We are a cbd company willing to provide the best and only the best possible products.
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
        &nbsp;&nbsp;&nbsp;© 2020 Copyright. mikes-ecommerce, all rights reserved.
      </Grid.Row>
    </Grid>
	);
};

export default Footer;
