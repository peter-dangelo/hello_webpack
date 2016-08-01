//require('./login');
import {login} from './Login';

login('admin', 'idunno');

console.log("Welcome to big hair concerts");

console.log('app loaded');

//require('../css/bootstrap.css');
//require('../css/app.css');
import {} from '../css/app.scss';

var img = document.createElement('img');
img.src = require('../images/stranger-things.jpg');
document.getElementById('img-container').appendChild(img);