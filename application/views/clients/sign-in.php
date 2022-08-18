<<div class="catlist-wrap J-catlist-wrap">		
			<div class="pd-content-wrap hot-search-content">
				<div class="content-title">
                SIGNIN OR LOGIN
				</div>
				<div class="row">
                    <style>
                        .form-control {
                            height: 42px;
                            border: 1px solid #e6e6e6;
                            background: none;
                            width: 100%;
                            padding: 0 18px;
                        }
                        label {
                            margin-bottom: 8px;
                            display: block;
                        }
                    </style>
                    <div class="col-md-12 hot-box">
				    <?php echo $this->session->flashdata('message');?>
                        <div class="col-md-4">
                            <img alt="" src="<?php echo base_url('assets/');?>images/sml-logo1.png" width="250px" height="250px" class="img-thumbnail float-right">
                        </div>
                        <div class="col-md-5">
                        <form action="<?php echo base_url('sign-in');?>" method="post">
                            <div class="form-group">
                                    <label for="email">Email Address<small class="text-danger">(required)</small></label>
                                    <input type="email" class="form-control" name="email" value="<?php echo set_value('email');?>"  placeholder="Enter Email Address">    
                                    <span class="text-danger"><?php echo form_error('email');?></span>
                                </div>
                                <div class="form-group">
                                    <label for="password">Password <small class="text-danger">(required)</small>
                                    <span class="float-right"><a href="#">Forgot Password ?</a></span></label>
                                    <input type="password" class="form-control" name="password" value="<?php echo set_value('password');?>"  placeholder="Enter Password">    
                                    <span class="text-danger"><?php echo form_error('password');?></span>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-danger btn-block">Sign in</button>
                                    <span class="float-left mt-5">Signin with: </span>
                                    <span class="float-right mt-5">New User ? <a href="<?php echo base_url('sign-up');?>">Join Free</a> </span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-4">
                        
                    </div>
			    </div>
			<div class="pd-content-wrap recommend-content">
				<div class="content-box recommend-box">
					
				</div>
			</div>