class SpecialHeader extends HTMLElement{
    // connected call back method for header
    connectedCallback(){
        this.innerHTML =     
        <header class="header">
        <a href="index.html" class="logo" alt="logo" src="/assets/profilepic-min.jpg"><span class="logo1">Power</span><span class="logo2">surge</span></a>
        <nav class="navbar">
          <a href="/html/index.html">Home</a>
          <a href="/html/product.html">Products</a>
          <a href="/html/about.html">About Us</a>
          <a href="/html/contact.html">Contact Us</a>
          <a href="/html/contact.html">Blog</a>
        </nav>
      </header>
    }
}
class Specialfooter extends HTMLElement{
    // connected call back method for footer
    connectedCallback(){
        <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Our services</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Affiliate</a></li>
              </ul>
            </div>
  
            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Our services</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Affiliate</a></li>
              </ul>
            </div>
  
            <div class="footer-col">
              <h4>Get Help</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Payment options</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Online shop</h4>
              <ul>
                <li><a href="#">Watch</a></li>
                <li><a href="#">Bag</a></li>
                <li><a href="#">Shoes</a></li>
                <li><a href="#">Dress</a></li>
                <li><a href="#">Top</a></li>
              </ul>
            </div>
  
            <div class="footer-col">
              <h4>Follow us</h4>
              <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-Footer', SpecialFooter)