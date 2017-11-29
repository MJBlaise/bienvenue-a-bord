

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';


import s from './Home.css';
import StatWidget from '../../components/Widget';
import Donut from '../../components/Donut';

import {
  Tooltip,
  XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../vendor/recharts';

const title = 'Sb Admin React';


const data = [
      { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, value: 600 },
      { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, value: 300 },
      { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, value: 500 },
      { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, value: 400 },
      { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, value: 200 },
      { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, value: 700 },
      { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, value: 100 },
];

function Home(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Bienvenue à bord !</PageHeader>
        </div>
      </div>


      <div className="row">
        <div className="col-lg-12">

          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Voyager...
              <div className="pull-right">
                <DropdownButton title="Voyage" bsSize="xs" pullRight id="dropdownButton1" >
                  <MenuItem eventKey="1">Déjà fait</MenuItem>
                  <MenuItem eventKey="2">À faire</MenuItem>
                  <MenuItem eventKey="3">Envie..</MenuItem>
                </DropdownButton>
              </div>
            </span>}
          >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid stroke="#ccc" />
                  <Tooltip />
                  <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                  <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

          </Panel>

        </div>

        <div className="col-lg-4">

          <Panel
            header={<span>
              <i className="fa fa-bell fa-fw" /> Notifications Panel
            </span>}
          >
            <ListGroup>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-comment fa-fw" /> New Comment
                <span className="pull-right text-muted small"><em>4 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-twitter fa-fw" /> 3 New Followers
                <span className="pull-right text-muted small"><em>12 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-envelope fa-fw" /> Message Sent
                <span className="pull-right text-muted small"><em>27 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-tasks fa-fw" /> New Task
                <span className="pull-right text-muted small"><em>43 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-upload fa-fw" /> Server Rebooted
                <span className="pull-right text-muted small"><em>11:32 AM</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-bolt fa-fw" /> Server Crashed!
                <span className="pull-right text-muted small"><em>11:13 AM</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-warning fa-fw" /> Server Not Responding
                <span className="pull-right text-muted small"><em>10:57 AM</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-shopping-cart fa-fw" /> New Order Placed
                <span className="pull-right text-muted small"><em>9:49 AM</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-money fa-fw" /> Payment Received
                <span className="pull-right text-muted small"><em>Yesterday</em></span>
              </ListGroupItem>
            </ListGroup>
            <Button block>View All Alerts</Button>
          </Panel>

          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Donut Chart Example
            </span>}
          >
            <div>
              <Donut data={data} color="#8884d8" innerRadius="70%" outerRadius="90%" />
            </div>
          </Panel>

        </div>

      </div>
    </div>
  );
}

Home.propTypes = {
  // news: PropTypes.arrayOf(PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   contentSnippet: PropTypes.string,
  // })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
