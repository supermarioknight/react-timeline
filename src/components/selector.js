'use strict';
// Component to show a selection box (like on windows desktop)

import React from 'react';
import PropTypes from 'prop-types';

export default class SelectBox extends React.Component {
  componentDidMount(props) {
    this.dx = 0;
    this.dy = 0;
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.visible) {
      this.dx = 0;
      this.dy = 0;
    }
  }
  start(x, y) {
    this.startX = x;
    this.startY = y;
    this.dx = 0;
    this.dy = 0;
  }
  move(dx, dy) {
    this.dx += dx;
    this.dy += dy;
    this.forceUpdate();
  }
  end() {
    this.startX = 0;
    this.startY = 0;
    this.dx = 0;
    this.dy = 0;
    this.forceUpdate();
  }
  render() {
    const {startX, startY, dx, dy} = this;
    let style = {left: startX || 0, top: startY || 0};
    //matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())
    style['WebkitTransform'] = `matrix(${dx}, 0, 0, ${dy}, ${dx / 2}, ${dy / 2})`;
    style['transform'] = style['WebkitTransform'];
    return <div className="rct9k-selector-outer" style={style} />;
  }
}
