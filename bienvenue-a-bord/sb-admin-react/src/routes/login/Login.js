/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
// import { Panel, Input, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import { FormControl, Checkbox } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import history from '../../core/history';

const title = 'Log In';


function submitHandler(e) {
  e.preventDefault();
  history.push('/');
}

function Login(props, context) {
  context.setTitle(title);
  return (
    <div className="col-md-4 col-md-offset-4">
      <div className="text-center">
        <h1 className="login-brand-text">Bievenue à bord !</h1>
        <h3 className="text-muted">Cindosh & MJ Team</h3>
      </div>

      <Panel header={<h3>Connectez-vous</h3>} className="login-panel">

        <form role="form" onSubmit={(e) => { submitHandler(e); }}>
          <fieldset>
            <div className="form-group">
              <FormControl
                type="text"
                className="form-control"
                placeholder="Login"
                name="name"
              />
            </div>

            <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Mot de passe"
                type="password"
                name="password"
              />
            </div>
            <Button type="submit" bsSize="large" bsStyle="success" block>Connexion</Button>
          </fieldset>
        </form>

      </Panel>

    </div>

  );
}


Login.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Login);
