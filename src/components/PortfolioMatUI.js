import React from 'react';
import { ArrowBackOutlined } from "@material-ui/icons";
import { ArrowDropDownOutlined } from "@material-ui/icons";
import { ArrowForwardOutlined } from "@material-ui/icons";
import { ArrowRightAltOutlined } from "@material-ui/icons";
import { ArrowRightOutlined } from "@material-ui/icons";
import { FormatQuote } from "@material-ui/icons";
import { AppBar } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Hidden } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";

function PortfolioMatUI(props) {
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Container maxWidth="xl">
          <AppBar
            elevation={1}
            square
            position="fixed"
            style={{
              backgroundColor: "#1f2235",
              paddingTop: "20px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <Grid
              container
              justify="space-between"
              direction="row"
              style={{ paddingLeft: "5px", paddingRight: "5px" }}
            >
              <Grid zeroMinWidth item>
                <Grid container>
                  <Grid zeroMinWidth item>
                    <div style={{ marginTop: "-7px" }}>
                      <Avatar
                        src="https://static1.squarespace.com/static/5df9ba9cfb325158acadf8b0/t/5f0301bb6e62565b9d585f91/1603697990249/?format=1500w"
                        style={{
                          width: "45px",
                          marginTop: "-10px",
                          height: "45px",
                        }}
                      ></Avatar>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Link
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.89)",
                          fontWeight: "600",
                          paddingLeft: "2px",
                        }}
                      >
                        SlashDiv
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  id="id_38kJUzd1N"
                  justify="space-between"
                  direction="row"
                  spacing={1}
                >
                  <Grid zeroMinWidth item id="id_Pe88hj_K5">
                    <div>
                      <Link
                        style={{
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.89)",
                          fontWeight: "600",
                        }}
                      >
                        ABOUT
                      </Link>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Link
                        style={{
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                          color: "#fec576",
                          fontWeight: "600",
                        }}
                      >
                        WORKS
                      </Link>
                    </div>
                    <IconButton style={{ color: "#fec576", paddingTop: "0px" }}>
                      <ArrowDropDownOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Link
                        style={{
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.89)",
                          fontWeight: "600",
                        }}
                      >
                        CASE STUDY
                      </Link>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Link
                        style={{
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.89)",
                          fontWeight: "600",
                        }}
                      >
                        CLIENTS
                      </Link>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Link
                        style={{
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.89)",
                          fontWeight: "600",
                        }}
                      >
                        CONTACT
                      </Link>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Button
                        variant="outlined"
                        style={{
                          borderRadius: "0px",
                          fontSize: "12px",
                          borderColor: "#fec576",
                          fontFamily: "sans-serif",
                          color: "#fec576",
                        }}
                      >
                        LET&#039;S CHAT
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AppBar>
        </Container>
        <Paper
          square
          style={{
            backgroundColor: "#1f2235",
            paddingTop: "40px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <Grid
            container
            alignContent="center"
            alignItems="center"
            justify="space-between"
            direction="row"
          >
            <Grid zeroMinWidth item>
              <div style={{ paddingTop: "50px" }}>
                <Typography
                  variant="h6"
                  style={{
                    color: "rgba(245,166,35,0.72)",
                    fontSize: "25px",
                    fontFamily: "Noto Sans JP",
                  }}
                >
                  Hello, I&#039;m
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "50px",
                    fontFamily: "Abril Fatface",
                    color: "rgba(255,255,255,0.86)",
                    paddingLeft: "10px",
                    letterSpacing: "2px",
                  }}
                >
                  Vardhan
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "50px",
                    fontFamily: "Abril Fatface",
                    marginTop: "-25px",
                    color: "rgba(255,255,255,0.86)",
                    paddingLeft: "10px",
                    letterSpacing: "2px",
                  }}
                >
                  Techies
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "22px",
                    fontFamily: "Noto Sans JP",
                    color: "rgba(255,255,255,0.86)",
                    paddingLeft: "10px",
                  }}
                >
                  Product Designer
                </Typography>
              </div>
            </Grid>
            <Grid zeroMinWidth item>
              <div style={{ paddingTop: "20px" }}>
                <img
                  src="https://i.imgur.com/yCaRuDb.png"
                  style={{
                    width: "100%",
                    paddingTop: "50px",
                    paddingBottom: "3px",
                  }}
                ></img>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Paper square style={{ backgroundColor: "#292f44" }}>
          <Paper
            square
            style={{
              marginLeft: "20px",
              marginTop: "-3px",
              marginRight: "20px",
            }}
          >
            <div>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-around"
                direction="row"
                style={{ backgroundColor: "#282e4d" }}
              >
                <Grid
                  zeroMinWidth
                  item
                  xs={2}
                  style={{
                    backgroundColor: "#fec576",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <div style={{ width: "100%", textAlign: "center" }}>
                    <Link
                      style={{
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                        color: "#000000",
                        fontWeight: "600",
                      }}
                    >
                      ABOUT
                    </Link>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={10}>
                  <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    justify="space-around"
                    direction="row"
                  >
                    <Grid
                      zeroMinWidth
                      item
                      xs={2}
                      style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <Link
                          style={{
                            color: "#ffffff",
                            fontSize: "11px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          MY SERVICES
                        </Link>
                      </div>
                    </Grid>
                    <Divider
                      flexItem
                      orientation="vertical"
                      style={{ backgroundColor: "#4a4a4a" }}
                    />
                    <Grid
                      zeroMinWidth
                      item
                      xs={2}
                      style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <Link
                          style={{
                            color: "#ffffff",
                            fontSize: "11px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          INTERVIEWS
                        </Link>
                      </div>
                    </Grid>
                    <Divider
                      flexItem
                      orientation="vertical"
                      style={{ backgroundColor: "#4a4a4a" }}
                    />
                    <Grid
                      zeroMinWidth
                      item
                      xs={2}
                      style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <Link
                          style={{
                            color: "#ffffff",
                            fontSize: "11px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          AWARDS
                        </Link>
                      </div>
                    </Grid>
                    <Divider
                      flexItem
                      orientation="vertical"
                      style={{ backgroundColor: "#4a4a4a" }}
                    />
                    <Grid
                      zeroMinWidth
                      item
                      xs={2}
                      style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <Link
                          style={{
                            color: "#ffffff",
                            fontSize: "11px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          EXHIBITIONS
                        </Link>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Paper>
          <Paper
            square
            style={{
              backgroundColor: "#313552",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            <div style={{ paddingBottom: "50px", paddingTop: "20px" }}>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-around"
                direction="row"
              >
                <Grid zeroMinWidth item xs={6} style={{ paddingTop: "50px" }}>
                  <div style={{ textAlign: "center" }}>
                    <img
                      src="https://i.imgur.com/3wPbt6U.png"
                      style={{
                        borderRadius: "100%",
                        borderWidth: "5px",
                        borderColor: "#fec576",
                        borderStyle: "solid",
                      }}
                    ></img>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={6}>
                  <div style={{ paddingTop: "30px", paddingRight: "10px" }}>
                    <div style={{ paddingTop: "5px" }}>
                      <Typography
                        variant="body2"
                        style={{
                          color: "#fec576",
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                        }}
                      >
                        ABOUT ME
                      </Typography>
                      <Typography
                        variant="h5"
                        style={{
                          paddingTop: "20px",
                          fontSize: "30px",
                          fontFamily: "Source Serif Pro",
                          color: "#ffffff",
                          fontWeight: "600",
                        }}
                      >
                        Why hire me for your next project?
                      </Typography>
                    </div>
                    <div
                      style={{
                        paddingTop: "20px",
                        fontSize: "15px",
                        fontFamily: "sans-serif",
                        color: "rgba(255,255,255,0.8)",
                      }}
                    >
                      <span>Meet my startup design agency </span>
                      <span style={{ color: "#fec576" }}>Slash Techies </span>
                      <span>Currently I am working at </span>
                      <span style={{ color: "#fec576" }}>SlashDiv </span>
                      <span>as Product Designer. </span>
                      <span>Before that I&#039;ve worked at </span>
                      <span style={{ color: "#fec576" }}>SlashSee, </span>
                      <span>Dhaka as aUX, UI Designer.</span>
                    </div>
                    <div style={{ paddingTop: "20px" }}>
                      <Typography
                        variant="body2"
                        style={{
                          color: "rgba(255,255,255,0.8)",
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                        }}
                      >
                        I love to work in User Experience &amp; User Interface
                        designing. Because I love to solve the design problem
                        and find easy and better solutions to solve it. I always
                        try my best to make good user interface with the best
                        user experience. I have been working as a{" "}
                      </Typography>
                    </div>
                    <div style={{ paddingTop: "50px" }}>
                      <Button
                        variant="outlined"
                        style={{
                          borderRadius: "0px",
                          fontSize: "15px",
                          borderColor: "#fec576",
                          fontFamily: "sans-serif",
                          color: "#fec576",
                        }}
                      >
                        LEARN MORE
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Paper>
        <Paper
          square
          style={{
            backgroundColor: "#292f44",
            paddingTop: "70px",
            paddingBottom: "70px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <div>
            <Grid container>
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#fec576",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    MY CLIENTS
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "30px",
                      fontFamily: "Source Serif Pro",
                      color: "rgba(255,255,255,0.89)",
                      fontWeight: "600",
                    }}
                  >
                    Projects
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{ border: "solid 1px #fec576", borderWidth: "1px" }}
                >
                  <IconButton
                    size="small"
                    style={{
                      borderStyle: "solid",
                      color: "rgba(255,255,255,0.77)",
                      borderColor: "#ffffff",
                    }}
                  >
                    <ArrowBackOutlined />
                  </IconButton>
                  <IconButton
                    size="small"
                    edge="start"
                    style={{
                      borderStyle: "none",
                      backgroundColor: "#fec576",
                      borderRadius: "0px",
                    }}
                  >
                    <ArrowForwardOutlined />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ paddingTop: "30px" }}>
            <Grid container spacing={4} justify="space-between" direction="row">
              <Grid zeroMinWidth item xs={12}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#fec576",
                      paddingBottom: "2px",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  >
                    <Card
                      square
                      style={{
                        backgroundColor: "#313552",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    >
                      <img
                        src="https://i.imgur.com/1PS6Npr.png"
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "220px",
                        }}
                      ></img>
                      <CardContent style={{ paddingTop: "25px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          DASHBOARD, SLASHKART
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "22px",
                            fontFamily: "Source Serif Pro",
                          }}
                        >
                          Online Shopping Slashkart Portal
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          I made this Slashkart to human Purchase needs{" "}
                        </Typography>
                      </CardContent>
                      <CardActions
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "40px",
                          paddingLeft: "15px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          href="https://app.slashdiv.com/display/BOSay_b4N"
                          style={{
                            borderRadius: "0px",
                            fontSize: "12px",
                            borderColor: "#fec576",
                            fontFamily: "sans-serif",
                            color: "#fec576",
                          }}
                        >
                          READ PROCESS
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={12}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#fec576",
                      paddingBottom: "2px",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  >
                    <Card
                      square
                      style={{
                        backgroundColor: "#313552",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    >
                      <img
                        src="https://i.imgur.com/nPMk35z.png"
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "220px",
                        }}
                      ></img>
                      <CardContent style={{ paddingTop: "25px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          DASHBOARD, BOOKSLASHSHOW
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "22px",
                            fontFamily: "Source Serif Pro",
                          }}
                        >
                          Movie Tickets Onlie Booking
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          I made this BookSlashShow to human Enjoyment{" "}
                        </Typography>
                      </CardContent>
                      <CardActions
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "40px",
                          paddingLeft: "15px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          style={{
                            borderRadius: "0px",
                            fontSize: "12px",
                            borderColor: "#fec576",
                            fontFamily: "sans-serif",
                            color: "#fec576",
                            fontWeight: "600",
                          }}
                        >
                          READ PROCESS
                          <IconButton
                            style={{
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              paddingRight: "0px",
                            }}
                          >
                            <ArrowRightAltOutlined />
                          </IconButton>
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={12}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#fec576",
                      paddingBottom: "2px",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  >
                    <Card
                      square
                      style={{
                        backgroundColor: "#313552",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    >
                      <img
                        src="https://i.imgur.com/YWtiEvH.png"
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "220px",
                        }}
                      ></img>
                      <CardContent style={{ paddingTop: "25px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          DASHBOARD, SLASH FLIGHT-PORTAL
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "22px",
                            fontFamily: "Source Serif Pro",
                          }}
                        >
                          Flight Tickets Online Booking
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          I made this Booking Portal to human Travelling needs
                        </Typography>
                      </CardContent>
                      <CardActions
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "40px",
                          paddingLeft: "15px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          href="https://app.slashdiv.com/display/tYIQqQonH"
                          style={{
                            borderRadius: "0px",
                            fontSize: "12px",
                            borderColor: "#fec576",
                            fontFamily: "sans-serif",
                            color: "#fec576",
                          }}
                        >
                          READ PROCESS
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={12} style={{ paddingBottom: "20px" }}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#fec576",
                      paddingBottom: "2px",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  >
                    <Card
                      square
                      style={{
                        backgroundColor: "#313552",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    >
                      <img
                        src="https://i.imgur.com/OfOOz6s.png"
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "220px",
                        }}
                      ></img>
                      <CardContent style={{ paddingTop: "25px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          DASHBOARD, PORTFOLIO
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "22px",
                            fontFamily: "Source Serif Pro",
                          }}
                        >
                          Getting Complete Information
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          I made this portfolio to knowing about Employee info.
                        </Typography>
                      </CardContent>
                      <CardActions
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "40px",
                          paddingLeft: "15px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          style={{
                            borderRadius: "0px",
                            fontSize: "12px",
                            borderColor: "#fec576",
                            fontFamily: "sans-serif",
                            color: "#fec576",
                          }}
                        >
                          READ PROCESS
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={12} style={{ paddingBottom: "20px" }}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#fec576",
                      paddingBottom: "2px",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  >
                    <Card
                      square
                      style={{
                        backgroundColor: "#313552",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    >
                      <img
                        src="https://i.imgur.com/ngVmK7A.png"
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "220px",
                        }}
                      ></img>
                      <CardContent style={{ paddingTop: "25px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          DASHBOARD, SLASH SPORTS
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "22px",
                            fontFamily: "Source Serif Pro",
                          }}
                        >
                          Online Shopping Sports Wear
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          I made this Slash Sports to human Purchase needs{" "}
                        </Typography>
                      </CardContent>
                      <CardActions
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "40px",
                          paddingLeft: "15px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          style={{
                            borderRadius: "0px",
                            backgroundColor: "#fec576",
                            color: "#000000",
                            fontWeight: "600",
                            fontSize: "12px",
                            borderColor: "#fec576",
                            fontFamily: "sans-serif",
                          }}
                        >
                          READ PROCESS
                          <IconButton
                            style={{
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              paddingRight: "0px",
                            }}
                          >
                            <ArrowRightAltOutlined
                              style={{ color: "#000000" }}
                            />
                          </IconButton>
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={12} style={{ paddingBottom: "20px" }}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#fec576",
                      paddingBottom: "2px",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  >
                    <Card
                      square
                      style={{
                        backgroundColor: "#313552",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    >
                      <img
                        src="https://i.imgur.com/kgpWSzt.png"
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "220px",
                        }}
                      ></img>
                      <CardContent style={{ paddingTop: "25px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          DASHBOARD, SLASH FLIGHT-PORTAL(MOBILE)
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "22px",
                            fontFamily: "Source Serif Pro",
                          }}
                        >
                          Flight Tickets Online Booking
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          I made this Booking Portal to human Travelling needs
                        </Typography>
                      </CardContent>
                      <CardActions
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "40px",
                          paddingLeft: "15px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          style={{
                            borderRadius: "0px",
                            fontSize: "12px",
                            borderColor: "#fec576",
                            fontFamily: "sans-serif",
                            color: "#fec576",
                          }}
                        >
                          READ PROCESS
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Paper
          square
          style={{
            backgroundColor: "#22273b",
            paddingTop: "70px",
            paddingBottom: "70px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <div>
            <Grid container>
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#fec576",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    TESTIMONIALS
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "30px",
                      fontFamily: "Source Serif Pro",
                      color: "rgba(255,255,255,0.89)",
                      fontWeight: "600",
                    }}
                  >
                    Happy Clients Says
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{ border: "solid 1px #fec576", borderWidth: "1px" }}
                >
                  <IconButton
                    size="small"
                    style={{
                      borderStyle: "solid",
                      color: "rgba(255,255,255,0.77)",
                      borderColor: "#ffffff",
                    }}
                  >
                    <ArrowBackOutlined />
                  </IconButton>
                  <IconButton
                    size="small"
                    edge="start"
                    style={{
                      borderStyle: "none",
                      backgroundColor: "#fec576",
                      borderRadius: "0px",
                    }}
                  >
                    <ArrowForwardOutlined />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ paddingTop: "40px" }}>
            <Grid container spacing={2} justify="space-around" direction="row">
              <Grid zeroMinWidth item xs={12}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <Avatar src="https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE1fHxiaXNzaW5lc3MlMjB3b21lbiUyMHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"></Avatar>
                            </Grid>
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Madvi Matra
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Product Designer at SlashDiv
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <IconButton style={{ paddingRight: "0px" }}>
                            <FormatQuote style={{ fontSize: "50px" }} />
                          </IconButton>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        style={{
                          paddingBottom: "30px",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                        }}
                      >
                        <Grid zeroMinWidth item>
                          <Typography
                            variant="h6"
                            style={{
                              color: "rgba(255,255,255,0.77)",
                              fontSize: "15px",
                              fontFamily: "Kite One",
                            }}
                          >
                            We are motivated by the satisfaction of our
                            clients.Put your trust in us and share in our growth
                            Asset Management is made up of a team of expert,
                            committed and experienced people with a passion for
                            financial markets. Our goal is to achieve continuous
                            and sustainable growth of our clients.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={12}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <Avatar src="https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></Avatar>
                            </Grid>
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Albert Raster
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Product Designer at SlashDiv
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <IconButton style={{ paddingRight: "0px" }}>
                            <FormatQuote style={{ fontSize: "50px" }} />
                          </IconButton>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        style={{
                          paddingBottom: "30px",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                        }}
                      >
                        <Grid zeroMinWidth item>
                          <Typography
                            variant="h6"
                            style={{
                              color: "rgba(255,255,255,0.77)",
                              fontSize: "15px",
                              fontFamily: "Kite One",
                            }}
                          >
                            We are motivated by the satisfaction of our
                            clients.Put your trust in us and share in our growth
                            Asset Management is made up of a team of expert,
                            committed and experienced people with a passion for
                            financial markets. Our goal is to achieve continuous
                            and sustainable growth of our clients.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={12}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <Avatar src="https://images.unsplash.com/photo-1573495611745-41a6963351ed?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDQxfHxiaXNzaW5lc3MlMjB3b21lbiUyMHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"></Avatar>
                            </Grid>
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Shreya Sadvi
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Product Designer at SlashDiv
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <IconButton style={{ paddingRight: "0px" }}>
                            <FormatQuote style={{ fontSize: "50px" }} />
                          </IconButton>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        style={{
                          paddingBottom: "30px",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                        }}
                      >
                        <Grid zeroMinWidth item>
                          <Typography
                            variant="h6"
                            style={{
                              color: "rgba(255,255,255,0.77)",
                              fontSize: "15px",
                              fontFamily: "Kite One",
                            }}
                          >
                            We are motivated by the satisfaction of our
                            clients.Put your trust in us and share in our growth
                            Asset Management is made up of a team of expert,
                            committed and experienced people with a passion for
                            financial markets. Our goal is to achieve continuous
                            and sustainable growth of our clients.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Paper
          square
          style={{
            backgroundColor: "#292f44",
            paddingTop: "70px",
            paddingBottom: "70px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <div>
            <Grid
              container
              alignContent="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{
                      color: "#fec576",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    MY HONORABLE
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{
                      fontSize: "30px",
                      fontFamily: "Source Serif Pro",
                      color: "rgba(255,255,255,0.89)",
                      fontWeight: "600",
                    }}
                  >
                    Clients
                  </Typography>
                  <div style={{ paddingTop: "40px", textAlign: "left" }}>
                    <Link
                      align="left"
                      style={{
                        color: "#fec576",
                        fontSize: "12px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      WORLD WIDE
                      <IconButton
                        style={{
                          color: "#fec576",
                          paddingLeft: "0px",
                          paddingRight: "0px",
                        }}
                      >
                        <ArrowRightOutlined style={{ marginTop: "-3px" }} />
                      </IconButton>
                    </Link>
                  </div>
                  <div style={{ paddingTop: "10px", textAlign: "left" }}>
                    <Link
                      align="left"
                      style={{
                        color: "rgba(255,255,255,0.89)",
                        fontSize: "12px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      MY COUNTRY
                    </Link>
                  </div>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={9}>
                <div>
                  <Grid
                    container
                    alignContent="center"
                    spacing={4}
                    alignItems="center"
                    justify="space-between"
                    direction="row"
                  >
                    <Grid zeroMinWidth item xs={4}>
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vLfSPH8n6XH6FdsNuGf40KPFFyj2YO3VPA&usqp=CAU"
                          style={{ borderRadius: "5px", width: "100%" }}
                        ></img>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div>
                        <img
                          src="https://cdn.worldvectorlogo.com/logos/ama-prom-baltic.svg"
                          style={{ width: "100%", borderRadius: "5px" }}
                        ></img>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div>
                        <img
                          src="https://cdn.worldvectorlogo.com/logos/louisiana-plumbing.svg"
                          style={{ width: "100%", borderRadius: "5px" }}
                        ></img>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div>
                        <img
                          src="https://cdn.worldvectorlogo.com/logos/runa.svg"
                          style={{ width: "100%", borderRadius: "5px" }}
                        ></img>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div>
                        <img
                          src="https://cdn.worldvectorlogo.com/logos/expressjet.svg"
                          style={{ width: "100%", borderRadius: "5px" }}
                        ></img>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div>
                        <img
                          src="https://cdn.worldvectorlogo.com/logos/atreus-systems-61151.svg"
                          style={{ width: "100%", borderRadius: "5px" }}
                        ></img>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Paper
          square
          style={{
            backgroundColor: "#22273b",
            paddingTop: "70px",
            paddingBottom: "70px",
            fontSize: "35px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <div>
            <Grid container>
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#fec576",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    SOCIAL MEDIA
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "30px",
                      fontFamily: "Source Serif Pro",
                      color: "rgba(255,255,255,0.89)",
                      fontWeight: "600",
                    }}
                  >
                    Let&#039;s Be Friends
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ paddingTop: "40px" }}>
            <Grid
              container
              alignContent="center"
              spacing={3}
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Linkeding
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Professional profile
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <i
                            className="fab fa-linkedin-in"
                            style={{
                              color: "rgba(0,0,0,0.42)",
                              paddingRight: "10px",
                            }}
                          ></i>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Dribbble
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Design works
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <i
                            className="fab fa-dribbble"
                            style={{
                              color: "rgba(0,0,0,0.42)",
                              fontSize: "35px",
                              paddingRight: "10px",
                            }}
                          ></i>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Instagram
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Social communication
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <i
                            className="fab fa-instagram"
                            style={{
                              color: "rgba(0,0,0,0.42)",
                              fontSize: "35px",
                              paddingRight: "10px",
                            }}
                          ></i>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Twitter
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Random thoughts
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <i
                            className="fab fa-twitter"
                            style={{
                              color: "rgba(0,0,0,0.42)",
                              fontSize: "35px",
                              paddingRight: "10px",
                            }}
                          ></i>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Medium
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Work case study
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <i
                            className="fab fa-medium-m"
                            style={{
                              color: "rgba(0,0,0,0.42)",
                              fontSize: "35px",
                              paddingRight: "10px",
                            }}
                          ></i>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#fec576" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                  color: "#000000",
                                  fontWeight: "600",
                                }}
                              >
                                Email
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "#000000",
                                  fontWeight: "600",
                                }}
                              >
                                hello@growth.digital
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <i
                            className="fa-envelope far"
                            style={{
                              color: "rgba(0,0,0,0.42)",
                              fontSize: "35px",
                              paddingRight: "10px",
                            }}
                          ></i>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Paper
          square
          style={{
            backgroundColor: "#303451",
            paddingTop: "70px",
            paddingBottom: "40px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <div>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <Grid container>
                  <Grid zeroMinWidth item>
                    <div style={{ marginTop: "-7px" }}>
                      <Avatar
                        src="https://static1.squarespace.com/static/5df9ba9cfb325158acadf8b0/t/5f0301bb6e62565b9d585f91/1603697990249/?format=1500w"
                        style={{
                          width: "45px",
                          marginTop: "-8px",
                          height: "45px",
                        }}
                      ></Avatar>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Link
                        style={{
                          fontSize: "25px",
                          fontFamily: "sans-serif",
                          color: "#ffffff",
                          paddingLeft: "2px",
                        }}
                      >
                        SlashDiv
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "30px",
                      fontFamily: "Source Serif Pro",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Let&#039;s Talk?
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div>
                  <Button
                    variant="outlined"
                    style={{
                      borderRadius: "0px",
                      fontSize: "12px",
                      borderColor: "#fec576",
                      fontFamily: "sans-serif",
                      color: "#fec576",
                    }}
                  >
                    LET&#039;S CHAT
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ paddingTop: "50px" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div>
                  <Link
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      color: "#ffffff",
                      paddingRight: "30px",
                    }}
                  >
                    ABOUT
                  </Link>
                  <Link
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      color: "#f5a623",
                      paddingRight: "30px",
                    }}
                  >
                    WORKS
                  </Link>
                  <Link
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      color: "#ffffff",
                      paddingRight: "30px",
                    }}
                  >
                    CASE STUDY
                  </Link>
                  <Link
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      color: "#ffffff",
                      paddingRight: "30px",
                    }}
                  >
                    CLIENTS
                  </Link>
                  <Link
                    style={{
                      color: "#ffffff",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    CONTACT
                  </Link>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
              direction="row"
            >
              <Grid zeroMinWidth item xs={12}>
                <div>
                  <Typography
                    variant="h6"
                    align="center"
                    style={{
                      color: "#ffffff",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    © 2019 SlashDiv,Techies vr.vardhan, VR 1432
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Hidden>
      <Hidden only={["lg", "xl"]} smDown implementation="css">
        <Container maxWidth="xl">
          <AppBar
            elevation={1}
            square
            position="fixed"
            style={{
              backgroundColor: "#1f2235",
              paddingTop: "20px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <Grid
              container
              justify="space-between"
              direction="row"
              style={{ paddingLeft: "50px", paddingRight: "50px" }}
            >
              <Grid zeroMinWidth item>
                <Grid container>
                  <Grid zeroMinWidth item>
                    <div style={{ marginTop: "-7px" }}>
                      <Avatar
                        src="https://static1.squarespace.com/static/5df9ba9cfb325158acadf8b0/t/5f0301bb6e62565b9d585f91/1603697990249/?format=1500w"
                        style={{
                          width: "45px",
                          marginTop: "-10px",
                          height: "45px",
                        }}
                      ></Avatar>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Link
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.89)",
                          fontWeight: "600",
                          paddingLeft: "5px",
                        }}
                      >
                        SlashDiv
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  spacing={2}
                  justify="space-around"
                  direction="row"
                >
                  <Grid zeroMinWidth item>
                    <div>
                      <Link
                        style={{
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.89)",
                          fontWeight: "600",
                        }}
                      >
                        ABOUT
                      </Link>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Link
                        style={{
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                          color: "#fec576",
                          fontWeight: "600",
                        }}
                      >
                        WORKS
                      </Link>
                    </div>
                    <IconButton style={{ color: "#fec576", paddingTop: "0px" }}>
                      <ArrowDropDownOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Link
                        style={{
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.89)",
                          fontWeight: "600",
                        }}
                      >
                        CASE STUDY
                      </Link>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Link
                        style={{
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.89)",
                          fontWeight: "600",
                        }}
                      >
                        CLIENTS
                      </Link>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Link
                        style={{
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.89)",
                          fontWeight: "600",
                        }}
                      >
                        CONTACT
                      </Link>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Button
                        variant="outlined"
                        style={{
                          borderRadius: "0px",
                          fontSize: "12px",
                          borderColor: "#fec576",
                          fontFamily: "sans-serif",
                          color: "#fec576",
                        }}
                      >
                        LET&#039;S CHAT
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AppBar>
        </Container>
        <Paper
          square
          style={{
            backgroundColor: "#1f2235",
            paddingTop: "30px",
            paddingRight: "50px",
            paddingLeft: "50px",
          }}
        >
          <Grid
            container
            alignContent="center"
            alignItems="center"
            justify="space-between"
            direction="row"
          >
            <Grid zeroMinWidth item>
              <div style={{ paddingTop: "50px" }}>
                <Typography
                  variant="h6"
                  style={{
                    color: "rgba(245,166,35,0.72)",
                    fontSize: "25px",
                    fontFamily: "Noto Sans JP",
                  }}
                >
                  Hello, I&#039;m
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "50px",
                    fontFamily: "Abril Fatface",
                    color: "rgba(255,255,255,0.86)",
                    paddingLeft: "10px",
                    letterSpacing: "2px",
                  }}
                >
                  Vardhan
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "50px",
                    fontFamily: "Abril Fatface",
                    marginTop: "-25px",
                    color: "rgba(255,255,255,0.86)",
                    paddingLeft: "10px",
                    letterSpacing: "2px",
                  }}
                >
                  Techies
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "22px",
                    fontFamily: "Noto Sans JP",
                    color: "rgba(255,255,255,0.86)",
                    paddingLeft: "10px",
                  }}
                >
                  Product Designer
                </Typography>
              </div>
            </Grid>
            <Grid zeroMinWidth item>
              <div style={{ paddingTop: "20px" }}>
                <img
                  src="https://i.imgur.com/yCaRuDb.png"
                  style={{
                    width: "100%",
                    paddingTop: "50px",
                    paddingBottom: "3px",
                  }}
                ></img>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Paper square style={{ backgroundColor: "#292f44" }}>
          <Paper
            square
            style={{
              marginLeft: "50px",
              marginTop: "-3px",
              marginRight: "50px",
            }}
          >
            <div>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-around"
                direction="row"
                style={{ backgroundColor: "#282e4d" }}
              >
                <Grid
                  zeroMinWidth
                  item
                  xs={2}
                  style={{
                    backgroundColor: "#fec576",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <div style={{ width: "100%", textAlign: "center" }}>
                    <Link
                      style={{
                        fontSize: "12px",
                        fontFamily: "sans-serif",
                        color: "#000000",
                        fontWeight: "600",
                      }}
                    >
                      ABOUT
                    </Link>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={10}>
                  <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    justify="space-around"
                    direction="row"
                  >
                    <Grid
                      zeroMinWidth
                      item
                      xs={2}
                      style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <Link
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          MY SERVICES
                        </Link>
                      </div>
                    </Grid>
                    <Divider
                      flexItem
                      orientation="vertical"
                      style={{ backgroundColor: "#4a4a4a" }}
                    />
                    <Grid
                      zeroMinWidth
                      item
                      xs={2}
                      style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <Link
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          INTERVIEWS
                        </Link>
                      </div>
                    </Grid>
                    <Divider
                      flexItem
                      orientation="vertical"
                      style={{ backgroundColor: "#4a4a4a" }}
                    />
                    <Grid
                      zeroMinWidth
                      item
                      xs={2}
                      style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <Link
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          AWARDS
                        </Link>
                      </div>
                    </Grid>
                    <Divider
                      flexItem
                      orientation="vertical"
                      style={{ backgroundColor: "#4a4a4a" }}
                    />
                    <Grid
                      zeroMinWidth
                      item
                      xs={2}
                      style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <Link
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          EXHIBITIONS
                        </Link>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Paper>
          <Paper
            square
            style={{
              backgroundColor: "#313552",
              marginLeft: "50px",
              marginRight: "50px",
            }}
          >
            <div style={{ paddingBottom: "50px", paddingTop: "20px" }}>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-around"
                direction="row"
              >
                <Grid zeroMinWidth item xs={6} style={{ paddingTop: "50px" }}>
                  <div style={{ textAlign: "center" }}>
                    <img
                      src="https://i.imgur.com/3wPbt6U.png"
                      style={{
                        borderRadius: "100%",
                        borderWidth: "5px",
                        borderColor: "#fec576",
                        borderStyle: "solid",
                      }}
                    ></img>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={6}>
                  <div style={{ paddingTop: "30px", paddingRight: "40px" }}>
                    <div style={{ paddingTop: "5px" }}>
                      <Typography
                        variant="body2"
                        style={{
                          color: "#fec576",
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                        }}
                      >
                        ABOUT ME
                      </Typography>
                      <Typography
                        variant="h5"
                        style={{
                          paddingTop: "20px",
                          fontSize: "30px",
                          fontFamily: "Source Serif Pro",
                          color: "#ffffff",
                          fontWeight: "600",
                        }}
                      >
                        Why hire me for your next project?
                      </Typography>
                    </div>
                    <div
                      style={{
                        paddingTop: "20px",
                        fontSize: "15px",
                        fontFamily: "sans-serif",
                        color: "rgba(255,255,255,0.8)",
                      }}
                    >
                      <span>Meet my startup design agency </span>
                      <span style={{ color: "#fec576" }}>Slash Techies </span>
                      <span>Currently I am working at </span>
                      <span style={{ color: "#fec576" }}>SlashDiv </span>
                      <span>as Product Designer. </span>
                      <span>Before that I&#039;ve worked at </span>
                      <span style={{ color: "#fec576" }}>SlashSee, </span>
                      <span>Dhaka as aUX, UI Designer.</span>
                    </div>
                    <div style={{ paddingTop: "20px" }}>
                      <Typography
                        variant="body2"
                        style={{
                          color: "rgba(255,255,255,0.8)",
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                        }}
                      >
                        I love to work in User Experience &amp; User Interface
                        designing. Because I love to solve the design problem
                        and find easy and better solutions to solve it. I always
                        try my best to make good user interface with the best
                        user experience. I have been working as a{" "}
                      </Typography>
                    </div>
                    <div style={{ paddingTop: "50px" }}>
                      <Button
                        variant="outlined"
                        style={{
                          borderRadius: "0px",
                          fontSize: "15px",
                          borderColor: "#fec576",
                          fontFamily: "sans-serif",
                          color: "#fec576",
                        }}
                      >
                        LEARN MORE
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Paper>
        <Paper
          square
          style={{
            backgroundColor: "#292f44",
            paddingTop: "70px",
            paddingBottom: "70px",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          <div>
            <Grid container>
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#fec576",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    MY CLIENTS
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "30px",
                      fontFamily: "Source Serif Pro",
                      color: "rgba(255,255,255,0.89)",
                      fontWeight: "600",
                    }}
                  >
                    Projects
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{ border: "solid 1px #fec576", borderWidth: "1px" }}
                >
                  <IconButton
                    size="small"
                    style={{
                      borderStyle: "solid",
                      color: "rgba(255,255,255,0.77)",
                      borderColor: "#ffffff",
                    }}
                  >
                    <ArrowBackOutlined />
                  </IconButton>
                  <IconButton
                    size="small"
                    edge="start"
                    style={{
                      borderStyle: "none",
                      backgroundColor: "#fec576",
                      borderRadius: "0px",
                    }}
                  >
                    <ArrowForwardOutlined />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ paddingTop: "30px" }}>
            <Grid container spacing={2} justify="space-between" direction="row">
              <Grid zeroMinWidth item md={6} style={{ paddingBottom: "20px" }}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#fec576",
                      paddingBottom: "2px",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  >
                    <Card
                      square
                      style={{
                        backgroundColor: "#313552",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    >
                      <img
                        src="https://i.imgur.com/1PS6Npr.png"
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "200px",
                        }}
                      ></img>
                      <CardContent style={{ paddingTop: "25px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          DASHBOARD, SLASHKART
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "22px",
                            fontFamily: "Source Serif Pro",
                          }}
                        >
                          Online Shopping Slashkart Portal
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          I made this Slashkart to human Purchase needs{" "}
                        </Typography>
                      </CardContent>
                      <CardActions
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "40px",
                          paddingLeft: "15px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          style={{
                            borderRadius: "0px",
                            fontSize: "12px",
                            borderColor: "#fec576",
                            fontFamily: "sans-serif",
                            color: "#fec576",
                          }}
                        >
                          READ PROCESS
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item md={6} style={{ paddingBottom: "20px" }}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#fec576",
                      paddingBottom: "2px",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  >
                    <Card
                      square
                      style={{
                        backgroundColor: "#313552",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    >
                      <img
                        src="https://i.imgur.com/nPMk35z.png"
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "200px",
                        }}
                      ></img>
                      <CardContent style={{ paddingTop: "25px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          DASHBOARD, BOOKSLASHSHOW
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "22px",
                            fontFamily: "Source Serif Pro",
                          }}
                        >
                          Movie Tickets Onlie Booking
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          I made this BookSlashShow to human enjoyment{" "}
                        </Typography>
                      </CardContent>
                      <CardActions
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "40px",
                          paddingLeft: "15px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          style={{
                            borderRadius: "0px",
                            fontSize: "12px",
                            borderColor: "#fec576",
                            fontFamily: "sans-serif",
                            color: "#fec576",
                            fontWeight: "600",
                          }}
                        >
                          READ PROCESS
                          <IconButton
                            style={{
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              paddingRight: "0px",
                            }}
                          >
                            <ArrowRightAltOutlined />
                          </IconButton>
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item md={6} style={{ paddingBottom: "20px" }}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#fec576",
                      paddingBottom: "2px",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  >
                    <Card
                      square
                      style={{
                        backgroundColor: "#313552",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    >
                      <img
                        src="https://i.imgur.com/YWtiEvH.png"
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "200px",
                        }}
                      ></img>
                      <CardContent style={{ paddingTop: "25px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          DASHBOARD, SLASH FLIGHT-PORTAL
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "22px",
                            fontFamily: "Source Serif Pro",
                          }}
                        >
                          Flight Tickets Online Booking
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          I made this Booking Portal to human travelling needs
                        </Typography>
                      </CardContent>
                      <CardActions
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "40px",
                          paddingLeft: "15px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          style={{
                            borderRadius: "0px",
                            fontSize: "12px",
                            borderColor: "#fec576",
                            fontFamily: "sans-serif",
                            color: "#fec576",
                          }}
                        >
                          READ PROCESS
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item md={6} style={{ paddingBottom: "20px" }}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#fec576",
                      paddingBottom: "2px",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  >
                    <Card
                      square
                      style={{
                        backgroundColor: "#313552",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    >
                      <img
                        src="https://i.imgur.com/OfOOz6s.png"
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "200px",
                        }}
                      ></img>
                      <CardContent style={{ paddingTop: "25px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          DASHBOARD, PORTFOLIO
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "22px",
                            fontFamily: "Source Serif Pro",
                          }}
                        >
                          Getting Complete Information
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          I made this portfolio to knowing about Employee info.
                        </Typography>
                      </CardContent>
                      <CardActions
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "40px",
                          paddingLeft: "15px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          style={{
                            borderRadius: "0px",
                            fontSize: "12px",
                            borderColor: "#fec576",
                            fontFamily: "sans-serif",
                            color: "#fec576",
                          }}
                        >
                          READ PROCESS
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item md={6} style={{ paddingBottom: "20px" }}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#fec576",
                      paddingBottom: "2px",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  >
                    <Card
                      square
                      style={{
                        backgroundColor: "#313552",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    >
                      <img
                        src="https://i.imgur.com/ngVmK7A.png"
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "200px",
                        }}
                      ></img>
                      <CardContent style={{ paddingTop: "25px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          DASHBOARD, SLASH SPORTS
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "22px",
                            fontFamily: "Source Serif Pro",
                          }}
                        >
                          Online Shopping Sports Wear
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          I made this Slash Sports to human Purchase needs{" "}
                        </Typography>
                      </CardContent>
                      <CardActions
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "40px",
                          paddingLeft: "15px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          style={{
                            borderRadius: "0px",
                            backgroundColor: "#fec576",
                            color: "#000000",
                            fontWeight: "600",
                            fontSize: "12px",
                            borderColor: "#fec576",
                            fontFamily: "sans-serif",
                          }}
                        >
                          READ PROCESS
                          <IconButton
                            style={{
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              paddingRight: "0px",
                            }}
                          >
                            <ArrowRightAltOutlined
                              style={{ color: "#000000" }}
                            />
                          </IconButton>
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item md={6} style={{ paddingBottom: "20px" }}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#fec576",
                      paddingBottom: "2px",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  >
                    <Card
                      square
                      style={{
                        backgroundColor: "#313552",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    >
                      <img
                        src="https://i.imgur.com/kgpWSzt.png"
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "200px",
                        }}
                      ></img>
                      <CardContent style={{ paddingTop: "25px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          DASHBOARD, SLASH FLIGHT-PORTAL(MOBILE)
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "22px",
                            fontFamily: "Source Serif Pro",
                          }}
                        >
                          Flight Tickets Online Booking
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          I made this Booking Portal to human Travelling needs
                        </Typography>
                      </CardContent>
                      <CardActions
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "40px",
                          paddingLeft: "15px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          style={{
                            borderRadius: "0px",
                            fontSize: "12px",
                            borderColor: "#fec576",
                            fontFamily: "sans-serif",
                            color: "#fec576",
                          }}
                        >
                          READ PROCESS
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Paper
          square
          style={{
            backgroundColor: "#22273b",
            paddingTop: "70px",
            paddingBottom: "70px",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          <div>
            <Grid container>
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#fec576",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    TESTIMONIALS
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "30px",
                      fontFamily: "Source Serif Pro",
                      color: "rgba(255,255,255,0.89)",
                      fontWeight: "600",
                    }}
                  >
                    Happy Clients Says
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{ border: "solid 1px #fec576", borderWidth: "1px" }}
                >
                  <IconButton
                    size="small"
                    style={{
                      borderStyle: "solid",
                      color: "rgba(255,255,255,0.77)",
                      borderColor: "#ffffff",
                    }}
                  >
                    <ArrowBackOutlined />
                  </IconButton>
                  <IconButton
                    size="small"
                    edge="start"
                    style={{
                      borderStyle: "none",
                      backgroundColor: "#fec576",
                      borderRadius: "0px",
                    }}
                  >
                    <ArrowForwardOutlined />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ paddingTop: "40px" }}>
            <Grid container spacing={2} justify="space-between" direction="row">
              <Grid zeroMinWidth item xs={4}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-around"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item xs={10}>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid
                              zeroMinWidth
                              item
                              style={{ marginLeft: "-10px" }}
                            >
                              <Avatar src="https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE1fHxiaXNzaW5lc3MlMjB3b21lbiUyMHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"></Avatar>
                            </Grid>
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Madvi Matra
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Product Designer at SlashDiv
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={2}
                          style={{ marginLeft: "-25px" }}
                        >
                          <IconButton style={{ paddingRight: "0px" }}>
                            <FormatQuote style={{ fontSize: "50px" }} />
                          </IconButton>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        style={{
                          paddingBottom: "30px",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                        }}
                      >
                        <Grid zeroMinWidth item>
                          <Typography
                            variant="h6"
                            style={{
                              color: "rgba(255,255,255,0.77)",
                              fontSize: "15px",
                              fontFamily: "Kite One",
                            }}
                          >
                            We are motivated by the satisfaction of our
                            clients.Put your trust in us and share in our growth
                            Asset Management is made up of a team of expert,
                            committed and experienced people with a passion for
                            financial markets. Our goal is to achieve continuous
                            and sustainable growth of our clients.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={4}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-around"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid
                          zeroMinWidth
                          item
                          xs={10}
                          style={{ marginLeft: "-10px" }}
                        >
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <Avatar src="https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></Avatar>
                            </Grid>
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Albert Raster
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Product Designer at SlashDiv
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={2}
                          style={{ marginLeft: "-25px" }}
                        >
                          <IconButton style={{ paddingRight: "0px" }}>
                            <FormatQuote style={{ fontSize: "50px" }} />
                          </IconButton>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        style={{
                          paddingBottom: "30px",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                        }}
                      >
                        <Grid zeroMinWidth item>
                          <Typography
                            variant="h6"
                            style={{
                              color: "rgba(255,255,255,0.77)",
                              fontSize: "15px",
                              fontFamily: "Kite One",
                            }}
                          >
                            We are motivated by the satisfaction of our
                            clients.Put your trust in us and share in our growth
                            Asset Management is made up of a team of expert,
                            committed and experienced people with a passion for
                            financial markets. Our goal is to achieve continuous
                            and sustainable growth of our clients.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={4}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-around"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid
                          zeroMinWidth
                          item
                          xs={10}
                          style={{ marginLeft: "-10px" }}
                        >
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <Avatar src="https://images.unsplash.com/photo-1573495611745-41a6963351ed?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDQxfHxiaXNzaW5lc3MlMjB3b21lbiUyMHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"></Avatar>
                            </Grid>
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Shreya Sadvi
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Product Designer at SlashDiv
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={2}
                          style={{ marginLeft: "-25px" }}
                        >
                          <IconButton style={{ paddingRight: "0px" }}>
                            <FormatQuote style={{ fontSize: "50px" }} />
                          </IconButton>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        style={{
                          paddingBottom: "30px",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                        }}
                      >
                        <Grid zeroMinWidth item>
                          <Typography
                            variant="h6"
                            style={{
                              color: "rgba(255,255,255,0.77)",
                              fontSize: "15px",
                              fontFamily: "Kite One",
                            }}
                          >
                            We are motivated by the satisfaction of our
                            clients.Put your trust in us and share in our growth
                            Asset Management is made up of a team of expert,
                            committed and experienced people with a passion for
                            financial markets. Our goal is to achieve continuous
                            and sustainable growth of our clients.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Paper
          square
          style={{
            backgroundColor: "#292f44",
            paddingTop: "70px",
            paddingBottom: "70px",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          <div>
            <Grid
              container
              alignContent="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{
                      color: "#fec576",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    MY HONORABLE
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{
                      fontSize: "30px",
                      fontFamily: "Source Serif Pro",
                      color: "rgba(255,255,255,0.89)",
                      fontWeight: "600",
                    }}
                  >
                    Clients
                  </Typography>
                  <div style={{ paddingTop: "40px", textAlign: "left" }}>
                    <Link
                      align="left"
                      style={{
                        color: "#fec576",
                        fontSize: "12px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      WORLD WIDE
                      <IconButton
                        style={{ color: "#fec576", paddingLeft: "0px" }}
                      >
                        <ArrowRightOutlined style={{ marginTop: "-3px" }} />
                      </IconButton>
                    </Link>
                  </div>
                  <div style={{ paddingTop: "10px", textAlign: "left" }}>
                    <Link
                      align="left"
                      style={{
                        color: "rgba(255,255,255,0.89)",
                        fontSize: "12px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      MY COUNTRY
                    </Link>
                  </div>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={9}>
                <div>
                  <Grid
                    container
                    alignContent="center"
                    spacing={4}
                    alignItems="center"
                    justify="space-between"
                    direction="row"
                  >
                    <Grid zeroMinWidth item xs={4}>
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vLfSPH8n6XH6FdsNuGf40KPFFyj2YO3VPA&usqp=CAU"
                          style={{ borderRadius: "5px", width: "100%" }}
                        ></img>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div>
                        <img
                          src="https://cdn.worldvectorlogo.com/logos/ama-prom-baltic.svg"
                          style={{ width: "100%", borderRadius: "5px" }}
                        ></img>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div>
                        <img
                          src="https://cdn.worldvectorlogo.com/logos/louisiana-plumbing.svg"
                          style={{ width: "100%", borderRadius: "5px" }}
                        ></img>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div>
                        <img
                          src="https://cdn.worldvectorlogo.com/logos/runa.svg"
                          style={{ width: "100%", borderRadius: "5px" }}
                        ></img>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div>
                        <img
                          src="https://cdn.worldvectorlogo.com/logos/expressjet.svg"
                          style={{ width: "100%", borderRadius: "5px" }}
                        ></img>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div>
                        <img
                          src="https://cdn.worldvectorlogo.com/logos/atreus-systems-61151.svg"
                          style={{ width: "100%", borderRadius: "5px" }}
                        ></img>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Paper
          square
          style={{
            backgroundColor: "#22273b",
            paddingTop: "70px",
            paddingBottom: "70px",
            fontSize: "35px",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          <div>
            <Grid container>
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#fec576",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    SOCIAL MEDIA
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "30px",
                      fontFamily: "Source Serif Pro",
                      color: "rgba(255,255,255,0.89)",
                      fontWeight: "600",
                    }}
                  >
                    Let&#039;s Be Friends
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ paddingTop: "40px" }}>
            <Grid
              container
              alignContent="center"
              spacing={3}
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item xs={4}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Linkeding
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Professional social profile
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <i
                            className="fab fa-linkedin-in"
                            style={{
                              color: "rgba(0,0,0,0.42)",
                              paddingRight: "10px",
                            }}
                          ></i>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={4}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Dribbble
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Design work social profile
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <i
                            className="fab fa-dribbble"
                            style={{
                              color: "rgba(0,0,0,0.42)",
                              fontSize: "35px",
                              paddingRight: "10px",
                            }}
                          ></i>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={4}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Instagram
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Social communication
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <i
                            className="fab fa-instagram"
                            style={{
                              color: "rgba(0,0,0,0.42)",
                              fontSize: "35px",
                              paddingRight: "10px",
                            }}
                          ></i>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={4}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Twitter
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Random thoughts
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <i
                            className="fab fa-twitter"
                            style={{
                              color: "rgba(0,0,0,0.42)",
                              fontSize: "35px",
                              paddingRight: "10px",
                            }}
                          ></i>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={4}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Medium
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Work case study
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <i
                            className="fab fa-medium-m"
                            style={{
                              color: "rgba(0,0,0,0.42)",
                              fontSize: "35px",
                              paddingRight: "10px",
                            }}
                          ></i>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={4}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#fec576" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                  color: "#000000",
                                  fontWeight: "600",
                                }}
                              >
                                Email
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "#000000",
                                  fontWeight: "600",
                                }}
                              >
                                hello@growth.digital
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <i
                            className="fa-envelope far"
                            style={{
                              color: "rgba(0,0,0,0.42)",
                              fontSize: "35px",
                              paddingRight: "10px",
                            }}
                          ></i>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Paper
          square
          style={{
            backgroundColor: "#303451",
            paddingTop: "70px",
            paddingBottom: "40px",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          <div>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <Grid container>
                  <Grid zeroMinWidth item>
                    <div style={{ marginTop: "-7px" }}>
                      <Avatar
                        src="https://static1.squarespace.com/static/5df9ba9cfb325158acadf8b0/t/5f0301bb6e62565b9d585f91/1603697990249/?format=1500w"
                        style={{
                          width: "45px",
                          marginTop: "-8px",
                          height: "45px",
                        }}
                      ></Avatar>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Link
                        style={{
                          fontSize: "25px",
                          fontFamily: "sans-serif",
                          color: "#ffffff",
                          paddingLeft: "5px",
                        }}
                      >
                        SlashDiv
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "30px",
                      fontFamily: "Source Serif Pro",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Let&#039;s Talk?
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div>
                  <Button
                    variant="outlined"
                    style={{
                      borderRadius: "0px",
                      fontSize: "12px",
                      borderColor: "#fec576",
                      fontFamily: "sans-serif",
                      color: "#fec576",
                    }}
                  >
                    LET&#039;S CHAT
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ paddingTop: "50px" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div>
                  <Link
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      color: "#ffffff",
                      paddingRight: "30px",
                    }}
                  >
                    ABOUT
                  </Link>
                  <Link
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      color: "#f5a623",
                      paddingRight: "30px",
                    }}
                  >
                    WORKS
                  </Link>
                  <Link
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      color: "#ffffff",
                      paddingRight: "30px",
                    }}
                  >
                    CASE STUDY
                  </Link>
                  <Link
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      color: "#ffffff",
                      paddingRight: "30px",
                    }}
                  >
                    CLIENTS
                  </Link>
                  <Link
                    style={{
                      color: "#ffffff",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    CONTACT
                  </Link>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
              direction="row"
            >
              <Grid zeroMinWidth item xs={12}>
                <div>
                  <Typography
                    variant="h6"
                    align="center"
                    style={{
                      color: "#ffffff",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    © 2019 SlashDiv,Techies vr.vardhan, VR 1432
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Hidden>
      <Hidden implementation="css" mdDown>
        <Container maxWidth="xl">
          <AppBar
            elevation={1}
            square
            position="fixed"
            style={{
              backgroundColor: "#1f2235",
              paddingTop: "20px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <Grid
              container
              justify="space-between"
              direction="row"
              style={{ paddingRight: "100px", paddingLeft: "100px" }}
            >
              <Grid zeroMinWidth item>
                <Grid container>
                  <Grid zeroMinWidth item>
                    <div style={{ marginTop: "-7px" }}>
                      <Avatar
                        src="https://static1.squarespace.com/static/5df9ba9cfb325158acadf8b0/t/5f0301bb6e62565b9d585f91/1603697990249/?format=1500w"
                        style={{
                          width: "45px",
                          marginTop: "-10px",
                          height: "45px",
                        }}
                      ></Avatar>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Link
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.89)",
                          fontWeight: "600",
                          paddingLeft: "5px",
                        }}
                      >
                        SlashDiv
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  spacing={2}
                  justify="space-around"
                  direction="row"
                >
                  <Grid zeroMinWidth item>
                    <div>
                      <Link
                        style={{
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.89)",
                          fontWeight: "600",
                        }}
                      >
                        ABOUT
                      </Link>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Link
                        style={{
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                          color: "#fec576",
                          fontWeight: "600",
                        }}
                      >
                        WORKS
                      </Link>
                    </div>
                    <IconButton style={{ color: "#fec576", paddingTop: "0px" }}>
                      <ArrowDropDownOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Link
                        style={{
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.89)",
                          fontWeight: "600",
                        }}
                      >
                        CASE STUDY
                      </Link>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Link
                        style={{
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.89)",
                          fontWeight: "600",
                        }}
                      >
                        CLIENTS
                      </Link>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Link
                        style={{
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.89)",
                          fontWeight: "600",
                        }}
                      >
                        CONTACT
                      </Link>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Button
                        variant="outlined"
                        style={{
                          borderRadius: "0px",
                          fontSize: "12px",
                          borderColor: "#fec576",
                          fontFamily: "sans-serif",
                          color: "#fec576",
                        }}
                      >
                        LET&#039;S CHAT
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AppBar>
        </Container>
        <Paper
          square
          style={{
            backgroundColor: "#1f2235",
            paddingTop: "30px",
            paddingLeft: "100px",
            paddingRight: "100px",
          }}
        >
          <Grid
            container
            alignContent="center"
            alignItems="center"
            justify="space-between"
            direction="row"
          >
            <Grid zeroMinWidth item>
              <div style={{ paddingTop: "50px" }}>
                <Typography
                  variant="h6"
                  style={{
                    color: "rgba(245,166,35,0.72)",
                    fontSize: "25px",
                    fontFamily: "Noto Sans JP",
                  }}
                >
                  Hello, I&#039;m
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "50px",
                    fontFamily: "Abril Fatface",
                    color: "rgba(255,255,255,0.86)",
                    paddingLeft: "10px",
                    letterSpacing: "2px",
                  }}
                >
                  Vardhan
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "50px",
                    fontFamily: "Abril Fatface",
                    marginTop: "-25px",
                    color: "rgba(255,255,255,0.86)",
                    paddingLeft: "10px",
                    letterSpacing: "2px",
                  }}
                >
                  Techies
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "22px",
                    fontFamily: "Noto Sans JP",
                    color: "rgba(255,255,255,0.86)",
                    paddingLeft: "10px",
                  }}
                >
                  Product Designer
                </Typography>
              </div>
            </Grid>
            <Grid zeroMinWidth item>
              <div style={{ paddingTop: "20px" }}>
                <img
                  src="https://i.imgur.com/yCaRuDb.png"
                  style={{
                    width: "100%",
                    paddingTop: "50px",
                    paddingBottom: "3px",
                  }}
                ></img>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Paper square style={{ backgroundColor: "#292f44" }}>
          <Paper
            square
            style={{
              marginLeft: "100px",
              marginTop: "-3px",
              marginRight: "100px",
            }}
          >
            <div>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-around"
                direction="row"
                style={{ backgroundColor: "#282e4d" }}
              >
                <Grid
                  zeroMinWidth
                  item
                  xs={2}
                  style={{
                    backgroundColor: "#fec576",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <div style={{ width: "100%", textAlign: "center" }}>
                    <Link
                      style={{
                        fontSize: "12px",
                        fontFamily: "sans-serif",
                        color: "#000000",
                        fontWeight: "600",
                      }}
                    >
                      ABOUT
                    </Link>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={10}>
                  <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    justify="space-around"
                    direction="row"
                  >
                    <Grid
                      zeroMinWidth
                      item
                      xs={2}
                      style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <Link
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          MY SERVICES
                        </Link>
                      </div>
                    </Grid>
                    <Divider
                      flexItem
                      orientation="vertical"
                      style={{ backgroundColor: "#4a4a4a" }}
                    />
                    <Grid
                      zeroMinWidth
                      item
                      xs={2}
                      style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <Link
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          INTERVIEWS
                        </Link>
                      </div>
                    </Grid>
                    <Divider
                      flexItem
                      orientation="vertical"
                      style={{ backgroundColor: "#4a4a4a" }}
                    />
                    <Grid
                      zeroMinWidth
                      item
                      xs={2}
                      style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <Link
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          AWARDS
                        </Link>
                      </div>
                    </Grid>
                    <Divider
                      flexItem
                      orientation="vertical"
                      style={{ backgroundColor: "#4a4a4a" }}
                    />
                    <Grid
                      zeroMinWidth
                      item
                      xs={2}
                      style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <Link
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          EXHIBITIONS
                        </Link>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Paper>
          <Paper
            square
            style={{
              marginLeft: "100px",
              backgroundColor: "#313552",
              marginRight: "100px",
            }}
          >
            <div style={{ paddingBottom: "50px", paddingTop: "20px" }}>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-around"
                direction="row"
              >
                <Grid zeroMinWidth item xs={6} style={{ paddingTop: "50px" }}>
                  <div style={{ textAlign: "center" }}>
                    <img
                      src="https://i.imgur.com/3wPbt6U.png"
                      style={{
                        borderRadius: "100%",
                        borderWidth: "5px",
                        borderColor: "#fec576",
                        borderStyle: "solid",
                      }}
                    ></img>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={6}>
                  <div style={{ paddingTop: "30px", paddingRight: "40px" }}>
                    <div style={{ paddingTop: "5px" }}>
                      <Typography
                        variant="body2"
                        style={{
                          color: "#fec576",
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                        }}
                      >
                        ABOUT ME
                      </Typography>
                      <Typography
                        variant="h5"
                        style={{
                          paddingTop: "20px",
                          fontSize: "30px",
                          fontFamily: "Source Serif Pro",
                          color: "#ffffff",
                          fontWeight: "600",
                        }}
                      >
                        Why hire me for your next project?
                      </Typography>
                    </div>
                    <div
                      style={{
                        paddingTop: "20px",
                        fontSize: "15px",
                        fontFamily: "sans-serif",
                        color: "rgba(255,255,255,0.8)",
                      }}
                    >
                      <span>Meet my startup design agency </span>
                      <span style={{ color: "#fec576" }}>Slash Techies </span>
                      <span>Currently I am working at </span>
                      <span style={{ color: "#fec576" }}>SlashDiv </span>
                      <span>as Product Designer. </span>
                      <span>Before that I&#039;ve worked at </span>
                      <span style={{ color: "#fec576" }}>SlashSee, </span>
                      <span>Dhaka as aUX, UI Designer.</span>
                    </div>
                    <div style={{ paddingTop: "20px" }}>
                      <Typography
                        variant="body2"
                        style={{
                          color: "rgba(255,255,255,0.8)",
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                        }}
                      >
                        I love to work in User Experience &amp; User Interface
                        designing. Because I love to solve the design problem
                        and find easy and better solutions to solve it. I always
                        try my best to make good user interface with the best
                        user experience. I have been working as a{" "}
                      </Typography>
                    </div>
                    <div style={{ paddingTop: "50px" }}>
                      <Button
                        variant="outlined"
                        style={{
                          borderRadius: "0px",
                          fontSize: "15px",
                          borderColor: "#fec576",
                          fontFamily: "sans-serif",
                          color: "#fec576",
                        }}
                      >
                        LEARN MORE
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Paper>
        <Paper
          square
          style={{
            backgroundColor: "#292f44",
            paddingTop: "70px",
            paddingBottom: "70px",
            paddingLeft: "100px",
            paddingRight: "100px",
          }}
        >
          <div>
            <Grid container>
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#fec576",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    MY CLIENTS
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "30px",
                      fontFamily: "Source Serif Pro",
                      color: "rgba(255,255,255,0.89)",
                      fontWeight: "600",
                    }}
                  >
                    Projects
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{ border: "solid 1px #fec576", borderWidth: "1px" }}
                >
                  <IconButton
                    size="small"
                    style={{
                      borderStyle: "solid",
                      color: "rgba(255,255,255,0.77)",
                      borderColor: "#ffffff",
                    }}
                  >
                    <ArrowBackOutlined />
                  </IconButton>
                  <IconButton
                    size="small"
                    edge="start"
                    style={{
                      borderStyle: "none",
                      backgroundColor: "#fec576",
                      borderRadius: "0px",
                    }}
                  >
                    <ArrowForwardOutlined />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ paddingTop: "30px" }}>
            <Grid container spacing={4} justify="space-between" direction="row">
              <Grid zeroMinWidth item xs={4}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#fec576",
                      paddingBottom: "2px",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  >
                    <Card
                      square
                      style={{
                        backgroundColor: "#313552",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    >
                      <img
                        src="https://i.imgur.com/1PS6Npr.png"
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "220px",
                        }}
                      ></img>
                      <CardContent style={{ paddingTop: "25px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          DASHBOARD, SLASHKART
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "22px",
                            fontFamily: "Source Serif Pro",
                          }}
                        >
                          Online Shopping Slashkart Portal
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          I made this Slashkart to human Purchase needs{" "}
                        </Typography>
                      </CardContent>
                      <CardActions
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "40px",
                          paddingLeft: "15px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          style={{
                            borderRadius: "0px",
                            fontSize: "12px",
                            borderColor: "#fec576",
                            fontFamily: "sans-serif",
                            color: "#fec576",
                          }}
                        >
                          READ PROCESS
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={4}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#fec576",
                      paddingBottom: "2px",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  >
                    <Card
                      square
                      style={{
                        backgroundColor: "#313552",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    >
                      <img
                        src="https://i.imgur.com/nPMk35z.png"
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "220px",
                        }}
                      ></img>
                      <CardContent style={{ paddingTop: "25px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          DASHBOARD, BOOKSLASHSHOW
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "22px",
                            fontFamily: "Source Serif Pro",
                          }}
                        >
                          Movie Tickets Onlie Booking
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          I made this BookSlashShow to human Enjoyment{" "}
                        </Typography>
                      </CardContent>
                      <CardActions
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "40px",
                          paddingLeft: "15px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          style={{
                            borderRadius: "0px",
                            fontSize: "12px",
                            borderColor: "#fec576",
                            fontFamily: "sans-serif",
                            color: "#fec576",
                            fontWeight: "600",
                          }}
                        >
                          READ PROCESS
                          <IconButton
                            style={{
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              paddingRight: "0px",
                            }}
                          >
                            <ArrowRightAltOutlined />
                          </IconButton>
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={4} style={{ paddingBottom: "20px" }}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#fec576",
                      paddingBottom: "2px",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  >
                    <Card
                      square
                      style={{
                        backgroundColor: "#313552",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    >
                      <img
                        src="https://i.imgur.com/YWtiEvH.png"
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "220px",
                        }}
                      ></img>
                      <CardContent style={{ paddingTop: "25px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          DASHBOARD, SLASH FLIGHT-PORTAL
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "22px",
                            fontFamily: "Source Serif Pro",
                          }}
                        >
                          Flight Tickets Online Booking
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          I made this Booking Portal to human Travelling needs
                        </Typography>
                      </CardContent>
                      <CardActions
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "40px",
                          paddingLeft: "15px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          style={{
                            borderRadius: "0px",
                            fontSize: "12px",
                            borderColor: "#fec576",
                            fontFamily: "sans-serif",
                            color: "#fec576",
                          }}
                        >
                          READ PROCESS
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={4} style={{ paddingBottom: "20px" }}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#fec576",
                      paddingBottom: "2px",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  >
                    <Card
                      square
                      style={{
                        backgroundColor: "#313552",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    >
                      <img
                        src="https://i.imgur.com/OfOOz6s.png"
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "220px",
                        }}
                      ></img>
                      <CardContent style={{ paddingTop: "25px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          DASHBOARD, PORTFOLIO
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "22px",
                            fontFamily: "Source Serif Pro",
                          }}
                        >
                          Getting Complete Information
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          I made this portfolio to knowing about Employee info.
                        </Typography>
                      </CardContent>
                      <CardActions
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "40px",
                          paddingLeft: "15px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          style={{
                            borderRadius: "0px",
                            fontSize: "12px",
                            borderColor: "#fec576",
                            fontFamily: "sans-serif",
                            color: "#fec576",
                          }}
                        >
                          READ PROCESS
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={4} style={{ paddingBottom: "20px" }}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#fec576",
                      paddingBottom: "2px",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  >
                    <Card
                      square
                      style={{
                        backgroundColor: "#313552",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    >
                      <img
                        src="https://i.imgur.com/ngVmK7A.png"
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "220px",
                        }}
                      ></img>
                      <CardContent style={{ paddingTop: "25px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          DASHBOARD, SLASH SPORTS
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "22px",
                            fontFamily: "Source Serif Pro",
                          }}
                        >
                          Online Shopping Sports Wear
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          I made this Slash Sports to human Purchase needs{" "}
                        </Typography>
                      </CardContent>
                      <CardActions
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "40px",
                          paddingLeft: "15px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          style={{
                            borderRadius: "0px",
                            backgroundColor: "#fec576",
                            color: "#000000",
                            fontWeight: "600",
                            fontSize: "12px",
                            borderColor: "#fec576",
                            fontFamily: "sans-serif",
                          }}
                        >
                          READ PROCESS
                          <IconButton
                            style={{
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              paddingRight: "0px",
                            }}
                          >
                            <ArrowRightAltOutlined
                              style={{ color: "#000000" }}
                            />
                          </IconButton>
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={4} style={{ paddingBottom: "20px" }}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#fec576",
                      paddingBottom: "2px",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                    }}
                  >
                    <Card
                      square
                      style={{
                        backgroundColor: "#313552",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    >
                      <img
                        src="https://i.imgur.com/kgpWSzt.png"
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          height: "220px",
                        }}
                      ></img>
                      <CardContent style={{ paddingTop: "25px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          DASHBOARD, SLASH FLIGHT-PORTAL(MOBILE)
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "22px",
                            fontFamily: "Source Serif Pro",
                          }}
                        >
                          Flight Tickets Online Booking
                        </Typography>
                      </CardContent>
                      <CardContent style={{ marginTop: "-20px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            color: "#ffffff",
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          I made this Booking Portal to human Travelling needs
                        </Typography>
                      </CardContent>
                      <CardActions
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "40px",
                          paddingLeft: "15px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          style={{
                            borderRadius: "0px",
                            fontSize: "12px",
                            borderColor: "#fec576",
                            fontFamily: "sans-serif",
                            color: "#fec576",
                          }}
                        >
                          READ PROCESS
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Paper
          square
          style={{
            backgroundColor: "#22273b",
            paddingTop: "70px",
            paddingBottom: "70px",
            paddingLeft: "100px",
            paddingRight: "100px",
          }}
        >
          <div>
            <Grid container>
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#fec576",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    TESTIMONIALS
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "30px",
                      fontFamily: "Source Serif Pro",
                      color: "rgba(255,255,255,0.89)",
                      fontWeight: "600",
                    }}
                  >
                    Happy Clients Says
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{ border: "solid 1px #fec576", borderWidth: "1px" }}
                >
                  <IconButton
                    size="small"
                    style={{
                      borderStyle: "solid",
                      color: "rgba(255,255,255,0.77)",
                      borderColor: "#ffffff",
                    }}
                  >
                    <ArrowBackOutlined />
                  </IconButton>
                  <IconButton
                    size="small"
                    edge="start"
                    style={{
                      borderStyle: "none",
                      backgroundColor: "#fec576",
                      borderRadius: "0px",
                    }}
                  >
                    <ArrowForwardOutlined />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ paddingTop: "40px" }}>
            <Grid container spacing={4} justify="space-between" direction="row">
              <Grid zeroMinWidth item xs={4}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-around"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <Avatar src="https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE1fHxiaXNzaW5lc3MlMjB3b21lbiUyMHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"></Avatar>
                            </Grid>
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Madvi Matra
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Product Designer at SlashDiv
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <IconButton style={{ paddingRight: "0px" }}>
                            <FormatQuote style={{ fontSize: "50px" }} />
                          </IconButton>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        style={{
                          paddingBottom: "30px",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                        }}
                      >
                        <Grid zeroMinWidth item>
                          <Typography
                            variant="h6"
                            style={{
                              color: "rgba(255,255,255,0.77)",
                              fontSize: "15px",
                              fontFamily: "Kite One",
                            }}
                          >
                            We are motivated by the satisfaction of our
                            clients.Put your trust in us and share in our growth
                            Asset Management is made up of a team of expert,
                            committed and experienced people with a passion for
                            financial markets. Our goal is to achieve continuous
                            and sustainable growth of our clients.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={4}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-around"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <Avatar src="https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></Avatar>
                            </Grid>
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Albert Raster
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Product Designer at SlashDiv
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <IconButton style={{ paddingRight: "0px" }}>
                            <FormatQuote style={{ fontSize: "50px" }} />
                          </IconButton>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        style={{
                          paddingBottom: "30px",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                        }}
                      >
                        <Grid zeroMinWidth item>
                          <Typography
                            variant="h6"
                            style={{
                              color: "rgba(255,255,255,0.77)",
                              fontSize: "15px",
                              fontFamily: "Kite One",
                            }}
                          >
                            We are motivated by the satisfaction of our
                            clients.Put your trust in us and share in our growth
                            Asset Management is made up of a team of expert,
                            committed and experienced people with a passion for
                            financial markets. Our goal is to achieve continuous
                            and sustainable growth of our clients.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={4}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-around"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <Avatar src="https://images.unsplash.com/photo-1573495611745-41a6963351ed?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDQxfHxiaXNzaW5lc3MlMjB3b21lbiUyMHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"></Avatar>
                            </Grid>
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Shreya Sadvi
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Product Designer at SlashDiv
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <IconButton style={{ paddingRight: "0px" }}>
                            <FormatQuote style={{ fontSize: "50px" }} />
                          </IconButton>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        style={{
                          paddingBottom: "30px",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                        }}
                      >
                        <Grid zeroMinWidth item>
                          <Typography
                            variant="h6"
                            style={{
                              color: "rgba(255,255,255,0.77)",
                              fontSize: "15px",
                              fontFamily: "Kite One",
                            }}
                          >
                            We are motivated by the satisfaction of our
                            clients.Put your trust in us and share in our growth
                            Asset Management is made up of a team of expert,
                            committed and experienced people with a passion for
                            financial markets. Our goal is to achieve continuous
                            and sustainable growth of our clients.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Paper
          square
          style={{
            backgroundColor: "#292f44",
            paddingTop: "70px",
            paddingBottom: "70px",
            paddingLeft: "100px",
            paddingRight: "100px",
          }}
        >
          <div>
            <Grid container justify="space-between" direction="row">
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{
                      color: "#fec576",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    MY HONORABLE
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{
                      fontSize: "30px",
                      fontFamily: "Source Serif Pro",
                      color: "rgba(255,255,255,0.89)",
                      fontWeight: "600",
                    }}
                  >
                    Clients
                  </Typography>
                  <div style={{ paddingTop: "40px", textAlign: "left" }}>
                    <Link
                      align="left"
                      style={{
                        color: "#fec576",
                        fontSize: "12px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      WORLD WIDE
                      <IconButton
                        style={{ color: "#fec576", paddingLeft: "0px" }}
                      >
                        <ArrowRightOutlined style={{ marginTop: "-3px" }} />
                      </IconButton>
                    </Link>
                  </div>
                  <div style={{ paddingTop: "10px", textAlign: "left" }}>
                    <Link
                      align="left"
                      style={{
                        color: "rgba(255,255,255,0.89)",
                        fontSize: "12px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      MY COUNTRY
                    </Link>
                  </div>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={9}>
                <div>
                  <Grid
                    container
                    alignContent="center"
                    spacing={4}
                    alignItems="center"
                    justify="space-between"
                    direction="row"
                  >
                    <Grid zeroMinWidth item xs={4}>
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vLfSPH8n6XH6FdsNuGf40KPFFyj2YO3VPA&usqp=CAU"
                          style={{ borderRadius: "5px", width: "100%" }}
                        ></img>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div>
                        <img
                          src="https://cdn.worldvectorlogo.com/logos/ama-prom-baltic.svg"
                          style={{ width: "100%", borderRadius: "5px" }}
                        ></img>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div>
                        <img
                          src="https://cdn.worldvectorlogo.com/logos/louisiana-plumbing.svg"
                          style={{ width: "100%", borderRadius: "5px" }}
                        ></img>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div>
                        <img
                          src="https://cdn.worldvectorlogo.com/logos/runa.svg"
                          style={{ width: "100%", borderRadius: "5px" }}
                        ></img>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div>
                        <img
                          src="https://cdn.worldvectorlogo.com/logos/expressjet.svg"
                          style={{ width: "100%", borderRadius: "5px" }}
                        ></img>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div>
                        <img
                          src="https://cdn.worldvectorlogo.com/logos/atreus-systems-61151.svg"
                          style={{ width: "100%", borderRadius: "5px" }}
                        ></img>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Paper
          square
          style={{
            backgroundColor: "#22273b",
            paddingTop: "70px",
            paddingBottom: "70px",
            fontSize: "35px",
            paddingLeft: "100px",
            paddingRight: "100px",
          }}
        >
          <div>
            <Grid container>
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#fec576",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    SOCIAL MEDIA
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "30px",
                      fontFamily: "Source Serif Pro",
                      color: "rgba(255,255,255,0.89)",
                      fontWeight: "600",
                    }}
                  >
                    Let&#039;s Be Friends
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ paddingTop: "40px" }}>
            <Grid
              container
              alignContent="center"
              spacing={3}
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item xs={4}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Linkeding
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Professional social profile
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <i
                            className="fab fa-linkedin-in"
                            style={{
                              color: "rgba(0,0,0,0.42)",
                              paddingRight: "10px",
                            }}
                          ></i>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={4}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Dribbble
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Design work social profile
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <i
                            className="fab fa-dribbble"
                            style={{
                              color: "rgba(0,0,0,0.42)",
                              fontSize: "35px",
                              paddingRight: "10px",
                            }}
                          ></i>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={4}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Instagram
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Social communication
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <i
                            className="fab fa-instagram"
                            style={{
                              color: "rgba(0,0,0,0.42)",
                              fontSize: "35px",
                              paddingRight: "10px",
                            }}
                          ></i>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={4}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Twitter
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Random thoughts
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <i
                            className="fab fa-twitter"
                            style={{
                              color: "rgba(0,0,0,0.42)",
                              fontSize: "35px",
                              paddingRight: "10px",
                            }}
                          ></i>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={4}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#313552" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  color: "rgba(255,255,255,0.94)",
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                }}
                              >
                                Medium
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "rgba(254,197,118,0.92)",
                                  fontWeight: "600",
                                }}
                              >
                                Work case study
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <i
                            className="fab fa-medium-m"
                            style={{
                              color: "rgba(0,0,0,0.42)",
                              fontSize: "35px",
                              paddingRight: "10px",
                            }}
                          ></i>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={4}>
                <div>
                  <Paper
                    square
                    style={{
                      backgroundColor: "#f5a623",
                      borderRadius: "5px",
                      padding: "1px",
                    }}
                  >
                    <Card style={{ backgroundColor: "#fec576" }}>
                      <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="space-between"
                        direction="row"
                        style={{ padding: "15px" }}
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid
                              zeroMinWidth
                              item
                              style={{ paddingLeft: "10px" }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "20px",
                                  fontFamily: "Source Serif Pro",
                                  color: "#000000",
                                  fontWeight: "600",
                                }}
                              >
                                Email
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "sans-serif",
                                  color: "#000000",
                                  fontWeight: "600",
                                }}
                              >
                                hello@growth.digital
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <i
                            className="fa-envelope far"
                            style={{
                              color: "rgba(0,0,0,0.42)",
                              fontSize: "35px",
                              paddingRight: "10px",
                            }}
                          ></i>
                        </Grid>
                      </Grid>
                    </Card>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Paper
          square
          style={{
            backgroundColor: "#303451",
            paddingTop: "70px",
            paddingBottom: "40px",
            paddingRight: "100px",
            paddingLeft: "100px",
          }}
        >
          <div>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <Grid container>
                  <Grid zeroMinWidth item>
                    <div style={{ marginTop: "-7px" }}>
                      <Avatar
                        src="https://static1.squarespace.com/static/5df9ba9cfb325158acadf8b0/t/5f0301bb6e62565b9d585f91/1603697990249/?format=1500w"
                        style={{
                          width: "45px",
                          marginTop: "-8px",
                          height: "45px",
                        }}
                      ></Avatar>
                    </div>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <div>
                      <Link
                        style={{
                          fontSize: "25px",
                          fontFamily: "sans-serif",
                          color: "#ffffff",
                          paddingLeft: "5px",
                        }}
                      >
                        SlashDiv
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "30px",
                      fontFamily: "Source Serif Pro",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Let&#039;s Talk?
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div>
                  <Button
                    variant="outlined"
                    style={{
                      borderRadius: "0px",
                      fontSize: "12px",
                      borderColor: "#fec576",
                      fontFamily: "sans-serif",
                      color: "#fec576",
                    }}
                  >
                    LET&#039;S CHAT
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ paddingTop: "50px" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div>
                  <Link
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      color: "#ffffff",
                      paddingRight: "30px",
                    }}
                  >
                    ABOUT
                  </Link>
                  <Link
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      color: "#f5a623",
                      paddingRight: "30px",
                    }}
                  >
                    WORKS
                  </Link>
                  <Link
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      color: "#ffffff",
                      paddingRight: "30px",
                    }}
                  >
                    CASE STUDY
                  </Link>
                  <Link
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      color: "#ffffff",
                      paddingRight: "30px",
                    }}
                  >
                    CLIENTS
                  </Link>
                  <Link
                    style={{
                      color: "#ffffff",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    CONTACT
                  </Link>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
              direction="row"
            >
              <Grid zeroMinWidth item xs={12}>
                <div>
                  <Typography
                    variant="h6"
                    align="center"
                    style={{
                      color: "#ffffff",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    © 2019 SlashDiv,Techies vr.vardhan, VR 1432
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Hidden>
    </div>
  );
}
export default PortfolioMatUI;