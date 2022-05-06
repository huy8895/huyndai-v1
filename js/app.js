

window.onload = function() {
	initTopBar();
	initHeader();
	initFooter();
};

function initTopBar(){
	document.getElementById('top-bar').innerHTML =
		`<div class="container"> 
		              <div class="row"> 
		                  <div class="col-lg-8 col-md-8"> 
		                      <ul class="top-info text-center text-md-left"> 
		                          <li><i class="fas fa-map-marker-alt"></i> 
		                              <p class="info-text">SAODO BUILDINGS | số 2/46 phố Trường Lâm, Đức Giang, Long Biên, Hà Nội</p> 
		                          </li> 
		                      </ul> 
		                  </div> 
		                  <!--/ Top info end --> 
		
		                  <div class="col-lg-4 col-md-4 top-social text-center text-md-right"> 
		                      <ul class="list-unstyled"> 
		                          <li> 
		                              <a title="Facebook" href="#"> 
		                                  <span class="social-icon"><i class="fab fa-facebook-f"></i></span> 
		                              </a> 
		                              <a title="Twitter" href="#"> 
		                                  <span class="social-icon"><i class="fab fa-twitter"></i></span> 
		                              </a> 
		                              <a title="Instagram" href="#"> 
		                                  <span class="social-icon"><i class="fab fa-instagram"></i></span> 
		                              </a> 
		                          </li> 
		                      </ul> 
		                  </div> 
		              </div> 
		          </div>`;
}

function initHeader() {
	document.getElementById('header').innerHTML =
		         `<div class="bg-white"> 
		              <div class="container"> 
		                  <div class="logo-area"> 
		                      <div class="row align-items-center"> 
		                          <div class="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0"> 
		                              <a class="d-block" href="index.html"> 
		                                  <img loading="lazy" src="images/logo.png" alt="Constra"> 
		                              </a> 
		                          </div><!-- logo end --> 
		                          <div class="col-lg-9 header-right"> 
		                              <ul class="top-info-box"> 
		                                  <li> 
		                                      <div class="info-box"> 
		                                          <div class="info-box-content"> 
		                                              <p class="info-box-title">HOTLINE</p> 
		                                              <p class="info-box-subtitle">(+84) 965-756-698</p> 
		                                          </div> 
		                                      </div> 
		                                  </li> 
		                                  <li> 
		                                      <div class="info-box"> 
		                                          <div class="info-box-content"> 
		                                              <p class="info-box-title">Email</p> 
		                                              <p class="info-box-subtitle">vnhyundaiep@gmail.com</p> 
		                                          </div> 
		                                      </div> 
		                                  </li> 
		                                  <li class="last"> 
		                                      <div class="info-box last"> 
		                                          <div class="info-box-content"> 
		                                              <p class="info-box-title">Mã số doanh nghiệp</p> 
		                                              <p class="info-box-subtitle">0107297522</p> 
		                                          </div> 
		                                      </div> 
		                                  </li> 
		                              </ul><!-- Ul end --> 
		                          </div><!-- header right end --> 
		                      </div><!-- logo area end --> 
		
		                  </div><!-- Row end --> 
		              </div><!-- Container end --> 
		          </div> 
		
		          <div class="site-navigation"> 
		              <div class="container"> 
		                  <div class="row"> 
		                      <div class="col-lg-12"> 
		                          <nav class="navbar navbar-expand-lg navbar-dark p-0"> 
		                              <button class="navbar-toggler" type="button" data-toggle="collapse" 
		                                      data-target=".navbar-collapse" aria-controls="navbar-collapse" 
		                                      aria-expanded="false" aria-label="Toggle navigation"> 
		                                  <span class="navbar-toggler-icon"></span> 
		                              </button> 
		
		                              <div id="navbar-collapse" class="collapse navbar-collapse"> 
		                                  <ul class="nav navbar-nav mr-auto"> 
		                                      <li class="nav-item"><a class="nav-link" href="index.html">Trang chủ</a></li> 
		
		                                      <li class="nav-item dropdown"> 
		                                          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Công ty <i 
		                                                  class="fa fa-angle-down"></i></a> 
		                                          <ul class="dropdown-menu" role="menu"> 
		                                              <li><a href="about.html">Giới thiệu</a></li> 
		<!--                                              <li><a href="team.html">Our People</a></li>--> 
		<!--                                              <li><a href="testimonials.html">Testimonials</a></li>--> 
		<!--                                              <li><a href="faq.html">Faq</a></li>--> 
		<!--                                              <li><a href="pricing.html">Pricing</a></li>--> 
		                                          </ul> 
		                                      </li> 
		
		                                      <li class="nav-item dropdown"> 
		                                          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">SẢN PHẨM 
		                                              <i class="fa fa-angle-down"></i></a> 
		                                          <ul class="dropdown-menu" role="menu"> 
		                                              <li><a href="products.html">Tất cả các sản phẩm</a></li> 
		                                              <li><a href="products-new-products.html">New Product</a></li> 
		                                              <li><a href="products-engine-line-up.html">Engine Line-up</a></li> 
		                                              <li><a href="product-forklift.html">Forklift Construction</a></li> 
		                                              <li><a href="product-generator.html">Generator Engine</a></li> 
		                                              <li><a href="product-agricultural.html">Agricultural Machinery</a></li> 
		                                              <li><a href="product-marine.html">Marine Engine</a></li> 
		                                              <li><a href="product-longBlock.html">Long Block</a></li> 
		                                          </ul> 
		                                      </li> 
		
<!--		                                      <li class="nav-item dropdown"> -->
<!--		                                          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Dịch Vụ -->
<!--		                                          <i class="fa fa-angle-down"></i></a> -->
		<!--                                          <ul class="dropdown-menu" role="menu">--> 
		<!--                                              <li><a href="services.html">Services All</a></li>--> 
		<!--                                              <li><a href="service-single.html">Services Single</a></li>--> 
		<!--                                          </ul>--> 
<!--		                                      </li> -->
		
		
<!--		                                      <li class="nav-item dropdown"> -->
<!--		                                          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Tin Tức <i -->
<!--		                                                  class="fa fa-angle-down"></i></a> -->
		<!--                                          <ul class="dropdown-menu" role="menu">--> 
		<!--                                              <li><a href="news-left-sidebar.html">News Left Sidebar</a></li>--> 
		<!--                                              <li><a href="news-right-sidebar.html">News Right Sidebar</a></li>--> 
		<!--                                              <li><a href="news-single.html">News Single</a></li>--> 
		<!--                                          </ul>--> 
<!--		                                      </li> -->
		
		                                      <li class="nav-item"><a class="nav-link" href="contact.html">Liên hệ</a></li> 
		                                  </ul> 
		                              </div> 
		                          </nav> 
		                      </div> 
		                      <!--/ Col end --> 
		                  </div> 
		                  <!--/ Row end --> 
		
		                  <div class="search-block" style="display: none;"> 
		                      <label for="search-field" class="w-100 mb-0"> 
		                          <input type="text" class="form-control" id="search-field" 
		                                 placeholder="Type what you want and enter"> 
		                      </label> 
		                      <span class="search-close">&times;</span> 
		                  </div><!-- Site search end --> 
		              </div> 
		              <!--/ Container end --> 
		
		          </div> 
		          <!--/ Navigation end -->;`
}

function initFooter(){
	document.getElementById('footer').innerHTML =
		    `<div class="footer-main"> 
		      <div class="container"> 
		        <div class="row justify-content-between"> 
		          <div class="col-lg-4 col-md-6 footer-widget footer-about"> 
		            <h3 class="widget-title">VÀI DÒNG GIỚI THIỆU</h3> 
		            <img loading="lazy" class="footer-logo" src="images/logo.png" alt="Constra"> 
		            <p>Với tiêu chí uy tín, chất lượng và đội ngũ nhân viên giỏi, được đào tạo theo hướng chuyên nghiệp, dịch vụ hoàn hảo, giá cả hợp lý.  
						Chúng tôi sẽ mang đến cho khách hàng những sản phẩm tốt nhất.</p> 
		            <div class="footer-social"> 
		              <ul> 
		                <li><a href="#" aria-label="Facebook"><i 
		                      class="fab fa-facebook-f"></i></a></li> 
		                <li><a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a> 
		                </li> 
		                <li><a href="#" aria-label="Instagram"><i 
		                      class="fab fa-instagram"></i></a></li> 
		              </ul> 
		            </div><!-- Footer social end --> 
		          </div><!-- Col end --> 
		          <div class="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0"> 
		            <h3 class="widget-title">HOTLINE</h3> 
		            <div class="working-hours"> 
		             	(+84) 965-756-698
						<br>vnhyundaiep@gmail.com 
		            </div> 
		          </div><!-- Col end --> 
		          <div class="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget"> 
		            <h3 class="widget-title">THÔNG TIN LIÊN HỆ </h3> 
					<p>Tòa nhà SAODO BUILDINGS, số 2/46 phố Trường Lâm,  
						Phường Đức Giang, Quận Long Biên, Thành Phố Hà Nội, Việt Nam  
					</p>	 
		          </div><!-- Col end --> 
		        </div><!-- Row end --> 
		      </div><!-- Container end --> 
		    </div><!-- Footer main end --> 
		    <div class="copyright"> 
		      <div class="container"> 
		        <div class="row align-items-center"> 
		          <div class="col-md-12"> 
		            <div class="copyright-info text-center"> 
		              <span>© Copyright 2022. Hyundai | Công ty cổ phần động cơ Huyndai Việt Nam. All rights Reserved</span> 
		            </div> 
		          </div> 
		          </div> 
		        </div><!-- Row end --> 
		
		        <div id="back-to-top" data-spy="affix" data-offset-top="10" class="back-to-top position-fixed"> 
		          <button class="btn btn-primary" title="Back to Top"> 
		            <i class="fa fa-angle-double-up"></i> 
		          </button> 
		        </div> 
		      </div><!-- Container end --> 
		    </div><!-- Copyright end -->;`
}