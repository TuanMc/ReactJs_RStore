import React from "react";

function Footer() {
  return (
    <footer className="bg6 p-t-45 p-b-43 p-l-45 p-r-45">
      <div className="flex-w p-b-90">
        <div className="w-size6 p-t-30 p-l-15 p-r-15 respon3">
          <h4 className="s-text12 p-b-30">
            GET IN TOUCH
				</h4>

          <div>
            <p className="s-text7 w-size27">
              Any questions? Let us know in store at 325 Phan Van Tri or call us on (+84) 925 956 347
					</p>

            {/* <div className="flex-m p-t-30">
              <a className="fs-18 color1 p-r-20 fa fa-facebook"></a>
              <a className="fs-18 color1 p-r-20 fa fa-instagram"></a>
              <a className="fs-18 color1 p-r-20 fa fa-pinterest-p"></a>
              <a className="fs-18 color1 p-r-20 fa fa-snapchat-ghost"></a>
              <a className="fs-18 color1 p-r-20 fa fa-youtube-play"></a>
            </div> */}
          </div>
        </div>

        <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
          <h4 className="s-text12 p-b-30">
            Categories
				</h4>

          <ul>
            <li className="p-b-9">
              <a className="s-text7">
                Men
						</a>
            </li>

            <li className="p-b-9">
              <a className="s-text7">
                Women
						</a>
            </li>

            <li className="p-b-9">
              <a className="s-text7">
                Dresses
						</a>
            </li>

            <li className="p-b-9">
              <a className="s-text7">
                Sunglasses
						</a>
            </li>
          </ul>
        </div>

        <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
          <h4 className="s-text12 p-b-30">
            Links
				</h4>

          <ul>
            <li className="p-b-9">
              <a className="s-text7">
                Search
						</a>
            </li>

            <li className="p-b-9">
              <a className="s-text7">
                About Us
						</a>
            </li>

            <li className="p-b-9">
              <a className="s-text7">
                Contact Us
						</a>
            </li>

            <li className="p-b-9">
              <a className="s-text7">
                Returns
						</a>
            </li>
          </ul>
        </div>

        <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
          <h4 className="s-text12 p-b-30">
            Help
				</h4>

          <ul>
            <li className="p-b-9">
              <a className="s-text7">
                Track Order
						</a>
            </li>

            <li className="p-b-9">
              <a className="s-text7">
                Returns
						</a>
            </li>

            <li className="p-b-9">
              <a className="s-text7">
                Shipping
						</a>
            </li>

            <li className="p-b-9">
              <a className="s-text7">
                FAQs
						</a>
            </li>
          </ul>
        </div>

        <div className="w-size8 p-t-30 p-l-15 p-r-15 respon3">
          <h4 className="s-text12 p-b-30">
            Newsletter
				</h4>

          <form>
            <div className="effect1 w-size9">
              <input className="s-text7 bg6 w-full p-b-5" type="text" name="email" placeholder="email@example.com" />
              <span className="effect1-line"></span>
            </div>

            <div className="w-size2 p-t-20">
              <button className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
                Subscribe
						</button>
            </div>

          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
