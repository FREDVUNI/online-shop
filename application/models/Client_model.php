<?php
if (!defined('BASEPATH'))
    exit('No direct script access allowed');

    class Client_model extends CI_Model{
        public function save($data){
            $extra_requests =$this->input->post('extra_requests');
            $files = implode(',',$data['userfile']); 
            
            $data =array(
                'subject' =>$this->input->post('subject'),
                'email' =>$this->input->post('email'),
                'content' =>$this->input->post('content'),
                'measure' =>$this->input->post('measure'),
                'quantity' =>$this->input->post('quantity'),
                'extra_requests' =>json_encode(implode(",", $extra_requests)),
                'media' => $files,
            );
            return $this->db->insert('messages',$data);
            
        }
    }