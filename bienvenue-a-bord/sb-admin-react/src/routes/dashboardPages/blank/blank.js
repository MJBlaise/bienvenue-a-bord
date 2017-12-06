import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';
import lisbonne from '../../../images/lisbonne.jpg'
import republiqueDominicaine from '../../../images/republiqueDominicaine.jpg'
import thailande from '../../../images/thailande.jpg'
import '../../../../../src/App.css'
import history from '../../../core/history';

const title = 'Blank';
/* displayBlank */
function displayBlank(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Page des voyages !</PageHeader>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                  <td><img className="img-responsive" src={lisbonne} href="" onClick={(e) => { e.preventDefault(); history.push('/Voyage'); }}/></td>
                  <td><img className="img-responsive" src={republiqueDominicaine}/></td>
                  <td><img className="img-responsive" src={thailande}/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


displayBlank.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayBlank;
