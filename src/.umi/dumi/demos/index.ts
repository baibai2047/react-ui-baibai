// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/baibai2047/programFile_QD/react-ui-baibai/src/alert/demo/basic.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!/Users/baibai2047/programFile_QD/react-ui-baibai/src/alert/index.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!/Users/baibai2047/programFile_QD/react-ui-baibai/src/alert/style/index.ts?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!/Users/baibai2047/programFile_QD/react-ui-baibai/src/alert/style/index.less?dumi-raw-code';

export default {
  'alert-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_trela" */'/Users/baibai2047/programFile_QD/react-ui-baibai/src/alert/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1},"index.tsx":{"import":"../index","content":rawCode2},"style/index.ts":{"import":"../style","content":rawCode3},"style/index.less":{"import":"./index.less","content":rawCode4}},"dependencies":{"react":{"version":"18.2.0"},"prop-types":{"version":"15.8.1"}},"componentName":"alert","identifier":"alert-basic"},
  },
};
