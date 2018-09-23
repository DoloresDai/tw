// Write your cade below:
function caclRemaindar(a,b){
  return a%b;
};
function caclSum(array){
  var sum = 0;
  for(var i=0;i<array.length ;i++)
  {
    sum+=array[i];
  }
  return sum;
};

function caclSumInCondition(array,a){
  var sum = 0;
  for(var i=0;i<array.length ; i++)
{
  if (array[i]<a)
   {
    sum+=array[i];
  }
}
return sum;
};
