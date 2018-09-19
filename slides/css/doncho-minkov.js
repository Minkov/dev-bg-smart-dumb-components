import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'title-slide title': {
    'display': 'flex',
    'alignItems': 'center'
  },
  'reveal title-slide h1': {
    'fontSize': [{ 'unit': 'em', 'value': 2.5 }]
  },
  'title-slide signature': {
  },
  'author': {
    'display': 'flex'
  },
  'author image': {
    'height': [{ 'unit': 'px', 'value': 200 }]
  },
  'author image img': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '5px'
  },
  'author text': {
    'display': 'flex',
    'flexDirection': 'column',
    'marginLeft': [{ 'unit': 'px', 'value': 50 }]
  },
  'author title-name': {
    'fontSize': [{ 'unit': 'em', 'value': 0.7 }]
  },
  'author company': {
    'fontSize': [{ 'unit': 'em', 'value': 0.7 }]
  },
  'signature date': {
    'fontSize': [{ 'unit': 'em', 'value': 0.7 }],
    'textAlign': 'right'
  },
  'reveal demo-slide h1': {
    'textAlign': 'center'
  },
  'reveal demo-slide h2': {
    'textAlign': 'center'
  },
  'reveal demo-slide h2': {
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }]
  },
  'reveal strong': {
    'color': '#bd2438'
  },
  'reveal h1': {
    'color': '#bd2438',
    'fontSize': [{ 'unit': 'em', 'value': 2 }]
  },
  'reveal h2': {
    'fontSize': [{ 'unit': 'em', 'value': 1.7 }]
  },
  'reveal slides *': {
    'fontFamily': ''Open Sans', sans-serif !important'
  },
  'reveal slides code': {
    'fontFamily': ''Consolas' !important'
  },
  'reveal slides section': {
    'height': [{ 'unit': 'px', 'value': 900 }]
  },
  'reveal slides sectiontitle-slide': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'reveal slides sectiondemo-slide': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'reveal slides h1': {
    'fontFamily': ''Oswald', sans-serif !important'
  },
  'reveal slides h2': {
    'fontFamily': ''Oswald', sans-serif !important'
  },
  'reveal slides h3': {
    'fontFamily': ''Oswald', sans-serif !important'
  },
  'reveal slides h4': {
    'fontFamily': ''Oswald', sans-serif !important'
  },
  'reveal slides h5': {
    'fontFamily': ''Oswald', sans-serif !important'
  },
  'reveal slides h6': {
    'fontFamily': ''Oswald', sans-serif !important'
  },
  'reveal slides': {
    'textAlign': 'left'
  },
  'reveal pre code': {
    'padding': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }]
  },
  'reveal controls controls-arrow:before': {
    'backgroundColor': '#bd2438'
  },
  'reveal controls controls-arrow:after': {
    'backgroundColor': '#bd2438'
  },
  'reveal who-am-i ul li': {
    'marginTop': [{ 'unit': 'px', 'value': 5 }]
  },
  'reveal ul li': {
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'slide-columns': {
    'display': 'flex'
  },
  'columns-3 column-1': {
    'width': [{ 'unit': '%H', 'value': 0.33299999999999996 }]
  },
  'columns-3 column-2': {
    'width': [{ 'unit': '%H', 'value': 0.6659999999999999 }]
  },
  'compare line': {
    'display': 'flex'
  },
  'compare line>*': {
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'paddingTop': [{ 'unit': 'px', 'value': 35 }]
  },
  'compare line>*:nth-child(1)': {
    'textAlign': 'right',
    'paddingRight': [{ 'unit': 'px', 'value': 30 }],
    'borderRight': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#bd2438' }]
  },
  'compare line>*:nth-child(2)': {
    'textAlign': 'left',
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }],
    'borderLeft': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#bd2438' }]
  },
  'compare line>title:nth-child(1)': {
    'textAlign': 'right',
    'paddingRight': [{ 'unit': 'px', 'value': 33 }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'compare line>title:nth-child(2)': {
    'textAlign': 'left',
    'paddingLeft': [{ 'unit': 'px', 'value': 33 }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'icon': {
    'width': [{ 'unit': 'px', 'value': 70 }],
    'height': [{ 'unit': 'px', 'value': 70 }],
    'display': 'inline-block',
    'backgroundSize': '100%'
  },
  'icon:hover:after': {
    'content': '''',
    'backgroundColor': 'rgba(0, 0, 0, 0.5)',
    'width': [{ 'unit': 'px', 'value': 70 }],
    'height': [{ 'unit': 'px', 'value': 70 }],
    'display': 'block',
    'borderRadius': '3px'
  },
  'iconleetcode': {
    'backgroundImage': 'url(imgs/leetcode.png)'
  },
  'icongithub': {
    'backgroundImage': 'url(imgs/github.svg)'
  },
  'iconhackerrank': {
    'backgroundImage': 'url(imgs/hackerrank.png)'
  },
  'iconemail': {
    'backgroundImage': 'url(imgs/email.svg)'
  },
  'iconlinkedin': {
    'backgroundImage': 'url(imgs/linkedin.svg)'
  },
  'iconwww': {
    'backgroundImage': 'url(imgs/www.jpeg)'
  }
});
