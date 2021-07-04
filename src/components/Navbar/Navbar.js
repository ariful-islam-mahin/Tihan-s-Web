import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div class="sm-page-layout-region sm-page-layout-region-header sm-page-layout-region-pinned" style={{backgroundColor: "rgba(41,41,41, 0.95)"}}>
            <div class="sm-page-layout-region sm-page-layout-region-top" data-layout-region="Top">
                <div class="sm-page-layout-row yui3-g" data-layout-row="vW">
                    <div class="sm-page-layout-column yui3-u" style={{width: "100%"}} data-layout-column="0">
                        <div id="sm-page-widget-rXdqg7kQ" class="sm-page-widget sm-page-widget-logo sm-page-widget-20296476" data-typeid="20296476">
                            <div class="sm-page-widget-content">
                                <div class="sm-page-widget-header"></div>
                                <div id="sm-page-widget-bcqKCDFB" class="sm-page-widget-body">
                                    <div class="sm-page-widget-logo-container sm-page-widget-logo-align-center sm-page-widget-logo-retina" data-text-img-position="above">
                                        <a href="/">
                                            <img data-image-mask-shape="none" class="sm-page-widget-logo-img nav-img" src="https://cdn.smugmug.com/img/spacer.gif" style={{width: "400px", height: "35px"}} alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div class="sm-page-widget-footer"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sm-page-layout-row yui3-g" data-layout-row="z">
                    <div class="sm-page-layout-column yui3-u" style={{width: "100%"}} data-layout-column="0">
                        <div id="sm-page-widget-wWBVq2hf" class="sm-page-widget sm-page-widget-nav sm-page-widget-400716" data-typeid="400716">
                            <div class="sm-page-widget-content">
                                <div class="sm-page-widget-header"></div>
                                <div id="sm-page-widget-rF4czRN4" class="sm-page-widget-body">
                                    <div class="sm-page-widget-nav-popover sm-page-widget-nav-horizontal sm-page-widget-nav-color-default sm-page-widget-nav-color-default sm-page-widget-nav-m sm-page-widget-nav-center sm-page-widget-nav-toplinks-capitalize sm-page-widget-nav-sublinks-regular sm-page-widget-nav-collapsible">
                                        <ul class="horizontal">
                                            <li class="sm-page-widget-nav-toplink">
                                                <Link to="/home">Home</Link>
                                            </li>
                                            <li class="sm-page-widget-nav-toplink sm-page-widget-nav-activepage">
                                                <Link to="/before-and-after">Before &amp; After </Link>
                                            </li>
                                            <li class="sm-page-widget-nav-toplink">
                                                <Link to="/contact" class="sm-page-widget-nav-contact">Contact</Link>
                                            </li>
                                        </ul>
                            </div>
                            </div>
                            <div class="sm-page-widget-footer"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            );
};

            export default Navbar;