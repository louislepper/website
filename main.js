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
    return <div className='HeaderSection'><Name/><Tagline/></div>;
  }
});

var ExternalLinksSection = React.createClass({
  render: function() {
    return <div>Linkedin Youtube Twitter Facebook Bitbucket Github</div>;
  }
});

var Resume = React.createClass({
  render: function() {
    return <a href="resume.pdf">Resume</a>
  }
})

var MainFrame = React.createClass({
  render: function() {
    return <div><HeaderSection/><ExternalLinksSection/><Resume/></div>;
  }
});



var start = new Date().getTime();

setInterval(function() {
  ReactDOM.render(
    <MainFrame elapsed={new Date().getTime() - start} />,
    document.getElementById('container')
  );
}, 50);
