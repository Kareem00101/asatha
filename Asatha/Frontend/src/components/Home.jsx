import React, { Component } from 'react';
import bestsellers from './bestsellers';

function getProductInfos(props) {
  if (props) {
    if (props.state && props.state.product) {
      // use JSON.Parse to print single attribute without quotations.
      return JSON.stringify(props.state.product, null, 2);
    }
  }
}

export default class Home extends Component {
  render() {
    return (
      <div>
        <body>
          {/* <div>
            <pre>{getProductInfos(this.props)}</pre>
          </div> */}
          <main>
            <h3>Best Sellers</h3>
            <div class="row">
              <div className="itemloop">
                {bestsellers.map((item,index)=>{
                  return(
                  <div classname="bestseller" key={index}>
                    <a href="/Product">
                      <img className="medium" src={item.img} alt="" />
                    </a>
                    <a href="/Product">
                      <h2 className="bstitle">{item.title}</h2>
                    </a>
                    <p className="bsdescription">{item.description}                 </p>
                    <div className="bsprice">{item.price}</div>
                  </div>
                  )
                })}
              </div>                
            </div>
          </main>
          <footer className="r1 center"> placeholder text </footer>
        </body>
      </div>
    );
  }
}
