<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*Frontend routes*/
$route['index1'] ='Front/index';

$route['sign-in'] ='Client/login';
$route['sign-up'] ='Client/register';
$route['contact-us'] ='Client/contact';
$route['search'] ='Search/search';

$route['(:any)'] ='pages/view/$1';
/*Frontend routes*/

$route['default_controller'] = 'pages/view';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
