<<<<<<< HEAD
define(
	'model',
    ['jquery'],
    	function(){
    return{
    	model:
    		model = function(data){
				var self = this;
				self.data = data;

				self.addItem = function (item){
				self.data.push(item);
					if (item.lenght === 0){
					return;
				}

				return self.data;
			};

				self.removeItem = function (item){
				var index = self.data.indexOf(item);
					if (index === -1){
					return;
				}

				self.data.splice(index, 1);
				return self.data;
			};
}
		};
=======
define(
	'model',
    ['jquery'],
    	function(){
    return{
    	model:
    		model = function(data){
				var self = this;
				self.data = data;

				self.addItem = function (item){
				self.data.push(item);
					if (item.lenght === 0){
					return;
				}

				return self.data;
			};

				self.removeItem = function (item){
				var index = self.data.indexOf(item);
					if (index === -1){
					return;
				}

				self.data.splice(index, 1);
				return self.data;
			};
}
		};
>>>>>>> 97f5991d9fb678b9c1d7704b696a77ad568a530e
});