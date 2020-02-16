import React ,{Component} from 'react';
import {connect} from 'react-redux';

class SongList extends Component{
    render(){
        return (<div>
            SongList
        </div>);
    }
}
const mapStateTOProps=(state)=>{

    return {songs:state.songs};

}
export default connect( mapStateTOProps) (SongList);