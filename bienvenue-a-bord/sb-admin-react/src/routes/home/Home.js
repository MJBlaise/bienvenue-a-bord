import React, { PropTypes } from 'react';
import classNames from 'classnames';
import history from '../../core/history';
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

//Connection à la base de données
//$bdd = new mysqli('localhost', 'root', '', 'bienvenueabord');
//if ($bdd->connect_error) die('impossible de se connecter');
  
function Home(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Bienvenue à bord </PageHeader>
        </div>
      </div>


      <div className="row">
        <div className="col-lg-12">

          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Voyager...
              <div className="pull-right">
                <DropdownButton title="Voyage" bsSize="xs" pullRight id="dropdownButton1" >
                  <MenuItem eventKey="1" href="/Blank">Mes voyages</MenuItem>
                  <MenuItem eventKey="2" href="/table">En ce moment</MenuItem>
                </DropdownButton>
              </div>
            </span>}
          >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
				<img src='https://media.wnyc.org/i/1200/627/c/80/1/shutterstock_175007894.jpg'/>
              </ResponsiveContainer>
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