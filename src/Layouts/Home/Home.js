import React, { Component } from "react";
import {
     Button,
     Card,
     CardActionArea,
     CardActions,
     CardContent,
     Grid,
     TextField,
     Typography,
} from "@material-ui/core";
import Axios from "axios";
import { Link } from "react-router-dom";

export class Home extends Component {
     state = {
          Invoices: [],
          isLoading: true,
          searchText: "",
     };
     componentDidMount() {
          Axios.get(`http://localhost:8000/all-invoices`).then((res) => {
               const Invoices = res.data;
               // console.log(categories);
               this.setState({ Invoices, isLoading: false });
          });
     }
     // handleSearch(e) {
     //      Axios.get(`http://localhost:8000/search`).then((res) => {
     //           this.setState({ state.searchText: e.target.value });
     //      });
     // }
     render() {
          return (
               <div style={{ padding: 15 }}>
                    <Typography variant="h5" style={{ color: "#000" }}>
                         Your Created Invoices
                         <Button
                              variant="outlined"
                              color="primary"
                              size="small"
                              style={{
                                   marginLeft: 50,
                                   boxShadow: "none",
                                   border: "1px solid grey",
                              }}
                         >
                              <Link
                                   style={{
                                        textDecoration: "none",
                                        color: "#000",
                                        textTransform: "capitalize",
                                   }}
                                   to="/create-new-invoice"
                              >
                                   Create new Invoice
                              </Link>
                         </Button>
                         <Grid container spacing={3}>
                              <Grid xs={3}></Grid>
                              <Grid xs={6}>
                                   <form style={{ marginTop: 50 }}>
                                        <TextField
                                             style={{ width: "100%" }}
                                             id="standard-search"
                                             variant="outlined"
                                             label="Search invoices"
                                             type="search"
                                        />
                                   </form>
                              </Grid>
                         </Grid>
                    </Typography>

                    <Grid container spacing={2} style={{ marginTop: 50 }}>
                         {this.state.isLoading ? (
                              <Grid item xs={12}>
                                   <div
                                        style={{
                                             textAlign: "center",
                                             width: "100%",
                                        }}
                                   >
                                        <img
                                             src="https://flevix.com/wp-content/uploads/2020/01/Preloader.gif"
                                             alt="Loading..."
                                             style={{ width: "50rem" }}
                                        />
                                   </div>
                              </Grid>
                         ) : (
                              this.state.Invoices.map((res) => (
                                   <Grid item xs={4} key={res._id}>
                                        <Card
                                             style={{
                                                  maxHeight: "250px",
                                                  minHeight: "150px",
                                                  height: "350px",
                                                  background: "#2C3335",
                                             }}
                                        >
                                             <CardActionArea>
                                                  <CardContent>
                                                       <Grid
                                                            container
                                                            spacing={2}
                                                       >
                                                            <Grid item xs={6}>
                                                                 <Typography
                                                                      style={{
                                                                           color:
                                                                                "#fff",
                                                                      }}
                                                                      variant="h5"
                                                                      gutterBottom
                                                                 >
                                                                      {
                                                                           res.seller
                                                                      }
                                                                 </Typography>
                                                                 <Typography
                                                                      style={{
                                                                           color:
                                                                                "#fff",
                                                                      }}
                                                                      variant="body2"
                                                                      component="p"
                                                                 >
                                                                      {
                                                                           res.properties
                                                                      }
                                                                 </Typography>
                                                                 <Typography
                                                                      style={{
                                                                           color:
                                                                                "#fff",
                                                                      }}
                                                                      color="textSecondary"
                                                                 >
                                                                      {
                                                                           res.category
                                                                      }
                                                                 </Typography>
                                                            </Grid>
                                                            <Grid
                                                                 item
                                                                 xs={6}
                                                                 style={{
                                                                      marginTop: 10,
                                                                      textAlign:
                                                                           "center",
                                                                 }}
                                                            >
                                                                 <Typography
                                                                      style={{
                                                                           color:
                                                                                "#ddd",
                                                                      }}
                                                                      variant="h6"
                                                                 >
                                                                      ₹
                                                                      {
                                                                           res.amount
                                                                      }
                                                                      /-
                                                                 </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                 <Typography
                                                                      style={{
                                                                           color:
                                                                                "#ddd",
                                                                      }}
                                                                 >
                                                                      Invoice
                                                                      Date &
                                                                      Time -
                                                                      {
                                                                           res.invoiceDate
                                                                      }
                                                                 </Typography>
                                                            </Grid>
                                                       </Grid>
                                                  </CardContent>
                                             </CardActionArea>
                                        </Card>
                                   </Grid>
                              ))
                         )}
                    </Grid>
               </div>
          );
     }
}

export default Home;
