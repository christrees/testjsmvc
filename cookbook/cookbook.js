steal(	
	'jquery/controller',        // a widget factory
	'jquery/controller/subscribe',	// subscribe to OpenAjax.hub
	'jquery/view/ejs',          // client side templates
	'jquery/controller/view',   // lookup views with the controller's name
	'jquery/model',             // Ajax wrappers
	'jquery/dom/fixture',       // simulated Ajax requests
	'jquery/dom/form_params')   // form data helper
	.then('./cookbook.css')     // loads styles
        .then('./controllers/recipe_controller.js', './models/recipe.js')

