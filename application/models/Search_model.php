<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Search_model extends CI_Model {
    public function search($search_string)
    {
        $search_string = '%' . $search_string . '%';
        $sql = "SELECT *
                FROM product_url 
                INNER JOIN categories ON categories.catid  = product_url.catid 
                WHERE product_url.product like ?
                OR categories.category like ?
                ORDER BY product_url.id DESC";
                $query = $this->db->query($sql,array($search_string,$search_string));
        return $query->result_array();
    }
    public function search_total($search_string){
        $search_string = '%' . $search_string . '%';
        $sql = "SELECT *
                FROM product_url 
                INNER JOIN categories ON categories.catid  = product_url.catid 
                WHERE product_url.product like ?
                OR categories.category like ?
                ORDER BY product_url.id DESC";
                $query = $this->db->query($sql,array($search_string,$search_string));
        return $query->num_rows();
    }
}