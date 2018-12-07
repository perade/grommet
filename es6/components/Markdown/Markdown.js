function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import { deepMerge } from '../../utils';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import { Anchor } from '../Anchor';

var GrommetMarkdown =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(GrommetMarkdown, _Component);

  function GrommetMarkdown() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = GrommetMarkdown.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        components = _this$props.components,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose(_this$props, ["components", "theme"]);

    var heading = [1, 2, 3, 4].reduce(function (obj, level) {
      var result = _extends({}, obj);

      result["h" + level] = {
        component: Heading,
        props: {
          level: level
        }
      };
      return result;
    }, {});
    var overrides = deepMerge({
      p: {
        component: Paragraph
      },
      a: {
        component: Anchor
      }
    }, heading, components);
    return React.createElement(Markdown, _extends({
      options: {
        overrides: overrides
      }
    }, rest));
  };

  return GrommetMarkdown;
}(Component);

var GrommetMarkdownDoc;

if (process.env.NODE_ENV !== 'production') {
  GrommetMarkdownDoc = require('./doc').doc(GrommetMarkdown); // eslint-disable-line global-require
}

var GrommetMarkdownWrapper = GrommetMarkdownDoc || GrommetMarkdown;
export { GrommetMarkdownWrapper as Markdown };