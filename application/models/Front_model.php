<?php
defined('BASEPATH') OR exit('No direct script access allowed');
    Use GuzzleHttp\Client;
    class Front_model extends CI_Model{
        public function __construct(){
            parent::__construct();
           
        }
        public function getcategories(){
            
            $client = new Client();
            $response =$client->request('GET','http://localhost/flyland/api/Category/index_get');

            $result = json_decode($response->getBody()->getContents(),true);
            return $result['data'];

        }
        public function getProducts(){
            
            $client = new Client();
            $response =$client->request('GET','http://localhost/flyland/api/Product/index_get');

            $result = json_decode($response->getBody()->getContents(),true);
            return $result['data'];

        }
    }