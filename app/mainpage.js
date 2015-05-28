var MainActivity = (function (_super) {
    __extends(MainActivity, _super);

    function MainActivity() {
    } 

    MainActivity.prototype.onCreate = function () {
    	var k = this.toString();
    	_super.prototype.onCreate.call(this, null);

      var resID = this.getResources().getIdentifier("activity_main" , "layout", this.getPackageName());
      this.setContentView(resID);

      var buttonId = this.getResources().getIdentifier("button" , "id", this.getPackageName());
      var button = this.findViewById(buttonId);

      var counter = 0;
      button.setOnClickListener(new android.view.View.OnClickListener("AppClickListener", {
          onClick:  function() {
              button.setText("Hit me " + ++counter);
          }}));
    };
    return MainActivity;
    
})(com.tns.NativeScriptActivity);

app.init({
	
	getActivity: function(intent) {
		__log("intent=" + intent)
		if (intent.getAction() == android.content.Intent.ACTION_MAIN) {
			return MainActivity;
		}
		else {
			fail("Unknown action");
		}
	},
	
	
	onCreate: function() {
		__log("Application on create called");
	} 
});