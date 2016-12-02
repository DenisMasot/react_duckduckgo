// Liste des modules dont App.js à besoin pour touné
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require ('../stores/AppStore');


var SearchForm = React.createClass({
// initialisation de la vue 
    render: function(){
        return(
            <div onSubmit={this.searchText} className="well">
                <form className="form-group">
                    <label>Search For Something...</label>
                    <input type="text" className="form-control" ref="text" />
                </form>
            </div>   
        )
    },
    searchText: function(e){
        e.preventDefault();

        var search = {
            text: this.refs.text.value.trim()
        }

        AppActions.searchText(search);
    }

});


// Renvoie à div#app dans index.html
module.exports = SearchForm;