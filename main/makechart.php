<?php

function makeChartParts($data, $options, $type)

{

	  static $index = 1;



	    $package = 'corechart';

	    $special_type = array('GeoChart', 'AnnotatedTimeLine','TreeMap', 'OrgChart',

			                        'Gauge', 'Table', 'TimeLine', 'GeoMap', 'MotionChart');

		  if (in_array($type, $special_type)) {

			      $package = strtolower($type);

				    }

		  $load = 'google.load("visualization", "1", {packages:["' . $package . '"]});';



		  $jsData = json_encode($data);

		    $jsonOptions = json_encode($options);


		  art = <<<CHART_FUNC

    {$load}

		    google.setOnLoadCallback(drawChart{$index});

		      function drawChart{$index}() {

			        var data = {$jsData};

					      var chartData = new google.visualization.arrayToDataTable(data);

					      var options = {$jsonOptions};

						        var chartDiv = document.getElementById('chart{$index}');

						        var chart = new google.visualization.{$type}(chartDiv);

								      chart.draw(chartData, options);

								    }\n

CHART_FUNC;


		   $div = '<div id="chart' . $index . '"></div>';



		    $index++;  

		    return array($chart, $div);

}

?>
