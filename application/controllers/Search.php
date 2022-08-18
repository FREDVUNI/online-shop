<?php
defined('BASEPATH') OR exit('No direct script access allowed');
    class Search extends CI_Controller{
        public function __construct(){
            parent::__construct();
            $this->load->model('Search_model');
           
        }
        public function search(){
            $data['client'] = $this->db->get_where('clients',['email'=>
            $this->session->userdata('email')])->row_array();
                if(!isset($_POST['search_string']) || empty($_POST['search_string'])):
                    redirect('/');
                endif;
            if(isset($_POST['search_string']) || empty($_POST['search_string'])):
                $search_string = trim($this->input->post('search_string', TRUE));

                $data['search_string'] = $_POST['search_string'];
				$data['result'] = $this->Search_model->search($search_string);
                $data['total'] = $this->Search_model->search_total($search_string);

                $this ->load->view('templates/header',$data);
                $this ->load->view('search',$data);
                $this ->load->view('templates/footer');
            else :
                $this->session->set_flashdata('message','<div class="alert alert-danger role="alert">
				There were no search results found for '.$search_string.'.</div>');
                redirect(base_url('search'));

            endif ;   
        }
    }

            