import { Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { useAuth } from "../contexts/AuthContext";
import { Route } from "./Route";

export const Routes = () => {
  const { accessToken } = useAuth();

  return (
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Home} isPrivate />
      <Route path="/cart" component={Cart} isPrivate />
    </Switch>
  );
};
