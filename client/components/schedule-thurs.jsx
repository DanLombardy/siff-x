const React = require('react');
const scheduleData = require(__dirname + '/../data/schedule-thursday')


module.exports = React.createClass({

	render: function() {
		var scheduleOutput = scheduleData.datas.map(function(data, index){
			var eventImage = document.createElement('img');
			eventImage.src = require(__dirname + data.eventImage);

			return(
			<div key={index}>
				<div>
					<div className='thirdCol inline'>
						<h3>{data.location}</h3>
					</div>
					<div className='twoThirdCol inline'>
						<h3>{data.time}</h3>
					</div>
				</div>

				<div>
					<div className='thirdCol inline'>
						<img id='test' src={ eventImage.src }/>
					</div>
					<div className='twoThirdCol inline'>
						<h2>{data.eventHeader}</h2>
						<p>
							{data.eventDescription}
						</p>
						<button>Buy ></button>
					</div>
				</div>
			</div>)
		});

		return (
			<section>
				<h1>Friday June 3rd</h1>
				<section id='schedule'>
					{scheduleOutput}
				</section>
			</section>
		)
	}
})
