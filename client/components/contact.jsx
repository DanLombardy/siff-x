const React = require('react');

module.exports = React.createClass({

	render: function() {
		return (
			<section id="contact">
				<a href="#contact"></a>
				<h2>Contact</h2>
				<p>
					Want to keep up to date on exciting SIFF X news?<br />
					Sign up for our mailing list.
				</p>

				<div className='quarterCol inline'></div>
				<div className='halfCol inline'>
					<div id="mc_embed_signup">
						<form action="//siffx.us12.list-manage.com/subscribe/post?u=fcfebfed0a0e10f732ec35daa&amp;id=c5b1f24a76" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
							<div id="mc_embed_signup_scroll">
								<label for="mce-EMAIL"></label>
								<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="please enter your email address" required/>
								<div id='anti-bot-input' aria-hidden="true"><input type="text" name="b_fcfebfed0a0e10f732ec35daa_c5b1f24a76" tabindex="-1" value="" /></div>
								<div><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
							</div>
						</form>
					</div>
				</div>
				<div className='quarterCol inline'></div>

			</section>
		)
	}
})
