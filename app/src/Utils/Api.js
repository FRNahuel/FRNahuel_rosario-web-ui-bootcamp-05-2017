import axios from 'axios'
const api_key = '&apikey=byr2txgarfnwm4627g88wz93vkdk35u8';
const root_url = 'https://us.api.battle.net/wow/'
const locale = '/status?locale=en_US'
const locale1 = 'locale=en_US'

export default {
  fetchWowRealm: () => {
    let encodedURI = window.encodeURI(root_url+'realm/'+locale+api_key);
    return axios.get(encodedURI)
  },
  fetchWowUserItem: (realm,char) => {
    let encodedURI =
      window.encodeURI(root_url+'character/'+realm+'/'+char+'?fields=items&'+locale1+api_key);
    return axios.get(encodedURI)
  },
  fetchWowUser: (realm,char) => {
    let encodedURI =
      window.encodeURI(root_url+'character/'+realm+'/'+char+'?fields=stats&'+locale1+api_key);
    return axios.get(encodedURI)
  },

  fetchWowGuild: (realm,guild) => {
    let encodedURI =
      window.encodeURI(root_url+'guild/'+realm+'/'+guild+'?fields=members&'+locale1+api_key);
    return axios.get(encodedURI)
  },

  fetchWowTop: (top) => {
    let encodedURI =
    window.encodeURI(root_url+'leaderboard/'+top+'?'+locale1+api_key);
    return axios.get(encodedURI)
  },



}
