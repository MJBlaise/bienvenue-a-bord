import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fwww.2Egeo.2Efr.2Fvar.2Fgeo.2Fstorage.2Fimages.2Fmedia.2Fle-tramway-28-a-lisbonne-au-portugal2.2F2069793-1-fre-FR.2Fle-tramway-28-a-lisbonne-au-portugal.2Ejpg/1199x675/quality/65/focus-point/1118,873/crop-zone/0,0-2000x1600/le-tramway-28-a-lisbonne-au-portugal.jpg', width: 4, height: 3 },
  { src: 'http://media.routard.com/image/62/8/lisbonne-2.1475628.w630.jpg', width: 1, height: 1 },
  { src: 'https://www.marseille.aeroport.fr/var/mpaeroport/storage/images/media/images/destinations/a-photos-destinations-relift/lisbonne/71791-1-fre-FR/lisbonne_full_destination.jpg', width: 3, height: 4 },
  { src: 'http://media.routard.com/image/50/9/lisbonne-square-rossio.1482509.w740.jpg', width: 3, height: 4 },
  { src: 'https://www.demotivateur.fr/images-buzz/9670/shutterstock_139714498.jpg', width: 3, height: 4 },
  { src: 'http://www.mytripolog.com/wp-content/uploads/2011/07/25-de-Abril-Bridge-Lights-At-Night-in-Lisbon-Portugal.jpg', width: 4, height: 3 },
  { src: 'https://pousadasjuventude.pt/media/246008/lisboa.jpg', width: 3, height: 4 },
  { src: 'https://i1.wp.com/www.eurodicas.com.br/wp-content/uploads/2017/03/morar-em-lisboa.jpg?resize=740,480', width: 4, height: 3 },
  { src: 'http://www.uccla.pt/sites/default/files/styles/media_full/public/media/lisboa-beautiful.jpg?itok=IxP4umR_', width: 4, height: 3 }
];


class Typography extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}

export default Typography;
