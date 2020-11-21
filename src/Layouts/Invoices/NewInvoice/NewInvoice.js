import { Grid, TextField, Typography, Button } from "@material-ui/core";
import { Link, withRouter, useHistory } from "react-router-dom";
import Axios from "axios";
import React from "react";

function NewInvoice(props) {
     let history = useHistory();

     const [state, setState] = React.useState({
          seller: "",
          category: "",
          invoiceName: "",
          amount: "",
          properties: "",
          error: {},
     });

     function handleChange(e) {
          const value = e.target.value;
          setState({
               ...state,
               [e.target.name]: value,
          });
     }

     async function handleSubmit(e) {
          e.preventDefault();
          // console.log(e);
          await Axios.post(`http://localhost:8000/create-invoice`, {
               seller: state.seller,
               category: state.category,
               totalAmount: state.amount,
               invoiceName: state.invoiceName,
               properties: state.properties,
          })
               .then((res) => {
                    console.log("invoice created!", res.data);
                    history.push("/");
               })
               .catch((err) => {
                    console.log(err);
               });
     }
     return (
          <div style={{ padding: 20 }}>
               <Typography variant="h4" style={{ textAlign: "center" }}>
                    Create New Invoice
               </Typography>
               <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                         <Grid item xs={3}></Grid>
                         <Grid item xs={6}>
                              <TextField
                                   style={{ marginTop: 50, width: "100%" }}
                                   id="outlined-secondary"
                                   label="Seller / Company"
                                   variant="outlined"
                                   size="small"
                                   name="seller"
                                   value={state.seller}
                                   onChange={handleChange}
                              />
                         </Grid>
                         <Grid item xs={3}></Grid>
                         <Grid item xs={3}></Grid>
                         <Grid item xs={6}>
                              <TextField
                                   style={{ marginTop: 50, width: "100%" }}
                                   id="outlined-secondary"
                                   label="Invoice Name"
                                   variant="outlined"
                                   size="small"
                                   name="invoiceName"
                                   value={state.invoiceName}
                                   onChange={handleChange}
                              />
                         </Grid>
                         <Grid item xs={3}></Grid>
                         <Grid item xs={3}></Grid>
                         <Grid item xs={3}>
                              <TextField
                                   style={{ marginTop: 50, width: "100%" }}
                                   id="outlined-secondary"
                                   label="Category"
                                   variant="outlined"
                                   size="small"
                                   name="category"
                                   value={state.category}
                                   onChange={handleChange}
                              />
                         </Grid>
                         <Grid item xs={3}>
                              <TextField
                                   style={{ marginTop: 50, width: "100%" }}
                                   id="outlined-secondary"
                                   label="Bill Amount"
                                   type="number"
                                   variant="outlined"
                                   size="small"
                                   name="amount"
                                   min="0"
                                   value={state.amount}
                                   onChange={handleChange}
                              />
                         </Grid>
                         <Grid item xs={3}></Grid>
                         <Grid item xs={3}></Grid>
                         <Grid item xs={6}>
                              <TextField
                                   style={{ marginTop: 50, width: "100%" }}
                                   id="outlined-secondary"
                                   label="Properties"
                                   variant="outlined"
                                   size="small"
                                   name="properties"
                                   value={state.properties}
                                   onChange={handleChange}
                              />
                         </Grid>
                         <Grid item xs={3}></Grid>
                         <Grid item xs={3}></Grid>
                         <Grid item xs={3}>
                              <Button
                                   style={{ marginTop: 20, width: "100%" }}
                                   color="primary"
                                   variant="outlined"
                              >
                                   <Link
                                        to="/"
                                        style={{
                                             textDecoration: "none",
                                        }}
                                   >
                                        Go back to homepage
                                   </Link>
                              </Button>
                         </Grid>
                         <Grid item xs={3}>
                              <Button
                                   style={{ marginTop: 20, width: "100%" }}
                                   color="primary"
                                   variant="outlined"
                                   type="submit"
                              >
                                   Create new invoice
                              </Button>
                         </Grid>
                    </Grid>
               </form>
          </div>
     );
}

export default withRouter(NewInvoice);
