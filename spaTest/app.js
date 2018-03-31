(function(){
	Router.init();
})();

var observable = Rx.Observable.create(function (observer) {
	observer.onNext(42);
	observer.onCompleted(); 
});

var subscription = observable.subscribe( function (value) {// para onNext
	console.log('Next: %s.', value); },
function (ev) {// para onErro console.log('Error: %s!', ev);
},
function () {// para onCompleted
	console.log('Completed!'); }
	);
subscription.dispose(); // limpia recursos