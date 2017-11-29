import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';

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
      </div>
    </div>
  );
}


displayBlank.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayBlank;
