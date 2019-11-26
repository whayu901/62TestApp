import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'bearer BUQ0TEaBTv-wXh_epLTAhu1XaWyjfjcEwueJF9WSVlYlUAVgr4SL1It5pjI07MCfqY_-LVCoPMxwFQVX9tMbG_rwhSVTcufkdNI22BgkY1v-75EAc5pZy1nYNLrUXXYx',
        
    }
})