
class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header">
        <h4 className="card-header--title">Rutgers Course Sniper</h4>
      </header>
    )
  }
}
function goToURL(url){
	window.location.href=url;
}

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary" onClick={() => goToURL(this.props.url)}>
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    )
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        
        
        <h2>{this.props.title}</h2>
        
        <p className="body-content">{this.props.text}</p>
        
        <Button url = {this.props.url} />
      </div>
    )
  }
}

class Card extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader image={this.props.image} title = {this.props.name}/>
		
	
  <CardBody title={this.props.header} text={this.props.description} url = {this.props.codeURL}/>
      </article>
    )
  }
}

ReactDOM.render(
  <Card 
  name ="big brain timerrr"
  description = "ayaks crowd Three Sisteayaks crowd Three Sisteayaks crowd Three Sisteayaks crowd Three Siste"
  image = 'https://source.unsplash.com/user/erondu/600x400'
  header = "JavaScript+ Node.js+ AWS EC2"
  codeURL='https://github.com/n00rsy/Rutgers-Auto-Course-Register'
  />,
  document.getElementById('app')
);
