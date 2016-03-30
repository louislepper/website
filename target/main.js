var Name = React.createClass({
  displayName: 'Name',

  render: function () {
    return React.createElement(
      'h1',
      { className: 'Name' },
      'Louis Lepper'
    );
  }
});

var Tagline = React.createClass({
  displayName: 'Tagline',

  render: function () {
    var message = 'Striving to make the world a better place through code';
    return React.createElement(
      'p',
      null,
      message
    );
  }
});

var HeaderSection = React.createClass({
  displayName: 'HeaderSection',

  render: function () {
    return React.createElement(
      'div',
      { className: 'HeaderSection col-sm-8 col-sm-offset-2' },
      React.createElement(Name, null),
      React.createElement(Tagline, null)
    );
  }
});

var Row = React.createClass({
  displayName: 'Row',

  render: function () {
    return React.createElement(
      'div',
      { className: 'row' },
      this.props.children
    );
  }
});

var ExternalLinksSection = React.createClass({
  displayName: 'ExternalLinksSection',

  render: function () {

    return React.createElement(
      'div',
      { className: 'ExternalLinksSection col-sm-8 col-sm-offset-2' },
      React.createElement('a', { href: 'https://www.facebook.com/louislepper', className: 'social-media-icon fa fa-facebook-square fa-5x' }),
      React.createElement('a', { href: 'https://www.linkedin.com/profile/view?id=114463031', className: 'social-media-icon fa fa-linkedin-square fa-5x' }),
      React.createElement('a', { href: 'https://www.youtube.com/channel/UCJd32Ob18St-iB1L_Z7bh1g', className: 'social-media-icon fa fa-youtube-square fa-5x' }),
      React.createElement('a', { href: 'https://twitter.com/LouisLepper', className: 'social-media-icon fa fa-twitter-square fa-5x' }),
      React.createElement('a', { href: 'https://bitbucket.org/louislepper', className: 'social-media-icon fa fa-bitbucket-square fa-5x' }),
      React.createElement('a', { href: 'https://github.com/louislepper', className: 'social-media-icon fa fa-github-square fa-5x' })
    );
  }
});

var Resume = React.createClass({
  displayName: 'Resume',

  render: function () {
    return React.createElement(
      'div',
      { className: 'resume-link' },
      React.createElement(
        'a',
        { href: 'resume.pdf' },
        'Resume'
      )
    );
  }
});

var MainFrame = React.createClass({
  displayName: 'MainFrame',

  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(
        Row,
        null,
        React.createElement(HeaderSection, null)
      ),
      React.createElement(
        Row,
        null,
        React.createElement(ExternalLinksSection, null)
      ),
      React.createElement(Resume, null)
    );
  }
});

var start = new Date().getTime();

setInterval(function () {
  ReactDOM.render(React.createElement(MainFrame, { elapsed: new Date().getTime() - start }), document.getElementById('container-fluid'));
}, 50);