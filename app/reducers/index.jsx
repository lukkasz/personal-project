import {combineReducers} from 'redux';
import posts from 'app/reducers/reducerPosts';
import auth from 'app/reducers/reducerAuth';
import videos from 'app/reducers/reducerVideos';

const rootReducer = combineReducers({
    posts,
    auth,
    videos
    
});

export default rootReducer;
