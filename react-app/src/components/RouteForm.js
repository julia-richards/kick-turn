import * as React from "react";
import ReactMapGL from "react-map-gl";
import { Redirect } from "react-router-dom";
import MapWithEditor from "./Maps/WithEditor";
import Layout from "./Layout";
import Seo from "./Seo";
import Button from "./Button";
import { Input } from "./formComponents";
import { addRoute } from "../services/routes";
import "../styles/RouteForm.css";
import WithEditor from "./Maps/WithEditor";

const DEFAULT_VIEWPORT = {
  width: 800,
  height: 600,
  longitude: -107.7232762,
  latitude: 37.8964126,
  zoom: 12,
};

const RouteForm = () => {
  const [viewport, setViewport] = React.useState(DEFAULT_VIEWPORT);
  const [name, setName] = React.useState("");
  const [features, setFeatures] = React.useState();
  const [redirect, setRedirect] = React.useState();

  const handleSumbit = async (e) => {
    e.preventDefault();
    const params = { name, viewport, geo_features: features };
    const { id } = await addRoute(params);
    setRedirect(`/routes/${id}`);
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <Layout>
      <div className="route">
        <Seo title={"New Route"} />
        <div className="route__form">
          <form onSubmit={handleSumbit}>
            <h1>Add Route</h1>
            <Input
              name="name"
              formValues={{ name }}
              onChange={(e) => setName(e.target.value)}
            />
            <Button type="submit">Add Route</Button>
          </form>
        </div>
        <div className="route__form-map" style={{ width: "100%", height: 400 }}>
          <WithEditor
            viewport={viewport}
            setViewport={setViewport}
            onUpdate={(e) => setFeatures(e.data)}
          />
        </div>
      </div>
    </Layout>
  );
};

export default RouteForm;
