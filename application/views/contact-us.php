<<div class="catlist-wrap J-catlist-wrap">		
			<div class="pd-content-wrap hot-search-content">
				<div class="content-title">
                Contact Us
				</div>
				<div class="row">
                    <style>
                        .form-control {
                            height: 42px;
                            border: 1px solid #e6e6e6;
                            background: none;
                            width: 100%;
                            padding: 0 18px;
							font-size:15px;
                        }
						select.form-control:not([size]):not([multiple]) {
    						height: 42px;
                            border: 1px solid #e6e6e6;
                            background: none;
                            width: 100%;
							font-size:15px;
                            padding: 0 18px;
						}
                        label {
                            margin-bottom: 8px;
                            display: block;
                        }
						.text-sm{
							font-size:20px;
						}
						input, textarea, select, button {
							font-size: 15px;
							color: #666;
						}
                    </style>
                    <div class="col-md-12 hot-box">
				    <?php echo $this->session->flashdata('message');?>
                        <div class="col-md-2">
                           
                        </div>
                        <div class="col-md-8">
                        <?php echo form_open_multipart('contact-us');?>
                            	<div class="form-group">
                                    <label for="email"><span class="text-danger text-sm">*</span>From</label>
                                    <input type="email" class="form-control" name="email" value="<?php echo set_value('email');?>"  placeholder="Enter Email Address">    
                                	<span class="text-danger"><?php echo form_error('email');?></span>
								</div>
								<div class="form-row">
									<label for="to">To</label>
									<div class="col-md-12">
									<div class="card p-2">
										<strong>Guandong UnionSteel Structure Material co.,Ltd.</strong>
										<img alt="" src="<?php echo base_url('assets/');?>images/sml-logo1.png" width="50px" height="50px" class="img-thumbnail">
									</div>
									</div>
								</div>
								<div class="form-group">
									<label for="subject"><span class="text-danger text-sm">*</span>Subject </label>
									<input type="text" class="form-control" name="subject" value="<?php echo set_value('subject');?>"  placeholder="Inquiry about Union Steel Structure Easy installment Workshop-2">    
                                	<span class="text-danger"><?php echo form_error('subject');?></span>
								</div>
								<div class="form-group">
									<label for="purchase"><span class="text-danger text-sm">*</span>Purchase Quantity </label>
									<div class="row">
										<div class="col-md-4">
											<input type="number" min="1" class="form-control" name="quantity" value="<?php echo set_value('quantity');?>" placeholder="Quantity">
											<span class="text-danger"><?php echo form_error('quantity');?></span>
										</div>
										<div class="col-md-8">
										<select name="measure" class="form-control">
											<option value="<?php echo set_value('measure');?>">
												<?php 
													if(set_value('measure')):
														echo set_value('measure');
													else:
														echo "choose a measurement";
													endif;          
												?>            
                                    		</option>
											<option value="Tons"> Tons </option>
											<option value="Set"> Set </option>
											<option value="Piece"> Piece </option>
		                        		</select> 
										<span class="text-danger"><?php echo form_error('measure');?></span>
										</div>
									</div>
                            	</div>
								<div class="form-group">
								<label for="extra"><span class="text-danger text-sm">*</span>Extra Requests</label>
                                <div class="row ml-2">
									<div class="col-md-3 row">
										<label for="price">Price</label>
											<input type="checkbox" value="Price" name="extra_requests[]" id="price" class="m-2">
									</div>
									<div class="col-md-3 row">
										<label for="inspection">Inspection Certificate</label>
											<input type="checkbox" value="Inspection Certificate" name="extra_requests[]" id="inspection" class="m-2">
									</div>
									<div class="col-md-3 row">
										<label for="product">Product Specifications</label>
											<input type="checkbox" value="Product Specifications" name="extra_requests[]" id="product" class="m-2">
									</div>
									<div class="col-md-3 row">
										<label for="company">Company Proile</label>
											<input type="checkbox" value="Company Proile" name="extra_requests[]" id="company" class="m-2">
									</div>
								</div>  
                                <span class="text-danger"><?php echo form_error('extra_requests[]');?></span>
								</div>
								<div class="form-group">
									<label for="content"><span class="text-danger text-sm">*</span>Content </label>
									<textarea name="content" id="" cols="50" rows="50" style="height: 149px" class="form-control"><?php echo set_value('content');?></textarea>
                                <span class="text-danger"><?php echo form_error('content');?></span>
								</div>
                                <div class="form-group">
									<div class="row">
										<div class="col-md-3">
											<label for="files"><span class="text-danger text-sm">*</span>Files </label>
											<input type="file" id="image" name="userfile[]" multiple style="display: none;" accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.xls,.xlsx,.txt,.rar,.zip"/>
											<a href="javascript:uploadImage()">Attach Files</a> <br/>
											<span class="text-danger" id="imageerror"></span>
										</div>
										<div class="col-md-3">
											<img alt="" src="<?php echo base_url('assets/');?>images/no-image.png" width="50px" height="50px" class="img-thumbnail" id="viewimage">
										</div>
										<div class="col-md-6">
											<span>
												- Supports jpg,jpeg,png,gif,pdf,doc,docx,xls,xlsx,txt,rar and zip
											</span><br/>
											<span>
												- Max Upload 5files, Max .total size:3MB
											</span>
										</div>
									</div>
								</div>
                            	<div class="form-group">
                                	<button type="submit" class="btn btn-danger">Send Inquiry</button>
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
				<script src="<?php echo base_url('assets/');?>vendor/flyland_js/jquery-3.2.1.min.js" type="text/javascript"></script>
					<script>
                        function uploadImage(){
                            $('#image').click();
                        }
                        $('#image').change(function () {
                            var imgLivePath = this.value;
                            var img_extions = imgLivePath.substring(imgLivePath.lastIndexOf('.') + 1).toLowerCase();
							if (img_extions == "gif" || img_extions == "png" || img_extions == "jpg" || img_extions == "jpeg" || img_extions == "png"  || img_extion == "pdf"  || img_extion == "rar" || img_extion == "zip" || img_extion == "txt" || img_extion == "gif" || img_extion == "doc" || img_extion == "docx" || img_extion == "xls" || img_extion == "xlsx")
                                readURL(this);
                            else
                            $('#imageerror').text('Please select a valid image file.')
                        });
                        function readURL(input) {
                            if (input.files && input.files[0]) {
                            var reader = new FileReader();
                            reader.readAsDataURL(input.files[0]);
                            reader.onload = function (e) {
                                $('#viewimage').attr('src', e.target.result);
                                $('#imageerror').text('')
                            };
                          }
                        }
                       
					</script>
					