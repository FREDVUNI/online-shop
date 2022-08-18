<?php
defined('BASEPATH') OR exit('No direct script access allowed');
    Class Pages extends CI_Controller{
        public function __construct(){
            parent::__construct();
            $this->load->model('Front_model');
           
        }
        public function view($page ='index'){
            if(! file_exists(APPPATH.'views/pages/'.$page.'.php')):
                show_404();
            endif;
            $data['title'] = ucfirst($page);

            $this->load->view('templates/header');
            $data['product'] = $this->Front_model->getProducts();
            $this->load->view('pages/'.$page,$data);
            $this->load->view('templates/footer');
        }
       
    }
