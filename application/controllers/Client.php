<?php
defined('BASEPATH') OR exit('No direct script access allowed');
    Class Client extends CI_Controller{
        public function __construct(){
            parent::__construct();
            $this->load->model('Client_model');
            
        }
        public function login(){
            $this->form_validation->set_rules('email','Email','required|trim|valid_email');
            $this->form_validation->set_rules('password','Password','required|trim');
            if($this->form_validation->run() == FALSE):
                $this ->load->view('templates/header');
                $this ->load->view('clients/sign-in');
                $this ->load->view('templates/footer');
            else:
                //when the validation works out
                $this->_login();
            endif; 
        }
        private function _login(){
            $email = $this->input->post('email');
            $password =$this->input->post('password');
    
            $clients =$this->db->get_where('clients',['email' => $email])->row_array();
            if($clients):
                if($clients['is_active'] == 1):
                    if(password_verify($password,$clients['password'])):
                        $data =[
                            'email' => $clients['email'],
                            'id' =>$clients['id'],
                        ];
                        $this->session->set_userdata($data);
                        redirect('/');
                    else:
                        $this->session->set_flashdata('message','<div class="alert alert-danger" role="alert"> Wrong Email Password combination.</div>');
                        redirect('sign-in');
                    endif;
                else:
                    $this->session->set_flashdata('message','<div class="alert alert-danger" role="alert"> Email Address has not been activated.</div>');
                    redirect('sign-in');
                endif;
            else:
                $this->session->set_flashdata('message','<div class="alert alert-danger" role="alert"> Wrong Email Password combination.</div>');
                redirect('sign-in');
            endif;
        }
        public function register(){
            $data['client'] = $this->db->get_where('clients',['email'=>
            $this->session->userdata('email')])->row_array();
            
            $this->form_validation->set_rules('fullname','Full Name','required|trim|callback_name_check');
            $this->form_validation->set_rules('email','Email','required|trim|valid_email|is_unique[clients.email]',
                ['is_unique'=>'This email is already registered.']
            );
            $this->form_validation->set_rules('country','Country','required|trim');
            $this->form_validation->set_rules('company','Company','required|trim');
            $this->form_validation->set_rules('source_products','Source Product','required|trim');
            $this->form_validation->set_rules('tcs','Terms & Conditions','required|trim');
            $this->form_validation->set_rules('phone','Phone number','required|trim|callback_phone_check');

            $this->form_validation->set_rules('password','Password','required|trim|min_length[8]|matches[confirm]',
                ['matches'=>'The passwords didnot match'],
                ['min_length'=>'The password should atleast be 8 characters long.']
            );
            $this->form_validation->set_rules('confirm','Confirm password','required|trim|matches[password]',
                ['matches'=>'The passwords didnot match']
            );
    
    
            if($this->form_validation->run() == false):
                $data['client'] = $this->db->get_where('clients',['email'=>
                $this->session->userdata('email')])->row_array();
    
                $this->load->view('templates/header',$data);
                $this->load->view('clients/sign-up',$data);
                $this->load->view('templates/footer');

            else:
                $email= htmlspecialchars($this->input->post('email'));
                $data=[
                    'fullname' => htmlspecialchars($this->input->post('fullname')),
                    'email' => $email,
                    'password' => password_hash($this->input->post('password'), PASSWORD_DEFAULT),
                    'tcs' => htmlspecialchars($this->input->post('tcs')),
                    'company' => htmlspecialchars($this->input->post('company')),
                    'phone' => htmlspecialchars($this->input->post('phone')),
                    'country' => htmlspecialchars($this->input->post('country')),
                    'source_products' => htmlspecialchars($this->input->post('source_products')),
                    'is_active'=>0,
                    'status'=>0,
                ];
                //creating the token to be used to verify the email address
                $token =base64_encode(mt_rand());
                $user_token = [
                'email' => $email,
                'token' => $token,
                'date_created' =>time()
                ];
            
            $this->db->insert('clients',$data);
            $this->db->insert('user_token', $user_token);
            
            $this->_sendEmail($token,'verify');
            $this->session->set_flashdata('message','<div class="alert alert-success" role="alert">Your account has been created successfully.please verify it by clicking the activation link that has been sent to your email.</div>');
                redirect('sign-up');
            endif;
        }
        public function contact(){ 
            $this->form_validation->set_rules('quantity','Quantity','required|trim|greater_than[0]');
            $this->form_validation->set_rules('subject','subject','required|trim');
            $this->form_validation->set_rules('measure','Measure','required|trim');
			$this->form_validation->set_rules('email','Email Adress','required|trim|valid_email');
			$this->form_validation->set_rules('extra_requests[]','Extra Requests','required|trim');
            $this->form_validation->set_rules('content','Content','required|trim');

            if($this->form_validation->run() == FALSE):

                $this ->load->view('templates/header');
                $this ->load->view('contact-us');
                $this ->load->view('templates/footer');

            else:
                $extra_requests =$this->input->post('extra_requests');

                $data ['subject'] = $this->input->post('subject');
				$data['email'] = $this->input->post('email');
                $data['content'] = $this->input->post('content');
                $data['measure'] = $this->input->post('measure');
                $data['quantity'] =$this->input->post('quantity');				
                $data['extra_requests'] = json_encode(implode(",", $extra_requests));

                $data = [];
                $countFiles = count($_FILES['userfile']['name']);
                for($i = 0; $i < $countFiles; $i++):
                    if($_FILES['userfile']['name'][$i] != '' || $_FILES['userfile']['size'][$i] != 0):
                        //new configurations for the files uploaded
                        $_FILES['file']['name'] = $_FILES['userfile']['name'][$i];
                        $_FILES['file']['type'] = $_FILES['userfile']['type'][$i];
                        $_FILES['file']['tmp_name'] = $_FILES['userfile']['tmp_name'][$i];
                        $_FILES['file']['error'] = $_FILES['userfile']['error'][$i];
                        $_FILES['file']['size'] = $_FILES['userfile']['size'][$i];

                        //uploading the image and pdfs link to the database.
                        $config['upload_path'] = './assets/images/uploads/files/';
                        $config['allowed_types'] = 'gif|jpg|jpeg|png|pdf|doc|docx|xls|xlsz|txt|rar|zip';
                        $config['max_size'] = '3048';
                        $config['max_width'] = '9024';
                        $config['max_height'] = '9024';
                        $config['encrypt_name'] = true;
    
                        $this->load->library('upload', $config);
                        $this->upload->initialize($config);
    
                        if (!$this->upload->do_upload('file')):
                            $error = array('error' => $this->upload->display_errors());
                            $_FILES['userfile']['name'] = 'noimage.png';
                        else:
                            $fileData = $this->upload->data();  
                            $data['userfile'][] = $fileData['file_name'];
                        endif;
                    else:
                        $this->session->set_flashdata('message', '<div class="alert alert-danger role="alert">
                        Invalid File.please try again.</div>');
                        return redirect('contact-us');    
                    endif;
                endfor;

                $this->Client_model->save($data);
                $this->_sendmail('sendmessage');
                $this->session->set_flashdata('message','<div class="alert alert-success role="alert">
				Your message has been sent successfully.we\'ll shall be in touch soon.</div>');
				return redirect('contact-us');
            endif;
        }

        public function verify(){
            $email= $this ->input->get('email');
            $token =$this ->input->get('token');
            $client=$this ->db->get_where('clients',['email' =>$email])->row_array();
            
            if($client):
            $user_token=$this ->db->get_where('user_token',['token' =>$token])->row_array();
                if( $user_token):
                    if(time() - $user_token['date_created'] < (60*60*24)):
                       $this->db->set('is_active',1);
                       $this->db->where('email',$email);
                       $this->db->update('clients');
                       
                       $this->db->delete('user_token',['email'=>$email]);
                       $this->session->set_flashdata('message','<div class="alert alert-success" role="alert">'.$email.' has been verified.You can login.</div>');
                       redirect('sign-in');
                    else:
                       $this->db->delete('clients',['email'=>$email]);
                       $this->db->delete('user_token',['email'=>$email]);
                       
                       $this->session->set_flashdata('message','<div class="alert alert-danger" role="alert">Token has expired.</div>');
                        redirect('sign-in');
                    endif;
                else:
                    $this->session->set_flashdata('message','<div class="alert alert-danger" role="alert">Your account activation has failed.</div>');
                    redirect('sign-in');
                endif;
            else:
                $this->session->set_flashdata('message','<div class="alert alert-danger" role="alert">Your account activation has failed.</div>');
                redirect('sign-in');
            endif;
        }
        private function _sendmail($type){
            require_once(APPPATH.'libraries/mailer/mailer_config.php');
            $this->load->library('phpmailer_lib');
            $mail = $this->phpmailer_lib->load();
    
            $mail->isSMTP();
            $mail->Host     = HOST;
            $mail->SMTPAuth = true;
            $mail->Username = GUSER;
            $mail->Password = GPWD;
            $mail->SMTPSecure = 'ssl';
            $mail->Port     = PORT;
            $mail->setFrom('info@flylandgroup.com', 'FLYLAND GROUP');
            $mail->addReplyTo('flylandgroup@gmail.com', 'FLYLAND GROUP');
            if($type == 'sendmessage'):
                $mail->addAddress($this->input->post('email'));
                $mail->Subject = 'FLYLAND GROUP|MESSAGE';
                $mail->isHTML(true);

                $mailContent ='
                    <!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title></title><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge" /><style type="text/css">body,table,td,a{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td{mso-table-lspace:0pt;mso-table-rspace:0pt}img{-ms-interpolation-mode:bicubic}img{border:0;height:auto;line-height:100%;outline:none;text-decoration:none}table{border-collapse:collapse !important}body{height:100% !important;margin:0 !important;padding:0 !important;width:100% !important}a[x-apple-data-detectors]{color:inherit !important;text-decoration:none !important;font-size:inherit !important;font-family:inherit !important;font-weight:inherit !important;line-height:inherit !important}@media screen and (max-width:600px){h1{font-size:32px !important;line-height:32px !important}}div[style*="margin: 16px 0;"]{margin:0 !important}</style><style type="text/css"></style></head><body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;"><div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"> Account verification</div><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td bgcolor="#f4f4f4" align="center"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"><tr><td align="center" valign="top" style="padding: 40px 10px 40px 10px;"> <a href="http://www.flylandgroup.com" > <img alt="Logo" src="assets/images/logo.jpg" width="169" height="40" style="display: block; width: 169px; max-width: 169px; min-width: 169px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;" border="0"> </a></td></tr></table></td></tr><tr><td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"><tr><td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;"><h1 style="font-size: 28px; font-weight: 400; margin: 0; letter-spacing: 0px;">Verify your account</h1></td></tr></table></td></tr><tr><td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"><tr><td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"><p style="margin: 0;">We\'re excited to have you get started. First, you need to confirm your account. Just click the button below.</p></td></tr><tr><td bgcolor="#ffffff" align="left"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td bgcolor="#ffffff" align="center" style="padding: 20px 30px 60px 30px;"><table border="0" cellspacing="0" cellpadding="0"><tr><td align="center" style="border-radius: 3px;" > <a data-click-track-id="37" href=" '.base_url().'verify?email=' . $this->input->post('email') .'&token='.urlencode($token).'" style="margin-top: 36px; -ms-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 12px; font-smoothing: always; font-style: normal; font-weight: 600; letter-spacing: 0.7px; line-height: 48px; mso-line-height-rule: exactly; text-decoration: none; vertical-align: top; width: 220px;background-color:#ED502E; border-radius: 28px; display: block; text-align: center; text-transform: uppercase" target="_blank"> Activate account </a></tr></table></td></tr></table></td></tr><tr><td bgcolor="#ffffff" align="left" style="padding: 0px 30px 20px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"><p style="margin: 0;"></p><p style="margin: 0;">You can also reach us via our <a data-click-track-id="1053" href="https://www.flylandgroup.com/contact-us" style="font-weight: 500; color: #EEB31E" target="_blank">Help Center</a>.</p></td></tr><tr><td bgcolor="#ffffff" align="left" style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"><p style="margin: 0;">Cheers, <br>The Ask me about Dubai Team</p></td></tr></table></td></tr><tr><td background-color="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"><tr><td bgcolor="#f4f4f4" align="left" style="padding: 30px 30px 30px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;"></td></tr></table></td></tr></table></body></html>
                ';
                $mail->Body = $mailContent;

                if(!$mail->send()):
                    $this->session->set_flashdata('message','<div class="alert alert-danger" role="alert">
                    There was an error in sending email.</div>');
                    redirect('contact-us');
                else:
                    $this->session->set_flashdata('message','<div class="alert alert-success role="alert">
                    Your message has been sent successfully.we\'ll shall be in touch soon.</div>');
                    redirect('contact-us');
                endif;
            endif;    

        }
        private function _sendEmail($token,$type){
            require_once(APPPATH.'libraries/mailer/mailer_config.php');
            $this->load->library('phpmailer_lib');
            $mail = $this->phpmailer_lib->load();
    
            $mail->isSMTP();
            $mail->Host     = HOST;
            $mail->SMTPAuth = true;
            $mail->Username = GUSER;
            $mail->Password = GPWD;
            $mail->SMTPSecure = 'ssl';
            $mail->Port     = PORT;
            $mail->setFrom('info@flylandgroup.com', 'FLYLAND GROUP');
            $mail->addReplyTo('flylandgroup@gmail.com', 'FLYLAND GROUP');
            
            if($type == 'verify'):
                $mail->addAddress($this->input->post('email'));
                $mail->Subject = 'FLYLAND GROUP|ACTIVATE ACCOUNT';
                $mail->isHTML(true);

                $mailContent ='
                    <!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title></title><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge" /><style type="text/css">body,table,td,a{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td{mso-table-lspace:0pt;mso-table-rspace:0pt}img{-ms-interpolation-mode:bicubic}img{border:0;height:auto;line-height:100%;outline:none;text-decoration:none}table{border-collapse:collapse !important}body{height:100% !important;margin:0 !important;padding:0 !important;width:100% !important}a[x-apple-data-detectors]{color:inherit !important;text-decoration:none !important;font-size:inherit !important;font-family:inherit !important;font-weight:inherit !important;line-height:inherit !important}@media screen and (max-width:600px){h1{font-size:32px !important;line-height:32px !important}}div[style*="margin: 16px 0;"]{margin:0 !important}</style><style type="text/css"></style></head><body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;"><div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"> Account verification</div><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td bgcolor="#f4f4f4" align="center"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"><tr><td align="center" valign="top" style="padding: 40px 10px 40px 10px;"> <a href="http://www.flylandgroup.com" > <img alt="Logo" src="assets/images/logo.jpg" width="169" height="40" style="display: block; width: 169px; max-width: 169px; min-width: 169px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;" border="0"> </a></td></tr></table></td></tr><tr><td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"><tr><td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;"><h1 style="font-size: 28px; font-weight: 400; margin: 0; letter-spacing: 0px;">Verify your account</h1></td></tr></table></td></tr><tr><td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"><tr><td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"><p style="margin: 0;">We\'re excited to have you get started. First, you need to confirm your account. Just click the button below.</p></td></tr><tr><td bgcolor="#ffffff" align="left"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td bgcolor="#ffffff" align="center" style="padding: 20px 30px 60px 30px;"><table border="0" cellspacing="0" cellpadding="0"><tr><td align="center" style="border-radius: 3px;" > <a data-click-track-id="37" href=" '.base_url().'verify?email=' . $this->input->post('email') .'&token='.urlencode($token).'" style="margin-top: 36px; -ms-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 12px; font-smoothing: always; font-style: normal; font-weight: 600; letter-spacing: 0.7px; line-height: 48px; mso-line-height-rule: exactly; text-decoration: none; vertical-align: top; width: 220px;background-color:#ED502E; border-radius: 28px; display: block; text-align: center; text-transform: uppercase" target="_blank"> Activate account </a></tr></table></td></tr></table></td></tr><tr><td bgcolor="#ffffff" align="left" style="padding: 0px 30px 20px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"><p style="margin: 0;"></p><p style="margin: 0;">You can also reach us via our <a data-click-track-id="1053" href="https://www.flylandgroup.com/contact-us" style="font-weight: 500; color: #EEB31E" target="_blank">Help Center</a>.</p></td></tr><tr><td bgcolor="#ffffff" align="left" style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"><p style="margin: 0;">Cheers, <br>The Ask me about Dubai Team</p></td></tr></table></td></tr><tr><td background-color="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"><tr><td bgcolor="#f4f4f4" align="left" style="padding: 30px 30px 30px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;"></td></tr></table></td></tr></table></body></html>
                ';
                $mail->Body = $mailContent;

                if(!$mail->send()):
                    $this->session->set_flashdata('message','<div class="alert alert-danger" role="alert">Your account activation has failed.</div>');
                    redirect('sign-up');
                else:
                    $this->session->set_flashdata('message','<div class="alert alert-success" role="alert">We\'ve sent an email to ' .$this->input->post('email').'.Open it up to activate your account.</div>');
                    redirect('sign-up');
                endif;
            endif;
        }
        public function phone_check($str){
            if (!preg_match('/^(?:\+971|0097|0)?(?:50|51|52|55|56|2|3|4|6|7|9)\d{7}$/',$str)):
                $this->form_validation->set_message('phone_check', 'The phone number is invalid.');
                return FALSE;
            else:
                return TRUE;
            endif;
        }
        public function name_check($str){
            if (!preg_match('/^[a-zA-Z ]*$/',$str)):
                $this->form_validation->set_message('name_check', 'This name appears to be invalid.');
                return FALSE;    
            else:
                return TRUE;    
            endif;
        }
        public function logout(){
            $this->session->unset_userdata('email');
            $this->session->unset_userdata('id');
            redirect('/');
        }
    }