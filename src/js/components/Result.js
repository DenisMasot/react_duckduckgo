// Liste des modules dont App.js à besoin pour touné
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require ('../stores/AppStore');



var Result = React.createClass({
// initialisation de la vue 
    render: function(){
        
        // description complete link+name+description
        var text = this.props.result.Result;
        
        //description
        var string = text.substr(text.indexOf("</a>") + 4);
        
        
        var link = text.substr(0, text.indexOf('</a>') + 4);
        //name
        var aStr = link.replace('</a>', '');
        var aStr = aStr.substr(link.indexOf('">')+2);
        
        //link
        var link = link.replace(/<a href="/, '');
        var link = link.substr(0, link.indexOf('">'));
        
        if(this.props.result.Icon.URL != ''){
            return(
                <div onSubmit={this.searchText} className="well">
                    <div className="row">
                        <img className="col-md-3" src={this.props.result.Icon.URL}/>

                        <div className="content lead col-md-9">
                            <h2><a href={link}>{aStr}</a></h2>
                            <p>{string}</p>
                            <br/>
                            <a className="btn btn-primary" href={link}>Read More...</a>
                       </div>

                    </div>
                </div>
            )
        } else{
            return(
            <div onSubmit={this.searchText} className="well">
                <div className="row">
                    <div className="content lead col-md-12">
                        <h2><a href={link}>{aStr}</a></h2>
                        <p>{string}</p>
                        <br/>
                        <a className="btn btn-primary" href={link}>Read More...</a>
                   </div>
                    
                </div>
            </div>
        )
        }
        
        
    }

});



// Renvoie à div#app dans index.html
module.exports = Result;



// <p className="content lead col-md-9" dangerouslySetInnerHTML={{__html:this.props.result.Result}}></p>