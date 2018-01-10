import React, { PropTypes } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';

const title = 'Typography';

function displayTypography(props, context) {
  context.setTitle(title);
  return (
    <div>

      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Photos</PageHeader>
        </div>
      </div>




    </div>
);
}

displayTypography.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayTypography;
