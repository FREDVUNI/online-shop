    <<div class="catlist-wrap J-catlist-wrap">		
			<div class="pd-content-wrap hot-search-content">
				<div class="content-title">
                Create Account
				</div>
                <?php echo $this->session->flashdata('message');?>
                <style>


                </style>

                <div class="row">
                    <div class="col-md-8">
                        <div class="hot-box">            
                                
                        </div>
                    </div>
                </div>    
                <style>
                    .form-control {
                    height: 42px;
                    border: 1px solid #495057;
                    background: none;
                    width: 100%;
                    padding: 0 18px;
                }
                label {
                    margin-bottom: 8px;
                    display: block;
                }

                .login-sec{
                    padding: 30px 30px; 
                    background:#FFFFFF; 
                    border-radius: 0px 10px 10px 0px;
                    }
                .login-sec-bg{
                    margin-left: 25px;
                    margin-top: 20px;
                    position:relative;
                    background:#FFFFFF; 
                }
                .login-sec .copy-text{
                    position:absolute; 
                    width:80%; 
                    bottom:20px; 
                    font-size:13px; 
                    text-align:center;
                    }
                .login-sec .copy-text i{
                    color:#FEB58A;
                    }
                .login-sec .copy-text a{
                    color:#E36262;
                    }
                .login-sec h2{
                    margin-bottom:30px; 
                    font-weight: 600;
                    font-size: 24px;
                    color: #DE6262;
                    }
                .login-sec h2:after{
                    content:" "; 
                    width:100px; 
                    height:5px; 
                    background:#FEB58A; 
                    display:block; 
                    margin-top:5px; 
                    border-radius:3px; 
                    margin-left:auto;
                    margin-right:auto;
                    }
                .btn-login{
                    background: #DE6262; 
                    color:#fff; 
                    font-weight:600;
                    }
                    .form-input h4{
                    font-size: 18px;
                    font-weight: 400;
                }
                .form-input .form-control{
                    border: 1px solid #e6e6e6;
                    border-radius: 0;
                    font-size: 13px;
                    padding: 5px 20px;
                }
                    
                    
                    
                .wizard,.tabcontrol{
                    display:block;
                    width:100%;
                    overflow:hidden
                }
                .wizard a,.tabcontrol a{
                    outline:0
                }
                .wizard ul,.tabcontrol ul{
                    list-style:none!important;
                    padding:0;
                    margin:0
                }
                .wizard ul>li,.tabcontrol ul>li{
                    display:block;
                    padding:0
                }
                .wizard>.steps .current-info,.tabcontrol>.steps .current-info{
                    position:absolute;
                    left:-999em
                }
                .wizard>.content>.title,.tabcontrol>.content>.title{
                    position:absolute;
                    left:-999em
                }
                .wizard>.steps{
                    position:relative;
                    display:block;
                    margin-left:60px;
                    width:100%
                }
                .wizard.vertical>.steps{
                    display:inline;
                    float:left;
                    width:30%
                }
                .wizard>.steps .number{
                    font-size: 14px;
                }
                .wizard>.steps>ul>li{
                    width:25%
                }
                .wizard>.steps>ul>li,.wizard>.actions>ul>li{
                    float:left
                }
                .wizard.vertical>.steps>ul>li{
                    float:none;
                    width:100%
                }
                .wizard>.steps a,.wizard>.steps a:hover,.wizard>.steps a:active{
                    display:block;
                    width:auto;
                    margin:0 .5em .5em;
                    font-size: 14px;
                    padding: 5px 15px;
                    text-decoration:none;
                    -webkit-border-radius:5px;
                    -moz-border-radius:5px;
                    border-radius:5px
                }
                .wizard>.steps .disabled a,.wizard>.steps .disabled a:hover,.wizard>.steps .disabled a:active{
                    background:#eee;
                    color:#aaa;
                    cursor:default;
                    border-radius:0px
                }
                .wizard>.steps .current a,.wizard>.steps .current a:hover,.wizard>.steps .current a:active{
                    background:#333;
                    color:#fff;
                    cursor:default;
                    border-radius:0px
                }
                .wizard>.steps .done a,.wizard>.steps .done a:hover,.wizard>.steps .done a:active{
                    background:#9dc8e2;
                    color:#fff;
                    border-radius:0px;
                }
                .wizard>.steps .error a,.wizard>.steps .error a:hover,.wizard>.steps .error a:active{
                    background:#e9151e;
                    color:#fff
                }
                .wizard>.content{
                    background:#ffffff;
                    display:block;
                    margin:.5em;
                    min-height: 440px;
                    overflow:hidden;
                    position:relative;
                    width:auto;
                    -webkit-border-radius:5px;
                    -moz-border-radius:5px;
                    border-radius:5px
                }
                .wizard.vertical>.content{
                    display:inline;
                    float:left;
                    margin:0 2.5% .5em 2.5%;
                    width:65%
                }
                .wizard>.content>.body{
                    float:left;
                    position:absolute;
                    width:95%;
                    height:95%;
                    padding:2.5%
                }
                .wizard>.content>.body ul{
                    list-style:disc!important
                }
                .wizard>.content>.body ul>li{
                    display:list-item
                }
                .wizard>.content>.body>iframe{
                    border:0 none;
                    width:100%;
                    height:100%
                }
                .wizard>.content>.body input{
                    display:block;
                    margin-bottom: 10px;
                }
                .wizard>.content>.body input[type="checkbox"]{
                    display:inline-block
                }
                .wizard>.content>.body input.error{
                    background:#fbe3e4;
                    border:1px solid #fbe3e4;
                    color:#8a1f11
                }
                .wizard>.content>.body label{
                    display:inline-block;
                    margin-bottom: 10px;
                    font-size: 15px;
                    font-weight: 400;
                }
                .wizard>.content>.body label.error{
                    color:#8a1f11;
                    display:inline-block;
                    margin-left:1.5em
                }
                .wizard>.actions{
                    position:relative;
                    display:block;
                    text-align:right;
                    width:100%
                }
                .wizard.vertical>.actions{
                    display:inline;
                    float:right;
                    margin:0 2.5%;
                    width:95%
                }
                .wizard>.actions>ul{
                    display:inline-block;
                    text-align:right
                }
                .wizard>.actions>ul>li{
                    margin:0 .5em
                }
                .wizard.vertical>.actions>ul>li{
                    margin:0 0 0 1em
                }
                .wizard>.actions a,.wizard>.actions a:hover,.wizard>.actions a:active{
                    background:#333;
                    color:#fff;
                    display:block;
                    padding:.5em 1em;
                    text-decoration:none;
                    -webkit-border-radius:5px;
                    -moz-border-radius:5px;
                    border-radius:0px
                }
                .wizard>.actions .disabled a,.wizard>.actions .disabled a:hover,.wizard>.actions .disabled a:active{
                    background:#eee;
                    color:#aaa
                }
                .wizard>.loading{
                }
                .wizard>.loading .spinner{
                }
                .tabcontrol>.steps{
                    position:relative;
                    display:block;
                    width:100%
                }
                .tabcontrol>.steps>ul{
                    position:relative;
                    margin:6px 0 0 0;
                    top:1px;
                    z-index:1
                }
                .tabcontrol>.steps>ul>li{
                    float:left;
                    margin:5px 2px 0 0;
                    padding:1px;
                    -webkit-border-top-left-radius:5px;
                    -webkit-border-top-right-radius:5px;
                    -moz-border-radius-topleft:5px;
                    -moz-border-radius-topright:5px;
                    border-top-left-radius:5px;
                    border-top-right-radius:5px
                }
                .tabcontrol>.steps>ul>li:hover{
                    background:#edecec;
                    border:1px solid #bbb;
                    padding:0
                }
                .tabcontrol>.steps>ul>li.current{
                    background:#fff;
                    border:1px solid #bbb;
                    border-bottom:0 none;
                    padding:0 0 1px 0;
                    margin-top:0
                }
                .tabcontrol>.steps>ul>li>a{
                    color:#5f5f5f;
                    display:inline-block;
                    border:0 none;
                    margin:0;
                    padding:10px 30px;
                    text-decoration:none
                }
                .tabcontrol>.steps>ul>li>a:hover{
                    text-decoration:none
                }
                .tabcontrol>.steps>ul>li.current>a{
                    padding:15px 30px 10px 30px
                }
                .tabcontrol>.content{
                    position:relative;
                    display:inline-block;
                    width:100%;
                    height:35em;
                    overflow:hidden;
                    border-top:1px solid #bbb;
                    padding-top:20px
                }
                .tabcontrol>.content>.body{
                    float:left;
                    position:absolute;
                    width:95%;
                    height:95%;
                    padding:2.5%
                }
                .tabcontrol>.content>.body ul{
                    list-style:disc!important
                }
                .tabcontrol>.content>.body ul>li{
                    display:list-item
                }
                @media(max-width:600px){
                    .wizard>.steps>ul>li{
                        width:50%
                    }
                    .wizard>.steps a,.wizard>.steps a:hover,.wizard>.steps a:active{
                        margin-top:.5em
                    }
                    .wizard.vertical>.steps,.wizard.vertical>.actions{
                        display:block;
                        float:none;
                        width:100%
                    }
                    .wizard.vertical>.content{
                        display:block;
                        float:none;
                        margin:0 .5em .5em;
                        width:auto
                    }
                }
                @media(max-width:480px){
                    .wizard>.steps>ul>li{
                        width:100%
                    }
                }
            .body {
            background-color:#fff;
            }
            .form-control {
            height: 42px;
            border: 1px solid #ccc;
            background: none;
            width: 100%;
            padding: 0 18px;
            }
            label {
                margin-bottom: 8px;
                display: block;
            }
            .login-sec{
            padding: 30px 30px; 
            background:#FFFFFF; 
            border-radius: 0px 10px 10px 0px;
            }
            </style>
	            <div class="row">
                    <div class="col-md-8">
                        <div class="">
                        <div class="col-lg-12 login-sec">
                            <div class="login-sec-bg">
                                <form id="register" action="<?php echo base_url('sign-up');?>" style="display: none;">
                                    <h3>Account</h3>
                                    <fieldset class="form-input">
                                        <h4 class="mb-4">Verification</h4>
                                        <div class="form-group">
                                            <label for="email">Email<span class="text-danger text-sm"> *</span></label>
                                            <input type="email" id="email" class="form-control" name="email" value="<?php echo set_value('email');?>"  placeholder="Enter Email Address">
                                            <span class="text-danger"><?php echo form_error('email');?></span>    
                                        </div>
                                        <div class="form-group">
                                            <label for="verify">Verification Code<span class="text-danger text-sm"> *</span></label>
                                            <input type="text" class="form-control" name="verify" value=""  placeholder="Enter Verification Code">    
                                        </div>
                                        <div class="form-group">
                                            <input id="tcs" name="tcs" type="checkbox" class="required" value="<?php (set_value('tcs'))? 'checked':''; ?>">
                                            <label for="tcs">I agree with the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.<span class="text-danger text-sm"> *</span></label>
                                            <span class="text-danger"><?php echo form_error('tcs');?></span>
                                        </div>
                                        <p>(<span class="text-danger">*</span>) Mandatory</p>
                                    </fieldset>

                                    <h3>Profile</h3>
                                    <fieldset class="form-input">
                                        <h4 class="mb-4">Profile Information</h4>
                                        <div class="form-group">
                                            <label for="password">Create Password<span class="text-danger"> *</span></label>
                                            <input type="password" id="password" class="form-control" value="<?php echo set_value('password');?>"  placeholder="Enter Password">    
		                                    <span class="text-danger"><?php echo form_error('password');?></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="confirm">Confirm Password<span class="text-danger"> *</span></label>
                                            <input type="password" id="confrim" class="form-control" name="confirm" value="<?php echo set_value('confirm');?>"  placeholder="Enter Confirm Password">    
		                                    <span class="text-danger"><?php echo form_error('confirm');?></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="country">Country<span class="text-danger"> *</span></label>
                                            <select name="country" id="country"  class="form-control">
                                                <option value="<?php echo set_value('country');?>">
                                                    <?php 
                                                        if(set_value('country')):
                                                            echo set_value('country');
                                                        else:
                                                            echo "choose a country or region";
                                                        endif;          
                                                    ?>            
                                                </option>
                                                <option value="Afghanistan"> Afghanistan </option>
                                                <option value="Albania"> Albania </option>
                                                <option value="Algeria"> Algeria </option>
                                                <option value="American Samoa"> American Samoa </option>
                                                <option value="Andorra"> Andorra </option>
                                                <option value="Angola"> Angola </option>
                                                <option value="Anguilla"> Anguilla </option>
                                                <option value="Antarctica"> Antarctica </option>
                                                <option value="...">...</option>
                                            </select> 
                                            <span class="text-danger"><?php echo form_error('country');?></span>   
                                        </div>
                                        <div class="form-group">
                                            <label for="fullname">Full Name<span class="text-danger"> *</span></label>
                                            <input type="text" id="fullname"  class="form-control" name="fullname" value="<?php echo set_value('fullname');?>"  placeholder="Enter Full Name">    
		                                    <span class="text-danger"><?php echo form_error('fullname');?></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="company">Company Name<span class="text-danger"> *</span></label>
                                            <input type="text"  id="company" class="form-control" name="company" value="<?php echo set_value('company');?>"  placeholder="Enter Company Name">    
		                                    <span class="text-danger"><?php echo form_error('company');?></span>
                                        </div>
                                        <p>(<span class="text-danger">*</span>) Mandatory</p>
                                    </fieldset>

                                    <h3>Finish</h3>
                                    <fieldset class="form-input">
                                        <div class="form-group">
                                            <label for="phone">Mobile number<span class="text-danger"> *</span></label>
                                            <input type="text" id="phone"  class="form-control" name="phone" value="<?php echo set_value('phone');?>"  placeholder="Enter Phone Number">    
		                                    <span class="text-danger"><?php echo form_error('phone');?></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="source_products">Sourcing Product<span class="text-danger"> *</span></label>
                                            <input type="text" id="sourcing_products" class="form-control" name="source_products" value="<?php echo set_value('source_products');?>"  placeholder="Enter Sourcing Products">    
		                                    <span class="text-danger"><?php echo form_error('source_products');?></span>
                                        </div>
                                        <p>(<span class="text-danger">*</span>) Mandatory</p>
                                    </fieldset>
                                </form>			
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="col-md-4">
                        
                    </div>
			    </div>
			<div class="pd-content-wrap recommend-content">
				<div class="content-box recommend-box">
					
				</div>
			</div>

    <script src="<?php echo base_url('assets/');?>vendor/flyland_js/jquery.min.js" type="text/javascript">
    </script>
    <script src="<?php echo base_url('assets/');?>vendor/flyland_js/bootstrap.min.js"></script>
    <script src="<?php echo base_url('assets/');?>vendor/flyland_js/jquery.validate.js" type="text/javascript">
	</script>
    <script src="<?php echo base_url('assets/');?>vendor/flyland_js/jquery.steps.js"></script>
    <script>
        jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
            phone_number = phone_number.replace(/\s+/g, "");
            return this.optional(element) || phone_number.length > 9 && 
            phone_number.match(/^(?:\+971|0097|0)?(?:50|51|52|55|56|2|3|4|6|7|9)\d{7}$/);
        }, "Please enter a valid phone number");

        $.validator.addMethod('nameCheck', function(value, element) {
            return /^([a-zA-Z .'-]{3,80}+$/).test(value);
        }, 'Please type a valid name');

        var form = $("#register").show();
    
        form.steps({
            headerTag: "h3",
            bodyTag: "fieldset",
            transitionEffect: "slideLeft",
            onStepChanging: function (event, currentIndex, newIndex)
            {
                // Allways allow previous action even if the current form is not valid!
                if (currentIndex > newIndex)
                {
                    return true;
                }
                // Forbid next action on "Warning" step if the user is to young
                if (newIndex === 3 && Number($("#age").val()) < 18)
                {
                    return false;
                }
                // Needed in some cases if the user went back (clean up)
                if (currentIndex < newIndex)
                {
                    // To remove error styles
                    form.find(".body:eq(" + newIndex + ") label.error").remove();
                    form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
                }
                form.validate().settings.ignore = ":disabled,:hidden";
                return form.valid();
            },
            onStepChanged: function (event, currentIndex, priorIndex)
            {
                // Used to skip the "Warning" step if the user is old enough.
                if (currentIndex === 2 && Number($("#age").val()) >= 18)
                {
                    form.steps("next");
                }
                // Used to skip the "Warning" step if the user is old enough and wants to the previous step.
                if (currentIndex === 2 && priorIndex === 3)
                {
                    form.steps("previous");
                }
            },
            onFinishing: function (event, currentIndex)
            {
                form.validate().settings.ignore = ":disabled";
                return form.valid();
            },
            onFinished: function (event, currentIndex)
            {
                var form = $("#register");
                $("#register").submit();
            }
        }).validate({
            errorPlacement: function errorPlacement(error, element) { element.before(error); },
            rules: {
                email: {
                    required: true,
                    email:true,
                },
                verify: {
                    required: true,
                },
                password: {
                    required: true,
                    minlength: 8
                },
                confirm: {
                    required: true,
                    equalTo: "#password",
                    minlength: 8
                },
                country: {
                    required: true,
                },
                fullname: {
                    nameCheck:true,
                    required: true,
                },
                company: {
                    required: true,
                },
                phone: {
                    phoneUS: true, 
                    required: true,
                },
                source_products: {
                    required: true,
                },


            }
        });
    </script> 