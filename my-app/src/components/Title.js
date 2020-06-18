import React, { useState, useEffect, useCallback } from 'react';
import Anime from "@mollycule/react-anime";

export default () => {
  return (
    <div>
      <Anime
        in
        appear
        duration={2000}
        onEntering={{ translateY: [-40, 0], opacity: [0, 1] }}
        onExiting={{ translateY: -40, opacity: 0 }}
        easing="linear"
      >
        <section>
          <p className="title mt-2 font-weight-bold"> Need advice?</p>
        </section>
      </Anime>
    </div>
  );
}

