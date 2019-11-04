import React from "react"
import Layout from "../components/layout"
import { Typography } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <Grid container>
      <Grid item xs={12}>
        <Typography variant={"h3"}>Page 2</Typography>
      </Grid>

      <Grid item xs={12}>
        <Link to={"/"}>
          <Typography variant={"h3"}>Home</Typography>
        </Link>
      </Grid>
    </Grid>
  </Layout>
)
