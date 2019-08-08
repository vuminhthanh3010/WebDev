<?php

// Fix XSS-Reflected low

header ("X-XSS-Protection: 0");

//Cách 1: 
// Is there any input?
if( array_key_exists( "name", $_GET ) && $_GET[ 'name' ] != NULL ) {
	// Feedback for end user

	$html .=  '<pre>Hello ' . htmlspecialchars($_GET['name'],ENT_QUOTES,"UTF-8") . '</pre>';
}
/*
	//Cách 2
	// Is there any input?
	if( array_key_exists( "name", $_GET ) && $_GET[ 'name' ] != NULL ) {
		// Feedback for end user
		$html .= '<pre id=\"query-output\">Hello ' . strip_tags($_GET[ 'name' ]) . '</pre>';
	}

 */


?>
 



