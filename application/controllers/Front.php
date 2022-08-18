<?php
defined('BASEPATH') OR exit('No direct script access allowed');
    class Front extends CI_Controller{
        public function __construct(){
            parent::__construct();
            
           
        }
        public function index(){
        $data['category'] = $this->Front_model->getcategories();
        $this->load->view('index',$data);

        }

        public function error404(){
            $data['category'] = $this->Category_model->getcategories();
            $this->load->view('templates/header');
            #$this ->load->view('404',$data);
            $this ->load->view('templates/footer');
        }
    }