import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Loading from './Loading';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // Call API in here
      setLoading(true);
    }, 5000);
}, []);
  return (
    <div className="App">
      {loading ? (
        <div className="container-fluid pl-1 pr-1" style={{overflowX: 'hidden'}}>
        <div style={{width: '100%', background: 'white', position: 'fixed', zIndex: 999}}>
          <div className="p-1 bg-white" style={{width: '100%', height: '45px'}}>
            <p className="float-left font-weight-bold mb-0" style={{color: 'black', fontSize: '135%'}}>GAME</p>
            <p className="float-left font-weight-bold mb-0" style={{color: '#f94b2f', fontSize: '100%', marginTop: '6px'}}>&nbsp;MARKET</p>
            <p className="float-right pt-2 mb-0 mr-2"><i className="fa fa-search" aria-hidden="true" /></p>
            <div style={{clear: 'both'}} />
          </div>
          <div className="p-0 pr-2" style={{width: '100%', height: '40px'}}>
            <div className="pl-1" style={{overflowX: 'auto', display: 'flex', width: '100%'}}>
              <div className="btn btn-white mr-2" style={{borderRadius: '50px', height: '28px', display: 'flex', border: '1px solid #ccc', color: 'black'}}>
                <i className="fa fa-home" aria-hidden="true" style={{marginTop: '-1px'}} />
                <p className="ml-2" style={{marginTop: '-2px', color: 'black', fontSize: '80%'}}>Market</p>
              </div>
              <div className="btn btn-white mr-2" style={{borderRadius: '50px', height: '28px', display: 'flex', border: '1px solid #ccc', color: 'black'}}>
                <i className="fa fa-home" aria-hidden="true" style={{marginTop: '-1px'}} />
                <p className="ml-2" style={{marginTop: '-2px', color: 'black', fontSize: '80%'}}>New</p>
              </div>
              <div className="btn btn-white mr-2" style={{borderRadius: '50px', height: '28px', display: 'flex', border: '1px solid #ccc', color: 'black'}}>
                <i className="fa fa-home" aria-hidden="true" style={{marginTop: '-1px'}} />
                <p className="ml-2" style={{marginTop: '-2px', color: 'black', fontSize: '80%'}}>Sale</p>
              </div>
              <div className="btn btn-white mr-2" style={{borderRadius: '50px', height: '28px', display: 'flex', border: '1px solid #ccc', color: 'black'}}>
                <i className="fa fa-home" aria-hidden="true" style={{marginTop: '-1px'}} />
                <p className="ml-2" style={{marginTop: '-2px', color: 'black', fontSize: '80%'}}>Contact</p>
              </div>
              <div className="btn btn-white mr-2" style={{borderRadius: '50px', height: '28px', display: 'flex', border: '1px solid #ccc', color: 'black'}}>
                <i className="fa fa-home" aria-hidden="true" style={{marginTop: '-1px'}} />
                <p className="ml-2" style={{marginTop: '-2px', color: 'black', fontSize: '80%'}}>Info&nbsp;NTF</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{width: '100%', paddingTop: '80px', paddingBottom: '70px'}}>
          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t\t\t\t.box-slide {\n\t\t\t\t\twidth:100%;\n\t\t\t\t\tbackground: white;\n\t\t\t\t\ttext-align:left;\n\t\t\t\t\twhite-space: nowrap;\n\t\t\t\t\toverflow-y:hidden;\n\t\t\t\t}\n\t\t\t\t.div_to_hold_images {\n\t\t\t\t\twidth:210px;\n\t\t\t\t\theight:340px;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\toverflow:hidden;\n\t\t\t\t\tmargin-right: 3px;\n\n\t\t\t\t}\n\t\t\t\t.box-slide-title{\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 60px;\n\t\t\t\t\tbackground: rgb(0,0,0);\n\t\t\t\t\tbackground: linear-gradient(180deg, rgba(0,0,0,0.7343312324929971) 0%, rgba(0,0,0,0.6867121848739496) 30%, rgba(0,0,0,0.742734593837535) 100%);\n\t\t\t\t}\n\t\t\t" }} />
          <div className="box-slide pl-1 pt-1"> 
            <div className="div_to_hold_images">
              <div style={{width: '100%', height: '100%', background: 'green', paddingTop: '280px', backgroundImage: 'url(images/1.JPG)', backgroundSize: '100%'}}>
                <div className="box-slide-title p-2">
                  <p className="text-white font-weight-bold mb-0">Gunny mobile</p>
                  <p className="text-white" style={{fontSize: '90%'}}>Up to 2500 sale per day</p>
                </div>
              </div>
            </div>
            <div className="div_to_hold_images">
              <div style={{width: '100%', height: '100%', background: 'green', paddingTop: '280px', backgroundImage: 'url(images/2.JPG)', backgroundSize: '100%'}}>
                <div className="box-slide-title p-2">
                  <p className="text-white font-weight-bold mb-0">Gunny mobile</p>
                  <p className="text-white" style={{fontSize: '90%'}}>Up to 2500 sale per day</p>
                </div>
              </div>
            </div>
            <div className="div_to_hold_images">
              <div style={{width: '100%', height: '100%', background: 'green', paddingTop: '280px', backgroundImage: 'url(images/3.JPG)', backgroundSize: '100%'}}>
                <div className="box-slide-title p-2">
                  <p className="text-white font-weight-bold mb-0">Gunny mobile</p>
                  <p className="text-white" style={{fontSize: '90%'}}>Up to 2500 sale per day</p>
                </div>
              </div>
            </div>
            <div className="div_to_hold_images">
              <div style={{width: '100%', height: '100%', background: 'green', paddingTop: '280px', backgroundImage: 'url(images/4.JPG)', backgroundSize: '100%'}}>
                <div className="box-slide-title p-2">
                  <p className="text-white font-weight-bold mb-0">Gunny mobile</p>
                  <p className="text-white" style={{fontSize: '90%'}}>Up to 2500 sale per day</p>
                </div>
              </div>
            </div>
          </div>
          <p className="ml-2 font-weight-bold mb-0 mt-2" style={{fontSize: '120%', color: 'black'}}>Recent</p>
          <div style={{width: '100%'}}>
            <div className="row p-3" style={{paddingTop: '0 !important'}}>
              <div className="col-6 p-1">
                <div style={{width: '100%'}}>
                  <div style={{width: '100%', backgroundImage: 'url(images/backgrounds/gunny.jpg)'}}>
                    <img src="images/items/bomb.png" width="100%" height="100%" style={{objectFit: 'none'}} />
                  </div>
                  <p className="mb-0 mt-1 font-weight-bold" style={{fontSize: '90%', color: 'black'}}>Wow Bomb</p>
                  <p className="mb-1" style={{fontSize: '80%', color: 'black'}}>20 Vcon - 30$</p>
                  <div style={{width: '48%', float: 'left', background: '#e8eaee', borderRadius: '50px', color: 'black', fontSize: '80%'}} className="btn">Detail</div>
                  <div style={{width: '48%', float: 'right', background: '#f94b2f', borderRadius: '50px', color: 'white', fontSize: '80%'}} className="btn">Buy</div>
                  <div style={{clear: 'both'}} />
                </div>
              </div>
              <div className="col-6 p-1">
                <div style={{width: '100%'}}>
                  <div style={{width: '100%', backgroundImage: 'url(images/backgrounds/gunny.jpg)'}}>
                    <img src="images/items/brick.png" width="100%" height="100%" style={{objectFit: 'none'}} />
                  </div>
                  <p className="mb-0 mt-1 font-weight-bold" style={{fontSize: '90%', color: 'black'}}>Wow Brick</p>
                  <p className="mb-1" style={{fontSize: '80%', color: 'black'}}>20 Vcon - 30$</p>
                  <div style={{width: '48%', float: 'left', background: '#e8eaee', borderRadius: '50px', color: 'black', fontSize: '80%'}} className="btn">Detail</div>
                  <div style={{width: '48%', float: 'right', background: '#f94b2f', borderRadius: '50px', color: 'white', fontSize: '80%'}} className="btn">Buy</div>
                  <div style={{clear: 'both'}} />
                </div>
              </div>
              <div className="col-6 p-1">
                <div style={{width: '100%'}}>
                  <div style={{width: '100%', backgroundImage: 'url(images/backgrounds/gunny.jpg)'}}>
                    <img src="images/items/Sclosestool3.png" width="100%" height="100%" style={{objectFit: 'none'}} />
                  </div>
                  <p className="mb-0 mt-1 font-weight-bold" style={{fontSize: '90%', color: 'black'}}>Wow Brick</p>
                  <p className="mb-1" style={{fontSize: '80%', color: 'black'}}>20 Vcon - 30$</p>
                  <div style={{width: '48%', float: 'left', background: '#e8eaee', borderRadius: '50px', color: 'black', fontSize: '80%'}} className="btn">Detail</div>
                  <div style={{width: '48%', float: 'right', background: '#f94b2f', borderRadius: '50px', color: 'white', fontSize: '80%'}} className="btn">Buy</div>
                  <div style={{clear: 'both'}} />
                </div>
              </div>
              <div className="col-6 p-1">
                <div style={{width: '100%'}}>
                  <div style={{width: '100%', backgroundImage: 'url(images/backgrounds/gunny.jpg)'}}>
                    <img src="images/items/boomerang.png" width="100%" height="100%" style={{objectFit: 'none'}} />
                  </div>
                  <p className="mb-0 mt-1 font-weight-bold" style={{fontSize: '90%', color: 'black'}}>Wow Brick</p>
                  <p className="mb-1" style={{fontSize: '80%', color: 'black'}}>20 Vcon - 30$</p>
                  <div style={{width: '48%', float: 'left', background: '#e8eaee', borderRadius: '50px', color: 'black', fontSize: '80%'}} className="btn">Detail</div>
                  <div style={{width: '48%', float: 'right', background: '#f94b2f', borderRadius: '50px', color: 'white', fontSize: '80%'}} className="btn">Buy</div>
                  <div style={{clear: 'both'}} />
                </div>
              </div>
              <div className="col-6 p-1">
                <div style={{width: '100%'}}>
                  <div style={{width: '100%', backgroundImage: 'url(images/backgrounds/gunny.jpg)'}}>
                    <img src="images/items/minotaure.png" width="100%" height="100%" style={{objectFit: 'none'}} />
                  </div>
                  <p className="mb-0 mt-1 font-weight-bold" style={{fontSize: '90%', color: 'black'}}>Wow Brick</p>
                  <p className="mb-1" style={{fontSize: '80%', color: 'black'}}>20 Vcon - 30$</p>
                  <div style={{width: '48%', float: 'left', background: '#e8eaee', borderRadius: '50px', color: 'black', fontSize: '80%'}} className="btn">Detail</div>
                  <div style={{width: '48%', float: 'right', background: '#f94b2f', borderRadius: '50px', color: 'white', fontSize: '80%'}} className="btn">Buy</div>
                  <div style={{clear: 'both'}} />
                </div>
              </div>
              <div className="col-6 p-1">
                <div style={{width: '100%'}}>
                  <div style={{width: '100%', backgroundImage: 'url(images/backgrounds/gunny.jpg)'}}>
                    <img src="images/items/Sbombpack.png" width="100%" height="100%" style={{objectFit: 'none'}} />
                  </div>
                  <p className="mb-0 mt-1 font-weight-bold" style={{fontSize: '90%', color: 'black'}}>Wow Brick</p>
                  <p className="mb-1" style={{fontSize: '80%', color: 'black'}}>20 Vcon - 30$</p>
                  <div style={{width: '48%', float: 'left', background: '#e8eaee', borderRadius: '50px', color: 'black', fontSize: '80%'}} className="btn">Detail</div>
                  <div style={{width: '48%', float: 'right', background: '#f94b2f', borderRadius: '50px', color: 'white', fontSize: '80%'}} className="btn">Buy</div>
                  <div style={{clear: 'both'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{width: '100%', height: '50px', background: 'white', position: 'fixed', top: 'calc(100vh - 50px)', bottom: 0}}>
        </div>
      </div>
      ) : <Loading/>}
    </div>
  );
}

export default App;
