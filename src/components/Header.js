import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Stellar</h1>
        <p>El amanecer de una nueva democracia<br />
        design by <a href="https://html5up.net">HTML5 UP</a>.</p>
    </header>

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-156318166-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-156318166-1');
</script>

)

export default Header
