// This app based on http://tutorialzine.com/2013/08/learn-angularjs-5-examples/

// Defining a new module.  Dependencies would go into the array, if there were any.
 var app = angular.module('yogaSearch',[]);
// Creating the search filter
app.filter('searching',function(){
  // Filters must return a function. First parameter, arr, is the data to be filtered. Second param is an argument that can be passed with a colon.
  return function(arr, stringToSearch){
    // if there is no string to search, then return the entire array ???
    if(!stringToSearch){
      return arr;
    }
    var result = [];
    stringToSearch = stringToSearch.toLowerCase();
    // forEach is used to loop through my array. I think ng-repeat can be used instead for this in html.  If I have time I'll try to make it work instead.
    angular.forEach(arr, function(item){

      if(item.title.toLowerCase().indexOf(stringToSearch) !== -1){
        result.push(item);
      }
    });
    return.result;
  }
});
// Controller Begins Here------------
function yogaSearchController($scope){
  // my data is hardcoded below.  If I can get the rest to work and there is time, then I'll try a JSON call.

  $scope.items = [
    {
      url:'http://www.yogajournal.com/pose/downward-facing-dog/'
      pose:'Downward-Facing Dog (Adho Mukha Svanasana)'
      description:'reduces tension in the shoulders, relaxes the neck, stretches out the wrists and hands'
      image:'http://image.flaticon.com/icons/svg/10/10622.svg'
    },
    {
      url:'https://www.yogaoutlet.com/guides/how-to-do-mountain-pose-in-yoga'
      pose:'Mountain Pose (Tadasana)'
      description:'Counter a long day of contracting the back with this powerful back and chest-opening posture.'
      image:'http://image.flaticon.com/icons/svg/46/46863.svg'
    },
    {
      url:'http://www.yogajournal.com/article/forward-bends/5-steps-master-standing-forward-bend/'
      pose:'Standing Forward Fold (Uttanasana)'
      description:'A forward bend provides a soothing feeling of release — making the pose therapeutic for stress and anxiety.'
      image:'http://image.flaticon.com/icons/svg/10/10604.svg'
    }
  ]
}
});
