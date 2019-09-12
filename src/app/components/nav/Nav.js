import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

import logo from 'assets/images/zothacks-logo.png';
import { Spring, Trail } from 'react-spring/renderprops';
import { Button } from 'react-bootstrap';

function Nav({history}) {

  const [isHomepage, setHomepage] = useState(history.location.pathname === '/');
  const [resourceHover, setResourceHover] = useState(false);

  const resources = [
    {
      label: 'Starter Packs'
    }, {
      label: 'Devpost'
    }, {
      label: 'Slack'
    }
  ];

  history.listen((location) => {
    setHomepage(location.pathname === '/');
  });

  return (
    <div className="nav">
      <div className="nav-left">
        <img src={logo} alt="Zothacks Logo"></img>
      </div>
      <div className="nav-right">
        <Link to="/">
          <p>
            Home
          </p>
        </Link>
        <div onMouseOver={() => setResourceHover(true)} onMouseOut={() => setResourceHover(false)}>
          <p>
            Resources 
            <i className="fa fa-angle-down"></i>
          </p>
          <Spring to={{ opacity: resourceHover ? 1 : 0 }}>
            {(props) => (
              <div className="nav-resource-dropdown" style={props}>
                <div className="nav-resource-hover-buffer"></div>
                <div className="nav-resource-dropdown-tag"/>
                {resources.map(function(resource, index) {
                    return (
                      <div>
                        <div className="nav-resource-dropdown-item">
                          <p>
                            {resource.label}
                          </p>
                        </div>
                        { index < resources.length - 1 ?
                          <div className="nav-resource-border"></div> : null
                        }
                      </div>
                    )
                  })}
              </div>
            )}
          </Spring>
        </div>
        {
          isHomepage ? 
          <Link to="/schedule">
            <Button variant="light">
              Schedule
            </Button>
          </Link> :
          <Link to="/ahhh">
            <Button variant="light">
              Apply
            </Button>
          </Link>
        }
      </div>
    </div>
  )
}

export default Nav;