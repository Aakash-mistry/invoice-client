import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Layouts/Home/Home";
import Invoices from "./Layouts/Invoices/Invoices";
import NewInvoice from "./Layouts/Invoices/NewInvoice/NewInvoice";

function App() {
     return (
          <BrowserRouter>
               <div className="App">
                    <Switch>
                         <Route path="/" component={Home} exact />
                         <Route path="/invoices" component={Invoices} />
                         <Route
                              path="/create-new-invoice"
                              component={NewInvoice}
                         />
                    </Switch>
               </div>
          </BrowserRouter>
     );
}

export default App;
