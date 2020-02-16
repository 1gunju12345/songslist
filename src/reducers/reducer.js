import {combineReducers} from 'redux';
const songReducer =()=>{

    return[
        {tiitle:'baby', duration:'2.80'},
        {tiitle:'let me love you',duration:'3.0'},
        {title:'in the end', duration:'4.0'},
        {title:'dancing with the strangers',duration:'3.20'}
    ];
};

const selectedSongreducer = (selectedSong=null,action)=>{
    if(action.type ==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};
export default combineReducers({
    songs:songReducer,
    selectedSong:selectedSongreducer
});