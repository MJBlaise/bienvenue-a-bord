
import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Pagination from 'react-bootstrap/lib/Pagination';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Well from 'react-bootstrap/lib/Well';
import {
  Col,
  ControlLabel,
  FormControl,
  HelpBlock,
  FormGroup,
  Checkbox,
  Form,
  Radio,
  InputGroup,
  Glyphicon } from 'react-bootstrap';

  
import ImageGallery from 'react-image-gallery';
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;
import Container from 'react-photo-container';
import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
import FormControlStatic from 'react-bootstrap/lib/FormControlStatic';
import InputGroupAddon from 'react-bootstrap/lib/InputGroupAddon';

const title = 'Table';
const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]

function displayTable(props, context) {
  context.setTitle(title);
  return (
    <div>
	  <div className="row">
		<div className="col-lg-12">
			<PageHeader>Mon voyage actuel</PageHeader>
		</div>
	
		<div className="col-lg-12">
          <Panel header={<span>La Nouvelle Zélande</span>} >
            <div>
              <p>Arrivée le 1 janvier le temps est magnifique l'île est paradisiaque, que du bonheur..... Bla bla bla </p>
              <Button bsSize="large" block href="">Editer</Button>
            </div>
          </Panel>
        </div>
	
      
	  <div className="col-lg-12">
	    <Panel header={<span>Mes photos</span>} >
		  <div id="mesPhotos">
			<img src='http://lorempixel.com/250/150/nature/3/'/>
			<img src='http://lorempixel.com/250/150/nature/2/'/>
			<img src='http://lorempixel.com/250/150/nature/1/'/>
		  </div>
		<h4>Ajout de photo</h4>
			<FormGroup
              controlId="formBasicFile"
            >

			  <FormControl
				  type="file" accept="image/*"
			  />
			  <FormControlFeedback />
            </FormGroup>
		</Panel>
	  </div>
	  
	  <div className="col-lg-12">
	    <Panel header={<span>Mes petits plus</span>} >
		  <div className="col-lg-6">
			<h4>Mes contact</h4>
			  <FormGroup controlId="formControlsSelectMultiple">
				<ControlLabel>Liste de mes contact</ControlLabel>
				<FormControl componentClass="select" multiple>
				  <option value="1">Yan L'KABOUSSE</option>
				  <option value="2">Thomas Rodriguez</option>
				  <option value="3">Bob Léponge</option>
				  <option value="4">Patrick</option>
				  <option value="5">Homer</option>
				</FormControl>
			  </FormGroup>
		  </div>
		  <div className="col-lg-6">
			<h4>Mes recettes</h4>
			  <FormGroup controlId="formControlsSelectMultiple">
				<ControlLabel>Liste de mes recettes</ControlLabel>
				<FormControl componentClass="select" multiple>
				  <option value="1">Whitebait</option>
				  <option value="2">Moules vertes</option>
				  <option value="3">Hangi</option>
				  <option value="4">Meat Pie</option>
				  <option value="5">Pavlova</option>
				</FormControl>
			  </FormGroup>
		  </div>
		</Panel>
	   </div>
	  
	  </div>
    </div>

  );
}



displayTable.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayTable;
