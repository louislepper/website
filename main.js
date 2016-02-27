var Name = React.createClass({
  render: function() {
    return <h1 className='Name'>Louis Lepper</h1>;
  }
});

var Tagline = React.createClass({
  render: function() {
    var message = 'Striving to make the world a better place through code';
    return <p>{message}</p>;
  }
});

var HeaderSection = React.createClass({
  render: function() {
    return <div className='HeaderSection col-sm-8 col-sm-offset-2'><Name/><Tagline/></div>;
  }
});

var Row = React.createClass({
  render: function() {
    return <div className='row'>{ this.props.children }</div>;
  }
})

var ExternalLinksSection = React.createClass({
  render: function() {

    return <div className='ExternalLinksSection col-sm-8 col-sm-offset-2'>
    <a href="https://www.facebook.com/louislepper" className="social-media-icon fa fa-facebook-square fa-5x"></a>
    <a href="https://www.linkedin.com/profile/view?id=114463031" className="social-media-icon fa fa-linkedin-square fa-5x"></a>
    <a href="https://www.youtube.com/channel/UCJd32Ob18St-iB1L_Z7bh1g" className="social-media-icon fa fa-youtube-square fa-5x"></a>
    <a href="https://twitter.com/LouisLepper" className="social-media-icon fa fa-twitter-square fa-5x"></a>
    <a href="https://bitbucket.org/louislepper" className="social-media-icon fa fa-bitbucket-square fa-5x"></a>
    <a href="https://github.com/louislepper" className="social-media-icon fa fa-github-square fa-5x"></a>
    </div>;
  }
});

var Resume = React.createClass({
  render: function() {
    return <div className="resume-link"><a href="resume.pdf">Resume</a></div>
  }
})

var MainFrame = React.createClass({
  render: function() {
    return <div>
    <Row><HeaderSection/></Row>
    <Row><ExternalLinksSection/></Row>
    <Resume/>
    </div>;
  }
});



var start = new Date().getTime();

setInterval(function() {
  ReactDOM.render(
    <MainFrame elapsed={new Date().getTime() - start} />,
    document.getElementById('container-fluid')
  );
}, 50);
