import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  regularItalic: {
    fontStyle: "italic",
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  boldItalic: {
    fontWeight: theme.typography.fontWeightBold,
    fontStyle: "italic",
  },
  black: {
    fontWeight: "900",
  },
  blackItalic: {
    fontWeight: "900",
    fontStyle: "italic",
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />
      <Typography variant={"h2"}>Regular</Typography>
      <Typography variant={"h2"} className={classes.regularItalic}>
        Regular Italic
      </Typography>

      <Typography variant={"h2"} className={classes.bold}>
        Bold
      </Typography>
      <Typography variant={"h2"} className={classes.boldItalic}>
        Bold Italic
      </Typography>

      <Typography variant={"h2"} className={classes.black}>
        Black
      </Typography>
      <Typography variant={"h2"} className={classes.blackItalic}>
        Black Italic
      </Typography>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
