import React from "react";
import './Schedule.scss';

import Fade from 'react-reveal/Fade';
import { FloatingHat } from 'app/components';

function Schedule() {
  return (
    <div className="Schedule">
      <div className="stripes"></div>
      <section id="schedule-block">
        <div className="schedule-countdown">
          <div>
            <div>
              <FloatingHat offset={0}></FloatingHat>
            </div>
            <h3>
              00 HRS
            </h3>
            <h3>
              00 MIN
            </h3>
            <h3>
              00 SEC
            </h3>
            <div>
              <FloatingHat offset={2}></FloatingHat>
            </div>
          </div>
          <div className="schedule-countdown-border"></div>
        </div>
        <div className="schedule-card">
         
        </div>
      </section>
      <section id="credits">
        <p>Made with <a href="https://en.wikipedia.org/wiki/Anteater">&hearts;</a> in Irvine, CA</p>
      </section>
    </div>
  );
}

export default Schedule;
